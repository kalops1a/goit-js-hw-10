import"./assets/styles-cacf894f.js";import{f,i as y}from"./assets/vendor-77e16229.js";function r(e){const i=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:h}}const p=document.querySelector("[data-days]"),D=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),E=document.querySelector("[data-seconds]"),t=document.getElementById("startButton");let d,c;const M={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){c=e[0],c<=new Date?(y.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),t.disabled=!0):t.disabled=!1}},s=f("#datetime-picker",M);function n(e){return String(e).padStart(2,"0")}t.addEventListener("click",()=>{t.disabled=!0,s.disabled=!0;const e=s.selectedDates[0],a=Math.max(e-new Date,0);u(r(a)),d=setInterval(()=>{const o=Math.max(e-new Date,0);u(r(o)),o===0&&(clearInterval(d),t.disabled=!1,s.disabled=!1)},1e3)});function u(e){p.textContent=n(e.days),D.textContent=n(e.hours),b.textContent=n(e.minutes),E.textContent=n(e.seconds)}
//# sourceMappingURL=commonHelpers.js.map
