$(function(){

    $('#search-term').submit(function(event){
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm);
    });

    function getRequest(searchTerm){
        var params = {
            part: 'snippet',
            key: "AIzaSyA2Xlg-R3yRjAHGmi8s6TaAj_SHLck7skI",
            q: searchTerm
        };
        url = 'https://www.googleapis.com/youtube/v3/search';

        $.getJSON(url, params, function(data){
            showResults(data);
        });
    }

    function showResults(results) {
        var html = '<p>RESULTS</p><br>';
        $.each(results.items, function(index,value){
            var defaultLink = 'https://www.youtube.com/watch?v=';
            var vidPointer = value.id.videoId;
            var vidLink = defaultLink.concat(vidPointer);
            html += '<p>' + value.snippet.title + ':</p><br>' +
                '<a href=' + vidLink + '><img src=' + value.snippet.thumbnails.medium.url +
                ' class="thumbnail" alt="thumbnail"></a><br><br>';
            console.log(value.snippet.title);

        });
        $('#search-results').html(html);
    }

});