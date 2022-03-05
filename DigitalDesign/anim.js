// window.scroll = function() {
//     let scrollElem = document.getElementById('scrollTop');
//     console.log('scrollTop');
//     if (document.body.scrollTop > document.documentElement.clientHeight) {
//         scrollElem.style.opacity = '1';
//     } else {
//         scrollElem.style.opacity = '0';
//     }
// };

// let timeOut;

// function goUp() {
//     let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

//     if (top > 0) {
//         window.scrollBy(0, -100);
//         timeOut = setTimeout('goUp()', 20)
//     } else clearTimeout(timeOut);

// }