toggle();
window.onresize = function() {
    toggle();
}

function toggle() {
    if (window.innerWidth < 900) {
        document.getElementById('right').style.display = 'none';
        document.getElementById('left').style.width = '100%';
    }
    else {
        document.getElementById('right').style.display = 'flex';
        document.getElementById('left').style.width = '60%';
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