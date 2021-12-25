let searchBtn = document.querySelector('#search-btn');

let searchForm = document.querySelector('.header .search-box'); 

searchBtn.onclick = () => {
  searchBtn.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
}

let menuBtn = document.querySelector('#menu-btn');

let navBar = document.querySelector('.header .navbar'); 

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  navBar.classList.toggle('active');
}
// 23 minutes onwards