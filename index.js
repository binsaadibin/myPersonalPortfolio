$(document).ready(function () {
    $('#menu').click(function () {

        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    })
});

// Initialize EmailJS with your user ID
emailjs.init('NUcJlFSdLMd-KryN5');

$(document).ready(function() {
    // Event listener for form submission
    $('#contact-form').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        var name = $('#name').val();
        var email = $('#email').val();
        var project = $('#project').val();
        var message = $('#message').val();

        // Send email using EmailJS
        emailjs.send("service_3gyy7gi", "template_68clb82", {
            name: name,
            email: email,
            project: project,
            message: message
        }).then(function(response) {
            alert('Email sent successfully!');
            // Optionally, reset the form after successful submission
            $('#contact-form')[0].reset();
        }, function(error) {
            alert('Email could not be sent. Error: ' + JSON.stringify(error));
        });
    });
});
