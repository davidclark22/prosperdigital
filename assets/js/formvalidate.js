// Example starter JavaScript for disabling form submissions if there are invalid fields

// add div class invalid-feedback or valid-feedback or both
// form must have  class="needs-validation" novalidate

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else {
          $('form .btn').html('<i class="fas fa-circle-notch fa-spin"></i>');
          $("form .btn").attr('disabled', true);
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();