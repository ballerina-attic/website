function callBackend(e, t, a) {
    $(t).text("Waiting for response from server");
    var o = {
        content: ace && ace.edit ? ace.edit(e.substr(1)).getSession().getValue() : $(e).val(),
        arguments: $(a).val()
    };
    $.ajax({
        type: "POST",
        contentType: "application/json",
        headers: {
            Authorization: "Bearer 5ff2cdce-a66e-35d6-b1e0-764b51767401"
        },
        url: "https://gateway.api.cloud.wso2.com/t/tryballerina/executor/ballerina/executeAsProcess",
        data: JSON.stringify(o),
        success: function(e) {
            $(t).text(e)
        },
        error: function(e, a, o) {
            console.log(o), "timeout" === a ? $(t).text("Process took too long.") : $(t).text("Error " + o)
        }
    })
}

function callService(e, t, a, o) {
    $(t).text("Waiting for response from server"), $.ajax({
        type: o,
        url: a,
        data: e,
        headers: {
            Authorization: "Bearer 5ff2cdce-a66e-35d6-b1e0-764b51767401"
        },
        success: function(e, a, o) {
            var c = o.getResponseHeader("content-type") || "";
            "application/json" == c ? $(t).text(JSON.stringify(e)) : $(t).text(e)
        },
        error: function(e, a, o) {
            0 == e.readyState && console.log("Network error. Please try again"), "timeout" === a ? $(t).text("Process took too long.") : $(t).text("Error " + o)
        }
    })
}

function callServiceWithOut(e, t, a, o, c) {
    return $(t).text("Waiting for response from server"), $.ajax({
        type: o,
        url: a,
        data: e,
        headers: {
            Authorization: "Bearer 5ff2cdce-a66e-35d6-b1e0-764b51767401"
        },
        success: function(e, t, a) {
            var o = a.getResponseHeader("content-type") || "";
            "application/json" == o ? c.txt = JSON.stringify(e) : c.txt = e
        },
        error: function(e, t, a) {
            0 == e.readyState && console.log("Network error. Please try again"), "timeout" === t ? c.txt = "Process took too long." : c.txt = "Error " + a
        }
    })
}

function callServiceWithOutAndHeaders(e, t, a, o, c, l) {
    return $(t).text("Waiting for response from server"), $.ajax({
        type: o,
        url: a,
        data: e,
        headers: {
            Authorization: "Bearer 5ff2cdce-a66e-35d6-b1e0-764b51767401",
            name: l
        },
        success: function(e, t, a) {
            var o = a.getResponseHeader("content-type") || "";
            "application/json" == o ? c.txt = JSON.stringify(e) : c.txt = e
        },
        error: function(e, t, a) {
            0 == e.readyState && console.log("Network error. Please try again"), "timeout" === t ? c.txt = "Process took too long." : c.txt = "Error " + a
        }
    })
}
$(document).ready(function() {
    $("select").change(function() {
        $(this).find("option:selected").each(function() {
            "sample_1" == $(this).attr("value") ? ($(".cSampleBox").not(".sample_1").removeClass("cShowSample").animate({
                opacity: "0"
            }, "fast"), $(".sample_1").addClass("cShowSample").animate({
                opacity: "1"
            }, "fast"), $(".cTryitButton").removeClass("cGoback"), $(".cBallerinaCode").removeClass("cOutputWindowShowFullscreen"), $(".cBallerinaDaiagram").removeClass("cOutputWindowShowFullscreen"), $(".cResults").removeClass("cOutputWindowShow"), $("#txtSample1").prop("readonly", !1), $("#arguments1")) : "sample_2" == $(this).attr("value") ? ($(".cSampleBox").not(".sample_2").removeClass("cShowSample").animate({
                opacity: "0"
            }, "fast"), $(".sample_2").addClass("cShowSample").animate({
                opacity: "1"
            }, "fast"), $(".cTryitButton").removeClass("cGoback"), $(".cBallerinaCode").removeClass("cOutputWindowShowFullscreen"), $(".cBallerinaDaiagram").removeClass("cOutputWindowShowFullscreen"), $(".cResults").removeClass("cOutputWindowShow"), $("#txtSample2").prop("readonly", !0), $("#arguments2").attr("placeholder", "Type your msg here"), $("#arguments2").val("Hello Ballerina"), $("#arguments2").focus()) : "sample_3" == $(this).attr("value") ? ($(".cSampleBox").not(".sample_3").removeClass("cShowSample").animate({
                opacity: "0"
            }, "fast"), $(".sample_3").addClass("cShowSample").animate({
                opacity: "1"
            }, "fast"), $(".cTryitButton").removeClass("cGoback"), $(".cBallerinaCode").removeClass("cOutputWindowShowFullscreen"), $(".cBallerinaDaiagram").removeClass("cOutputWindowShowFullscreen"), $(".cResults").removeClass("cOutputWindowShow"), $("#txtSample3").prop("readonly", !0), $("#arguments3").hide()) : "sample_4" == $(this).attr("value") ? ($(".cSampleBox").not(".sample_4").removeClass("cShowSample").animate({
                opacity: "0"
            }, "fast"), $(".sample_4").addClass("cShowSample").animate({
                opacity: "1"
            }, "fast"), $(".cTryitButton").removeClass("cGoback"), $(".cBallerinaCode").removeClass("cOutputWindowShowFullscreen"), $(".cBallerinaDaiagram").removeClass("cOutputWindowShowFullscreen"), $(".cResults").removeClass("cOutputWindowShow"), $("#txtSample4").prop("readonly", !0), $("#arguments4").hide()) : "sample_5" == $(this).attr("value") ? ($(".cSampleBox").not(".sample_5").removeClass("cShowSample").animate({
                opacity: "0"
            }, "fast"), $(".sample_5").addClass("cShowSample").animate({
                opacity: "1"
            }, "fast"), $(".cTryitButton").removeClass("cGoback"), $(".cBallerinaCode").removeClass("cOutputWindowShowFullscreen"), $(".cBallerinaDaiagram").removeClass("cOutputWindowShowFullscreen"), $(".cResults").removeClass("cOutputWindowShow"), $("#txtSample5").prop("readonly", !0), $("#arguments5").hide()) : "sample_6" == $(this).attr("value") ? ($(".cSampleBox").not(".sample_6").removeClass("cShowSample").animate({
                opacity: "0"
            }, "fast"), $(".sample_6").addClass("cShowSample").animate({
                opacity: "1"
            }, "fast"), $(".cTryitButton").removeClass("cGoback"), $(".cBallerinaCode").removeClass("cOutputWindowShowFullscreen"), $(".cBallerinaDaiagram").removeClass("cOutputWindowShowFullscreen"), $(".cResults").removeClass("cOutputWindowShow"), $("#txtSample6").prop("readonly", !0), $("#arguments6").val('{"ATMLocator": {"ZipCode": "95999"}}'), $("#arguments6").prop("readonly", !0)) : "sample_7" == $(this).attr("value") ? ($(".cSampleBox").not(".sample_7").removeClass("cShowSample").animate({
                opacity: "0"
            }, "fast"), $(".sample_7").addClass("cShowSample").animate({
                opacity: "1"
            }, "fast"), $(".cTryitButton").removeClass("cGoback"), $(".cBallerinaCode").removeClass("cOutputWindowShowFullscreen"), $(".cBallerinaDaiagram").removeClass("cOutputWindowShowFullscreen"), $(".cResults").removeClass("cOutputWindowShow"), $("#txtSample7").prop("readonly", !0), $("#arguments7").hide()) : "sample_8" == $(this).attr("value") ? ($(".cSampleBox").not(".sample_").removeClass("cShowSample").animate({
                opacity: "0"
            }, "fast"), $(".sample_8").addClass("cShowSample").animate({
                opacity: "1"
            }, "fast"), $(".cTryitButton").removeClass("cGoback"), $(".cBallerinaCode").removeClass("cOutputWindowShowFullscreen"), $(".cBallerinaDaiagram").removeClass("cOutputWindowShowFullscreen"), $(".cResults").removeClass("cOutputWindowShow"), $("#txtSample8").prop("readonly", !0), $("#arguments8").attr("placeholder", "<conKey>;<conSecret>;<accessToken>;<accessTokenSecret>;<message>")) : ($(".cSampleBox").removeClass("cShowSample").animate({
                opacity: "0"
            }, "fast"), $(".cTryitButton").removeClass("cGoback"), $(".cBallerinaCode").removeClass("cOutputWindowShowFullscreen"), $(".cBallerinaDaiagram").removeClass("cOutputWindowShowFullscreen"), $(".cResults").removeClass("cOutputWindowShow"))
        })
    }).change()
}), $(document).ready(function() {
    $(".cFullscreen").click(function() {
        $(".cBallerinaTry").toggleClass("cFullscreenOption"), $(".cFullscreen").toggleClass("cBack")
    })
}), $(document).ready(function() {
    $(".cTrySample1").click(function() {
        $(".cOutputWindow1").addClass("cOutputWindowShow"), $(".cOutputWindow1").addClass("cOutputWindowShowFullscreen"), $(".cBallerinaCode1").addClass("cOutputWindowShowFullscreen"), $(".cBallerinaDaiagram1").addClass("cOutputWindowShowFullscreen"), callBackend("#txtSample1", ".cOutputWindow1", "#arguments1"), $(".cTryitButton").toggleClass("cGoback")
    })
}), $(document).ready(function() {
    $(".cTrySample2").click(function() {
        $(".cOutputWindow2").addClass("cOutputWindowShow"), $(".cOutputWindow2").addClass("cOutputWindowShowFullscreen"), $(".cBallerinaCode2").addClass("cOutputWindowShowFullscreen"), $(".cBallerinaDaiagram2").addClass("cOutputWindowShowFullscreen"), callService($("#arguments2").val(), ".cOutputWindow2", "https://gateway.api.cloud.wso2.com/t/tryballerina/EchoService/echo", "POST"), $(".cTryitButton").toggleClass("cGoback")
    })
}), $(document).ready(function() {
    $(".cTrySample3").click(function() {
        $(".cOutputWindow3").addClass("cOutputWindowShow"), $(".cOutputWindow3").addClass("cOutputWindowShowFullscreen"), $(".cBallerinaCode3").addClass("cOutputWindowShowFullscreen"), $(".cBallerinaDaiagram3").addClass("cOutputWindowShowFullscreen"), callService($("#arguments3").val(), ".cOutputWindow3", "https://gateway.api.cloud.wso2.com/t/tryballerina/PassthroughService/passthrough", "GET"), $(".cTryitButton").toggleClass("cGoback")
    })
}), $(document).ready(function() {
    $(".cTrySample4").click(function() {
        $(".cOutputWindow4").addClass("cOutputWindowShow"), $(".cOutputWindow4").addClass("cOutputWindowShowFullscreen"), $(".cBallerinaCode4").addClass("cOutputWindowShowFullscreen"), $(".cBallerinaDaiagram4").addClass("cOutputWindowShowFullscreen");
        var e = new Object,
            t = new Object,
            a = new Object,
            o = new Object;
        $.when(callServiceWithOut('{"name" : "nyse"}', ".cOutputWindow4", "https://gateway.api.cloud.wso2.com/t/tryballerina/RoutingService/cbr", "POST", e), callServiceWithOut('{"name" : "nasdaq"}', ".cOutputWindow4", "https://gateway.api.cloud.wso2.com/t/tryballerina/RoutingService/cbr", "POST", t), callServiceWithOutAndHeaders("", ".cOutputWindow4", "https://gateway.api.cloud.wso2.com/t/tryballerina/RoutingService/hbr", "GET", a, "nyse"), callServiceWithOutAndHeaders("", ".cOutputWindow4", "https://gateway.api.cloud.wso2.com/t/tryballerina/RoutingService/hbr", "GET", o, "nasdaq")).done(function(c, l, s, n) {
            $(".cOutputWindow4").text('This sample has two services which will route the message to two different backend. The first service will route based on the message content and the second one will routebased on the header value.\n\n\ncurl -d \'{"name" : "nyse"}\' https://localhost:9090/cbr\n' + e.txt + '\n\ncurl -d \'{"name" : "nasdaq"}\' https://localhost:9090/cbr\n' + t.txt + '\n\ncurl -v https://localhost:9090/hbr -H "name: nyse"\n' + a.txt + '\n\ncurl -v https://localhost:9090/hbr -H "name: nasdaq"\n' + o.txt + "\n\n")
        }), $(".cTryitButton").toggleClass("cGoback")
    })
}), $(document).ready(function() {
    $(".cTrySample5").click(function() {
        $(".cOutputWindow5").addClass("cOutputWindowShow"), $(".cOutputWindow5").addClass("cOutputWindowShowFullscreen"), $(".cBallerinaCode5").addClass("cOutputWindowShowFullscreen"), $(".cBallerinaDaiagram5").addClass("cOutputWindowShowFullscreen");
        var e = new Object,
            t = new Object,
            a = new Object,
            o = new Object,
            c = new Object,
            l = new Object;
        $.when(callServiceWithOut("", ".cOutputWindow5", "https://gateway.api.cloud.wso2.com/t/tryballerina/RestfulService/products/123000", "GET", e), callServiceWithOut('{"Product": { "ID": "123456", "Name": "XYZ", "Description": "Sample product."}}', ".cOutputWindow5", "https://gateway.api.cloud.wso2.com/t/tryballerina/RestfulService/products", "POST", t), callServiceWithOut("", ".cOutputWindow5", "https://gateway.api.cloud.wso2.com/t/tryballerina/RestfulService/orders", "GET", a), callServiceWithOut('{"Order": { "ID": "111999", "Name": "XYZ", "Description": "Sample order."}}', ".cOutputWindow5", "https://gateway.api.cloud.wso2.com/t/tryballerina/RestfulService/orders", "POST", o), callServiceWithOut("", ".cOutputWindow5", "https://gateway.api.cloud.wso2.com/t/tryballerina/RestfulService/customers", "GET", c), callServiceWithOut('{"Customer": {"ID": "987654", "Name": "ABC PQR","Description": "Sample Customer."}}', ".cOutputWindow5", "https://gateway.api.cloud.wso2.com/t/tryballerina/RestfulService/customers", "POST", l)).done(function(s, n, r, u, i, d) {
            $(".cOutputWindow5").text("This sample illustrates a RESTful service that comprises of three resources and how you can build the business logic for each resource.\n  /products\n  /orders\n  /customers\n\ncurl -X GET https://localhost:9090/ecommerceservice/products/123000\n" + e.txt + '\n\ncurl -X POST -d \'{ "ID": "123456", "Name": "XYZ", "Description": "Sample product."}}\'  https://localhost:9090/ecommerceservice/products\n' + t.txt + "\n\ncurl -X GET https://localhost:9090/ecommerceservice/orders\n" + a.txt + '\n\ncurl -X POST -d \'{ "Order": { "ID": "111999", "Name": "XYZ", "Description": "Sample order."}}\'  https://localhost:9090/ecommerceservice/orders\n' + o.txt + "\n\ncurl -X GET https://localhost:9090/ecommerceservice/customers\n" + c.txt + '\n\ncurl -X POST -d \'{"Customer": {"ID": "987654", "Name": "ABC PQR","Description": "Sample Customer."}}\'  https://localhost:9090/ecommerceservice/customers\n' + l.txt)
        }), $(".cTryitButton").toggleClass("cGoback")
    })
}), $(document).ready(function() {
    $(".cTrySample6").click(function() {
        $(".cOutputWindow6").addClass("cOutputWindowShow"), $(".cOutputWindow6").addClass("cOutputWindowShowFullscreen"), $(".cBallerinaCode6").addClass("cOutputWindowShowFullscreen"), $(".cBallerinaDaiagram6").addClass("cOutputWindowShowFullscreen"), callService($("#arguments6").val(), ".cOutputWindow6", "https://gateway.api.cloud.wso2.com/t/tryballerina/ServiceChaining/locator", "POST"), $(".cTryitButton").toggleClass("cGoback")
    })
}), $(document).ready(function() {
    $(".cTrySample7").click(function() {
        $(".cOutputWindow7").addClass("cOutputWindowShow"), $(".cOutputWindow7").addClass("cOutputWindowShowFullscreen"), $(".cBallerinaCode7").addClass("cOutputWindowShowFullscreen"), $(".cBallerinaDaiagram7").addClass("cOutputWindowShowFullscreen"), callService("", ".cOutputWindow7", "https://gateway.api.cloud.wso2.com/t/tryballerina/HelloService/hello", "GET"), $(".cTryitButton").toggleClass("cGoback")
    })
}), $(document).ready(function() {
    $(".cTrySample8").click(function() {
        $(".cOutputWindow8").addClass("cOutputWindowShow"), $(".cOutputWindow8").addClass("cOutputWindowShowFullscreen"), $(".cBallerinaCode8").addClass("cOutputWindowShowFullscreen"), $(".cBallerinaDaiagram8").addClass("cOutputWindowShowFullscreen"), callBackend("#txtSample8", ".cOutputWindow8", "#arguments8"), $(".cTryitButton").toggleClass("cGoback")
    })
});