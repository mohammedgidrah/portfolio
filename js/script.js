// Typing text animation script
var typed = new Typed(".typing", {
    strings: ["", "full stack developer", "software engineer", "freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  
  // Aside navigation
  const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSections = document.querySelectorAll(".section"),
    totalSections = allSections.length;
  
  for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
      removebackSection();
      for (let i = 0; i < totalSections; i++) {
        allSections[i].classList.remove("back-section");
      }
      for (let j = 0; j < totalNavList; j++) {
        if (navList[j].querySelector("a").classList.contains("active")) {
          addbackSection(j);
        }
        navList[j].querySelector("a").classList.remove("active");
      }
      this.classList.add("active");
      showSection(this);
      if (window.innerWidth < 1200) {
        asideSectionTogglerBtn();
      }
    });
  }
  
  function removebackSection() {
    for (let i = 0; i < totalSections; i++) {
      allSections[i].classList.remove("back-section");
    }
  }
  
  function addbackSection(num) {
    allSections[num].classList.add("back-section");
  }
  
  function showSection(element) {
    for (let i = 0; i < totalSections; i++) {
      allSections[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
  }
  
  function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
      navList[i].querySelector("a").classList.remove("active");
      const target = element.getAttribute("href").split("#")[1];
      if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
        navList[i].querySelector("a").classList.add("active");
      }
    }
  }
  
  // Hire Me button navigation
  document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index"); // Contact section index
    const aboutSectionIndex = 1; // Assuming About section index is 1
  
    // Remove back-section class from all sections
    removebackSection();
  
    // Add back-section class to About section
    addbackSection(aboutSectionIndex);
  
    // Show Contact section
    showSection(this);
  
    // Update navigation to highlight the Contact section
    updateNav(this);
  });
  
  // Toggle the navigation and aside panel
  const navToggler = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
  
  navToggler.addEventListener("click", () => {
    asideSectionTogglerBtn();
  });
  
  function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navToggler.classList.toggle("open");
    for (let i = 0; i < totalSections; i++) {
      allSections[i].classList.toggle("open");
    }
  }
  document.getElementById('download-cv').addEventListener('click', function() {
    // URL to your CV file
    const cvUrl = '/files/cv.pdf';  // Relative path to public directory
    document.body.appendChild(createDownloadLink(cvUrl));
});

// Function to create download link
function createDownloadLink(cvUrl) {
    const downloadLink = document.createElement('a');
    downloadLink.href = cvUrl;
    downloadLink.download = 'Mohammed_Al_Qedrh_CV.pdf';  // Set the filename
    document.body.appendChild(downloadLink);  // Append to body
    downloadLink.click();  // Trigger the download
    document.body.removeChild(downloadLink);  // Clean up
}
