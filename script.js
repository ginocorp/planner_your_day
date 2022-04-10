$(document).ready( () => {
  //listening for saveBtn click
  $('.saveBtn-1').on('click', () => {
    //grabbing sibling and parent values of each hour
    var script = $(this).siblings('.text').val();
    var hours = $(this).parent().attr('id');

    //localStorage save
    localStorage.setItem(hours, script);

    //This is displaying that the note has been saved after the save btn is clicked
    $('.noti-1').addClass('show');

    //This is removing the displayed notification text
    setTimeout(function () {
      $('.noti-1').removeClass('show');
    }, 3000);
  });

  $('.saveBtn-2').on('click', () => {
    var script = $(this).siblings('.text').val();
    var hours = $(this).parent().attr('id');

    localStorage.setItem(hours, script);

    $('.noti-2').addClass('show');

    setTimeout(function () {
      $('.noti-2').removeClass('show');
    }, 3000);
  });


  function updateHour() {
    var currentHour = moment().hours();

    $('.hour-block').each(function () {
      var thisHour = parseInt($(this).attr('id').split('-')[1]);

      if (thisHour < currentHour) {
        $(this).addClass('past');
      } else if (thisHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  updateHour();

  //interval setup to update hour
  var interval = setInterval(updateHour, 15000);

  //data load form local storage
  $('#hour-8 .text').val(localStorage.getItem('hour-8'));
  $('#hour-8 .text').val(localStorage.getItem('hour-8'));
  $('#hour-10 .text').val(localStorage.getItem('hour-10'));
  $('#hour-11 .text').val(localStorage.getItem('hour-11'));
  $('#hour-12 .text').val(localStorage.getItem('hour-12'));
  $('#hour-13 .text').val(localStorage.getItem('hour-13'));
  $('#hour-14 .text').val(localStorage.getItem('hour-14'));
  $('#hour-15 .text').val(localStorage.getItem('hour-15'));
  $('#hour-16 .text').val(localStorage.getItem('hour-16'));
  $('#hour-17 .text').val(localStorage.getItem('hour-17'));
  
  //displays current day on page
  $('#todaysDate').text(moment().format('dddd, MMMM Do YYYY'));
});
