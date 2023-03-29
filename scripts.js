document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");
    const contentSections = document.querySelectorAll(".content-section");
    let currentSection = 0;
    let isScrolling = false;
    let touchStartY = 0;
  
    function setCurrentSection(index) {
      if (index < 0 || index >= contentSections.length) return;
  
      contentSections[currentSection].classList.remove("active");
      contentSections[currentSection].style.transform =
        "translate(-50%, calc(-50% - 100px))";
  
      currentSection = index;
  
      contentSections[currentSection].classList.add("active");
      contentSections[currentSection].style.transform =
        "translate(-50%, -50%)";
    }
  
    function onScroll(event) {
      if (isScrolling) return;
      isScrolling = true;
  
      if (event.deltaY > 0) {
        setCurrentSection(currentSection + 1);
      } else {
        setCurrentSection(currentSection - 1);
      }
  
      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    }

    function onTouchStart(event) {
        touchStartY = event.touches[0].clientY;
      }
    
      function onTouchMove(event) {
        const touchMoveY = event.touches[0].clientY;
        const deltaY = touchStartY - touchMoveY;
    
        if (Math.abs(deltaY) < 100) return; // Add a threshold to avoid small swipes triggering the animation
    
        if (deltaY > 0) {
          onScroll({ deltaY: 1 });
        } else {
          onScroll({ deltaY: -1 });
        }
      }
  
    setCurrentSection(0);
    content.addEventListener("wheel", onScroll);
    content.addEventListener("touchstart", onTouchStart);
    content.addEventListener("touchmove", onTouchMove);
  });
  
  