$("#button-blue").click(function () {
      if ($("#name").val() == '' || $("#email").val() == '' || $("#comments").val() == '') {
        $("#button-blue").after("<h3 class='error'>Please fill in all fields before clicking 'Send'.</h3></br>");
        return;
      }

      if ($("#email:contains(@)")) {
        $("#button-blue").after("<h3 class='error'>Please enter a valid email address.</h3></br>");
        return;
      }

      //var check = document.getElementById("answer").value;
      //if (check == "15") {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var comments = document.getElementById("comments").value;
        var dataString = 'name=' + name + "&email=" + email + "&comments=" + comments; 

        $.ajax({
          type: "POST",
          url: "bin/contact_me.php",
          data: dataString,
          cache: false,
          success: function (html) {
            $(".error").remove();
            $("#name").val('');
            $("#email").val('');
            $("#comments").val('');
            $("#button-blue").after("<h3 class='success'>Thanks for the comments! We'll get back to you ASAP!</h3>");
	    $("#button-blue").prop("disabled",true);		
          }
        });
     // }
     // else {
        //$("#button-blue").before("<h3 class='error'>Incorrect age. <a href='../about'><u>Look here</u><a></h3></br>");
     // }
    });