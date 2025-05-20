const data = {
  genre1: {
    displayName: "Genre 1",
    description: "Description of Genre 1",
    thumbnailPath: "assets/images/placeholders/test_placeholder.jpg",
    videos: [
      {
        offlinePath: "assets/videos/SampleVideo_1280x720_1mb.mp4",
        onlineUrl: "https://www.youtube.com/watch?v=cNJU2TvLkY0",
        videoThumbnailPath: "assets/images/thumbnails/SampleFile_Thumbnail.jpg",
      },
      {
        offlinePath: "assets/videos/SampleVideo_1280x720_1mb.mp4",
        onlineUrl: "https://www.youtube.com/watch?v=cNJU2TvLkY0",
        videoThumbnailPath: "assets/images/thumbnails/SampleFile_Thumbnail.jpg",
      },
    ],
  },
  genre2: {
    displayName: "Genre 2",
    description: "Description of Genre 2",
    thumbnailPath: "assets/images/placeholders/test_placeholder.jpg",
    videos: [
      {
        offlinePath: "assets/videos/SampleVideo_1280x720_1mb.mp4",
        onlineUrl: "https://www.youtube.com/watch?v=cNJU2TvLkY0",
        videoThumbnailPath: "assets/images/thumbnails/SampleFile_Thumbnail.jpg",
      },
      {
        offlinePath: "assets/videos/SampleVideo_1280x720_1mb.mp4",
        onlineUrl: "https://www.youtube.com/watch?v=cNJU2TvLkY0",
        videoThumbnailPath: "assets/images/thumbnails/SampleFile_Thumbnail.jpg",
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
