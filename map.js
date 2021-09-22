var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-3.1739470098901745, 51.438302382645475]),
      zoom: 17
    })
});
var layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([-3.1739470098901745, 51.438302382645475]))
          })]
      })
});
map.addLayer(layer);
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');
var overlay = new ol.Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: {
        duration: 250
    }
});
map.addOverlay(overlay);
closer.onclick = function() {
    overlay.setPosition(undefined);
    closer.blur();
    return false;
};
map.on('singleclick', function (event) {
    if (map.hasFeatureAtPixel(event.pixel) === true) {
        var coordinate = event.coordinate;
        content.innerHTML = '<b style="color: #349c9d">Pro Health and Nutrition</b>';
        overlay.setPosition(coordinate);
    } else {
        overlay.setPosition(undefined);
        closer.blur();
    }
});
content.innerHTML = '<b style="color: #349c9d">Pro Health and Nutrition</b>';
overlay.setPosition(ol.proj.fromLonLat([-3.1739470098901745, 51.438302382645475]));