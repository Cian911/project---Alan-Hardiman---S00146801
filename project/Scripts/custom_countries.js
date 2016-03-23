$(document).ready(function () {

  $.getJSON("https://restcountries.eu/rest/v1/all", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      var color = generate_random_colors();
      items.push("<li id=" + key + " data-value=" + data[key].name + " style='background:" + color + "'>" + data[key].name + "</li>");
    });

    $("<ul>", {
      "class": "country-list",
      "id": "country-list",
      html: items.join("")
    }).appendTo(".section-body");

  });

  // Wait for Ajax data to load in
  setTimeout(function() {
    $('#country-list > li').click(function () {

      var name = $(this).attr('data-value')
      $('.modal-title').text(name);

      // Run Second call based on Country clicked
      $.getJSON('https://restcountries.eu/rest/v1/name/' + name, function( data ) {
        var items = [];

        items.push("<label>Captial: </label><li id='capital'>" + data[0].capital + "</li>");
        items.push("<label>Region: </label><li id='region'>" + data[0].region + "</li>");
        items.push("<label>Population: </label><li id='population'>" + data[0].population + "</li>");

        // Remove previous country data
        $('#country-data').remove();

        $("<ul>", {
          "class": "country-data",
          "id": "country-data",
          html: items.join("")
        }).appendTo(".modal-body");
      });

      $('#myModal').modal('show'); 
    });
  }, 2000);

  function generate_random_colors() {
    var letters = "0123456789ABCDEF".split('');
    var color = "#";

    for( var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

});