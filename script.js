// Global Variables

const searchInput = document.querySelector('#search-input');

const filterBtns = document.querySelectorAll('.filter-btn');

const blogGrid = document.querySelector('#blog-grid');

const blogPosts = [
  {
    title: 'Why I Still Write Vanilla JavaScript',
    category: 'tech',
    date: 'Nov 10, 2026',
    description:
      'Before jumping into frameworks, mastering the DOM and core logic is essential. Here is why building from scratch makes you a better developer.',
    image: 'assets/images/tech-2.jpeg',
    alt: 'Laptop with code',
  },
  {
    title:
      "Disconnecting to Reconnect: A Hiker's Guide to Burnout",
    category: 'travel',
    date: 'Nov 05, 2026',
    description:
      "Stepping away from the IDE and into the wilderness is the best way to reset your mind and solve that bug you've been staring at for hours.",
    image: 'assets/images/travel-1.jpeg',
    alt: 'Mountain landscape',
  },
  {
    title: 'The Ultimate Developer Breakfast',
    category: 'food',
    date: 'Oct 28, 2026',
    description:
      'Fuelling up for a long day of debugging requires more caffeine. Here is a simple, high-protein breakfast to keep your focus sharp.',
    image: 'assets/images/food-1.jpeg',
    alt: 'Breakfast and coffee',
  },
  {
    title: 'The Digital Nomad Setup Coding on the Road',
    category: 'tech',
    date: 'Oct 15, 2026',
    description:
      "You don't need a massive office to write great code. Here is how I optimize my workflow using a lightweight laptop and a reliable Wi-Fi connection.",
    image: 'assets/images/tech-1.jpeg',
    alt: 'Laptop and map',
  },
  {
    title: 'Finding Inspiration in Ancient Architecture',
    category: 'travel',
    date: 'Sep 30, 2026',
    description:
      'Sometimes the best way to think about modern UI design is to look at structures built thousands of years ago. A journey through history.',
    image: 'assets/images/travel-2.jpeg',
    alt: 'City with pyramids',
  },
  {
    title: 'The Friday Night Developer Feast',
    category: 'food',
    date: 'Sep 18, 2026',
    description:
      'Cooking a great meal from scratch is alot like writing clean code. You need the right ingredients, patience, and a willingness to experiment.',
    image: 'assets/images/food-2.jpeg',
    alt: 'Grilled food',
  },
];

// Functions

const highlightFilter = (btn) => {
  btn.classList.add('current');
};

const unHighlightFilter = (btn) => {
  btn.classList.remove('current');
};

const renderPosts = (posts) => {
  blogGrid.replaceChildren();

  posts.forEach((post) => {
    const a = document.createElement('a');
    const card = document.createElement('div');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const em = document.createElement('em');
    const p = document.createElement('p');

    blogGrid.appendChild(a);

    a.appendChild(card);
    a.classList.add('post-link');
    a.ariaLabel = 'Blog post';

    card.appendChild(figure);
    card.appendChild(h3);
    card.appendChild(em);
    card.appendChild(p);
    card.classList.add('card');

    figure.appendChild(img);
    figure.classList.add('figure');

    img.src = post.image;
    img.alt = post.alt;
    img.classList.add('image');

    h3.textContent = post.title;
    h3.classList.add('title');

    em.textContent = `- ${post.date}`;
    em.classList.add('date');

    p.textContent = post.description;
    p.classList.add('description');
  });
};

// Event Listeners

filterBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    filterBtns.forEach((allBtns) => {
      unHighlightFilter(allBtns);
    });

    highlightFilter(btn);

    const category = btn.dataset.category;

    if (category === 'all') {
      renderPosts(blogPosts);
    } else if (category === 'tech') {
      const tech = blogPosts.filter(
        (post) => post.category === 'tech'
      );
      renderPosts(tech);
    } else if (category === 'travel') {
      const travel = blogPosts.filter(
        (post) => post.category === 'travel'
      );
      renderPosts(travel);
    } else if (category === 'food') {
      const food = blogPosts.filter(
        (post) => post.category === 'food'
      );
      renderPosts(food);
    } else {
      renderPosts(blogPosts.slice(0, 3));
    }
  });
});

searchInput.addEventListener('input', (e) => {
  const inputValue = searchInput.value.trim().toLowerCase();

  const results = blogPosts.filter((post) => {
    return Object.values(post)
      .join()
      .toLowerCase()
      .includes(inputValue);
  });

  renderPosts(results);
  filterBtns.forEach((btn) => {
    unHighlightFilter(btn);
  });
});

// Initial Page Load

renderPosts(blogPosts.slice(0, 3));
