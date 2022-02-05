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


$(document).ready(function(){
  $("tr[bgcolor='#FFFFFF']").remove();
  $("tr[class='r-ustkonu']").remove();
  $("tr[class='ustkonu']").remove();
  $(".konulisteTextReklam").remove();
  $("#Table7").remove();
  $("td[width='13%'").remove();
  $("td[width='10'").remove();
  $("img[src^='http://adserve.donanimhaber'").parent().remove();
  $("a[href='/m_94015223/tm.htm']").parent().parent().parent().parent().remove();
  $("img[src='http://icon.donanimhaber.com/avantajx_buton.png']").parent().remove();
  $("img[src='http://icon.donanimhaber.com/gfbuton.png']").parent().remove();
  $(".sagtaraf").remove();
  $("div[class*='Reklam']").remove();
  $("div[class*='reklam']").remove();
  closeCookieUsingPopup();
  //$(".cookie-kutu").remove();
  $("#notification-permission").remove();

//linkleri düzeltelim.
    $("a").each(function() {
        var hrefVal = $(this).attr('href');
        if(hrefVal != undefined){
            const regex = /^[/]ExternalLinkRedirect.*url[=]/i;
            var replacedVal = hrefVal.replace(regex,'');
            $(this).attr('href', replacedVal);
            $(this).prop("onclick", null);
        }
    });

  console.log("Tamamdır");
});

