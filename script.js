$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["an Undergraduate", "a Developer", "a Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["an Undergraduate", "a Developer", "a Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    $(document).ready(function(){
        // ... (your existing code for other functionalities)
    
        // Contact form submission script
        $('.contact form').submit(function(event){
            event.preventDefault(); // Prevent the default form submission
            
            // Get form input values
            var name = $('.field.name input').val();
            var email = $('.field.email input').val();
            var subject = $('.field input[placeholder="Subject"]').val();
            var message = $('.field.textarea textarea').val();
            
            // Here, you can add validation for the inputs if needed
            
            // Create a message for the user
            var confirmationMessage = `Thank you, ${name}! Your message has been sent.`;
            
            // Display the confirmation message
            $('.contact form').append('<div class="confirmation-message">' + confirmationMessage + '</div>');
            
            // Reset the form after submission
            $('.contact form')[0].reset();
            
            // Optional: If you want to remove the confirmation message after a few seconds
            setTimeout(function() {
                $('.contact form .confirmation-message').remove();
            }, 5000); // Confirmation message will be removed after 5 seconds
        });
    });
    
});