document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;

    // Adjust the top position based on the scroll position
    document.querySelector(".icons").style.top = (30 - scrollPosition * 0.1) + "vh";
});
