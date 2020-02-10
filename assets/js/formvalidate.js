$(function () { 
    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
      submitSuccess: function ($form, event) {
        event.preventDefault();
        var myname = $('#name').val();
        var myemail = $('#email').val();
        var myphone = $('#phone').val();
        var mymessage = $('#message').val();
        $.post("/contactus/", {name: myname, email: myemail, phone: myphone, message: mymessage}, function(result) {
            $('#contactUs').slideUp();
            $('#contactUs').html('<h3 class="section-heading text-center">' + result.message + '</h3>');
            $('#contactUs').slideDown();
        });
      }
    }); 
  });