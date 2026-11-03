// MOBILE NAVIGATION
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Close mobile navigation after clicking
document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

// PROJECT DETAILS
const projectDetails = {
  bizpulse: {
    title: "BIZPULSE AI",
    description: "A business intelligence project focused on business performance, trends and actionable insights.",
    tools: "Python, SQL, Analytics and Machine Learning"
  },

  swiggy: {
    title: "Swiggy Restaurant Analysis",
    description: "An SQL analytics project exploring restaurant ratings, cuisines, pricing and popular restaurant chains across Indian cities.",
    tools: "MySQL, SQL and Data Analysis"
  },

  uber: {
    title: "Hyderabad Uber Analytics",
    description: "A dashboard concept for analyzing bookings, revenue, average fares, payment methods and pickup-area trends.",
    tools: "Power BI, Excel and DAX"
  },

  traffic: {
    title: "Smart Traffic Monitoring System",
    description: "An IoT-based traffic management system that adjusts traffic signal timing according to detected vehicle density.",
    tools: "Arduino Mega, IR Sensors and IoT"
  }
};

const modal = document.getElementById("projectModal");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const project = projectDetails[card.dataset.project];

    document.getElementById("modalTitle").textContent =
      project.title;

    document.getElementById("modalDescription").textContent =
      project.description;

    document.getElementById("modalTools").textContent =
      "Technologies: " + project.tools;

    modal.classList.add("show");
  });
});

// CLOSE PROJECT POPUP
document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", event => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    modal.classList.remove("show");
  }
});

// CURRENT YEAR
document.getElementById("year").textContent =
  new Date().getFullYear();