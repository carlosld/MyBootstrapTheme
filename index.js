$(document).ready(function () {

  $('#sidebarCollapse').on('click', function () {
    if ($('#sidebar').hasClass('active')) {
      $('#sidebar').removeClass('active');
      $('#content').removeClass('active');
      $('.overlay').removeClass('active');
    } 
    else {
      $('#sidebar').addClass('active');
      $('#content').addClass('active');
      $('.overlay').addClass('active');
    }

  });

  $('.overlay').on('click', function () {
    $('#sidebar').removeClass('active');
    $('.overlay').removeClass('active');
  });

});