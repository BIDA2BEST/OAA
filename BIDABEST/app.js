const arrows = document.querySelectorAll(".arrow");
const videosLists = document.querySelectorAll(".videos-list");


 const burgerContainer = document.querySelector('.burger-container');
  const navLinks = document.querySelector('.nav-links');
    burgerContainer.addEventListener('click', () => {
      burgerContainer.classList.toggle('active');
    navLinks.classList.toggle('active');
  })


arrows.forEach((arrow, i) => {
  const itemNumber = videosLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      videosLists[i].style.transform = `translateX(${
        videosLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      videosLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});