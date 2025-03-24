$("#contactForm").validator().on("submit", function (event) {
    $("#success").remove();
    $("#contactForm, #mc-form").after('<div id="success"></div>');
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});

function submitForm(){
    // Initiate Variables With Form Content
    var formData = $("#contactForm").serialize();
    $.ajax({
        type: "POST",
        url: "mail.php",
        //data: "name=" + name + "&email=" + email + "&subject=" + subject + "&phone=" + phone + "&message=" + message,
        data:formData,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Your Email Send Sucessessfully , Thank You!")
}

function formError(){
    $("#contactForm").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#success").removeClass().addClass(msgClasses).text(msg);
}


/*Second form*/


$("#contactFormBottom").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError1();
        submitMSG1(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm1();
    }
});

function submitForm1(){
    // Initiate Variables With Form Content
    var name = $("#p_name").val();
    var email = $("#p_email").val();
    var subject = $("#p_subject").val();
    var phone = $("#p_phone").val();
    var message = $("#p_message").val();
    var formData = $("#contactFormBottom").serialize();
    $.ajax({
        type: "POST",
        url: "mail.php",
        //data: "name=" + name + "&email=" + email + "&subject=" + subject + "&phone=" + phone + "&message=" + message,
        data:formData,
        success : function(text){
            if (text == "success"){
                formSuccess1();
            } else {
                formError1();
                submitMSG1(false,text);
            }
        }
    });
}

function formSuccess1(){
    $("#contactFormBottom")[0].reset();
    submitMSG1(true, "Your Email Send Sucessessfully , Thank You!")
}

function formError1(){
    $("#contactFormBottom").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG1(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#success2").removeClass().addClass(msgClasses).text(msg);
}