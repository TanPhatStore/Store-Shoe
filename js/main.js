var cate = document.querySelector('.cate')
var mobile_nav = document.querySelector('.nav-mobile')
var content = document.querySelector('.content');
var i = 0;
cate.addEventListener('click', e => {
    if (i == 0) {
        mobile_nav.style.marginLeft = '0px';
        content.style.opacity = '0.4';
        i = 1;
    } else {
        mobile_nav.style.marginLeft = '-300px';
        content.style.opacity = '1';
        i = 0;
    }
})

content.addEventListener('click', e => {
    if (1 == 1) {
        mobile_nav.style.marginLeft = '-300px';
        content.style.opacity = '1';
        i = 0;
    }
})