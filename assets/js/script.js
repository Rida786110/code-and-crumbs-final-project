// form
$(document).ready(function(){

    
    $(".toggle").click(function(){
        let passwordInput = $("#password");

        if(passwordInput.attr("type") === "password"){
            passwordInput.attr("type", "text");
            $(this).text("Hide");
        } else {
            passwordInput.attr("type", "password");
            $(this).text("Show");
        }
    });

    
    $("#loginForm").submit(function(e){
        e.preventDefault();

        let email = $("#email").val();
        let password = $("#password").val();

        if(email === ""){
            alert("Please enter your email");
            return;
        }

        if(password === ""){
            alert("Please enter your password");
            return;
        }

        if(password.length > 8){
            alert("Password must be maximum 8 characters");
            return;
        }

        alert("Login Successful ✅");
        this.reset();
        $(".toggle").text("Show");
    });

});

// shake
$(document).ready(function(){

  let currentIndex = 0;
  const itemsToShow = 3;
  const totalItems = $(".shakes article").length;

  $(".next").click(function(){
    if(currentIndex < totalItems - itemsToShow){
      currentIndex++;
      moveCarousel();
    }
  });

  $(".prev").click(function(){
    if(currentIndex > 0){
      currentIndex--;
      moveCarousel();
    }
  });

  function moveCarousel(){
    const itemWidth = $(".shakes article").outerWidth(true);
    $(".shakes").css("transform", "translateX(" + (-itemWidth * currentIndex) + "px)");
  }

});

// footer

 $(document).ready(function () {

    // hide all content by default
    $('#accordion > div').hide();

    $('#accordion h3').click(function () {

      // toggle clicked section
      $(this).next('div').slideToggle();

      // close other open sections
      $('#accordion h3').not(this).next('div').slideUp();

    });

  });

// rida work

// Slider Logic
const track = document.getElementById("sliderTrack");
let move = 0;

document.getElementById("nextBtn").onclick = function() {
    if (move > -1400) { 
        move -= 470; // Width + Gap
        track.style.transform = `translateX(${move}px)`;
    }
};

document.getElementById("prevBtn").onclick = function() {
    if (move < 0) {
        move += 470;
        track.style.transform = `translateX(${move}px)`;
    }
};

// Modal Logic
function openModal(id) { document.getElementById(id).style.display = "block"; }
function closeModal(id) { document.getElementById(id).style.display = "none"; }

// Yusra Work

$(document).ready(function () {

    $("#trackBtn").click(function () {
        let orderId = $("#orderId").val();

        if (orderId === "") {
            alert("Please enter your Order ID");
            return;
        }

        $("#orderStatus").fadeIn();

        // Dummy order status (for project/demo)
        let statuses = [
            "Your order is being prepared 🍔",
            "Your order is on the way 🚴",
            "Your order has been delivered ✅"
        ];

        let randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

        $("#statusText").text(randomStatus);
    });

});

$(document).ready(function() {
    
    // Navbar click handling
    $('nav ul li').on('click', function() {
        // Active class change
        $('nav ul li').removeClass('active');
        $(this).addClass('active');

        // Page logic
        let page = $(this).attr('data-page');

        // Sab hide karke target show karo
        $('#faq-section, #who-section, #partner-section, #help-section').hide();
        
        if(page === 'faq') {
            $('#faq-section').fadeIn();
        } else if(page === 'who') {
            $('#who-section').fadeIn();
        } else if(page === 'partner') {
            $('#partner-section').fadeIn();
        } else if(page === 'help') {
            $('#help-section').fadeIn();
        }
    });

    // Left menu click (FAQ items)
    $('.left p').on('click', function() {
        $('.left p').removeClass('active');
        $(this).addClass('active');
    });
    $(document).ready(function() {
    // Handle Subscription Click
    $('.sub-btn').on('click', function(e) {
        e.preventDefault();
        
        const emailInput = $('#footer-email');
        const emailValue = emailInput.val();

        if (validateEmail(emailValue)) {
            alert("Success! You've been subscribed with: " + emailValue);
            emailInput.val(''); // Clear input
        } else {
            alert("Please enter a valid email address.");
            emailInput.css('border', '1px solid red');
        }
    });

    // Helper function hai email validation k lye
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Clear red border on focus
    $('#footer-email').on('focus', function() {
        $(this).css('border', 'none');
    });
});
    
});