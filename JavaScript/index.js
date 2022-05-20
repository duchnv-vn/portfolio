// Initialize and add the map
function initMap() {
    // The location of Banking university
    const BULocation = { lat: 10.859329132433125, lng: 106.76611148658513 };
    // The map, centered at Banking university
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: BULocation,
    });
    // The marker, positioned at Banking university
    const marker = new google.maps.Marker({
      position: BULocation,
      map: map,
    });
  }
  
  window.initMap = initMap;
  