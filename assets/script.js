$(document).ready( () => {
  //listening for saveBtn click
  $('.saveBtn-1').on('click', () => {
    //grabbing sibling and parent values of each hour
    var script = $(this).siblings('.description').val();
    var hours = $(this).parent().attr('id');

    //localStorage save
    localStorage.setItem(time, value);

    // This is displaying that the note has been saved after the save btn is clicked
    $('.noti-1').addClass('show');

    // This is removing the displayed notification text
    setTimeout(function () {
      $('.noti-1').removeClass('show');
    }, 3000);
  });


  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();

    // loop over time blocks
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  hourUpdater();

  // set up interval to check if current time needs to be updated
  var interval = setInterval(hourUpdater, 15000);

  // load any saved data from localStorage
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
  // display current day on page
  $('#currentDay').text(moment().format('dddd, MMMM Do'));
});
