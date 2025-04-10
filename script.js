document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("successMessage");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
    
      setTimeout(() => {
        successMsg.style.display = "block";
        form.reset();
  
        setTimeout(() => {
          successMsg.style.display = "none";
        }, 5000);
      }, 500);
    });
  });
  