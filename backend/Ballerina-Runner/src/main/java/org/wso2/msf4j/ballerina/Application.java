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

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.wso2.msf4j.MicroservicesRunner;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.nio.file.FileSystem;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Enumeration;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;

/**
 * Application entry point.
 *
 * @since 1.0.0
 */
public class Application {

    private static Log log = LogFactory.getLog(Application.class);

    static Path ballerinaPath;
    static Path ballerinaTmp;
    static Path psFinder = Paths.get("psfinder");

    // Extract the Ballerina distribution and copy psfinder script.
    static {
        String DISTRIBUTION_ZIP = "ballerina-0.87.zip";
        URL inputUrl = Application.class.getResource("/" + DISTRIBUTION_ZIP);
        File ballerinaDist = new File(DISTRIBUTION_ZIP);
        try {
            FileUtils.copyURLToFile(Application.class.getResource("/psfinder"), psFinder.toFile());
            FileUtils.copyURLToFile(inputUrl, ballerinaDist);
            String tmp = System.getProperty("java.io.tmpdir");
            String BALLERINA_TMP = "ballerinaTmp";
            if (Paths.get(tmp, BALLERINA_TMP).toFile().exists()) {
                ballerinaTmp = Paths.get(tmp, BALLERINA_TMP);
            } else {
                ballerinaTmp = Files.createDirectory(Paths.get(tmp, BALLERINA_TMP));
            }
            unzip(ballerinaDist.getPath(), tmp);

            String DISTRIBUTION_NAME = "ballerina-0.87";
            ballerinaPath = Paths.get(tmp, DISTRIBUTION_NAME, "bin", "ballerina");
            ballerinaPath.toFile().setExecutable(true);
            psFinder.toFile().setExecutable(true);
        } catch (IOException e) {
            String msg = "An error occur while extracting the Ballerina distribution. ";
            log.error(msg + e.getMessage(), e);
        //    throw new RuntimeException(msg, e);
        }
    }

    private static void unzip(String zipFilePath, String destDir) throws IOException {
        BufferedInputStream bis = null;
        FileOutputStream fileOutput = null;
        try (ZipFile file = new ZipFile(zipFilePath)) {
            FileSystem fileSystem = FileSystems.getDefault();
            Enumeration<? extends ZipEntry> entries = file.entries();

            while (entries.hasMoreElements()) {
                ZipEntry entry = entries.nextElement();
                if (entry.isDirectory()) {
                    Files.createDirectories(fileSystem.getPath(destDir, entry.getName()));
                } else {
                    InputStream is = file.getInputStream(entry);
                    bis = new BufferedInputStream(is);
                    Path uncompressedFilePath = fileSystem.getPath(destDir, entry.getName());
                    Files.createFile(uncompressedFilePath);
                    fileOutput = new FileOutputStream(uncompressedFilePath.toString());
                    while (bis.available() > 0) {
                        fileOutput.write(bis.read());
                    }
                    fileOutput.close();
                }
            }
        } finally {
            if (bis != null) {
                IOUtils.closeQuietly(bis);
            }
            if(fileOutput != null) {
                IOUtils.closeQuietly(fileOutput);
            }
        }
    }

    public static void main(String[] args) {
        new MicroservicesRunner().deploy(new BallerinaService()).start();
    }
}
