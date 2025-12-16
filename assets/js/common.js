// 공통 기능
const $allMenu = document.querySelector('#header .all-menu');
const $allClose = document.querySelector('.site-map .all-close');
const $siteMap = document.querySelector('.site-map');

$allMenu.addEventListener('click', () => {
    $siteMap.classList.add('on');
});
$allClose.addEventListener('click', () => {
    $siteMap.classList.remove('on');
});
