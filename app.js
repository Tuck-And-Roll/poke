jQuery(function($) {
    // Asynchronously Load the map API
    var script = document.createElement('script');
    script.src = "//maps.googleapis.com/maps/api/js?key=AIzaSyARGqvJ1ARG4Yegjer-J9Mgoss777YdMz4&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };

    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);

    // Multiple Markers
    var markers = [
        ['Pikachu', 45.447689, -122.876107],
        ['Snorlax', 45.522695, -122.675491],
        ['Charmander', 45.585855, -122.761453],
        ['Charmander', 45.587469, -122.762199],
        ['Charmander', 45.585855, -122.761454],
        ['Charmander', 45.588378, -122.762231],
        ['Charmander', 45.587232, -122.761684],
        ['Kabuto', 45.394342, -122.688974],
        ['Kabuto', 45.394712, -122.688753],
        ['Kabuto', 45.392932, -122.688818],
        ['Kabuto', 45.396516, -122.687975],
        ['Kabuto', 45.396611, -122.687269]
    ];

    // Info Window Content
    var infoWindowContent = [
      ['<div class="info_content">' +
      '<h3>Pikachu</h3>' +
      '<div><img src="img/Screenshot_2016-10-08-14-05-49.png"</div>' +
      '</div>'],

      ['<div class="info_content">' +
      '<h3>Snorlax</h3>' +
      '<div><img src="img/Screenshot_2016-10-17-07-22-49.png"</div>' +
      '</div>'],

      ['<div class="info_content">' +
      '<h3>Charmander</h3>' +
      '<div><img src="img/Screenshot_2016-10-21-09-17-13.png"</div>' +
      '</div>'],

      ['<div class="info_content">' +
      '<h3>Charmander</h3>' +
      '<div><img src="img/Screenshot_2016-10-22-10-14-37.png"</div>' +
      '</div>'],

      ['<div class="info_content">' +
      '<h3>Charmander</h3>' +
      '<div><img src="img/Screenshot_2016-10-22-10-18-13.png"</div>' +
      '</div>'],

      ['<div class="info_content">' +
      '<h3>Charmander</h3>' +
      '<div><img src="img/Screenshot_2016-10-22-10-36-06.png"</div>' +
      '</div>'],

      ['<div class="info_content">' +
      '<h3>Charmander</h3>' +
      '<div><img src="img/Screenshot_2016-10-23-08-07-18.png"</div>' +
      '</div>'],

      ['<div class="info_content">' +
      '<h3>Kabuto</h3>' +
      '<div><img src="img/Screenshot_2016-10-29-09-21-49.png"</div>' +
      '</div>'],

      ['<div class="info_content">' +
      '<h3>Kabuto</h3>' +
      '<div><img src="img/Screenshot_2016-10-29-10-06-37.png"</div>' +
      '</div>'],

      ['<div class="info_content">' +
      '<h3>Kabuto</h3>' +
      '<div><img src="img/Screenshot_2016-10-31-08-02-37.png"</div>' +
      '</div>'],

      ['<div class="info_content">' +
      '<h3>Kabuto</h3>' +
      '<div><img src="img/Screenshot_2016-10-31-08-29-34.png"</div>' +
      '</div>'],

      ['<div class="info_content">' +
      '<h3>Kabuto</h3>' +
      '<div><img src="img/Screenshot_2016-10-31-08-31-33.png"</div>' +
      '</div>']
    ];

    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;

    // Loop through our array of markers & place each one on the map
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });

        // Allow each marker to have an info window
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(12);
        google.maps.event.removeListener(boundsListener);
    });

}
