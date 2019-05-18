
document.addEventListener('DOMContentLoaded', function() {

    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');

    modalButtons.forEach(function(item){
        item.addEventListener('click', function(e) {
            e.preventDefault();
            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal-block[data-modal="' + modalId + '"]');

            modalElem.classList.add('active');
            overlay.classList.add('active');
        });
    });
    // end modalButton


    closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal-block');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

    });
    // end closeButton

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal-block.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);

    overlay.addEventListener('click', function() {
        document.querySelector('.modal-block.active').classList.remove('active');
        this.classList.remove('active');
    });

});