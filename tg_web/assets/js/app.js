'use strict';var _0x4e0d=['timeline','676044Varurj','911333qMuAoi','823443BzHxoC','960132HtwiFC','701HOTnLk','.first','fromTo','649529kwKlSv','1409UizaFs','1hDQGyK','586288DJzddd','1seoMNw','easeOut','1pMmOZx','.last'];function _0x1cd7(_0x223530,_0xef62e9){_0x223530=_0x223530-0x17a;var _0x4e0df4=_0x4e0d[_0x223530];return _0x4e0df4;}(function(_0x43027a,_0x560fde){var _0x468321=_0x1cd7;while(!![]){try{var _0x92d45c=parseInt(_0x468321(0x180))+parseInt(_0x468321(0x189))*-parseInt(_0x468321(0x182))+-parseInt(_0x468321(0x187))*parseInt(_0x468321(0x17b))+-parseInt(_0x468321(0x184))*parseInt(_0x468321(0x188))+parseInt(_0x468321(0x181))*parseInt(_0x468321(0x17d))+parseInt(_0x468321(0x17a))+parseInt(_0x468321(0x183));if(_0x92d45c===_0x560fde)break;else _0x43027a['push'](_0x43027a['shift']());}catch(_0x7e1010){_0x43027a['push'](_0x43027a['shift']());}}}(_0x4e0d,0xa455c));document['addEventListener']('DOMContentLoaded',function(){var _0x4ccc35=_0x1cd7,_0x271c9f,_0x110e0b;_0x271c9f=gsap[_0x4ccc35(0x17f)](),_0x110e0b=gsap[_0x4ccc35(0x17f)](),_0x271c9f[_0x4ccc35(0x186)](_0x4ccc35(0x185),{'x':-0x3e8,'opacity':0x0,'scale':0.5},{'duration':0.4,'x':0x0,'opacity':0x1,'scale':0x1,'ease':Power0['easeOut']},0.3),_0x110e0b[_0x4ccc35(0x186)](_0x4ccc35(0x17e),{'x':0x3e8,'opacity':0x0,'scale':0.5},{'duration':0.4,'x':0x0,'opacity':0x1,'scale':0x1,'ease':Power0[_0x4ccc35(0x17c)]},0.3);});
/*inspiration 
https://dribbble.com/shots/2005226-Yet-Another-Pricing-Table
*/

const cards = document.querySelectorAll(".pricing-card");
cards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cards.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});
