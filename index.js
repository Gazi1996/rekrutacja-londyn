"use strict";

$(function () {

    var rootUrl = 'https://jsonplaceholder.typicode.com/posts/';
    
    /*Load posts function - parametr n - how many post is on page*/
    
    function getPOST(n) {

        for (var i = 1+n; i <= 5+n; i++) {
                    
                var w = 0+n;
                
                var postData = $.getJSON(rootUrl + i.toString(), function (data) {
                /*create HTML tags*/
                w++;
                    
                var p = data.id;
                    
                console.log(p[1]);
                    
                /*function sortowanie(data)
                {
                  var x;
                  for(var j=0;j<tablica.length;j++)
                  {
                    for(var i=0;i<tablica.length;i++)
                    {
                      if(data<tablica[i])
                      {
                        x=tablica[i];
                        tablica[i]=tablica[j];
                        tablica[j]=x;
                      }
                    }
                  }*/
                
                var articleTag = document.createElement("article");

                var articleHeader = document.createElement("h2");
                var articleParagraph = document.createElement("p");
                var articleFooter = document.createElement("footer");

                /*Insert text to article tags*/
                $(articleHeader).text(data.title);
                $(articleParagraph).text(data.body);
                $(articleFooter).text("Id autora postu: " + data.userId + "i to jest post numer: " + w );
                 
                $(articleTag).addClass('single-post');
                
                /*Insert text to article tags*/
                $(articleTag).append(articleHeader, articleParagraph, articleFooter);

                /* Append article with content to main container - posts-list */
                $("#posts-list").append(articleTag);
                
            })
        }
    }

    $("#get-posts").click(function() 
    {
        var postsCount = $(".single-post").length;
        getPOST(postsCount);
        
    });

    getPOST(0);

});
