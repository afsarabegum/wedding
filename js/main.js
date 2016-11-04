// use jQuery to select the HMTL element we're going to manipulate
var HomeButtonGo = $('#home button');
var HomeDropdown = $('#home select')
var HomeSection = $('#home')
var ResultsSection = $('#results')
var resultsOL = $('#results ol')
var ResultsBackButton = $('#results .back')
var detailsSection = $('#details')
var detailsInfo = $('#details #info')
var detailsBackButton = $('#details .back')

//tell the button to do somehting when clicked
HomeButtonGo.click(function(){
    

    // 1. capture the chosen user option
    var chosenOption = HomeDropdown.val()
    console.log("You picked" + chosenOption)
    
    // 2. filter+sort people by user selection
    var resultsList = filterAndSortList(peopleList, chosenOption);
    console.log(resultsList);
    
    // 3. show the results in the #results section
    showList(resultsList, resultsOL);
    
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