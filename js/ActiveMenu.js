$(function () {
   
    SetActive();
    function GetCurrentPageName() {

        var sPath = window.location.pathname;
        var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

        return sPage.toLowerCase()
    }

    function CutLink(deger) {

        var sPath = deger;
        var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

        return sPage.toLowerCase()
    }

    function SetActive() {
        $("#foo0 a").each(function () {

            if (CutLink($(this).attr("href").toLowerCase()) == GetCurrentPageName()) {
                var myClass = $(this).attr("class");
                myClass += "Active";
                $(this).addClass(myClass);
                
                
                if (parseInt($(this).attr("rel")) > 5) {

                    $("#foo0").trigger("slideToPage", 1);
                }
            }

        });
    }


});