var active=".active",
    id="#info",
    btn=".js-btn",
    content = ".js-content";

var accordion = function() {
  $(id).on('click',btn,function() {
      closeAccordion();
      openAccordion($(this));
  });
};
var openAccordion = function(btn) {
    var info = btn.data('info');
    btn.addClass(active).addClass('content__btn--active').addClass("bottom");
    $('#'+info).show();
};

var closeAccordion = function() {
    $(id).find(btn).removeClass(active).removeClass('content__btn--active').removeClass('bottom');
    $(id).find(content).hide();
}

// Variables for desktop design
accordion();





// var accordion = function(opts) {
//     var config = {
//         active : ".active",
//         id : "#info",
//         btn : ".js-btn",
//         content : ".js-content"
//     },
//
//     c = $.extend(config,opts),
//
//     init = function() {
//         console.log(c);
//         btnClick();
//     },
//
//     btnClick = function() {
//         $(c.id).on('click',c.btn,function() {
//             accordionClose();
//             accordionOpen($(this));
//         });
//     },
//
//     accordionOpen = function(btn) {
//         var info = btn.data('info');
//         btn.addClass(c.active);
//         $('#'+info).show();
//     },
//
//     accordionClose = function() {
//         $(c.id).find(c.btn).removeClass(c.active);
//         $(c.id).find(c.content).hide();
//     };
//
//     return {
//         init : init,
//         close : accordionClose
//     }
// };
//
// var newAccordion = accordion({
//     btn : '.js-whaaat'
// });
// newAccordion.init();
