function createMapMarker() {
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoibWljaGFsc2tyenluc2tpIiwiYSI6ImNqOG9wZnFoMjA2OW4ycXVtbG16c2VtM24ifQ.qMYt5Ps5EBb6Na88-9P-bA';

  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.091542, 42.358862],
    zoom: 12,
  });

    const marker = new mapboxgl.Marker()
    .setLngLat([-71.091542, 42.358862])
    .addTo(map);
}

// Do not edit the code below
window.onload = () => {
  createMapMarker();

};

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { createMapMarker };
}
