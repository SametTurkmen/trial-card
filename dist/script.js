function circleBar(e,t){let r=document.getElementById(e).querySelectorAll("circle"),c=r[0].getAttribute("r"),l=2*Math.PI*c,i=l-l*t/100;r[1].style.setProperty("--circum",l),r[1].style.setProperty("--offset",i)}circleBar("elem1",60);
//# sourceMappingURL=script.js.map