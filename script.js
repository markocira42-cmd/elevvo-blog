// Global Variables

const searchInput = document.querySelector('#search-input');

const filterBtns = document.querySelectorAll('.filter-btn');

const allFilter = filterBtns[0];
const techFilter = filterBtns[1];
const travelFilter = filterBtns[2];
const foodFilter = filterBtns[3];

const blogGrid = document.querySelector('#blog-grid');

const blogPosts = [
  {
    // Post 1 (Laptop with code):
    title: 'Why I Still Write Vanilla JavaScript',
    category: 'Tech',
    date: 'Nov 10, 2026',
    description:
      'Before jumping into frameworks, mastering the DOM and core logic is essential. Here is why building from scratch makes you a better developer.',
    image: 'assets/images/tech-2.jpeg',
  },
  {
    // Post 2 (Mountain landscape):

    title:
      "Disconnecting to Reconnect: A Hiker's Guide to Burnout",
    category: 'Travel',
    date: 'Nov 05, 2026',
    description:
      "Stepping away from the IDE and into the wilderness is the best way to reset your mind and solve that bug you've been staring at for hours.",
    image: 'assets/images/travel-2.jpeg',
  },
  {
    // Post 3 (Breakfast and coffee)

    title: 'The Ultimate Developer Breakfast',
    category: 'Food',
    date: 'Oct 28, 2026',
    description:
      'Fuelling up for a long day of debugging requires more caffeine. Here is a simple, high-protein breakfast to keep your focus sharp.',
    image: 'assets/images/food-1.jpeg',
  },
  {
    // Post 4 (Laptop and map)

    title: 'The Digital Nomad Setup Coding on the Road',
    category: 'Tech',
    date: 'Oct 15, 2026',
    description:
      "You don't need a massive office to write great code. Here is how I optimize my workflow using a lightweight laptop and a reliable Wi-Fi connection.",
    image: 'assets/images/tech-1.jpeg',
  },
  {
    // Post 5 (City with pyramids)

    title: 'Finding Inspiration in Ancient Architecture',
    category: 'Travel',
    date: 'Sep 30, 2026',
    description:
      'Sometimes the best way to think about modern UI design is to look at structures built thousands of years ago. A journey through history.',
    image: 'assets/images/travel-3.jpeg',
  },
  {
    // Post 6 (Grilled food)

    title: 'The Friday Night Developer Feast',
    category: 'Food',
    date: 'Sep 18, 2026',
    description:
      'Cooking a great meal from scratch is alot like writing clean code. You need the right ingredients, patience, and a willingness to experiment.',
    image: 'assets/images/food-3.jpeg',
  },
];

// Functions

const highlightFilter = (btn) => {
  btn.classList.add('current');
};

const unHighlightFilter = (btn) => {
  btn.classList.remove('current');
};

const renderPosts = () => {
  blogPosts.forEach((post, i) => {
    const card = document.createElement('div');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const em = document.createElement('em');
    const p = document.createElement('p');

    blogGrid.appendChild(card);

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(em);
    card.appendChild(p);

    card.classList.add('card');
    img.src = post.image;
    img.classList.add('image');
    h3.textContent = post.title;
    em.textContent = `-${post.date}`;
    p.textContent = post.description;
  });
};

renderPosts();

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
