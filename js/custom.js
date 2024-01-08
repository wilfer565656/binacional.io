
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


  function enviarEmail() {
    var name = document.getElementById('contact-name').value;
    var email = document.getElementById('contact-email').value;
    var company = document.getElementById('contact-company').value;
    var message = document.getElementById('contact-message').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'fundacionhiphopipiales@gmail.com', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            if (json.status === 'success') {
                alert('Correo electrónico enviado correctamente');
            } else {
                alert('Ocurrió un error al enviar el correo electrónico');
            }
        }
    };

    var data = JSON.stringify({
        'name': name,
        'email': email,
        'company': company,
        'message': message
    });

    xhr.send(data);
}