var teenShows = ["Dawson's Creek", "Buffy the Vampire Slayer", "Party of Five", "Pretty Little Liars", "Sabrina the Teenage Witch", "Gilmore Girls", "Gossip Girl", "Glee", "Friday Night Lights", "The O.C.", "Freeks and Geeks", "Daria"];
var button;
var gifImage;

function makeMovie(title) {
  button = $('<button class="show-button" data-title="' + title + '">').text(title);
  // button.addClass('show-button');
  $('#button-holder').append(button);
}

for (var i = 0; i < teenShows.length; i++) {
  console.log(teenShows)
    makeMovie(teenShows[i]);
}

$('#add-button').on('click', function () {
  var title = $('#button-text').val();
  console.log(title + "Submit")
  makeMovie(title);
})

$('body').on('click', ".show-button", function(event) {
$("#gifs-appear-here").html("");
var apikey = "pGzkld7EquWYklokNUQW2Dbnbbpinzs2"
movie = $(this).attr("data-title");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=" + apikey + "&limit=10";

console.log(queryURL)

$.ajax({
  url: queryURL,
  method: "GET"
})
  .then(function(response) {
  var results = response.data;

  for (var i = 0; i < results.length; i++) {
      var gifDiv = $('<div class="gif-class">');

      var rating = results[i].rating;

      var p = $("<p>").text("Rating: " + rating);

      gifImage = $('<img class="gif">');
      gifImage.attr("src", results[i].images.fixed_height_still.url);

      gifDiv.prepend(gifImage);
      gifDiv.prepend(p);

      $("#gifs-appear-here").append(gifDiv);
  }
});
});

$('body').on('click', '.gif', function() {
var src = $(this).attr("src");
if($(this).hasClass('playing')){
//stop
$(this).attr('src', src.replace(/\.gif/i, "_s.gif"))
$(this).removeClass('playing');
} else {
//play
$(this).addClass('playing');
$(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
}
});
