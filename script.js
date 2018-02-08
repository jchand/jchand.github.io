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