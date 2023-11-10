
document.getElementById("web-section").addEventListener("click", function() {
    toggleVisibility("web-section");
  });
  
  document.getElementById("pl-section").addEventListener("click", function() {
    toggleVisibility("pl-section");
  });
  
  document.getElementById("apps-section").addEventListener("click", function() {
    toggleVisibility("apps-section");
  });
  
  function toggleVisibility(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = section.style.display === "none" ? "block" : "none";
  }
  