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
					'<div class = "searchResults">'
					+ '<div class = "subResults">'
					+ '<a href="http://www.bing.com" class="searchLink" target="_blank">'
					+ val.Text
					+ '</a>'
					+ '</div>'
					+ '</div>'
					);
			})
		}
	})



	.fail(function(error){ 
		console.log(error); 
	})
}


