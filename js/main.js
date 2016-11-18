// use jQuery to select the HMTL element we're going to manipulate
var HomeButtonGo = $('#home button')
var HomeDropdown = $('#home select')
var HomeSection = $('#home')
var ResultsSection = $('#results')
var resultsOL = $('#results ol')
var resultsToggleButton = $('#results .toggle')
var resultsServicesButton = $('#results .services')
var resultsMap = $('#map')
var ResultsBackButton = $('#results .back')
var detailsSection = $('#details')
var detailsInfo = $('#details #info')
var detailsBackButton = $('#details .back')


var chosenArea = null // empty at the beginning

//tell the button to do somehting when clicked
HomeButtonGo.click(function(){
    

    // 1. capture the chosen user option
    chosenArea = HomeDropdown.val()
    console.log("You picked " + chosenArea)
    
    // 2. filter+sort venues by chosenArea
    var resultsList = filterAndSortList(venuesList, "Area", chosenArea);
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
        ResultsSection.hide()
        detailsSection.show()
    })
    
    
    // 5. show the section
    HomeSection.hide()
    ResultsSection.show()  
    
})

//back button 
ResultsBackButton.click( function(){
    ResultsSection.hide()
    HomeSection.show()
})

//details back button
detailsBackButton.click( function(){
    detailsSection.hide()
    ResultsSection.show()       
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
    
    // filter+sort services by chosenArea
    var resultsList = filterAndSortList(servicesList, "Area", chosenArea);
    
    console.log(resultsList);
    
    addMarkers(resultsList, false, 'service')
})