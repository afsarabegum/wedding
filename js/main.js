// use jQuery to select the HMTL element we're going to manipulate
var HomeButtonGo = $('#home button');
var areaDropdown = $('#area');
var priceDropdown = $('#price');
var HomeSection = $('#home');
var resultsSection = $('#results');
var resultsOL = $('#results ol');
var resultsToggleButton = $('#results .toggle');
var resultsMap = $('#map');
var ResultsBackButton = $('#results .back');
var resultsServicesButton = $('#results .services');
var detailsSection = $('#details');
var detailsInfo = $('#details #info');
var detailsBackButton = $('#details .back');


var resultsList = []
var servicesList = []

//tell the button to do somehting when clicked
HomeButtonGo.click( function(){
    

    // 1. capture the chosen user option
    var chosenArea = areaDropdown.val()
    var chosenPrice = priceDropdown.val()
    console.log("You picked " + chosenArea + " and " + chosenPrice)
    
    var filters = 
    [ 
        {
            // chosenArea is a string, so we need a value
            key: 'Area',
            value: chosenArea
        },
        {
            // chosenPrice is a number so you don't need a value
            key: 'pricey',
            value: chosenPrice
        }
    ]
    
    // 2. filter+sort venues by chosenArea
    resultsList = filterAndSortList(venuesList, filters);
    console.log(resultsList);
    
    // 3. show the results in the #results section
    showList(resultsList, resultsOL);
    addMarkers(resultsList, true, 'venue')
    
    // 4. what happens when you click a result?
    $('#results li').click( function() {
        // grab the id from the clicked item
        var resultId = $(this).attr('id')
        // use the id to get the right data
        var resultData = resultsList[resultId]
        console.log(resultData)
        // call the function showDetails()
        showDetails(resultData, detailsInfo)
        // show the details!
        resultsSection.hide()
        detailsSection.show()
    })
    
    //make the title suit what area you choose
    //if venue result is more than 1 = venues
    //if its less than 1 it = venue
    if (resultsList.length > 1) var v = ' venues in '
    else var v = ' venue in '
    $('#results h1').html(resultsList.length + v + $('#area option:selected').text())
    
    // 5. show the section)
    HomeSection.hide()
    resultsSection.show()  
    
})

//back button 
ResultsBackButton.click( function(){
    resultsSection.hide()
    HomeSection.show()
})

//details back button
detailsBackButton.click( function(){
    detailsSection.hide()
    resultsSection.show()       
})

resultsToggleButton.click( function(){
    console.log('clicked resultsToggleButton')
    //find out which element is currently visible
    var listDisplay = resultsOL.css('display')
    if(listDisplay == 'block') isListVisible = true
    else isListVisible = false
    
    //if the list is visibile
    if (isListVisible)
        {
            //we want to show the map
            resultsMap.show()
            map.resize()
            resultsOL.hide()
            
        }
    else
        {
            //we want to show the list
            resultsOL.show()
            resultsMap.hide()
        }

})

resultsServicesButton.click( function()
{
    console.log('clicked resultsServicesButton')
    var servicesFilters = 
        [
            {
                key:"Area",
                value:chosenArea
            }
        ]
    var chosenArea = areaDropdown.val()
    // filter+sort services by chosenArea
    
    resultsList = filterAndSortList(servicesList, servicesFilters);
    console.log(servicesList)
    
    addMarkers(resultsList, false, 'service')
})