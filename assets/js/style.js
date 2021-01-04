var header = document.getElementById('header');
var menu = document.getElementById('menu');
const headerHeith = header.clientHeight;

function actionEven() {
    var isClose = header.clientHeight === headerHeith;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

var itemMenus = document.querySelectorAll('#nav li a[href*="#"]');
for (let i = 0; i < itemMenus.length; i++) {
    var itemMenu = itemMenus[i];

    itemMenu.onclick = function(event) {
        var isParentSub = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentSub) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}