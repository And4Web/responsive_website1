let searchBtn = document.querySelector('#search-btn');

let searchForm = document.querySelector('.header .search-box'); 

searchBtn.onclick = () => {
  searchBtn.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
}

// 20 minutes onwards