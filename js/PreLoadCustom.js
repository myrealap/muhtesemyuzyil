$(function () {
    $("#Preimages").animate({ "opacity": "0" }, "fast");
    setTimeout(function () {
        $("#PreloadDiv").hide();


        $("#Preimages").animate({ "opacity": "1" }, 3000);
    }, 5800);

});