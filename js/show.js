function makeListItemHTML (data, index) 
{
  /*
    This function creates some nice HTML around data for the #home section
    Return something like this:
    <li>
        <img src="https://ma.tteo.me/assets/surprise.png">
        <h2>Matteo</h2>
    </li>
  */

  // li = List Item
  var li  = '<li id="' + index + '">'
  + '<h2>' + data.name + '</h2>'
  + '<img src="' + data.image + '">' 
  + '</li>'

  return li;        
}

function makeDetailsHTML (data) 
{
  /*
    This function creates some nice HTML around data for the #details section
    Return something like this:
    <h2>Matteo</h2>
    <img src="https://ma.tteo.me/assets/surprise.png">
    <p>I teach people aged 6 to 60+ how to be creative with code.
    </p>
    <a class="contact button">Contact Matteo</a>
    ="_blank" -----> open link in new tab 
  */

  var html = '<h2>' + data.name  + '</h2>' 
  + '<img src="' + data.image + '">' 
  + '<p>' + data.about + '</p>'
  + '<p>' + data.capacity + '</p>'
  + '<a href ="' +data.website + '" class="Open Website button" target=”_blank”>Open Website</a>'
  

  return html;        
}

function showDetails (data, interfaceElement) 
{
  var detailsHTML = makeDetailsHTML(data)
  interfaceElement.html(detailsHTML)
}



function showList (dataList, interfaceList) 
{
    // update the ul content with the result of makeListHTML(list)
    // .html() is a jQuery function
    interfaceList.html( makeListHTML(dataList) ); 
}

function showDetails (data, interfaceElement) 
{
  var detailsHTML = makeDetailsHTML(data)
  interfaceElement.html(detailsHTML)
}

function makeListHTML (list) 
{
  var html = ''; // empty for now, we'll add HTML as we loop through the list 
  var total = list.length;

  // loop through list
  var counter = 0;
  while (counter < total) 
  {
    var data = list[counter];
    var li = makeListItemHTML(data, counter);
    
    // add the list item to the html
    html += li;
    
    // update the counter, to avoid infinite loops!
    counter = counter + 1;
  }
  return html;
}

