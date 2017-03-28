var map, marker, marker2, marker3;

function initMap() {
  var bLatitude = 45.408852;
  var bLongitude = -75.756242;
  var bateLatLng = {lat: bLatitude, lng: bLongitude};

  var rLatitude = 45.419772;
  var rLongitude = -75.737663;
  var remicRapidsLatLng = {lat: rLatitude, lng: rLongitude};
  var oLatitude = 45.410171;
  var oLongitude = -75.745505;
  var otherSurfing = {lat: oLatitude, lng: oLongitude}

  map = new google.maps.Map(document.querySelector('#map'), {
    center: {lat: 45.415078, lng: -75.746514},
    zoom: 14
  });

  var contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Bate Island</h1>'+
  '<div id="bodyContent">'+
  '<img src="Images/bateIsland.jpg" class="popUpImg" />' +
   '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia tortor at ipsum ultrices luctus vitae eu massa. Ut felis ante, vestibulum sit amet purus et, tincidunt consequat massa. Donec eleifend vel neque sed eleifend. Duis tincidunt gravida purus, sed hendrerit dolor ornare eu. Donec fermentum et orci ac consectetur. Nullam consequat dui et eleifend scelerisque. Vivamus mattis lectus vitae justo blandit accumsan. Duis vel massa blandit, cursus arcu vitae, sagittis metus.</p>'+
  '</div>'+
  '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker = new google.maps.Marker({
    position: bateLatLng,
    map: map,
    title: 'Bate Island'
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  marker2 = new google.maps.Marker({
      position: remicRapidsLatLng,
      map: map,
      title: 'Remic Rapids'
  });

  marker2.addListener('click', function() {
    alert("Remic Rapids");
  });

  marker3 = new google.maps.Marker({
      position: otherSurfing,
      map: map,
      title: 'Other'
  });
  
  marker3.addListener('click', function() {
    alert("Other");
  });
}