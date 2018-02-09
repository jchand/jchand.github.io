toggle();
window.onresize = function() {
    toggle();
}

function toggle() {
    if (window.outerWidth < 900) {
        document.getElementById('right').style.display = 'none';
        document.getElementById('nav').style.display = 'none';
        document.getElementById('left').style.width = '100%';
    }
    else {
        document.getElementById('right').style.display = 'flex';
        document.getElementById('nav').style.display = 'flex';
        document.getElementById('left').style.width = '60%';
    }    
}

var tab1 = $("#tab1")
var tab2 = $("#tab2")
var tab3 = $("#tab3")
var tab4 = $("#tab4")

var section1 = $("#section1")
var section2 = $("#section2")
var section3 = $("#section3")
var section4 = $("#section4")

var video1 = $("#video1")
var video2 = $("#video2")
var video3 = $("#video3")

var currentTab = 0;

setTabColor();
$("#page").scroll(function() {
    setTabColor();
});

function setTabColor() {
    if (section4.position().top < 150) {
        if (currentTab != 4) {
            currentTab = 4;
            tab4.css("color", "#373C43");
            tab3.css("color", "#373C4366");
            tab2.css("color", "#373C4366");
            tab1.css("color", "#373C4366");

            video3.show();
            video2.hide();
            video1.hide();
            document.getElementById('phone').style.display = 'block';
        }
    } else if (section3.position().top < 150) {
        if (currentTab != 3) {
            currentTab = 3;
            tab3.css("color", "#373C43");
            tab4.css("color", "#373C4366");
            tab2.css("color", "#373C4366");
            tab1.css("color", "#373C4366");

            video3.hide();
            video2.show();
            video1.hide();
            document.getElementById('phone').style.display = 'block';
        }
    } else if (section2.position().top < 150) {
        if (currentTab != 2) {
            currentTab = 2;
            tab2.css("color", "#373C43");
            tab4.css("color", "#373C4366");
            tab3.css("color", "#373C4366");
            tab1.css("color", "#373C4366");

            video3.hide();
            video2.hide();
            video1.show();
            document.getElementById('phone').style.display = 'block';
        }
    } else if (section1.position().top < 150) {
        if (currentTab != 1) {
            currentTab = 1;
            tab1.css("color", "#373C43");
            tab4.css("color", "#373C4366");
            tab3.css("color", "#373C4366");
            tab2.css("color", "#373C4366");

            video3.hide();
            video2.hide();
            video1.hide();
            document.getElementById('phone').style.display = 'none';
        }
    }
}

window.smoothScroll = function(target) {
    var scrollContainer = target;

    do { 
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = -100;
    do { 
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 10) return;
        c.scrollTop = a + (b - a) / 10 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
 
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

function seekToTime(video, ts) {
    video.pause();
    video.currentTime = ts; 
    var timer = setInterval(function() {
        if (video.paused && video.readyState == 4 || !video.paused) {
            video.play();
            clearInterval(timer);
        }
    }, 50);
}