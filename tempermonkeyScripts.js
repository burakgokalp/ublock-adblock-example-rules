// ==UserScript==
// @name         DH Temizleyici
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        https://forum.donanimhaber.com/*
// @include      https://*.donanimhaber.com/*
// @grant        none
// ==/UserScript==




function ClearDHFromADS(){
    console.log("selam");

    function IfExistsRemove(selector){
        var x = document.querySelector(selector);
        if (x != null) {
            x.remove();
        }
    }

    IfExistsRemove("tr[bgcolor='#FFFFFF']");
    IfExistsRemove("tr[class='r-ustkonu']");
    IfExistsRemove("tr[class='ustkonu']");
    IfExistsRemove(".konulisteTextReklam");
    IfExistsRemove("#Table7");
    IfExistsRemove("td[width='13%'");
    IfExistsRemove("td[width='10'");
    /*
    $("img[src^='http://adserve.donanimhaber'").parent().remove();
    $("a[href='/m_94015223/tm.htm']").parent().parent().parent().parent().remove();
    $("img[src='http://icon.donanimhaber.com/avantajx_buton.png']").parent().remove();
    $("img[src='http://icon.donanimhaber.com/gfbuton.png']").parent().remove();*/
    IfExistsRemove(".sagtaraf");
    IfExistsRemove("div[class*='Reklam']");
    IfExistsRemove("div[class*='reklam']");
    IfExistsRemove(".cookie-kutu");
    IfExistsRemove("#notification-permission");

    //linkleri düzeltelim.
    /*
    var links = document.getElementsByTagName("a"); // or document.getElementsByTagName("a");
    for (var i=0, n=links.length; i<n; i++) {
        if (links[i].href != null) {
            console.log(links[i].href);
            const regex = /^[/]ExternalLinkRedirect.*url[=]/i;
            var replacedVal = links[i].href.replace(regex,'');
            console.log(replacedVal);
            links[i].href=replacedVal;
            console.log(links[i].href);
        }
    }*/
    /*
    $("a").each(function() {
        var hrefVal = $(this).attr('href');
        if(hrefVal != undefined){
            const regex = /^[/]ExternalLinkRedirect.*url[=]/i;
            var replacedVal = hrefVal.replace(regex,'');
            $(this).attr('href', replacedVal);
            $(this).prop("onclick", null);
        }
    });*/

    console.log("Tamamdır");
};



(function() {
    'use strict';

    if (document.readyState == "complete" || document.readyState == "loaded" || document.readyState == "interactive") {
        ClearDHFromADS();
    } else {
        document.addEventListener("DOMContentLoaded", function(event) {
            ClearDHFromADS();
        });
    }
})();








