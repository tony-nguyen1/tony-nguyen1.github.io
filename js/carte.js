document.body.onload = function() { //pour qu'il s'active quand la page est chargé...
  var mymap = L.map('mapid').setView([43.224712, 2.334182], 14);
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

  /*var marker = L.marker([43.224712, 2.34]).addTo(mymap);
  marker.bindPopup("<b>Printemps d'Asie!</b><br>C'est ici que nous sommes.<br>142 avenue Franklin Roosevelt 11 000 Carcassonne ").on('click', function () {console.log("click"); });*/

  //Recovering .geojson data from my published dataset on maptiler
  let customDataSet = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { //when retrieving done
      console.log("... downloading map data complete");
      customDataSet = JSON.parse(this.responseText); //String -> Object
      //console.log(customDataSet);
      //console.log("Json parsed data is: " + JSON.stringify(customDataSet));
      addGeojson(customDataSet, mymap);
      let layerRestoMarqueur = allMyLayers[0];
      allMyLayers[0].openPopup();
      //console.log(layerRestoMarqueur);
    }
  };
  xmlhttp.open("GET", "https://api.maptiler.com/data/ff436eb4-f589-433d-851a-b3816d8054f1/features.json?key=wYI2lL6OONG2s7XbPT2J", true);
  xmlhttp.send();

  function addGeojson(someData, aMap) {
    console.log("...adding features on map");
    L.geoJSON(someData, {
      style: function(feature) {
        switch (feature.geometry.type) {
          case 'Polygon':
            return {
              color: "#ff0000"
            };
          case 'LineString':
            return {
              color: "#0000ff"
            };
        }
      },
      onEachFeature: onEachFeature
    }) /*.bindPopup(console.log("ok"))*/ .addTo(aMap);
  };

  //Je doit faire attention à bien Publier mon jeu de donnée sur maptiler.com
  function onEachFeature(feature, layer) { //feature is geojson and layer is a leaflet object
    // does this feature have a property named popupContent?
    let string = feature.properties.name;
    if (feature.properties && feature.properties.popupContent) {
      string = feature.properties.popupContent;
    }
    if (feature.properties.name === "Printemps d'Asie") {
      layer.bindPopup(string).openPopup();
      //console.log("here");
    } else {
      layer.bindPopup(string);
    }
    allMyLayers.push(layer);
  }
};
const allMyLayers = [];
