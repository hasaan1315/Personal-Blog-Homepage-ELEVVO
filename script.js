const posts = [
  {
    title: "How to Build a Task App",
    category: "Tech",
    description: "Learn how to create a productivity app using HTML, CSS, and JavaScript.",
    date: "July 20, 2025",
    image: "images/web task.png"
  },
  {
    title: "Exploring the Mountains of Hunza",
    category: "Travel",
    description: "My recent journey to the breathtaking valleys of Hunza.",
    date: "July 18, 2025",
    image: "images/passu-cones-hunza-valley.JPG"
  },
  {
    title: "Best Street Food in Lahore",
    category: "Food",
    description: "From spicy chaat to sizzling kebabs, explore my top picks!",
    date: "July 15, 2025",
    image: "images/lahore food.png"
  },
  {
    title: "React vs Vanilla JS",
    category: "Tech",
    description: "Which one should you choose for your next front-end project?",
    date: "July 10, 2025",
    image: "images/Vanilla vs React.png"
  }
];

const blogContainer = document.getElementById('blogContainer');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

function renderPosts(category = "All", keyword = "") {
  blogContainer.innerHTML = "";

  const filtered = posts.filter(post => {
    const matchCategory = category === "All" || post.category === category;
    const matchSearch = post.title.toLowerCase().includes(keyword.toLowerCase());
    return matchCategory && matchSearch;
  });

  const limited = filtered.slice(0, 3); // Limit to 3 posts per page

  limited.forEach(post => {
    const card = document.createElement("div");
    card.className = "blog-card";
    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <h3>${post.title}</h3>
      <p>${post.description}</p>
      <span>${post.date} | ${post.category}</span>
    `;
    blogContainer.appendChild(card);
  });
}

// Category filter
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-btn.active')?.classList.remove('active');
    button.classList.add('active');
    renderPosts(button.dataset.category, searchInput.value);
  });
});

// Search
searchInput.addEventListener('input', () => {
  const category = document.querySelector('.filter-btn.active')?.dataset.category || "All";
  renderPosts(category, searchInput.value);
});

// Initial render
renderPosts();
