
document.addEventListener('DOMContentLoaded', (event) => {

    var get_in_touch_btn = document.getElementById('get_in_touch_btn');    /*Finds the id*/
    var explore_me_btn = document.getElementById('explore_me_btn');

    var hovered_nav = document.querySelector('header nav');
    var active_nav = document.getElementById('active');

    get_in_touch_btn.addEventListener('mouseover', () => {
        explore_me_btn.style.backgroundColor = 'white';
        explore_me_btn.style.color = '#512DCD';
    });

    get_in_touch_btn.addEventListener('mouseout', () => {
        explore_me_btn.style.backgroundColor = '';
        explore_me_btn.style.color = '';
    });

    explore_me_btn.addEventListener('mouseover', () => {
        get_in_touch_btn.style.backgroundColor = 'transparent';
        get_in_touch_btn.style.color = 'white';
        get_in_touch_btn.style.border = '1px solid white';
    });

    explore_me_btn.addEventListener('mouseout', () => {
        get_in_touch_btn.style.backgroundColor = '';
        get_in_touch_btn.style.color = '';
        get_in_touch_btn.style.border = '';
    });

    hovered_nav.addEventListener('mouseover', () => {
        active_nav.style.borderBottom = '0px solid white';
    });

    hovered_nav.addEventListener('mouseout', () => {
        active_nav.style.borderBottom = '';
    });

});

function myFunction() {
    var showNav = document.querySelector('header nav');
    if (showNav.style.display === "block") {
        showNav.style.display = "none";
    } else {
        showNav.style.display = "block";
    }
}

function reverseCountdown() {

    const startDate = new Date('June 1, 2024 9:00:00');
    const now = Date.now();
    const afterTime = now - startDate;



    var days = Math.floor(afterTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((afterTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((afterTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((afterTime % (1000 * 60)) / 1000);


    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

}

setInterval(reverseCountdown, 1000);

reverseCountdown();

// window.addEventListener('resize', function () {

//     var navigation = document.querySelector('header nav');        /*Finds the specific element*/

//     if (window.innerWidth <= 600) {
//         navigation.style.display = 'none';
//     } else {
//         navigation.style.display = '';
//     }

// })