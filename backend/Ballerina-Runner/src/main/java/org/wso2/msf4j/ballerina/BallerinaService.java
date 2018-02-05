/*
 * Copyright (c) 2017, WSO2 Inc. (http://wso2.com) All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.wso2.msf4j.ballerina;

import com.google.gson.Gson;
import io.swagger.annotations.Api;
import io.swagger.annotations.Info;
import io.swagger.annotations.SwaggerDefinition;
import org.apache.commons.io.FileCleaningTracker;
import org.apache.commons.io.IOUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.TimeUnit;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * This is ballerina service which can be used to invoke the ballerina programs.
 */
@Api(value = "ballerina")
@SwaggerDefinition(info = @Info(title = "Ballerina service API Definition", version = "1.0.0", description = "This will execute the ballerina programs"))
@Path("/ballerina")
public class BallerinaService {

    private static Log log = LogFactory.getLog(BallerinaService.class);
    private FileCleaningTracker fileCleaningTracker = new FileCleaningTracker();

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    @Path("/executeAsProcess")
    public Response executeBallerinaWithArgsAsProcess(BallerinaContent ballerinaContent) {
        UUID requestId = UUID.randomUUID();
        log.info(requestId.toString() + " <<< " + new Gson().toJson(ballerinaContent));
        String result;
        try {
            java.nio.file.Path path = Paths.get(Application.ballerinaTmp.toString(), requestId.toString() + ".bal");
            Files.write(path, ballerinaContent.getContent().getBytes());
            fileCleaningTracker.track(path.toFile(), ballerinaContent);
            List<String> processArgs = new ArrayList<>();
            processArgs.add(Application.ballerinaPath.toString());
            processArgs.add("run");
            processArgs.add(path.toString());
            if (ballerinaContent.getArguments() != null) {
                processArgs.addAll(Arrays.asList(ballerinaContent.getArguments().split(";")));
            }
            ProcessBuilder processBuilder = new ProcessBuilder(processArgs);
            processBuilder.environment().put("JAVA_HOME", System.getProperty("java.home"));
            processBuilder.redirectErrorStream(true);
            Process process = processBuilder.start();

            if (!process.waitFor(8, TimeUnit.SECONDS)) {
                // Run the psfinder script which will get the pid of started ballerina process and kill that.
                Process exec = Runtime.getRuntime().exec(new String[] { Application.psFinder.toFile().getAbsolutePath(),
                                                                        requestId.toString() });
                exec.waitFor();
                process.destroyForcibly();
                result = "Process took too long\nSystem will exit";
            } else {
                result = IOUtils.toString(process.getInputStream());
            }
        } catch (Exception e) {
            result = "Something went wrong. Try again";
            log.error(e);
        }
        log.info(requestId.toString() + " >>> " + result);
        return Response.ok().entity(result).header("Access-Control-Allow-Origin", "*").build();
    }
}
