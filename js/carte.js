document.body.onload = function () { //pour qu'il s'active quand la page est chargé...
  var mymap = L.map('mapid').setView([43.224712, 2.334182], 17);
  //43.224712, 2.334182
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
  }).addTo(mymap);

  var marker = L.marker([43.224712, 2.334182]).addTo(mymap);
  marker.bindPopup("<b>Printemps d'Asie!</b><br>C'est ici que nous sommes.<br>142 avenue Franklin Roosevelt 11 000 Carcassonne ").openPopup();
};
