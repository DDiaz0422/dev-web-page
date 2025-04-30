// My list of projects
const projects = [
    {
        title: "Project 1",
        image: "assets/default_thumbnail.jpg",
        description: "A project will go here soon!",
        link: "#"
    },
    {
        title: "Project 2",
        image: "assets/default_thumbnail.jpg",
        description: "This is a funny little machine learning project!",
        link: "#"
    },
    {
        title: "Project 3",
        image: "assets/default_thumbnail.jpg",
        description: "Something useful will go here trust me!",
        link: "#"
    },
    {
        title: "Project 4",
        image: "assets/default_thumbnail.jpg",
        description: "Maybe a full stack thing someday?",
        link: "#"
    },
    {
        title: "Project 5",
        image: "assets/default_thumbnail.jpg",
        description: "I’ll figure this out as I go!",
        link: "#"
    }
];
  
let currentIndex = 0;
const carousel = document.getElementById("carousel");
  
// I only want to show 3 project cards at once, so I’m making 3 reusable slots
const slots = [0, 1, 2].map(() => {
    const item = document.createElement("div");
    item.className = "carousel-item side"; // default each one to side first
  
    const card = document.createElement("div");
    card.className = "project-card";
  
    const img = document.createElement("img");
    img.className = "project-thumbnail";
  
    const content = document.createElement("div");
    content.className = "project-content";
    const title = document.createElement("h3");
  
    const desc = document.createElement("div");
    desc.className = "project-description";
  
    content.appendChild(title);
    card.appendChild(img);
    card.appendChild(content);
    card.appendChild(desc);
    item.appendChild(card);
    carousel.appendChild(item);

    return { item, card, img, title, desc };
});
  
// This is the function that updates the visible project cards
function updateCarousel() {
    const len = projects.length;
    const indices = [
        (currentIndex - 1 + len) % len,
        currentIndex,
        (currentIndex + 1) % len
    ];
  
    slots.forEach((slot, i) => {
        const project = projects[indices[i]];
        const role = i === 1 ? "center" : "side";
  
        // Fill in each card with project info
        slot.img.src = project.image;
        slot.img.alt = project.title;
        slot.title.textContent = project.title;
        slot.desc.textContent = project.description;
        slot.card.onclick = () => window.open(project.link, "_blank");
  
        // Toggle center/side class to apply scale styling
        slot.item.classList.remove("center", "side");
        slot.item.classList.add(role);
    });
}
  
// This gets triggered when you click the arrows
function rotateCarousel(direction) {
    const len = projects.length;
    currentIndex = direction === "left"
        ? (currentIndex - 1 + len) % len
        : (currentIndex + 1) % len;
    updateCarousel();
}
  
// Call this once at the start so the first projects show up
updateCarousel();

// Handle the Email reveal and copy
document.getElementById("show-email-button").addEventListener("click", () => {
    const popup = document.getElementById("email-popup");
    popup.classList.toggle("hidden");
});
  
function copyEmail() {
    const email = "diego.diaz@example.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard!");
    });
}