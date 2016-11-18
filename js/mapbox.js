console.log("mapbox.js ready to roll!")
mapboxgl.accessToken = 'pk.eyJ1IjoiYWZzYXJhIiwiYSI6ImNpdmRueGlmeDAwNzAyeXA0am9qNXZ3MHcifQ.CxD5dyIcriQ1Ct3s9ez1Tw'
var map = new mapboxgl.Map(
{
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mapbox/light-v9',
  // initial position in [long, lat] format
  center: [0.005353, 51.501597],
  // initial zoom
  zoom: 10
})

var markers = [] 

function wipeMarkers()
{
  for (var i = 0; i < markers.length; i++) 
  {
    var marker = markers[i]
    marker.remove()
  }
}
function addMarkers(dataList) 
{
  // first wipe previous markers
  wipeMarkers()
  // then add new ones
  for (var i = 0; i < dataList.length; i++) 
  {
    // store the current data item in a variable
    var dataItem = dataList[i]
    // extract the data item coordinates
    var coordinates = new mapboxgl.LngLat( dataItem.longitude, dataItem.latitude)
    // create a div element for the marker
    var div = document.createElement('div')
    // add a class called 'marker' to the div
    div.className = 'marker'
    // create the custom marker
    var marker = new mapboxgl.Marker(div)
      .setLngLat(coordinates) // set the marker position
      .addTo(map) // add the marker to map
    // add the marker to the list
    markers.push(marker)  
  }
}