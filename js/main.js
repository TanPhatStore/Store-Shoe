var cate = document.querySelector('.cate')
var mobile_nav = document.querySelector('.nav-mobile')
var i = 0;
cate.addEventListener('click', e => {
    if (i == 0) {
        mobile_nav.style.marginLeft = '0px';
        i = 1;
    } else {
        mobile_nav.style.marginLeft = '-300px';
        i = 0;
    }
})