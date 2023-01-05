function initMap() {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var userCoords = {lat, lng}
  
    const map = new google.maps.Map(document.getElementById("map"), {
        center: userCoords,
        zoom: 12,
        mapId: "ef72aeb76528498e",
      });

    new google.maps.Marker({
        map,
        icon: local_pharmacy,
        title: Mylocation,
        position: place.geometry.location,
      });
    }

window.initMap= initMap;