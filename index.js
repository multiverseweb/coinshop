let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
  
  function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  function scrollFunction() {
    if (document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10) {
        document.getElementById("cover")
          .style.filter="opacity(0.5)";
      } 
    if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
      document.getElementById("cover")
        .style.filter="opacity(0.3)";
    } 
    else {
        document.getElementById("cover")
          .style.filter="opacity(0.8)";
      } 

      if (document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100) {
        document.getElementById("logo")
          .style.filter="opacity(0)";
        }
        else {
            document.getElementById("logo")
              .style.filter="opacity(1)";
          } 
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
      }
  }
