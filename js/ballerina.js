$(document).ready(function () {
    $("select").change(function () {
        $(this).find("option:selected").each(function () {
            if ($(this).attr("value") == "sample_1") {
                $(".cSampleBox").not(".sample_1").removeClass('cShowSample').animate({opacity: "0"}, "fast");
                $(".sample_1").addClass('cShowSample').animate({opacity: "1"}, "fast");
                $(".cTryitButton").removeClass('cGoback');
                $(".cBallerinaCode").removeClass('cOutputWindowShowFullscreen');
                $(".cBallerinaDaiagram").removeClass('cOutputWindowShowFullscreen');
                $(".cResults").removeClass('cOutputWindowShow');
                $("#txtSample1").prop('readonly', false);
            } else if ($(this).attr("value") == "sample_2") {
                $(".cSampleBox").not(".sample_2").removeClass('cShowSample').animate({opacity: "0"}, "fast");
                $(".sample_2").addClass('cShowSample').animate({opacity: "1"}, "fast");
                $(".cTryitButton").removeClass('cGoback');
                $(".cBallerinaCode").removeClass('cOutputWindowShowFullscreen');
                $(".cBallerinaDaiagram").removeClass('cOutputWindowShowFullscreen');
                $(".cResults").removeClass('cOutputWindowShow');
                $("#txtSample2").prop('readonly', true);
                $('#arguments2').attr("placeholder", "Type your msg here");
            } else if ($(this).attr("value") == "sample_3") {
                $(".cSampleBox").not(".sample_3").removeClass('cShowSample').animate({opacity: "0"}, "fast");
                $(".sample_3").addClass('cShowSample').animate({opacity: "1"}, "fast");
                $(".cTryitButton").removeClass('cGoback');
                $(".cBallerinaCode").removeClass('cOutputWindowShowFullscreen');
                $(".cBallerinaDaiagram").removeClass('cOutputWindowShowFullscreen');
                $(".cResults").removeClass('cOutputWindowShow');
                $("#txtSample3").prop('readonly', true);
                $('#arguments3').hide();
            } else if ($(this).attr("value") == "sample_4") {
                $(".cSampleBox").not(".sample_4").removeClass('cShowSample').animate({opacity: "0"}, "fast");
                $(".sample_4").addClass('cShowSample').animate({opacity: "1"}, "fast");
                $(".cTryitButton").removeClass('cGoback');
                $(".cBallerinaCode").removeClass('cOutputWindowShowFullscreen');
                $(".cBallerinaDaiagram").removeClass('cOutputWindowShowFullscreen');
                $(".cResults").removeClass('cOutputWindowShow');
                $("#txtSample4").prop('readonly', true);
                $('#arguments4').hide();
            } else if ($(this).attr("value") == "sample_5") {
                $(".cSampleBox").not(".sample_5").removeClass('cShowSample').animate({opacity: "0"}, "fast");
                $(".sample_5").addClass('cShowSample').animate({opacity: "1"}, "fast");
                $(".cTryitButton").removeClass('cGoback');
                $(".cBallerinaCode").removeClass('cOutputWindowShowFullscreen');
                $(".cBallerinaDaiagram").removeClass('cOutputWindowShowFullscreen');
                $(".cResults").removeClass('cOutputWindowShow');
                $("#txtSample5").prop('readonly', true);
                $('#arguments5').hide();
            } else if ($(this).attr("value") == "sample_6") {
                $(".cSampleBox").not(".sample_6").removeClass('cShowSample').animate({opacity: "0"}, "fast");
                $(".sample_6").addClass('cShowSample').animate({opacity: "1"}, "fast");
                $(".cTryitButton").removeClass('cGoback');
                $(".cBallerinaCode").removeClass('cOutputWindowShowFullscreen');
                $(".cBallerinaDaiagram").removeClass('cOutputWindowShowFullscreen');
                $(".cResults").removeClass('cOutputWindowShow');
                $("#txtSample6").prop('readonly', true);
                $('#arguments6').val("{\"ATMLocator\": {\"ZipCode\": \"95999\"}}");
                $("#arguments6").prop('readonly', true);
            } else if ($(this).attr("value") == "sample_7") {
                $(".cSampleBox").not(".sample_7").removeClass('cShowSample').animate({opacity: "0"}, "fast");
                $(".sample_7").addClass('cShowSample').animate({opacity: "1"}, "fast");
                $(".cTryitButton").removeClass('cGoback');
                $(".cBallerinaCode").removeClass('cOutputWindowShowFullscreen');
                $(".cBallerinaDaiagram").removeClass('cOutputWindowShowFullscreen');
                $(".cResults").removeClass('cOutputWindowShow');
                $("#txtSample7").prop('readonly', true);
                $('#arguments7').hide();
            } else if ($(this).attr("value") == "sample_8") {
                $(".cSampleBox").not(".sample_").removeClass('cShowSample').animate({opacity: "0"}, "fast");
                $(".sample_8").addClass('cShowSample').animate({opacity: "1"}, "fast");
                $(".cTryitButton").removeClass('cGoback');
                $(".cBallerinaCode").removeClass('cOutputWindowShowFullscreen');
                $(".cBallerinaDaiagram").removeClass('cOutputWindowShowFullscreen');
                $(".cResults").removeClass('cOutputWindowShow');
                $("#txtSample8").prop('readonly', true);
                $('#arguments8').attr("placeholder", "<conKey>;<conSecret>;<accessToken>;<accessTokenSecret>;<message>");
            } else {
                $(".cSampleBox").removeClass('cShowSample').animate({opacity: "0"}, "fast");
                $(".cTryitButton").removeClass('cGoback');
                $(".cBallerinaCode").removeClass('cOutputWindowShowFullscreen');
                $(".cBallerinaDaiagram").removeClass('cOutputWindowShowFullscreen');
                $(".cResults").removeClass('cOutputWindowShow');

            }
        });
    }).change();
});



$(document).ready(function () {
    $(".cFullscreen").click(function () {
        $(".cBallerinaTry").toggleClass('cFullscreenOption');
        $(".cFullscreen").toggleClass('cBack');
    });
});

$(document).ready(function () {
    $(".cTrySample1").click(function () {
        $(".cOutputWindow1").addClass('cOutputWindowShow');
        $(".cOutputWindow1").addClass('cOutputWindowShowFullscreen');
        $(".cBallerinaCode1").addClass('cOutputWindowShowFullscreen');
        $(".cBallerinaDaiagram1").addClass('cOutputWindowShowFullscreen');
        callBackend('#txtSample1', ".cOutputWindow1", "#arguments1");
        $(".cTryitButton").toggleClass('cGoback');

    });
});

$(document).ready(function () {
    $(".cTrySample2").click(function () {
        $(".cOutputWindow2").addClass('cOutputWindowShow');
        $(".cOutputWindow2").addClass('cOutputWindowShowFullscreen');
        $(".cBallerinaCode2").addClass('cOutputWindowShowFullscreen');
        $(".cBallerinaDaiagram2").addClass('cOutputWindowShowFullscreen');
        callService($('#arguments2').val(), ".cOutputWindow2", "http://gateway.api.cloud.wso2.com/t/tryballerina/EchoService/echo", "POST");
        $(".cTryitButton").toggleClass('cGoback');
    });
});

$(document).ready(function () {
    $(".cTrySample3").click(function () {
        $(".cOutputWindow3").addClass('cOutputWindowShow');
        $(".cOutputWindow3").addClass('cOutputWindowShowFullscreen');
        $(".cBallerinaCode3").addClass('cOutputWindowShowFullscreen');
        $(".cBallerinaDaiagram3").addClass('cOutputWindowShowFullscreen');
        callService($('#arguments3').val(), ".cOutputWindow3", "http://gateway.api.cloud.wso2.com/t/tryballerina/PassthroughService/passthrough", "GET");
        $(".cTryitButton").toggleClass('cGoback');
    });
});

$(document).ready(function () {
    $(".cTrySample4").click(function () {
        $(".cOutputWindow4").addClass('cOutputWindowShow');
        $(".cOutputWindow4").addClass('cOutputWindowShowFullscreen');
        $(".cBallerinaCode4").addClass('cOutputWindowShowFullscreen');
        $(".cBallerinaDaiagram4").addClass('cOutputWindowShowFullscreen');
        var res1 = new Object;
        var res2 = new Object;
        var res3 = new Object;
        var res4 = new Object;
        
        $.when(
           callServiceWithOut("{\"name\" : \"nyse\"}", ".cOutputWindow4", "http://gateway.api.cloud.wso2.com/t/tryballerina/RoutingService/cbr", "POST", res1), 
           callServiceWithOut("{\"name\" : \"nasdaq\"}", ".cOutputWindow4", "http://gateway.api.cloud.wso2.com/t/tryballerina/RoutingService/cbr", "POST", res2),
           callServiceWithOutAndHeaders("", ".cOutputWindow4", "http://gateway.api.cloud.wso2.com/t/tryballerina/RoutingService/hbr", "GET", res3, "nyse"),
           callServiceWithOutAndHeaders("", ".cOutputWindow4","http://gateway.api.cloud.wso2.com/t/tryballerina/RoutingService/hbr", "GET", res4, "nasdaq")
           ).done(function(a1, a2, a3, a4) {
                    $(".cOutputWindow4").text(
                            "This sample has two services which will route the message to two different backend. The first service will route based on the message content and the second one will routebased on the header value.\n\n\n"
                            + "curl -d '{\"name\" : \"nyse\"}' http://localhost:9090/cbr\n" + res1.txt + "\n\n" 
                            + "curl -d '{\"name\" : \"nasdaq\"}' http://localhost:9090/cbr\n" + res2.txt + "\n\n"
                            + "curl -v http://localhost:9090/hbr -H \"name: nyse\"\n" + res3.txt + "\n\n"
                            +  "curl -v http://localhost:9090/hbr -H \"name: nasdaq\"\n" + res4.txt + "\n\n");
                    
        });
        $(".cTryitButton").toggleClass('cGoback');
    });
});

$(document).ready(function () {
    $(".cTrySample5").click(function () {
        $(".cOutputWindow5").addClass('cOutputWindowShow');
        $(".cOutputWindow5").addClass('cOutputWindowShowFullscreen');
        $(".cBallerinaCode5").addClass('cOutputWindowShowFullscreen');
        $(".cBallerinaDaiagram5").addClass('cOutputWindowShowFullscreen');
        var res1 = new Object;
        var res2 = new Object;
        var res3 = new Object;
        var res4 = new Object;
        var res5 = new Object;
        var res6 = new Object;
        $.when(
           callServiceWithOut("", ".cOutputWindow5", "http://gateway.api.cloud.wso2.com/t/tryballerina/RestfulService/products/123000", "GET", res1), 
           callServiceWithOut("{\"Product\": { \"ID\": \"123456\", \"Name\": \"XYZ\", \"Description\": \"Sample product.\"}}", ".cOutputWindow5", "http://gateway.api.cloud.wso2.com/t/tryballerina/RestfulService/products", "POST", res2), 
           callServiceWithOut("", ".cOutputWindow5", "http://gateway.api.cloud.wso2.com/t/tryballerina/RestfulService/orders", "GET", res3),
           callServiceWithOut("{\"Order\": { \"ID\": \"111999\", \"Name\": \"XYZ\", \"Description\": \"Sample order.\"}}", ".cOutputWindow5", "http://gateway.api.cloud.wso2.com/t/tryballerina/RestfulService/orders", "POST", res4),
           callServiceWithOut("", ".cOutputWindow5", "http://gateway.api.cloud.wso2.com/t/tryballerina/RestfulService/customers", "GET", res5),
           callServiceWithOut("{\"Customer\": {\"ID\": \"987654\", \"Name\": \"ABC PQR\",\"Description\": \"Sample Customer.\"}}", ".cOutputWindow5", "http://gateway.api.cloud.wso2.com/t/tryballerina/RestfulService/customers", "POST", res6)
           ).done(function(a1, a2, a3, a4, a5, a6){
                    $(".cOutputWindow5").text(
                       "This sample illustrates a RESTful service that comprises of three resources and how you can build the business logic for each resource.\n"
+ "  /products\n"
+ "  /orders\n"
+ "  /customers\n\n"
+                       
                       "curl -X GET http://localhost:9090/ecommerceservice/products/123000\n" + res1.txt + "\n\n" 
                            + "curl -X POST -d '{ \"ID\": \"123456\", \"Name\": \"XYZ\", \"Description\": \"Sample product.\"}}'  http://localhost:9090/ecommerceservice/products\n" + res2.txt + "\n\n"
                            + "curl -X GET http://localhost:9090/ecommerceservice/orders\n" + res3.txt + "\n\n" 
                            + "curl -X POST -d '{ \"Order\": { \"ID\": \"111999\", \"Name\": \"XYZ\", \"Description\": \"Sample order.\"}}'  http://localhost:9090/ecommerceservice/orders\n" + res4.txt+ "\n\n" 
                            + "curl -X GET http://localhost:9090/ecommerceservice/customers\n" +res5.txt+ "\n\n" 
                            + "curl -X POST -d '{\"Customer\": {\"ID\": \"987654\", \"Name\": \"ABC PQR\",\"Description\": \"Sample Customer.\"}}'  http://localhost:9090/ecommerceservice/customers\n" + res6.txt);
        });
        $(".cTryitButton").toggleClass('cGoback');
    });
});

$(document).ready(function () {
    $(".cTrySample6").click(function () {
        $(".cOutputWindow6").addClass('cOutputWindowShow');
        $(".cOutputWindow6").addClass('cOutputWindowShowFullscreen');
        $(".cBallerinaCode6").addClass('cOutputWindowShowFullscreen');
        $(".cBallerinaDaiagram6").addClass('cOutputWindowShowFullscreen');
        callService($('#arguments6').val(), ".cOutputWindow6", "http://gateway.api.cloud.wso2.com/t/tryballerina/ServiceChaining/locator", "POST");
        $(".cTryitButton").toggleClass('cGoback');
    });
});

$(document).ready(function () {
    $(".cTrySample7").click(function () {
        $(".cOutputWindow7").addClass('cOutputWindowShow');
        $(".cOutputWindow7").addClass('cOutputWindowShowFullscreen');
        $(".cBallerinaCode7").addClass('cOutputWindowShowFullscreen');
        $(".cBallerinaDaiagram7").addClass('cOutputWindowShowFullscreen');
        callService("", ".cOutputWindow7", "http://gateway.api.cloud.wso2.com/t/tryballerina/HelloService/hello", "GET");
        $(".cTryitButton").toggleClass('cGoback');
    });
});

$(document).ready(function () {
    $(".cTrySample8").click(function () {
        $(".cOutputWindow8").addClass('cOutputWindowShow');
        $(".cOutputWindow8").addClass('cOutputWindowShowFullscreen');
        $(".cBallerinaCode8").addClass('cOutputWindowShowFullscreen');
        $(".cBallerinaDaiagram8").addClass('cOutputWindowShowFullscreen');
        callBackend('#txtSample8', ".cOutputWindow8", "#arguments8");
        $(".cTryitButton").toggleClass('cGoback');
    });
});


function callBackend(input, output, argument) {
        $(output).text("Waiting for response from server");
        var jsonData = {"content": $(input).val(), "arguments": $(argument).val()};
        $.ajax({
            type: "POST",
            contentType: "application/json",
            headers: {
                    "Authorization": "Bearer 5ff2cdce-a66e-35d6-b1e0-764b51767401"
            },    
            url: "http://gateway.api.cloud.wso2.com/t/tryballerina/executor/ballerina/executeAsProcess",
            data: JSON.stringify(jsonData),
            success: function (response) {
                $(output).text(response);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
                if (textStatus === "timeout") {
                    $(output).text("Process took too long.");
                } else {
                    $(output).text("Error " + errorThrown);
                }
            }
        });
}

function callService(msg, output, url, type) {
        $(output).text("Waiting for response from server");
        $.ajax({
            type: type,
            url: url,
            data: msg,
            headers: {
                    "Authorization": "Bearer 5ff2cdce-a66e-35d6-b1e0-764b51767401"
            }, 
            success: function (response, status, xhr) {
                var ct = xhr.getResponseHeader("content-type") || "";
                if (ct == "application/json") {
                    $(output).text(JSON.stringify(response));
                } else {
                    $(output).text(response);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.readyState == 0) {
                    console.log("Network error. Please try again");
                }
                if (textStatus === "timeout") {
                    $(output).text("Process took too long.");
                } else {
                    $(output).text("Error " + errorThrown);
                }
            }
        });
}


function callServiceWithOut(msg, output, url, type, result) {
        $(output).text("Waiting for response from server");
        return $.ajax({
            type: type,
            url: url,
            data: msg,
            headers: {
                    "Authorization": "Bearer 5ff2cdce-a66e-35d6-b1e0-764b51767401"
            }, 
            success: function (response, status, xhr) {
                var ct = xhr.getResponseHeader("content-type") || "";
                if (ct == "application/json") {
                    result.txt = JSON.stringify(response); 
                } else {
                    result.txt = response;
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.readyState == 0) {
                    console.log("Network error. Please try again");
                }
                if (textStatus === "timeout") {
                    result.txt = "Process took too long.";
                } else {
                    result.txt = "Error " + errorThrown;
                }
            }
        });
}

function callServiceWithOutAndHeaders(msg, output, url, type, result, headerVal) {
        $(output).text("Waiting for response from server");
        return $.ajax({
            type: type,
            url: url,
            data: msg,
            headers: {
                    "Authorization": "Bearer 5ff2cdce-a66e-35d6-b1e0-764b51767401",
                    "name":headerVal
            }, 
            success: function (response, status, xhr) {
                var ct = xhr.getResponseHeader("content-type") || "";
                if (ct == "application/json") {
                    result.txt = JSON.stringify(response); 
                } else {
                    result.txt = response;
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.readyState == 0) {
                    console.log("Network error. Please try again");
                }
                if (textStatus === "timeout") {
                    result.txt = "Process took too long.";
                } else {
                    result.txt = "Error " + errorThrown;
                }
            }
        });
}

//NAVIGATION

$(document).ready(function() {

    var menu = '<div class="container"> <nav class="navbar navbar-default"> <div class="container-fluid"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="http://ballerinalang.org/" id="Menu-Logo"><img src="http://ballerinalang.org/img/ballerina-logo.svg"/></a> </div> <div id="navbar" class="navbar-collapse collapse" aria-expanded="false" style="height: 1px;"> <ul class="nav navbar-nav"> <li><a id="Menu-docs" href="http://ballerinalang.org/docs">Documentation</a></li> <li><a id="Menu-gettingstarted" href="http://ballerinalang.org/#Getting-Started">Getting Started</a></li> <li><a id="Menu-Get-involved" href="http://ballerinalang.org/#Get-involved">Get involved</a></li> <li><a id="Menu-blog" href="https://medium.com/@ballerinalang/why-ballerina-c0822e81bb87" target=_blank>Blog</a></li> </ul> </div> </div> </nav> </div>';

    var footer = '<div class="container"> <ul> <li>©2017 WSO2</li> <li><a id="footer-TOU" href="http://ballerinalang.org/terms-of-use">Terms of Use</a></li> <li><a id="footer-Privacy" href="http://ballerinalang.org/privacy-policy">Privacy Policy</a></li> </ul> <ul class="cPowerdby"><li>Powered by<a id="footer-wso2" href="http://wso2.com/"><img src="http://ballerinalang.org/img/wso2logo_white.svg"/></a></li></ul></div>';


    $('#iBallerinaNavigation').append(menu);
    $('#iBallerinaFooter').append(footer);
    
    
    
    $("body").ready(function() {

        $("a").has("img").addClass("imagelink");
    });
    
    
    
});
