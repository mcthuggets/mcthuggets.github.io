const projects = [
  {
    id: "arcane-fishbones",
    title: "Fishbones Combat Beat",
    tag: "Character Animation",
    description: "A stylized action shot study focused on timing, anticipation, and high-energy weapon handling.",
    role: "Animator",
    tools: ["Blender", "Maya", "After Effects"],
    media: {
      type: "video",
      src: "resources/Arcane/Jinx%20Fishbones.mp4",
      poster: "resources/Sailor%20Moon/Sailor%20Moon.jpeg"
    },
    story:
      "This project exists to explore how exaggerated body mechanics can still feel grounded and readable in a cinematic frame. I focused on silhouette clarity and rhythmic pacing so each action beat lands quickly for reel viewers.",
    artefacts: [
      {
        title: "Blocking Pass",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae orci leo. Curabitur tempus volutpat sem, sed dapibus diam posuere id."
      },
      {
        title: "Spline Polish",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate, nisl in iaculis suscipit, ligula nunc bibendum magna, sed facilisis nunc sem at odio."
      },
      {
        title: "Final Camera Cut",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis facilisis tellus, vel tincidunt neque placerat non."
      }
    ],
    gallery: [
      { type: "video", src: "resources/Arcane/Jinx%20Fishbones.mp4", poster: "resources/Nun/Nun.jpeg" },
      { type: "video", src: "resources/Arcane/Jinx%20Arcane%20Gun.mp4", poster: "resources/Sailor%20Moon/Sailor%20Moon.jpeg" },
      { type: "image", src: "resources/Nun/Nun.jpeg", alt: "Frame study" }
    ]
  },
  {
    id: "arcane-gun",
    title: "Arcane Gun Performance",
    tag: "Motion Study",
    description: "A weapon-centric animation pass emphasizing recoil behavior, follow-through, and camera readability.",
    role: "Animator",
    tools: ["Maya", "Blender", "Unreal Engine"],
    media: {
      type: "video",
      src: "resources/Arcane/Jinx%20Arcane%20Gun.mp4",
      poster: "resources/Nun/Nun.jpeg"
    },
    story:
      "This project was built to bridge gameplay-inspired motion with cinematic staging. The goal was to make the animation useful both as a shot and as a timing reference for interactive implementation.",
    artefacts: [
      {
        title: "Reference Breakdown",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac tristique leo, id dapibus lectus."
      },
      {
        title: "Body Mechanics Layer",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed diam eu odio porttitor luctus non nec lacus."
      },
      {
        title: "Secondary Motion",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu lacinia, semper justo sit amet, vestibulum lorem."
      }
    ],
    gallery: [
      { type: "video", src: "resources/Arcane/Jinx%20Arcane%20Gun.mp4", poster: "resources/Sailor%20Moon/Sailor%20Moon.jpeg" },
      { type: "image", src: "resources/Sailor%20Moon/Sailor%20Moon.jpeg", alt: "Concept style frame" },
      { type: "image", src: "resources/Nun/Nun.jpeg", alt: "Render pass" }
    ]
  },
  {
    id: "nun-portrait",
    title: "Nun Lighting Portrait",
    tag: "Look Development",
    description: "A portrait-driven exercise balancing stylized shading and subtle facial storytelling.",
    role: "Animator / Lighting Artist",
    tools: ["Blender", "Substance Painter"],
    media: {
      type: "image",
      src: "resources/Nun/Nun.jpeg",
      alt: "Nun portrait project"
    },
    story:
      "This project exists to test how much mood can be established with controlled color and restrained movement. I used this as an exploration of character presence in a static composition and as a base for future animation passes.",
    artefacts: [
      {
        title: "Color Script",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique, dui ac feugiat varius, urna ipsum viverra ante, et tempor lorem est ac leo."
      },
      {
        title: "Light Iterations",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar quam sed sem molestie, at tempor justo rhoncus."
      },
      {
        title: "Surface Detail Pass",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus dui id mi luctus, nec faucibus dui feugiat."
      }
    ],
    gallery: [
      { type: "image", src: "resources/Nun/Nun.jpeg", alt: "Nun portrait" },
      { type: "image", src: "resources/Sailor%20Moon/Sailor%20Moon.jpeg", alt: "Related style reference" },
      { type: "video", src: "resources/Arcane/Jinx%20Fishbones.mp4", poster: "resources/Nun/Nun.jpeg" }
    ]
  },
  {
    id: "sailor-expression",
    title: "Sailor Expression Study",
    tag: "Character Performance",
    description: "A character-focused expression and pose exploration centered on attitude and face shape language.",
    role: "Animator",
    tools: ["Blender", "Maya"],
    media: {
      type: "image",
      src: "resources/Sailor%20Moon/Sailor%20Moon.jpeg",
      alt: "Sailor Moon study"
    },
    story:
      "This project was made to sharpen facial acting instincts and body pose contrast in a single frame. It supports my broader goal of creating stronger emotional reads in short-form animation tests.",
    artefacts: [
      {
        title: "Facial Pose Sheet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat posuere orci, at pulvinar nibh posuere vitae."
      },
      {
        title: "Silhouette Review",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at justo luctus, tincidunt elit ut, vehicula erat."
      },
      {
        title: "Final Polish",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in feugiat purus. Mauris id nunc in sem tincidunt fermentum."
      }
    ],
    gallery: [
      { type: "image", src: "resources/Sailor%20Moon/Sailor%20Moon.jpeg", alt: "Character render" },
      { type: "image", src: "resources/Nun/Nun.jpeg", alt: "Lighting comparison" },
      { type: "video", src: "resources/Arcane/Jinx%20Arcane%20Gun.mp4", poster: "resources/Sailor%20Moon/Sailor%20Moon.jpeg" }
    ]
  },
  {
    id: "cinematic-previs",
    title: "Cinematic Previs Sequence",
    tag: "Previsualization",
    description: "A short previs workflow sample used to study camera language, continuity, and pacing under time constraints.",
    role: "Animator / Layout",
    tools: ["Unreal Engine", "Blender", "Premiere Pro"],
    media: {
      type: "video",
      src: "resources/Arcane/Jinx%20Fishbones.mp4",
      poster: "resources/Nun/Nun.jpeg"
    },
    story:
      "I created this project to practice turning loose narrative beats into a coherent shot sequence quickly. The emphasis was clarity of staging and decision-making under production-like deadlines.",
    artefacts: [
      {
        title: "Shot Planning",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac velit sed dui interdum pellentesque quis non velit."
      },
      {
        title: "Camera Blocking",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum ultrices lorem, sit amet gravida tortor varius non."
      },
      {
        title: "Editorial Timing",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius lectus sed dictum convallis."
      }
    ],
    gallery: [
      { type: "video", src: "resources/Arcane/Jinx%20Fishbones.mp4", poster: "resources/Nun/Nun.jpeg" },
      { type: "video", src: "resources/Arcane/Jinx%20Arcane%20Gun.mp4", poster: "resources/Sailor%20Moon/Sailor%20Moon.jpeg" },
      { type: "image", src: "resources/Sailor%20Moon/Sailor%20Moon.jpeg", alt: "Storyboard frame" }
    ]
  }
];

const featuredGrid = document.getElementById("featured-grid");
const portfolioGrid = document.getElementById("portfolio-grid");
const projectDetail = document.getElementById("project-detail");
const detailMedia = document.getElementById("detail-media");
const detailTag = document.getElementById("detail-tag");
const detailTitle = document.getElementById("project-title");
const detailSummary = document.getElementById("detail-summary");
const detailRole = document.getElementById("detail-role");
const detailTools = document.getElementById("detail-tools");
const detailStory = document.getElementById("detail-story");
const artefactList = document.getElementById("artefact-list");
const detailGallery = document.getElementById("detail-gallery");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const closeDetailButtons = document.querySelectorAll("[data-close-detail]");
const demoReelFrame = document.querySelector(".reel-frame iframe");

let lastScrollY = 0;
let currentProjectId = null;
let deferredMediaObserver = null;

function mediaMarkup(media, className = "media-frame") {
  if (media.type === "video") {
    const poster = media.poster ? ` poster="${media.poster}"` : "";
    return `
      <div class="${className}">
        <video controls preload="metadata"${poster}>
          <source data-src="${media.src}" type="video/mp4">
        </video>
      </div>
    `;
  }

  const width = media.width || 1366;
  const height = media.height || 768;

  return `
    <div class="${className}">
      <img src="${media.src}" alt="${media.alt || "Project image"}" loading="lazy" decoding="async" width="${width}" height="${height}">
    </div>
  `;
}

function mediaCardMarkup(media) {
  if (media.type === "video") {
    const poster = media.poster ? ` poster="${media.poster}"` : "";
    return `
      <video muted loop playsinline preload="none" data-lazy-video${poster}>
        <source data-src="${media.src}" type="video/mp4">
      </video>
    `;
  }

  const width = media.width || 1366;
  const height = media.height || 768;

  return `<img src="${media.src}" alt="${media.alt || "Project preview"}" loading="lazy" decoding="async" width="${width}" height="${height}">`;
}

function renderCards() {
  const featured = projects.slice(0, 3)
    .map(
      (project) => `
        <article class="project-card" tabindex="0" role="button" data-project-id="${project.id}" aria-label="Open ${project.title} details">
          <div class="project-card-media">
            ${mediaCardMarkup(project.media)}
          </div>
          <div class="project-card-body">
            <h3>${project.title}</h3>
            <span class="project-tag">${project.tag}</span>
          </div>
        </article>
      `
    )
    .join("");

  const all = projects
    .map(
      (project) => `
        <article class="project-card" tabindex="0" role="button" data-project-id="${project.id}" aria-label="Open ${project.title} details">
          <div class="project-card-media">
            ${mediaCardMarkup(project.media)}
          </div>
          <div class="project-card-body">
            <h3>${project.title}</h3>
            <span class="project-tag">${project.tag}</span>
          </div>
        </article>
      `
    )
    .join("");

  featuredGrid.innerHTML = featured;
  portfolioGrid.innerHTML = all;
  featuredGrid.setAttribute("aria-busy", "false");
  portfolioGrid.setAttribute("aria-busy", "false");
}

function renderProjectDetail(project) {
  detailMedia.innerHTML = mediaMarkup(project.media);
  detailTag.textContent = project.tag;
  detailTitle.textContent = project.title;
  detailSummary.textContent = project.description;
  detailRole.textContent = project.role;
  detailTools.textContent = project.tools.join(", ");
  detailStory.textContent = project.story;

  artefactList.innerHTML = project.artefacts
    .map(
      (item) => `
        <article class="artefact-item">
          <h4>${item.title}</h4>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");

  detailGallery.innerHTML = project.gallery
    .map((item) => {
      if (item.type === "video") {
        const poster = item.poster ? ` poster="${item.poster}"` : "";
        return `
          <div class="gallery-item">
            <video controls preload="metadata"${poster}>
              <source data-src="${item.src}" type="video/mp4">
            </video>
          </div>
        `;
      }

      const width = item.width || 1366;
      const height = item.height || 768;

      return `
        <div class="gallery-item">
          <img src="${item.src}" alt="${item.alt || "Gallery frame"}" loading="lazy" decoding="async" width="${width}" height="${height}">
        </div>
      `;
    })
    .join("");

  optimizeRenderedMedia(detailMedia);
  optimizeRenderedMedia(detailGallery);
}

function hydrateVideo(video) {
  if (!video || video.dataset.hydrated === "true") {
    return;
  }

  const source = video.querySelector("source[data-src]");
  if (!source) {
    video.dataset.hydrated = "true";
    return;
  }

  source.src = source.dataset.src;
  source.removeAttribute("data-src");
  video.load();
  video.dataset.hydrated = "true";
}

function optimizeRenderedMedia(scope = document) {
  scope.querySelectorAll(".project-card-media").forEach((frame) => {
    const media = frame.querySelector("img, video");
    if (!media) {
      return;
    }

    frame.classList.add("is-media-loading");
    const markReady = () => {
      frame.classList.remove("is-media-loading");
      frame.classList.add("is-media-loaded");
    };

    if (media.tagName === "IMG") {
      if (media.complete) {
        markReady();
      } else {
        media.addEventListener("load", markReady, { once: true });
        media.addEventListener("error", markReady, { once: true });
      }
      return;
    }

    media.addEventListener("loadeddata", markReady, { once: true });
    media.addEventListener("error", markReady, { once: true });
  });

  scope.querySelectorAll("video").forEach((video) => {
    if (video.hasAttribute("autoplay") || video.closest(".project-detail")) {
      hydrateVideo(video);
    }
  });
}

function setupDeferredMediaLoading() {
  const deferredVideos = document.querySelectorAll("video[data-lazy-video]");

  if ("IntersectionObserver" in window) {
    deferredMediaObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target;
            hydrateVideo(video);
            deferredMediaObserver.unobserve(video);
          }
        });
      },
      {
        rootMargin: "180px 0px"
      }
    );

    deferredVideos.forEach((video) => deferredMediaObserver.observe(video));
  } else {
    deferredVideos.forEach(hydrateVideo);
  }

  if (!demoReelFrame) {
    return;
  }

  const loadReel = () => {
    if (demoReelFrame.src || !demoReelFrame.dataset.src) {
      return;
    }

    demoReelFrame.src = demoReelFrame.dataset.src;
  };

  if ("IntersectionObserver" in window) {
    const reelObserver = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          loadReel();
          observer.disconnect();
        }
      },
      { rootMargin: "120px 0px" }
    );

    reelObserver.observe(demoReelFrame);
  } else {
    loadReel();
  }
}

function finalizeLoadingState() {
  window.requestAnimationFrame(() => {
    document.body.classList.remove("is-loading");
  });
}

function setActiveNavLink(sectionId) {
  navLinks.forEach((link) => {
    const target = link.getAttribute("href")?.replace("#", "");
    link.classList.toggle("is-active", target === sectionId);
  });
}

function openProject(projectId, updateHash = true) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) {
    return;
  }

  currentProjectId = projectId;
  renderProjectDetail(project);

  if (!projectDetail.classList.contains("is-open")) {
    lastScrollY = window.scrollY;
  }

  projectDetail.classList.add("is-open");
  projectDetail.setAttribute("aria-hidden", "false");
  document.body.classList.add("detail-open");
  setActiveNavLink("portfolio");

  if (updateHash) {
    window.location.hash = `project/${projectId}`;
  }
}

function closeProject(updateHash = true) {
  projectDetail.classList.remove("is-open");
  projectDetail.setAttribute("aria-hidden", "true");
  document.body.classList.remove("detail-open");

  if (updateHash && currentProjectId) {
    window.location.hash = "portfolio";
  }

  currentProjectId = null;
  window.scrollTo({ top: lastScrollY, behavior: "instant" });
}

function projectRouteFromHash() {
  const hash = window.location.hash.replace("#", "");
  if (hash.startsWith("project/")) {
    const id = hash.split("/")[1];
    openProject(id, false);
    return;
  }

  if (projectDetail.classList.contains("is-open")) {
    closeProject(false);
  }
}

function bindProjectEvents() {
  document.querySelectorAll("[data-project-id]").forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = card.getAttribute("data-project-id");
      openProject(projectId);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const projectId = card.getAttribute("data-project-id");
        openProject(projectId);
      }
    });

    const previewVideo = card.querySelector("video");
    if (previewVideo) {
      card.addEventListener("mouseenter", () => {
        hydrateVideo(previewVideo);
        previewVideo.play().catch(() => {});
      });
      card.addEventListener("focusin", () => hydrateVideo(previewVideo));
      card.addEventListener("mouseleave", () => {
        previewVideo.pause();
        previewVideo.currentTime = 0;
      });
    }
  });

  closeDetailButtons.forEach((button) => {
    button.addEventListener("click", () => closeProject());
  });
}

function setupMobileMenu() {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

function setupActiveSectionTracking() {
  const sections = document.querySelectorAll("[data-section]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !projectDetail.classList.contains("is-open")) {
          setActiveNavLink(entry.target.getAttribute("data-section"));
        }
      });
    },
    {
      threshold: 0.45
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      feedback.textContent = "Please complete all required fields before sending.";
      return;
    }

    feedback.textContent = "Thanks. Your message has been captured in this frontend demo.";
    form.reset();
  });
}

function setupFooterYear() {
  const year = document.getElementById("year");
  year.textContent = new Date().getFullYear();
}

window.addEventListener("hashchange", projectRouteFromHash);

document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  setupDeferredMediaLoading();
  optimizeRenderedMedia();
  bindProjectEvents();
  setupMobileMenu();
  setupActiveSectionTracking();
  setupRevealAnimations();
  setupContactForm();
  setupFooterYear();
  projectRouteFromHash();
  finalizeLoadingState();
});
