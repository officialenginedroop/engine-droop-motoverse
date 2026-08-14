/* =========================================================
   ENGINE DROOP : MOTOVERSE
   EDITABLE CONTENT
========================================================= */

/* 1. CHANGE YOUR LINKS HERE */

const siteLinks = {
    discord: "https://discord.gg/brtddZ56d",
    instagram: "https://www.instagram.com/enginedroopmotoverse",
    twitter: "https://x.com/enginedroopmoto",
    youtube: "https://www.youtube.com/@officialenginedroop",
    rulebook: "https://engine-droop.gitbook.io/engine-droop-rulebook"
};


/* 2. CHANGE THE PEOPLE HERE */

const teamMembers = [
    {
        name: "!Spydo",
        role: "FOUNDER"
    },
    {
        name: "Rosie Hart",
        role: "CO-FOUNDER"
    },
    {
        name: "Shadow Playz",
        role: "STAFF"
    }
];


/* 3. CHANGE EVENT TYPES HERE
   These are permanent event categories, not upcoming events. */

const eventTypes = [
    {
        name: "RACING",
        number: "01",
        description: "Competitive races where drivers put their builds and skills to the test."
    },
    {
        name: "TIME TRIALS",
        number: "02",
        description: "Solo runs focused on speed, precision and setting the fastest time."
    },
    {
        name: "AUTO SHOWS",
        number: "03",
        description: "Showcase your build, style and creativity to the Motoverse community."
    },
    {
        name: "CHAMPIONSHIPS",
        number: "04",
        description: "Structured competitions where drivers compete across multiple races."
    },
    {
        name: "BETTING EVENTS",
        number: "05",
        description: "Competitive events where players can place bets and compete for prizes under server rules."
    },
    {
        name: "CLUB EVENTS",
        number: "06",
        description: "Player-created automotive events organized by clubs and communities."
    }
];


/* 4. SOCIAL ICONS */

const socialIcons = {
    instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg>`,
    discord: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.54 5.08A16.7 16.7 0 0 0 15.4 3.8l-.5 1.02a15.2 15.2 0 0 0-5.8 0L8.6 3.8a16.7 16.7 0 0 0-4.14 1.28C1.85 9.02 1.14 12.88 1.5 16.68a16.8 16.8 0 0 0 5.1 2.56l1.23-1.68c-.68-.25-1.33-.57-1.94-.96l.47-.36a11.8 11.8 0 0 0 11.28 0l.47.36c-.61.39-1.26.71-1.94.96l1.23 1.68a16.8 16.8 0 0 0 5.1-2.56c.43-4.4-.74-8.22-2.96-11.6ZM8.8 14.6c-1.1 0-2-.99-2-2.2s.88-2.2 2-2.2c1.12 0 2.02.99 2 2.2 0 1.21-.88 2.2-2 2.2Zm6.4 0c-1.1 0-2-.99-2-2.2s.88-2.2 2-2.2c1.12 0 2.02.99 2 2.2 0 1.21-.88 2.2-2 2.2Z"></path></svg>`,
    twitter: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.8h1.73L8.25 4.1H6.4L17.8 19.8Z"></path></svg>`,
    youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.8V8.2l6.4 3.8-6.4 3.8Z"></path></svg>`
};


/* 5. APPLY LINKS */

document.getElementById("headerDiscord").href = siteLinks.discord;
document.getElementById("mobileDiscord").href = siteLinks.discord;
document.getElementById("heroDiscord").href = siteLinks.discord;
document.getElementById("joinDiscord").href = siteLinks.discord;
document.getElementById("rulesButton").href = siteLinks.rulebook;


/* 6. CREATE TEAM */

const teamGrid = document.getElementById("teamGrid");

teamMembers.forEach((member, index) => {
    const card = document.createElement("article");

    card.className = "team-card";

    card.innerHTML = `
        <div class="team-number">${String(index + 1).padStart(2, "0")}</div>
        <div class="team-info">
            <span>${member.role}</span>
            <h3>${member.name}</h3>
        </div>
        <div class="team-arrow">↗</div>
    `;

    teamGrid.appendChild(card);
});


/* 7. CREATE EVENTS */

const eventsGrid = document.getElementById("eventsGrid");

eventTypes.forEach((event) => {
    const card = document.createElement("article");

    card.className = "event-card";

    card.innerHTML = `
        <div class="event-number">${event.number} / EVENT</div>
        <h3>${event.name}</h3>
        <p>${event.description}</p>
    `;

    eventsGrid.appendChild(card);
});


/* 8. CREATE SOCIAL LINKS */

const socialLinks = document.getElementById("socialLinks");

const socialData = [
    { name:"Instagram", url:siteLinks.instagram, icon:socialIcons.instagram },
    { name:"Discord", url:siteLinks.discord, icon:socialIcons.discord },
    { name:"X / Twitter", url:siteLinks.twitter, icon:socialIcons.twitter },
    { name:"YouTube", url:siteLinks.youtube, icon:socialIcons.youtube }
];

socialData.forEach((social) => {
    const link = document.createElement("a");

    link.className = "social-link";
    link.href = social.url;
    link.target = "_blank";
    link.rel = "noopener";
    link.setAttribute("aria-label", social.name);
    link.innerHTML = social.icon;

    socialLinks.appendChild(link);
});


/* 9. LOADER */

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("done");
    }, 800);
});


/* 10. HEADER SCROLL */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
});


/* 11. MOBILE MENU */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");

    menuButton.classList.toggle("active", isOpen);
    menuButton.setAttribute("aria-expanded", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
});

document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    });
});


/* 12. SCROLL REVEAL */

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold:0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
});
