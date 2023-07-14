window.onscroll = function() {
    scrollFunction()
  };
  
  
  function scrollFunction() {
    if (document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30) {
        document.getElementById("cover")
          .style.filter="opacity(0.5)";
      } 
    if (document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100) {
      document.getElementById("cover")
        .style.filter="opacity(0.3)";
    } 
    else {
        document.getElementById("cover")
          .style.filter="opacity(0.8)";
      } 

      if (document.body.scrollTop > 140 ||
        document.documentElement.scrollTop > 140) {
        document.getElementById("logo")
          .style.filter="opacity(0)";
        }
        else {
            document.getElementById("logo")
              .style.filter="opacity(1)";
          } 
  }