   // When the page loads, grab and display all of our posts
$.get("/api/all", function(data) {
    
      if (data.length !== 0) {
    
        for (var i = 0; i < data.length; i++) {
    
          var row = $("<div>");
          row.addClass("post");
    
          row.append("<p>" + data[i].author + " data: </p>");
          row.append("<p>data:" + data[i].body + "</p>");
          row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
    
          $("#post-area").prepend(row);
    
        }
    
      }
    
    });
    
   // When user posts (clicks addBtn)
    $("#post-submit").on("click", function(event) {
      event.preventDefault();
    
      // Make a newPost object
      var newPost = {
        author: $("#author").val().trim(),
        body: $("#post-box").val().trim(),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
      };
    
      console.log(newPost);
    
      // Send an AJAX POST-request with jQuery
      $.post("/api/new", newPost)
        // On success, run the following code
        .done(function() {
    
          var row = $("<div>");
          row.addClass("post");
    
          row.append("<p>" + newPost.author + " data: </p>");
          row.append("<p>" + newPost.body + "</p>");
          row.append("<p>At " + moment(newPost.created_at).format("h:mma on dddd") + "</p>");
    
          $("#post-area").prepend(row);
    
        });
    
      // Empty each input box by replacing the value with an empty string
      $("#author").val("");
      $("#post-box").val("");
    });

    
    