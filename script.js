var quote;
$(document).ready(function(){
  $.ajaxSetup({cache: false});
  
  getQuote();
  
  $("#quote-button").on("click", function(){
    getQuote();
    $(this).css('background', 'rgba(152, 94, 109, 1)');
  });
  
   $("#twitter-button").on("click", function(){
    tweetQuote();
    $(this).css('background', 'rgba(152, 94, 109, 1)');
  });
  
  function getQuote() {
    $.getJSON("https://quotesondesign.com/wp-json/posts? filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
      $("#quote").html(a[0].content + "<p>— " + a[0].title + "</p>")
      quote = encodeURIComponent($("#quote").text());
      });
    }
  
  function tweetQuote(){  
    window.open("https://twitter.com/intent/tweet?&original_referer=https%3A%2F%2Fdev.twitter.com%2Fweb%2Ftweet-button&ref_src=twsrc%5Etfw&related=twitterapi%2Ctwitter&text="+quote);
  }
});