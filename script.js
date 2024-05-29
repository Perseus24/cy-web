
document.addEventListener('DOMContentLoaded', (event) => {

    var get_in_touch_btn = document.getElementById('get_in_touch_btn');    /*Finds the id*/
    var explore_me_btn = document.getElementById('explore_me_btn');

    get_in_touch_btn.addEventListener('mouseover', () => {
        explore_me_btn.style.backgroundColor = 'white';
        explore_me_btn.style.color = '#512DCD';
    })

    get_in_touch_btn.addEventListener('mouseout', () => {
        explore_me_btn.style.backgroundColor = '';
        explore_me_btn.style.color = '';
    })

    explore_me_btn.addEventListener('mouseover', () => {
        get_in_touch_btn.style.backgroundColor = 'transparent';
        get_in_touch_btn.style.color = 'white';
        get_in_touch_btn.style.border = '1px solid white';
    })

    explore_me_btn.addEventListener('mouseout', () => {
        get_in_touch_btn.style.backgroundColor = '';
        get_in_touch_btn.style.color = '';
        get_in_touch_btn.style.border = '';
    })
})

function myFunction() {
    var showNav = document.querySelector('header nav');
    if (showNav.style.display === "block") {
        showNav.style.display = "none";
    } else {
        showNav.style.display = "block";
    }
}

// window.addEventListener('resize', function () {

//     var navigation = document.querySelector('header nav');        /*Finds the specific element*/

//     if (window.innerWidth <= 600) {
//         navigation.style.display = 'none';
//     } else {
//         navigation.style.display = '';
//     }

// })