document.addEventListener('DOMContentLoaded', function () {

    const button = document.querySelector('.menu');
    const navigation = document.querySelector('#navigation');
    // const body = document.querySelector(':not(.active), :not(.menu)');

    var mobile = window.matchMedia('screen and (max-width: 980px)');
    console.log(mobile);

    mobile.addListener(function (p) {
    });

    button.addEventListener('click', function (e) {
        e.stopPropagation();
        console.log('hi');
        navigation.classList.toggle('active-menu');
        button.classList.toggle('menu-active');
    })

    document.addEventListener('click', function (e) {
        console.dir('hi2');
        if (e.target.classList.contains('active-menu') || e.target.classList.contains('menu-active')) {

        } else {
            navigation.classList.remove('active-menu');
            button.classList.remove('menu-active');
        }


    })


    // body.addEventListener('click', function() {
    //     navigation.classList.remove('active-menu')
    // })


})