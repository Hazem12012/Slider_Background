let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let slider = document.querySelector(".slider");
let sliderList = slider.querySelector(".slider .list");
let thumbnail = document.querySelector(".thumbnail");
let thumbnailItems = document.querySelectorAll(".item");

// thumbnailItems.forEach(function(ele){
// ele.classList.remove("active");
// });

// function for next button.
nextBtn.onclick = function () {
  moveSlider("next");
};

// function for prev button.
prevBtn.onclick = function () {
  moveSlider("prev");
};
// main function
function moveSlider(direction) {
  let sliderItems = sliderList.querySelectorAll(".item");
  let thumbnailItems = document.querySelectorAll(".thumbnail .item");

  if (direction === "next") {
    sliderList.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");


    thumbnailItems.forEach(function (ele) {
      ele.classList.remove("active");
    });
    let element=thumbnailItems[1];

      element.classList.add("active");


  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    slider.classList.add("prev");
    thumbnailItems.forEach(function (ele) {
      ele.classList.remove("active");
    });
    let element=thumbnailItems[thumbnailItems.length - 1];
      element.classList.add("active");
  }
  slider.addEventListener(
    "animationend",
    function () {
      if (direction === "next") {
        slider.classList.remove("next");
      } else {
        slider.classList.remove("prev");
      }
    },
    { once: true }
  );
}
