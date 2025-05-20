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

    container.appendChild(card);
  }
}
