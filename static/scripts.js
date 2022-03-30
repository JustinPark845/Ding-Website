// start on page load

/* move other elements off screen */
var phones = document.getElementById("phones");
phones.style.marginLeft = "1000px";
var box = document.getElementById("box");
box.style.marginLeft = "-1000px";
localStorage.setItem('pagestart','false');
localStorage.setItem('policyup','false');
localStorage.setItem('policybuttonup','false');

/* scale content to page width */
var w = window.innerWidth;
var wscale = w / 1441;
var hscale = (723/1441) * w;
var wmarginsubtract = (1441 - w) / 2;
var hmarginsubtract = (723 - hscale) / 2;
document.getElementById("mainwindow").style.transform = 'scale('+wscale+')';
document.getElementById("mainwindow").style.WebkitTransform = 'scale('+wscale+')';
document.getElementById("mainwindow").style.MozTransform = 'scale('+wscale+')';
document.getElementById("mainwindow").style.OTransform = 'scale('+wscale+')';
document.getElementById("mainwindow").style.msTransform = 'scale('+wscale+')';
document.getElementById("mainwindow").style.margin= '-'+hmarginsubtract+'px -'+wmarginsubtract+'px 0px -'+wmarginsubtract+'px';
document.getElementById("disclaimer").style.top= hscale+'px';

/* reveal clickme */
setTimeout(revealclickme, 2000);
function revealclickme() {
    if (localStorage.getItem('pagestart') != "true") {
        var clickme = document.getElementById("clickme");
        clickme.style.animation = "clickme .5s"
        clickme.addEventListener('animationend', () => {
            clickme.style.fontSize= "15px";
            clickme.style.marginLeft= "47.175%";
            clickme.style.top= "57.1%";
        })
    }
}

// functions
/* pagestart */
function pageinitiate() {
    localStorage.setItem('pagestart','true');
    localStorage.setItem('currentpage','home');
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display="block";
    var icon = document.getElementById("icon");
    var clickme = document.getElementById("clickme");
    icon.style.animation = "exittop 1s";
    clickme.style.animation = "exittop 1s";
    icon.addEventListener('animationend', () => {icon.style.display= "none";})
    clickme.addEventListener('animationend', () => {clickme.style.display= "none";})
    setTimeout(function() {
        var phones = document.getElementById("phones");
        phones.style.animation = "slidein1 1s";
        phones.addEventListener('animationend', () => {phones.style.marginLeft = "-400px"; lightbox.style.display="none";})
    }, 750);
    setTimeout(function() {
        var box = document.getElementById("box");
        box.style.animation = "specialboxslidein 1s";
        box.addEventListener('animationend', () => {box.style.marginLeft = "0px";})
    }, 250);
}
/* main */
function transitionout() {
    var phones = document.getElementById("phones");
    phones.style.animation = "slideout1 1s";
    phones.addEventListener('animationend', () => {phones.style.marginLeft = "1000px";})
    var box = document.getElementById("box");
    box.style.animation = "slideout2 1s";
    box.addEventListener('animationend', () => {box.style.marginLeft = "-200px";})
}
function transitionin() {
    if (localStorage.getItem('currentpage') != 'home') {
        localStorage.setItem('currentpage','home');
        if (localStorage.getItem('policybuttonup') == 'true') {
            localStorage.setItem('policybuttonup','false');
            var policybutton = document.getElementById("privatepolicybuttonlabel");
            policybutton.style.animation = "policybuttonslideout 1s";
            policybutton.addEventListener('animationend', () => {policybutton.style.bottom = "50px";})
        }
        var lightbox = document.getElementById("lightbox");
        lightbox.style.display="block";
        var phones = document.getElementById("phones");
        phones.style.animation = "slidein1 1s";
        phones.addEventListener('animationend', () => {phones.style.marginLeft = "-400px";})
        var box = document.getElementById("box");
        box.style.animation = "slidein2 1s";
        box.addEventListener('animationend', () => {box.style.marginLeft = "0px"; lightbox.style.display="none";})
    }
}
/* element1 */
function elementin1() {
    if (localStorage.getItem('currentpage') != 'element1') {
        localStorage.setItem('currentpage','element1');
        if (localStorage.getItem('policybuttonup') != 'true') {
            localStorage.setItem('policybuttonup','true');
            var policybutton = document.getElementById("privatepolicybuttonlabel");
            policybutton.style.animation = "policybuttonslidein 1s";
            policybutton.addEventListener('animationend', () => {policybutton.style.bottom = "20px";})
        }
        var lightbox = document.getElementById("lightbox");
        lightbox.style.display="block";
        var product = document.getElementById("product");
        product.style.animation = "elementin 1s";
        product.addEventListener('animationend', () => {product.style.marginTop = "800px"; lightbox.style.display="none";})
    }
}
function elementout1() {
    var product = document.getElementById("product");
    product.style.animation = "elementout 1s";
    product.addEventListener('animationend', () => {product.style.marginTop = "0px";})
}
/* element2 */
function elementin2() {
    if (localStorage.getItem('currentpage') != 'element2') {
        localStorage.setItem('currentpage','element2');
        if (localStorage.getItem('policybuttonup') != 'true') {
            localStorage.setItem('policybuttonup','true');
            var policybutton = document.getElementById("privatepolicybuttonlabel");
            policybutton.style.animation = "policybuttonslidein 1s";
            policybutton.addEventListener('animationend', () => {policybutton.style.bottom = "20px";})
        }
        var lightbox = document.getElementById("lightbox");
        lightbox.style.display="block";
        var product = document.getElementById("aboutus");
        product.style.animation = "elementin 1s";
        product.addEventListener('animationend', () => {product.style.marginTop = "800px"; lightbox.style.display="none";})
    }
}
function elementout2() {
    var product = document.getElementById("aboutus");
    product.style.animation = "elementout 1s";
    product.addEventListener('animationend', () => {product.style.marginTop = "0px";})
}
/* element3 */
function elementin3() {
    if (localStorage.getItem('currentpage') != 'element3') {
        localStorage.setItem('currentpage','element3');
        if (localStorage.getItem('policybuttonup') != 'true') {
            localStorage.setItem('policybuttonup','true');
            var policybutton = document.getElementById("privatepolicybuttonlabel");
            policybutton.style.animation = "policybuttonslidein 1s";
            policybutton.addEventListener('animationend', () => {policybutton.style.bottom = "20px";})
        }
        var lightbox = document.getElementById("lightbox");
        lightbox.style.display="block";
        var product = document.getElementById("contactus");
        product.style.animation = "elementin 1s";
        product.addEventListener('animationend', () => {product.style.marginTop = "800px"; lightbox.style.display="none";})
    }
}
function elementout3() {
    var product = document.getElementById("contactus");
    product.style.animation = "elementout 1s";
    product.addEventListener('animationend', () => {product.style.marginTop = "0px";})
}
/* element4 */
function elementin4() {
        if (localStorage.getItem('currentpage') != 'element4') {
            localStorage.setItem('currentpage','element4');
            if (localStorage.getItem('policybuttonup') != 'true') {
                localStorage.setItem('policybuttonup','true');
                var policybutton = document.getElementById("privatepolicybuttonlabel");
                policybutton.style.animation = "policybuttonslidein 1s";
                policybutton.addEventListener('animationend', () => {policybutton.style.bottom = "20px";})
            }
        var lightbox = document.getElementById("lightbox");
        lightbox.style.display="block";
        var product = document.getElementById("ambassador");
        product.style.animation = "elementin 1s";
        product.addEventListener('animationend', () => {product.style.marginTop = "800px"; lightbox.style.display="none";})
    }
}
function elementout4() {
    var product = document.getElementById("ambassador");
    product.style.animation = "elementout 1s";
    product.addEventListener('animationend', () => {product.style.marginTop = "0px";})
}
/* privatepolicy */
function showpolicy() {
    if (localStorage.getItem('policyup') != 'true') {
    localStorage.setItem('policyup','true');
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display="block";
    halflightbox.style.display="block";
    var product = document.getElementById("privatepolicy");
    product.style.animation = "elementin2 1s";
    product.addEventListener('animationend', () => {product.style.marginTop = "-800px"; lightbox.style.display="none"; halflightbox.style.display="block";})
}
}
function closepolicy() {
    var product = document.getElementById("privatepolicy");
    lightbox.style.display="block";
    product.style.animation = "elementout2 1s";
    product.addEventListener('animationend', () => {product.style.marginTop = "0px"; lightbox.style.display="none"; halflightbox.style.display="none";})
    localStorage.setItem('policyup','false');
}

function hide() {
    document.getElementById("disclaimer").style.display= 'none';
}