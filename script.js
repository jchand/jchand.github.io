// JQuery Variables
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

// Javascript Variables
var elem_phone = document.getElementById('phone');
var elem_phone_off = document.getElementById('phone_off');
var elem_phone_text = document.getElementById('phone_off_text');

var v1 = document.getElementById('video1');
var v2 = document.getElementById('video2');
var v3 = document.getElementById('video3');

// Global Variables
var currentTab = 0;
var currentVideo = 0;

toggle();
window.onresize = function() {
    toggle();
}

function toggle() {
    if (window.outerWidth < 900) {
        document.getElementById('right').style.display = 'none';
        document.getElementById('nav').style.display = 'none';
        document.getElementById('left').style.width = '100%';

        var all = document.getElementsByClassName('scrub');
        for (var i = 0; i < all.length; i++) {
            all[i].classList.add('off');
        }

        var all2 = document.getElementsByClassName('mobile_prev');
        for (var i = 0; i < all2.length; i++) {
            if (all2[i].classList.length > 1) {
                all2[i].classList.remove('off');
            }
        }
    }
    else {
        document.getElementById('right').style.display = 'flex';
        document.getElementById('nav').style.display = 'flex';
        document.getElementById('left').style.width = '60%';

        var all = document.getElementsByClassName('scrub');
        for (var i = 0; i < all.length; i++) {
            if (all[i].classList.length > 1) {
                all[i].classList.remove('off');
            }
        }

        var all2 = document.getElementsByClassName('mobile_prev');
        for (var i = 0; i < all2.length; i++) {
            all2[i].classList.add('off');
        }
    }    
}

setTabColor();
$("#page").scroll(function() {
    setTabColor();
});

function setTabColor() {
    if (section4.position().top < 150) {
        if (currentTab != 4) {
            currentTab = 4;
            tab4.css("color", "#373C43");
            tab3.css("color", "#373C4333");
            tab2.css("color", "#373C4333");
            tab1.css("color", "#373C4333");

            if (currentVideo != 3) {
                v3.currentTime = 0;
                setTimeout(function() {
                    currentVideo = 3;
                    video3.show();
                    video2.hide();
                    video1.hide();
                    elem_phone.style.display = 'block';
                    elem_phone_off.style.display = 'none';
                    elem_phone_text.style.display = 'none';
    
                    $("#flash").css("opacity", "1");
                    $("#flash").css("background", "black");
                    $("#flash").fadeTo( "slow" , 0, function() {});
                }, 200);
            }
        }
    } else if (section3.position().top < 150) {
        if (currentTab != 3) {
            currentTab = 3;
            tab3.css("color", "#373C43");
            tab4.css("color", "#373C4333");
            tab2.css("color", "#373C4333");
            tab1.css("color", "#373C4333");

            if (currentVideo != 2) {
                v2.currentTime = 0;
                setTimeout(function() {
                    currentVideo = 2;
                    video3.hide();
                    video2.show();
                    video1.hide();
                    elem_phone.style.display = 'block';
                    elem_phone_off.style.display = 'none';
                    elem_phone_text.style.display = 'none';
    
                    $("#flash").css("opacity", "1");
                    $("#flash").css("background", "black");
                    $("#flash").fadeTo( "slow" , 0, function() {});
                }, 200);
            }
        }
    } else if (section2.position().top < 150) {
        if (currentTab != 2) {
            currentTab = 2;
            tab2.css("color", "#373C43");
            tab4.css("color", "#373C4333");
            tab3.css("color", "#373C4333");
            tab1.css("color", "#373C4333");

            if (currentVideo != 1) {
                v1.currentTime = 0;
                setTimeout(function() {
                    currentVideo = 1;
                    video3.hide();
                    video2.hide();
                    video1.show();
                    elem_phone.style.display = 'block';
                    elem_phone_off.style.display = 'none';
                    elem_phone_text.style.display = 'none';
    
                    $("#flash").css("opacity", "1");
                    $("#flash").css("background", "black");
                    $("#flash").fadeTo( "slow" , 0, function() {});
                }, 200);
            }
        }
    } else if (section1.position().top < 150) {
        if (currentTab != 1) {
            currentTab = 1;
            tab1.css("color", "#373C43");
            tab4.css("color", "#373C4333");
            tab3.css("color", "#373C4333");
            tab2.css("color", "#373C4333");

            if (currentVideo != 0) {
                setTimeout(function() {
                    currentVideo = 0;
                    video3.hide();
                    video2.hide();
                    video1.hide();
                    elem_phone.style.display = 'none';
                    elem_phone_off.style.display = 'block';
                    elem_phone_text.style.display = 'block';
    
                    $("#flash").css("opacity", "1");
                    $("#flash").css("background", "black");
                    $("#flash").fadeTo( "slow" , 0, function() {});
                }, 200);
            }
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
    video3.hide();
    video2.hide();
    video1.hide();

    if (video == v1) {
        currentVideo = 1;
    } else if (video == v2) {
        currentVideo = 2;
    } else if (video == v3) {
        currentVideo = 3;
    }

    console.log(currentVideo);

    elem_phone_off.style.display = 'none';
    elem_phone_text.style.display = 'none';
    elem_phone.style.display = 'block';
    video.style.display = 'block';

    video.currentTime = ts; 

    $("#flash").css("background", "white");
    $("#flash").css("opacity", "1");
    setTimeout(function() { 
        $("#flash").fadeTo( "fast" , 0, function() {});
    }, 750);


}