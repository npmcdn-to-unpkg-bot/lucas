"use strict";var App=App||{};App={init:function(){console.log("The Voice of the West. The Voice of San Francisco and the Bay Area.")}};(function(){if(window.__twitterIntentHandler)return;var intentRegex=/twitter\.com\/intent\/(\w+)/,windowOptions="scrollbars=yes,resizable=yes,toolbar=no,location=yes",width=550,height=420,winHeight=screen.height,winWidth=screen.width;function handleIntent(e){e=e||window.event;var target=e.target||e.srcElement,m,left,top;while(target&&target.nodeName.toLowerCase()!=="a"){target=target.parentNode}if(target&&target.nodeName.toLowerCase()==="a"&&target.href){m=target.href.match(intentRegex);if(m){left=Math.round(winWidth/2-width/2);top=0;if(winHeight>height){top=Math.round(winHeight/2-height/2)}window.open(target.href,"intent",windowOptions+",width="+width+",height="+height+",left="+left+",top="+top);e.returnValue=false;e.preventDefault&&e.preventDefault()}}}if(document.addEventListener){document.addEventListener("click",handleIntent,false)}else if(document.attachEvent){document.attachEvent("onclick",handleIntent)}window.__twitterIntentHandler=true})();var gallery1_idx=0;var gallery_len=11;document.getElementById("scrollRight-Gallery1").addEventListener("click",function(){gallery1_idx=gallery1_idx+1;$(".photoG1").removeClass("active");$("#photoG1"+gallery1_idx).addClass("active");if(gallery1_idx==gallery_len-1){$("#scrollRight-Gallery1").addClass("last")}else{$("#scrollRight-Gallery1").removeClass("last")}if(gallery1_idx==0){$("#scrollLeft-Gallery1").addClass("first")}else{$("#scrollLeft-Gallery1").removeClass("first")}});document.getElementById("scrollLeft-Gallery1").addEventListener("click",function(){gallery1_idx=gallery1_idx-1;$(".photoG1").removeClass("active");$("#photoG1"+gallery1_idx).addClass("active");if(gallery1_idx==gallery_len-1){$("#scrollRight-Gallery1").addClass("last")}else{$("#scrollRight-Gallery1").removeClass("last")}if(gallery1_idx==0){$("#scrollLeft-Gallery1").addClass("first")}else{$("#scrollLeft-Gallery1").removeClass("first")}});