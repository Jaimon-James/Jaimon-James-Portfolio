'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalContainer = document.querySelector("[data-modal]");
const overlay = document.querySelector("[data-overlay]");

// modal toggle function
const testimonialsModalFunc = function () {
  if (modalContainer && overlay) {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
}




// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  console.log("Filtering by:", selectedValue);
  console.log("Number of filter items:", filterItems.length);

  for (let i = 0; i < filterItems.length; i++) {
    const itemCategory = filterItems[i].dataset.category.toLowerCase();
    console.log(`Item ${i}: category="${itemCategory}", selected="${selectedValue}"`);

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === itemCategory) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

    console.log(`Item ${i} active status:`, filterItems[i].classList.contains("active"));
  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

// Initialize filtering - show all items by default
filterFunc("all");

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    
    const clickedText = this.innerHTML.toLowerCase();
    console.log("Navigation clicked:", clickedText);

    for (let j = 0; j < pages.length; j++) {
      console.log("Checking page:", pages[j].dataset.page);
      if (clickedText === pages[j].dataset.page) {
        console.log("Match found! Showing page:", pages[j].dataset.page);
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }

  });
}


// Course filtering variables
const courseSelect = document.querySelector("[data-course-select]");
const courseSelectItems = document.querySelectorAll("[data-course-select-item]");
const courseSelectValue = document.querySelector("[data-course-select-value]");
const courseFilterBtn = document.querySelectorAll("[data-course-filter-btn]");

if (courseSelect) {
  courseSelect.addEventListener("click", function () { elementToggleFunc(this); });
}

// Course filter function
const courseFilterFunc = function (selectedValue) {
  const courseFilterItems = document.querySelectorAll("[data-course-filter-item]");

  for (let i = 0; i < courseFilterItems.length; i++) {
    if (selectedValue === "all") {
      courseFilterItems[i].classList.add("active");
    } else if (selectedValue === courseFilterItems[i].dataset.courseCategory.toLowerCase()) {
      courseFilterItems[i].classList.add("active");
    } else {
      courseFilterItems[i].classList.remove("active");
    }
  }
}

// Add event to all course select items
if (courseSelectItems) {
  for (let i = 0; i < courseSelectItems.length; i++) {
    courseSelectItems[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      courseSelectValue.innerText = this.innerText;
      elementToggleFunc(courseSelect);
      courseFilterFunc(selectedValue);
    });
  }
}

// Add event to all course filter button items
if (courseFilterBtn) {
  let lastClickedCourseBtn = courseFilterBtn[0];

  for (let i = 0; i < courseFilterBtn.length; i++) {
    courseFilterBtn[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      courseSelectValue.innerText = this.innerText;
      courseFilterFunc(selectedValue);

      lastClickedCourseBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedCourseBtn = this;
    });
  }
}

// Initialize course filtering - show all items by default
courseFilterFunc("all");