var map, marker, marker2, marker3;

function initMap() {
  var bLatitude = 45.408852;
  var bLongitude = -75.756242;
  var bateLatLng = {lat: bLatitude, lng: bLongitude};

  var rLatitude = 45.417721;
  var rLongitude = -75.743110;
  var sewerLatLng = {lat: rLatitude, lng: rLongitude};

  var oLatitude = 45.410171;
  var oLongitude = -75.745505;
  var dessertLatLng = {lat: oLatitude, lng: oLongitude}

  map = new google.maps.Map(document.querySelector('#map'), {
    center: {lat: 45.425078, lng: -75.746514},
    zoom: 13
  });

  var contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Bate Island</h1>'+
  '<div id="bodyContent">'+
  '<img src="Images/bateIsland.jpg" class="popUpImg" />' +
   '<p>Bate Island wave, also referred to as the Champlain Bridge wave is an experts’ only wave. It is one of larger waves surfers can use in Ottawa, and was the one used in the 2016 Ottawa River Surf Jam .</p>'+
  '</div>'+
  '</div>';

  var contentString2 = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Sewer Wave</h1>'+
  '<div id="bodyContent">'+
  '<img src="Images/sewerWave.jpg" class="popUpImg" />' +
  '<p> The sewer wave is formed by a sewage drain near the Gatineau shore. It is the easiest of the waves, also the easiest to reach being the closest to the shore. This is typically for the beginners. </p>' +
  '</div>'+
  '</div>';

  var contentString3 = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Dessert Wave</h1>'+
  '<div id="bodyContent">'+
  '<img src="Images/remicrapids.jpg" class="popUpImg" />' +
   '<p>The desert wave, also known as “dessert wave” is formed by the rolling rapids that form off of Bate Island. This is known as an intermediate wave, but a difficult one to reach being further out into the river. </p>'+
  '</div>'+
  '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 300
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
    maxWidth: 300
  });

  var infowindow3 = new google.maps.InfoWindow({
    content: contentString3,
    maxWidth: 300
  });

  marker = new google.maps.Marker({
    position: bateLatLng,
    map: map,
    title: 'Bate Island'
  });

  marker.addListener('mouseover', function() {
    infowindow.open(map, this);
  });

  marker.addListener('mouseout', function() {
      infowindow.close();
  });

  marker2 = new google.maps.Marker({
      position: sewerLatLng,
      map: map,
      title: 'Sewer Wave'
  });

  marker2.addListener('mouseover', function() {
    infowindow2.open(map, this);
  });

  marker2.addListener('mouseout', function() {
      infowindow2.close();
  });

  marker3 = new google.maps.Marker({
      position: dessertLatLng,
      map: map,
      title: 'Dessert Wave'
  });
  
  marker3.addListener('mouseover', function() {
    infowindow3.open(map, this);
  });

  marker3.addListener('mouseout', function() {
      infowindow3.close();
  });
}