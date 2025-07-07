// My list of projects
const projects = [
    {
        title: "Project 1",
        image: "assets/InProgress.jpg",
        description: "A project will go here soon!",
        link: "#"
    },
    {
        title: "Project 2",
        image: "assets/InProgress.jpg",
        description: "This is a funny little machine learning project!",
        link: "#"
    },
    {
        title: "Project 3",
        image: "assets/InProgress.jpg",
        description: "Something useful will go here trust me!",
        link: "#"
    },
    {
        title: "Project 4",
        image: "assets/InProgress.jpg",
        description: "Maybe a full stack thing someday?",
        link: "#"
    },
    {
        title: "Project 5",
        image: "assets/InProgress.jpg",
        description: "I’ll figure this out as I go!",
        link: "#"
    }
];
  
let currentIndex = 0;
const carousel = document.getElementById("carousel");
  
// I only want to show 3 project cards at once
const slots = [0, 1, 2].map(() => {
    const item = document.createElement("div");
    item.className = "carousel-item side";
  
    const card = document.createElement("div");
    card.className = "project-card";
  
    const img = document.createElement("img");
    img.className = "project-thumbnail";
  
    const content = document.createElement("div");
    content.className = "project-content";

    const title = document.createElement("h3");
    title.className = "project-title";
  
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
  
// Updates the visible project cards
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
  
        // Apply scale styling
        slot.item.classList.remove("center", "side");
        slot.item.classList.add(role);
    });
}
  
// Click the arrows
function rotateCarousel(direction) {
    const len = projects.length;
    currentIndex = direction === "left"
        ? (currentIndex - 1 + len) % len
        : (currentIndex + 1) % len;
    updateCarousel();
}
  
updateCarousel();

// Email reveal and copy
document.getElementById("show-email-button").addEventListener("click", () => {
    const popup = document.getElementById("email-popup");
    popup.classList.toggle("hidden");
});

document.getElementById("copy-email-button").addEventListener("click", copyEmail);
  
function copyEmail() {
    const email = document.getElementById("email-address").textContent.trim();
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard!");
    });
}