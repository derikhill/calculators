!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){years.oninput=function(){var e=document.getElementById("years");document.getElementById("year-value").value=e.value},rate.oninput=function(){var e=document.getElementById("rate");document.getElementById("rate-value").value=e.value};var n=document.getElementById("calculate");n.addEventListener("click",function(){var e=["years","rate-value","loan-amount","annual-tax","annual-insurance"],t={},r=!0;if(e.forEach(function(n){form=document.getElementById(n),t[n]=document.getElementById(n).value,-1!==e.indexOf(n)&&""==t[n]?(form.classList.add("error"),r=!1):form.classList.remove("error")}),r){var u=document.getElementById("years").value,a=document.getElementById("rate-value").value,o=document.getElementById("loan-amount").value,l=document.getElementById("annual-tax").value,d=document.getElementById("annual-insurance").value,i=function(e,t,n){var r=n/100/12;return{loanAmount:e,yearsValue:t,rate:n,monthlyPayment:e*r/(1-Math.pow(1/(1+r),12*t))}}(u,a,o).monthlyPayment,c=l/12,m=d/12,y=c+m+i;window.screen.availWidth>="768"?document.getElementById("small-results").style.height="440px":document.getElementById("small-results").style.height="290px",document.getElementById("principal").innerHTML="$"+i.toFixed(2),document.getElementById("tax").innerHTML="$"+c.toFixed(2),document.getElementById("insurance").innerHTML="$"+m.toFixed(2),document.getElementById("total").innerHTML="$"+y.toFixed(2),n.innerHTML="RECALCULATE"}})}]);