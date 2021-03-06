$(document).ready(function () {
  $('#id01').show();
   // When user posts (clicks addBtn)
    $("#post-submit").on("click", function(event) {
      event.preventDefault();
    
      // Make a newPost object
      var newPost = {
        author: $("#author").val().trim(),
        body: $("#post-box").val().trim(),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
        code: $("#hexcode").html(),
      };
    
      console.log(newPost);
    
      // Send an AJAX POST-request with jQuery
      
      $.post("/api/new", newPost)
      
        // On success, run the following code
        .done(function() {
    
          var row = $("<div>");
          row.addClass("post");
    
          row.append("<p>" + newPost.author + " Entry: </p>");
          row.append("<p>" + newPost.body + "</p>");
          row.append("<p>At " + moment(newPost.created_at).format("h:mma on dddd") + "</p>");
    
          $("#post-area").prepend(row);
    
        });
    
      // Empty each input box by replacing the value with an empty string
      $("#author").val("");
      $("#post-box").val("");
    });

    function hexgenerate() {
      var codeString = randomString(32, '0123456789abcdef');
      console.log(codeString);
      // printing of generated code 
      $("#hexcode").html(codeString);
      // closing of modal
      $('#id01').hide();
      // function to produce randomString
      function randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
      };
      // window.hexcode = $("#hexcode").html();
      // console.log(window.hexcode);
    };

    // Random Hexadecimal code generation
// =============================================================
$("#hexgenerate").on('click', function hexgenerate() {
    event.preventDefault();
    var codeString = randomString(32, '0123456789abcdef');
    console.log(codeString);
    // printing of generated code 
    $("#hexcode").html(codeString);
    // closing of modal
    $('#id01').hide();
    // function to produce randomString
    function randomString(length, chars) {
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    };
    // window.hexcode = $("#hexcode").html();
    // console.log(window.hexcode);
  });
  });
  // Function for ?code= parameter grabbing existing code 
  function oldcode(){
  $("#hexcode").html(oldcode);
  // closing of modal
  $('#id01').hide();
  console.log(oldcode);
  window.hexcode = $("#hexcode").html();
  Hex = window.hexcode;
  };

  // Function for grabbing an existing code
  $("#loginSubmit").on("click", function send() {

  let oldcode =   $("#loginCode").val().trim();
  $("#hexcode").html(oldcode);
  console.log(oldcode);
  window.hexcode = $("#hexcode").html();
  Hex = window.hexcode;

$.get("/api/" + Hex, function(data) {
    
      if (data.length !== 0) {
    
        for (var i = 0; i < data.length; i++) {
    
          var row = $("<div>");
          row.addClass("post");
    
          row.append("<p>" + data[i].author + " Entry: </p>");
          row.append("<p>" + data[i].body + "</p>");
          row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
          row.append("<span class='close' title='Close Modal'>&times;</span>");
    
          $("#post-area").prepend(row);
    
        }
  
      }
    
    });
  });

Hex = window.hexcode;