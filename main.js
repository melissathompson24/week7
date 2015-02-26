var searchUrl = 'http://api.bing.net/qson.aspx?Query=';


// Keyup event listener to send AJAX request to Bing
$('input').on('keyup', function (evt) {	
	getSearchResults($(this).val());
}); 




function getSearchResults(query) {
	//put parameters here from API specs page
	var q = query
	var url = encodeURI(searchUrl  
		+ query
		+'&JsonType=callback&JsonCallback=?'
		// + '+Gd+7CMkT+CBOLT46UmpOMj9FWHCG0Gg8lTZYGJ0JKc'
		// + '&Sources=web'
		// + '&JsonType=callback&JsonCallback=?'
		)
	$.ajax({
		url: url,
		dataType: 'jsonp',			
	}).done(function(response){
		console.log(response.SearchSuggestion.Section);	
		render(response.SearchSuggestion.Section);
		function render(Section){
			var results = $('.results');
			results.empty();//clears the results each time a new query is sent.
			$.each(response.SearchSuggestion.Section, function(key, val){
				console.log(val);
				results.append( 
					+ '<div class = "searchResults">'
					+ '<div class = "subResults">'
					+ '<a href=" " class="searchLink">'
					+ val.Text
					+ '</a>'
					+ '</div>'
					+ '</div>'
					);
			})
		}

		var searchLink = function (){
			document.getElementByClassName('a.searchLink').onclick = function(){
			window.open(this.href, 'Search Result');
		}
	}
	})



	.fail(function(error){ 
		console.log(error); 
	})
}


//This one is outside the code, just for testing
		var searchLink = function (){
			document.getElementByClassName('a.searchLink').onclick = function(){
			window.open(this.href, 'Search Result');
			}
		}










/*function openNewWindow() {
$('a.searchLink').addEventListener('click', function (evt) {
            console.log('clicked');
            $(this).window.open('', 'Search Result');
        })
}
/*

/*
function createSearchResultsHTML (searchResult) {
	var searchString = '<div class="searchResult">'
	+ '<div class = "subResults">' 
	+ '<div class = "title">' 
	+ searchResult.Text
	+ '</div>'
	+ '</div>'
	+ '</div>';
	var searchEl = $(searchString);
	return searchEl;
}
*/





/*
function WriteResponse(results) {        
        var strResult = '<div>'; 
        var endResult = '</div>';       
        $.each(results, function (index, SearchSuggestion) {                        
            strResult += SearchSuggestion.Text ;
        });
        $('.searchResult').html(strResult);
    }
*/

/*
function render(results) {
$.getJSON(url, function(results) {
	var results[];
	$.each(results.SearchSuggestion.Section, function (key, value){
		items.push('div class=' + key + '>' + value + '</div>');
	});
	.appendTo("body");
});
}





function render(results) {
	var results = $('.results');
	results.empty();//clears the results each time a new query is sent.
	var title = results.SearchSuggestion;
	$.each(title, function(key, value){//$.each() is an alternative to using a for loop to iterate over all of the search results the apis has returned
		console.log(value);
		results.append(createSearchResultsHTML(results));//this will append/display the results into the html page
	});
}
*/

/*
function createSearchResultsHTML (searchResult) {
	var searchString = '<div class="searchResult">'
	+ '<div class = "subResults">' 
	+ '<div class = "title">' 
	+ searchResult.Text
	+ '</div>'
	+ '</div>'
	+ '</div>';
}
*/

