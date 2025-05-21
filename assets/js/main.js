const data = {
  warmup: {
    displayName: "Warmup",
    description: "Warmup exercises to get you started.",
    thumbnailPath: "assets/images/placeholders/test_placeholder.jpg",
    videos: [
      {
        offlinePath: "assets/videos/warmup1.mp4",
        onlineUrl: "https://www.instagram.com/reel/DIL4N1kzNxm/?igsh=MWN2OXV0N2J5bmRocg==",
        // videoThumbnailPath: "assets/images/thumbnails/SampleFile_Thumbnail.jpg",
      },
    ],
  },
  flexibility: {
    displayName: "Flexibility",
    description: "Flexibility exercises to improve your range of motion.",
    thumbnailPath: "assets/images/placeholders/test_placeholder.jpg",
    videos: [
      {
        offlinePath: "assets/videos/flexibility1.mp4",
        onlineUrl: "https://www.instagram.com/reel/DITVcHXvw3s/?igsh=MmhqMzRocXJxNnpu",
      },
      {
        offlinePath: "assets/videos/flexibility2.mp4",
        onlineUrl: "https://www.instagram.com/reel/DHutTuTSjbO/?igsh=MTBrajYydW4yMmxsYw==",
      },
      {
        offlinePath: "assets/videos/flexibility3.mp4",
        onlineUrl: "https://www.instagram.com/reel/DH3U1gRp6qX/?igsh=MXE0dnF6bmFxZ3Rqdw==",
      },
    ],
  },
  neck: {
    displayName: "Neck",
    description: "Neck exercises to relieve tension and improve posture.",
    thumbnailPath: "assets/images/placeholders/test_placeholder.jpg",
    videos: [
      {
        offlinePath: "assets/videos/neck1.mp4",
        onlineUrl: "https://youtube.com/shorts/7AQ8ZyMCOvM?feature=shared",
      },
    ],
  },
  ankle: {
    displayName: "Ankle",
    description: "Ankle exercises to strengthen and stabilize your ankles.",
    thumbnailPath: "assets/images/placeholders/test_placeholder.jpg",
    videos: [
      {
        offlinePath: "assets/videos/ankle1.mp4",
        onlineUrl: "https://youtube.com/shorts/oE6SQanl5e4?feature=shared",
      },
    ],
  },
  calf: {
    displayName: "Calf",
    description: "Calf exercises to improve strength and flexibility.",
    thumbnailPath: "assets/images/placeholders/test_placeholder.jpg",
    videos: [
      {
        offlinePath: "assets/videos/calf1.mp4",
        onlineUrl: "https://youtube.com/shorts/a-x_NR-ibos?feature=shared",
      },
      {
        offlinePath: "assets/videos/calf2.mp4",
        onlineUrl: "https://youtube.com/shorts/L-We4LHKDcU?feature=shared",
      },
    ],
  },
  thigh: {
    displayName: "Thigh",
    description: "Thigh exercises to strengthen and tone your thighs.",
    thumbnailPath: "assets/images/placeholders/test_placeholder.jpg",
    videos: [
      {
        offlinePath: "assets/videos/thigh1.mp4",
        onlineUrl: "https://www.instagram.com/reel/DHqp9k3J_7L/?igsh=cjIyMWR6M3JwODJh",
      },
      {
        offlinePath: "assets/videos/thigh2.mp4",
        onlineUrl: "https://youtube.com/shorts/vob9MY1UkuY?feature=shared",
      },
      {
        offlinePath: "assets/videos/thigh3.mp4",
        onlineUrl: "https://youtube.com/shorts/AqiS1Qe_drQ?feature=shared",
      },
    ],
  },
  glute: {
    displayName: "Glute",
    description: "Glute exercises to strengthen and tone your glutes.",
    thumbnailPath: "assets/images/placeholders/test_placeholder.jpg",
    videos: [
      {
        offlinePath: "assets/videos/glute1.mp4",
        onlineUrl: "https://www.instagram.com/reel/DF-lmGPKzy4/?igsh=MWNiaTIwMGVwdDdkeA==",
      },
      {
        offlinePath: "assets/videos/glute2.mp4",
        onlineUrl: "https://youtube.com/shorts/BhUpWmlKcJ8?feature=shared",
      },
      {
        offlinePath: "assets/videos/glute3.mp4",
        onlineUrl: "https://youtube.com/shorts/Fbw_98aWeA8?feature=shared",
      },
      {
        offlinePath: "assets/videos/glute4.mp4",
        onlineUrl: "https://www.instagram.com/reel/DDcHRHoSaWr/?igsh=Ym94M2t0dHdudzhr",
      },
    ],
  },
};

// Replace <main> tag content in the home page preserving the header and footer.
function loadPage(pagePath) {
  fetch(pagePath)
    .then((res) => res.text())
    .then((html) => {
      document.querySelector("main").innerHTML = html;
      // Optionally re-run scripts after new HTML is injected
    });
}

function renderHomeCards() {
  const container = document.getElementById("card-container");
  if (!container) {
    console.error("Card container not found.");
    return;
  }

  for (const categoryKey in data) {
    // const { displayName, description, thumbnailPath } = data[categoryKey]; // ? Top 3 properties assigned.
    const eachCategory = data[categoryKey];

    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";

    card.innerHTML = `
      <div class="card h-100 shadow category-card position-relative overflow-hidden border-0">
        <img src="${eachCategory.thumbnailPath}" class="card-img category-thumbnail" alt="${eachCategory.displayName}">
        <div class="card-overlay d-flex flex-column justify-content-end p-3">
          <h5 class="card-title text-white fw-bold">${eachCategory.displayName}</h5>
          <p class="card-text text-light small">${eachCategory.description}</p>
        </div>
      </div>
      `;

    // Add click event
    card.querySelector(".card").addEventListener("click", () => {
      loadContentPage(categoryKey);
    });

    container.appendChild(card);
  }
}

function loadContentPage(categoryKey) {
  const categoryData = data[categoryKey];
  if (!categoryData) {
    console.error("Invalid category key:", categoryKey);
    return;
  }

  fetch("src/pages/content.html")
    .then((res) => res.text())
    .then((html) => {
      document.querySelector("main").innerHTML = html;

      // Dynamically update the title
      const titleEl = document.getElementById("category-title");
      if (titleEl) {
        titleEl.textContent = categoryData.displayName + " Videos";
      }

      renderVideos(categoryKey);
    });
}

function renderVideos(categoryKey) {
  const videoGrid = document.getElementById("video-grid");
  if (!videoGrid) {
    console.error("Video grid container not found in content.html");
    return;
  }

  const category = data[categoryKey];
  if (!category || !category.videos || category.videos.length === 0) {
    videoGrid.innerHTML = `<p class="text-muted">No videos available for this category.</p>`;
    return;
  }

  category.videos.forEach((video) => {
    const videoCard = document.createElement("div");
    videoCard.className = "col-md-4 mb-4";

    videoCard.innerHTML = `
      <div class="card h-100 shadow-sm">
        <!-- <img src="${video.videoThumbnailPath}" class="card-img-top" alt="Video Thumbnail"> -->
        <div class="card-body">
          <video controls width="100%" height="auto" src="${video.offlinePath}" class="mt-2"></video>
          <a href="${video.onlineUrl}" target="_blank" class="btn btn-sm btn-primary mb-2">Watch Online</a>
        </div>
      </div>
    `;

    videoGrid.appendChild(videoCard);
  });
}

function loadHomePage() {
  fetch("src/pages/home.html")
    .then((res) => res.text())
    .then((html) => {
      document.querySelector("main").innerHTML = html;
      renderHomeCards();
    });
}
