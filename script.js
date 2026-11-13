// Global Variables

const searchInput = document.querySelector('#search-input');

const filterBtns = document.querySelectorAll('.filter-btn');

const allFilter = filterBtns[0];
const techFilter = filterBtns[1];
const travelFilter = filterBtns[2];
const foodFilter = filterBtns[3];

// Modular Functions

const highlightFilter = (btn) => {
  btn.classList.add('current');
};

const unHighlightFilter = (btn) => {
  btn.classList.remove('current');
};

// Event Listeners

allFilter.addEventListener('click', (e) => {
  e.stopPropagation();
  highlightFilter(e.target);
  unHighlightFilter(techFilter);
  unHighlightFilter(travelFilter);
  unHighlightFilter(foodFilter);
});

techFilter.addEventListener('click', (e) => {
  e.stopPropagation();
  highlightFilter(e.target);
  unHighlightFilter(allFilter);
  unHighlightFilter(travelFilter);
  unHighlightFilter(foodFilter);
});

travelFilter.addEventListener('click', (e) => {
  e.stopPropagation();
  highlightFilter(e.target);
  unHighlightFilter(allFilter);
  unHighlightFilter(techFilter);
  unHighlightFilter(foodFilter);
});

foodFilter.addEventListener('click', (e) => {
  e.stopPropagation();
  highlightFilter(e.target);
  unHighlightFilter(allFilter);
  unHighlightFilter(techFilter);
  unHighlightFilter(travelFilter);
});
