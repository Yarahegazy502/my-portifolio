// ============== scroll===============
console.log('hi');
var sections = document.querySelectorAll('section');
// console.log(sectionsArray);


onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop;
  
    sections.forEach((section,index) => {
      if (
        scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
        scrollPosition <
          section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
      ) {
          // console.log(section.id);
          console.log(index);
        var currentId = section.attributes.id.value;
        // console.log(currentId);
        removeAllActiveClasses();
        addActiveClass(currentId);
        
      }
    });
  };
  
  var removeAllActiveClasses = function () {
    document.querySelectorAll(".nn a").forEach((el) => {
      el.classList.remove("active");
    });
  };
  
  var addActiveClass = function (id) {
    // console.log(id);
    var selector = `.nn a[href="#${id}"]`;
    document.querySelector(selector).classList.add("active");
  };  

  var navLinks = document.querySelectorAll(".navbar-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
    

    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});