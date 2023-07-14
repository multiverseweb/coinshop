window.onscroll = function() {
    scrollFunction()
  };
  
  
  function scrollFunction() {
    if (document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10) {
        document.getElementById("cover")
          .style.filter="opacity(0.5)";
      } 
    if (document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80) {
      document.getElementById("cover")
        .style.filter="opacity(0.3)";
    } 
    else {
        document.getElementById("cover")
          .style.filter="opacity(0.8)";
      } 

      if (document.body.scrollTop > 120 ||
        document.documentElement.scrollTop > 120) {
        document.getElementById("logo")
          .style.filter="opacity(0)";
        }
        else {
            document.getElementById("logo")
              .style.filter="opacity(1)";
          } 
  }
