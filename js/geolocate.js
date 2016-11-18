console.log("geolocate.js ready to roll!")

if (navigator.geolocation) //if gEOLOCATION IS SUPPORTED BY YOUR BROWSER
{
    navigator.geolocation.watchPosition(showPosition)
}

var userMarker = null //user marker 

function showPosition(position)
{
    console.log(position)
    
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    
    //create a new mapbox lnglat object
    var coordinates = new mapboxgl.LngLat(longitude,latitude)
    
    //create marker
    if(!userMarker)
        {
            var div = document.createElement('div')
    // add a class called 'marker' to the div
    div.className = 'marker user'
    // create the custom marker
    userMarker = new mapboxgl.Marker(div)
      .setLngLat(coordinates) // set the marker position
      .addTo(map) // add the marker to map
        }
    else
        {
            userMarker.setLngLat(coordinates)
        }
}
