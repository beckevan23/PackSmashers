document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");
    const contentSections = document.querySelectorAll(".content-section");
    let currentSection = 0;
    let isScrolling = false;
  
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
  
    setCurrentSection(0);
    content.addEventListener("wheel", onScroll);
    document.addEventListener("touchmove", changeSection, { passive: false });
  });
  
  