function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
let width = screen.width;
console.log(width)
  var imgList = document.getElementById('imgList');
  var scrollRight = document.getElementById('scroll-right');
  var scrollLeft = document.getElementById('scroll-left');
  if (width < 800) {
// When a user clicks on the right arrow, the ul will scroll 750px to the right
      scrollRight.addEventListener('click', (event) => {
        imgList.scrollBy(200, 0);
    });}
  else {
    scrollRight.addEventListener('click', (event) => {
      imgList.scrollBy(870, 0);
  });
  }
  if (width < 800) {
// When a user clicks on the left arrow, the ul will scroll 750px to the left
    scrollLeft.addEventListener('click', (event) => {
      imgList.scrollBy(-240, 0);
    });}
  else {
    scrollLeft.addEventListener('click', (event) => {
      imgList.scrollBy(-870, 0);
  });
  }

  