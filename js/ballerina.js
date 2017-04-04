
//NAVIGATION

$(document).ready(function() {

    var menu = '<div class="container"> <nav class="navbar navbar-default"> <div class="container-fluid"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="http://ballerinalang.org/" id="Menu-Logo"><img src="http://cdn.wso2.com/wso2/sites/all/ballerina/img/ballerina-logo-ie.png"/></a> </div> <div id="navbar" class="navbar-collapse collapse" aria-expanded="false" style="height: 1px;"> <ul class="nav navbar-nav"> <li><a id="Menu-docs" href="http://ballerinalang.org/docs">Documentation</a></li> <li><a id="Menu-gettingstarted" href="http://ballerinalang.org/#Getting-Started">Getting Started</a></li> <li><a id="Menu-Get-involved" href="http://ballerinalang.org/#Get-involved">Get involved</a></li> <li><a id="Resources" href="http://ballerinalang.org/resources">Resources</a></li> <li><a id="Menu-blog" href="https://medium.com/ballerinalang" target=_blank>Blog</a></li> </ul> </div> </div> </nav> </div>';

    var footer = '<div class="container"> <ul> <li>©2017 WSO2</li> <li><a id="footer-TOU" href="http://ballerinalang.org/terms-of-use">Terms of Use</a></li> <li><a id="footer-Privacy" href="http://ballerinalang.org/privacy-policy">Privacy Policy</a></li> </ul> <ul class="cPowerdby"><li>Powered by<a id="footer-wso2" href="http://wso2.com/"><img src="http://ballerinalang.org/img/wso2logo_white.svg"/></a></li></ul></div>';


    $('#iBallerinaNavigation').append(menu);
    $('#iBallerinaFooter').append(footer);
    
    
    
    $("body").ready(function() {

        $("a").has("img").addClass("imagelink");
    });
    
    
    
});


//FLOATING BUTTON


 $("document").ready(function($) {

    var div_top = $("body").offset().top;
    div_top = div_top - 200;
    $(window).scroll(function() {
        if ($(this).scrollTop() > div_top) {
            $('.cFloatingButton').addClass('cShowFloatingButton');
        }


    });
});


//email validation
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

//set and retrive cookie information
function addCookie(email) {
    var date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    document.cookie = "userdata=" + btoa(email) + "; expires=" + date.toUTCString() + "; path=/";
}

function getCookie(cookieName) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + cookieName + "=");
    var cookieValue = "";
    if (parts.length == 2) {
        cookieValue = parts.pop().split(";").shift();
    }
    return cookieValue;
}