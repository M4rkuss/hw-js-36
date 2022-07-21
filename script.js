$(() => {
  $('form button').click(function (e) {
    e.preventDefault();
    let city = $('form input').val();
    let date = new Date();
    $.ajax(`http://api.weatherstack.com/current?access_key=16ba186f2a8d50c2d56f968b7f045dd2&query=${city}`, {
      url: `http://api.weatherstack.com/current?access_key=16ba186f2a8d50c2d56f968b7f045dd2&query=${city}`,
      data: $('form button').serialize(),
      type: "POST",
      success: function (data) {
        $('.weather-wrap h3').text(data.request.query);
        $('#temp').html(data.current.temperature + `<span>°C</span>`);
        $('#tempFeel').text(data.current.feelslike);
        $('.weather-wrap img').attr('src', "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png");
        $('#date').text(date.toLocaleDateString() + " " + date.toLocaleTimeString());
        $('#wind').text(data.current.wind_speed + " kph");
        $('#precip').text(data.current.precip + " mm");
        $('#presure').text(data.current.pressure + " mb");
      },
      fail: function () {
        console.log('fail');
      }
    })
  })
});