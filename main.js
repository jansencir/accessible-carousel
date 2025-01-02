(function() {
  const images = Array.from(document.querySelectorAll(".carousel-item"));
  const circles = Array.from(document.querySelectorAll(".circle-btn"));
  const prevButton = document.querySelector(".carousel-arrow.prev");
  const nextButton = document.querySelector(".carousel-arrow.next");
  const circleContainer = document.querySelector(".circle-container");

  const toggleAriaHidden = (newIndex) => {
    const initialImage = document.querySelector(".carousel-item.current");
    const newImage = images[newIndex];
    initialImage.setAttribute("aria-hidden", "true");
    newImage.setAttribute("aria-hidden", "false")
  }
  
  const updateCircles = (newIndex) => {
    const initialCircle = document.querySelector(".circle-btn.current");
    const newCircle = circles[newIndex];
    initialCircle.classList.remove("current");
    newCircle.classList.add("current");
  }

  const updateImage = (newIndex) => {
    const initialImage = document.querySelector(".carousel-item.current");
    const newImage = images[newIndex];
    initialImage.classList.remove("current");
    newImage.classList.add("current");
  }

  const selectCircle = (e) => {
    const targetCircle = e.target.closest("button");
    const targetCircleIndex = circles.indexOf(targetCircle);
    if (!targetCircle) {
      return
    }
    toggleAriaHidden(targetCircleIndex);
    updateCircles(targetCircleIndex);
    updateImage(targetCircleIndex);
  }

  circleContainer.addEventListener("click", (e) => {
    selectCircle(e);
  })

  nextButton.addEventListener("click", () => {
    const currentImage = document.querySelector(".carousel-item.current");
    const nextImage = currentImage.nextElementSibling;
    let newIndex = images.indexOf(nextImage);
    if (nextImage === null) {
      newIndex = 0;
    };
    toggleAriaHidden(newIndex);
    updateImage(newIndex);
    updateCircles(newIndex);
  })

  prevButton.addEventListener("click", () => {
    const currentImage = document.querySelector(".carousel-item.current");
    const prevImage = currentImage.previousElementSibling;
    let newIndex = images.indexOf(prevImage);
    if (prevImage === null) {
      newIndex = images.length - 1;
    };
    toggleAriaHidden(newIndex);
    updateImage(newIndex);
    updateCircles(newIndex);
  });
})();