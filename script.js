// Global Variables

const searchInput = document.querySelector('#search-input');

const filterBtns = document.querySelectorAll('.filter-btn');

const allFilter = filterBtns[0];
const techFilter = filterBtns[1];
const travelFilter = filterBtns[2];
const foodFilter = filterBtns[3];

const blogPosts = [
  {
    // Post 1 (Laptop with code):
    title: 'Why I Still Write Vanilla JavaScript',
    category: 'Tech',
    date: 'Nov 10, 2026',
    description:
      'Before jumping into frameworks, mastering the DOM and core logic is essential. Here is why building from scratch makes you a better developer.',
  },
  {
    // Post 2 (Mountain landscape):

    title:
      "Disconnecting to Reconnect: A Hiker's Guide to Burnout",
    category: 'Travel',
    date: 'Nov 05, 2026',
    description:
      "Stepping away from the IDE and into the wilderness is the best way to reset your mind and solve that bug you've been staring at for hours.",
  },
  {
    // Post 3 (Breakfast and coffee)

    title: 'The Ultimate Developer Breakfast',
    category: 'Food',
    date: 'Oct 28, 2026',
    description:
      'Fuelling up for a long day of debugging requires more caffeine. Here is a simple, high-protein breakfast to keep your focus sharp.',
  },
  {
    // Post 4 (Laptop and map)

    title: 'The Digital Nomad Setup Coding on the Road',
    category: 'Travel',
    date: 'Oct 15, 2026',
    description:
      "You don't need a massive office to write great code. Here is how I optimize my workflow using a lightweight laptop and a reliable Wi-Fi connection.",
  },
  {
    // Post 5 (City with pyramids)

    title: 'Finding Inspiration in Ancient Architecture',
    category: 'Travel',
    date: 'Sep 30, 2026',
    description:
      'Sometimes the best way to think about modern UI design is to look at structures built thousands of years ago. A journey through history.',
  },
  {
    // Post 6 (Grilled food)

    title: 'The Friday Night Developer Feast',
    category: 'Food',
    date: 'Sep 18, 2026',
    description:
      'Cooking a great meal from scratch is alot like writing clean code. You need the right ingredients, patience, and a willingness to experiment.',
  },
];

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
