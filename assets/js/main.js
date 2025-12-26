const data = {
  // TODO: All `sub-categories videos` "find & populate" with dumbbells or body-weight workouts.
  // TODO: "Rename and change" `video & thumbnails` as per the category/sub-category.
  warmup: {
    displayName: "Warmup",
    description: "Warmup exercises to get you started.",
    thumbnailPath: "assets/images/placeholders/warmup1.png",
    videos: [
      {
        offlinePath: "assets/videos/warmup1.mp4",
        onlineUrl: "https://www.instagram.com/reel/DIL4N1kzNxm/?igsh=MWN2OXV0N2J5bmRocg==",
        // videoThumbnailPath: "assets/images/thumbnails/SampleFile_Thumbnail.jpg",
      },
    ],
  },
  mobility: {
    displayName: "Mobility",
    description: "Mobility exercises to improve your range of motion.",
    thumbnailPath: "assets/images/placeholders/mobility1.png",
    videos: [
      {
        offlinePath: "assets/videos/mobility1.mp4",
        onlineUrl: "https://www.instagram.com/reel/DITVcHXvw3s/?igsh=MmhqMzRocXJxNnpu",
      },
      {
        offlinePath: "assets/videos/mobility2.mp4",
        onlineUrl: "https://www.instagram.com/reel/DHutTuTSjbO/?igsh=MTBrajYydW4yMmxsYw==",
      },
      {
        offlinePath: "assets/videos/mobility3.mp4", // ! Startcut
        onlineUrl: "https://www.instagram.com/reel/DH3U1gRp6qX/?igsh=MXE0dnF6bmFxZ3Rqdw==",
      },
      {
        offlinePath: "assets/videos/lowerBack2.mp4",
        onlineUrl: "https://www.instagram.com/reel/DEsAd2UtI27/?igsh=MWFnNWNrdmw4N29idw==",
      },
      {
        offlinePath: "assets/videos/lowerBack1.mp4",
        onlineUrl: "https://www.instagram.com/reel/DG0aMTKgnIl/?igsh=dnkxOTg3eXphZ2lz",
      },
      {
        offlinePath: "assets/videos/lowerBack4.mp4",
        onlineUrl: "https://youtube.com/shorts/HbFIpIVwKp4?feature=shared",
      },
      {
        offlinePath: "assets/videos/spine1.mp4",
        onlineUrl: "https://www.instagram.com/reel/DHaWJUbM6vy/?igsh=OWh6bHpyeGp3bzM0",
      },
      {
        offlinePath: "assets/videos/spine2.mp4",
        onlineUrl: "https://www.instagram.com/reel/DIrL7HYynAC/?igsh=OWE1ejlvdm53enc=",
      },
    ],
  },
  chest: {
    displayName: "Chest",
    description: "Chest exercises to strengthen and tone your chest.",
    thumbnailPath: "assets/images/placeholders/chest1.png",
    subCategories: {
      pectorals: {
        displayName: "Pectorals (Pecs) / Middle Chest",
        description: "Pecs exercises to strengthen and tone your pectoral muscles.",
        thumbnailPath: "assets/images/placeholders/chest1.png",
        videos: [
          {
            offlinePath: "assets/videos/chest1.mp4",
            onlineUrl: "https://www.instagram.com/reel/DCoQGyYzk0P/?igsh=ZThycHJvbHpydWs1",
          },
          {
            offlinePath: "assets/videos/chest2.mp4",
            onlineUrl: "https://www.instagram.com/reel/DFXUH8DSN59/?igsh=OXhxMm94cjhsZDY5",
          },
          {
            offlinePath: "assets/videos/chest4.mp4",
            onlineUrl: "https://youtube.com/shorts/VZUDAOL2LI8?feature=shared",
          },
          {
            offlinePath: "assets/videos/chest5.mp4",
            onlineUrl: "https://www.instagram.com/reel/DJegtv4IUwb/?igsh=amt6dzU4OXY2NHVq",
          },
        ],
      },
      upperChest: {
        displayName: "Upper Chest (Clavicular Head)",
        description: "Upper chest exercises to target the upper pectoral muscles.",
        thumbnailPath: "assets/images/placeholders/chest1.png",
        videos: [],
      },
      lowerChest: {
        displayName: "Lower Chest (Abdominal Head)",
        description: "Lower chest exercises to target the lower pectoral muscles.",
        thumbnailPath: "assets/images/placeholders/chest1.png",
        videos: [
          {
            offlinePath: "assets/videos/chest3.mp4", // ! Startcut
            onlineUrl: "https://youtube.com/shorts/NykyCcxIfY4?feature=shared",
          },
        ],
      },
    },
  },
  back: {
    displayName: "Back",
    description: "Back exercises to strengthen and tone your back muscles.",
    thumbnailPath: "assets/images/placeholders/back1.png",
    subCategories: {
      lats: {
        displayName: "Lats (Latissimus Dorsi)",
        description: "Lats exercises to strengthen and tone your latissimus dorsi muscles.",
        thumbnailPath: "assets/images/placeholders/back1.png",
        videos: [
          {
            offlinePath: "assets/videos/arm2.mp4",
            onlineUrl: "https://www.instagram.com/reel/DC01BlvI78m/?igsh=cWJrYjF2ZXEzaTBp",
          },
          {
            offlinePath: "assets/videos/shoulder1.mp4",
            onlineUrl: "https://www.instagram.com/reel/DIs8GJSzcH5/?igsh=MW9lanJzOWF1Y3locA==",
          },
          {
            offlinePath: "assets/videos/back2.mp4",
            onlineUrl: "https://www.instagram.com/reel/DPLQU33jzA3/?igsh=bTlmenhscDdzbXY1",
          },
          {
            offlinePath: "assets/videos/arm1.mp4",
            onlineUrl: "https://www.instagram.com/reel/DIvuRlwsvZT/?igsh=d2RkODlnMmcxMnVn",
          },
        ],
      },
      traps: {
        displayName: "Traps (Trapezius)",
        description: "Traps exercises to strengthen and tone your trapezius muscles.",
        thumbnailPath: "assets/images/placeholders/back1.png",
        videos: [
          {
            offlinePath: "assets/videos/neck1.mp4",
            onlineUrl: "https://youtube.com/shorts/7AQ8ZyMCOvM?feature=shared",
          },
        ],
      },
      middleBack: {
        displayName: "Middle Back (Rhomboids)",
        description: "Middle back exercises to strengthen and tone your rhomboid muscles.",
        thumbnailPath: "assets/images/placeholders/back1.png",
        videos: [
          {
            offlinePath: "assets/videos/back1.mp4", // ! Edit: Keep Last workout
            onlineUrl: "https://youtube.com/shorts/u-icTznUuz8?feature=shared",
          },
        ],
      },
      lowerBack: {
        displayName: "Lower Back (Erector Spinae)",
        description: "Lower back exercises to strengthen and tone your erector spinae muscles.",
        thumbnailPath: "assets/images/placeholders/back1.png",
        videos: [],
      },
    },
  },
  shoulder: {
    displayName: "Shoulders",
    description: "Shoulder exercises to strengthen and tone your shoulders.",
    thumbnailPath: "assets/images/placeholders/shoulder1.png",
    subCategories: {
      frontDelt: {
        displayName: "Front Delts (Anterior)",
        description: "Front delt exercises to strengthen and tone your anterior deltoid muscles.",
        thumbnailPath: "assets/images/placeholders/shoulder1.png",
        videos: [
          {
            offlinePath: "assets/videos/shoulder4.mp4", // ! Edit: Keep First workout
            onlineUrl: "https://www.instagram.com/reel/DJ6g6Ycs_4f/?igsh=MWprdXd0MGFiYmVwbg==",
          },
          {
            offlinePath: "assets/videos/shoulder2.mp4", // ! Edit: Keep First 2 workout
            onlineUrl: "https://youtube.com/shorts/guWmxcdmnwc?feature=shared",
          },
        ],
      },
      sideDelt: {
        displayName: "Side Delts (Lateral)",
        description: "Side delt exercises to strengthen and tone your lateral deltoid muscles.",
        thumbnailPath: "assets/images/placeholders/shoulder1.png",
        videos: [
          {
            offlinePath: "assets/videos/shoulder2.mp4",
            onlineUrl: "https://youtube.com/shorts/guWmxcdmnwc?feature=shared",
          },
        ],
      },
      rearDelt: {
        displayName: "Rear Delts (Posterior)",
        description: "Rear delt exercises to strengthen and tone your posterior deltoid muscles.",
        thumbnailPath: "assets/images/placeholders/shoulder1.png",
        videos: [
          {
            offlinePath: "assets/videos/shoulder4.mp4", // ! Edit: Keep Last workout
            onlineUrl: "https://www.instagram.com/reel/DJ6g6Ycs_4f/?igsh=MWprdXd0MGFiYmVwbg==",
          },
        ],
      },
    },
    // videos: [
    //   {
    //     offlinePath: "assets/videos/shoulder3.mp4",
    //     onlineUrl: "https://youtube.com/shorts/tAMW1e5hUKw?feature=shared",
    //   },
    // ],
  },
  arm: {
    displayName: "Arms",
    description: "Arm exercises to strengthen and tone your arms.",
    thumbnailPath: "assets/images/placeholders/arm1.png",
    subCategories: {
      bicep: {
        displayName: "Biceps",
        description: "Bicep exercises to strengthen and tone your biceps.",
        thumbnailPath: "assets/images/placeholders/bicep1.png",
        videos: [
          {
            offlinePath: "assets/videos/bicep1.mp4",
            onlineUrl: "https://youtube.com/shorts/_GziHDdJY10?feature=shared",
          },
          {
            offlinePath: "assets/videos/bicep2.mp4",
            onlineUrl: "https://youtube.com/shorts/IwGvls2g4p0?feature=shared",
          },
        ],
      },
      tricep: {
        displayName: "Triceps",
        description: "Tricep exercises to strengthen and tone your triceps.",
        thumbnailPath: "assets/images/placeholders/tricep1.png",
        videos: [
          {
            offlinePath: "assets/videos/tricep1.mp4",
            onlineUrl: "https://youtube.com/shorts/8IK6BkC0lWE?feature=shared",
          },
          {
            offlinePath: "assets/videos/tricep2.mp4",
            onlineUrl: "https://youtube.com/shorts/EhDqH4Ggp-k?feature=shared",
          },
          {
            offlinePath: "assets/videos/tricep3.mp4",
            onlineUrl: "https://youtube.com/shorts/5YaWrGPtIIE?feature=shared",
          },
          {
            offlinePath: "assets/videos/tricep4.mp4",
            onlineUrl: "https://www.instagram.com/reel/DHJK0K9uBKi/?igsh=dm85OTE1ZjBhNTRi",
          },
        ],
      },
      forearm: {
        displayName: "Forearm",
        description: "Forearm exercises to strengthen and tone your forearms.",
        thumbnailPath: "assets/images/placeholders/forearm1.png",
        videos: [
          {
            offlinePath: "assets/videos/forearm1.mp4",
            onlineUrl: "https://youtube.com/shorts/IOKmMcfzK_o?feature=shared",
          },
          {
            offlinePath: "assets/videos/forearm2.mp4",
            onlineUrl: "https://youtube.com/shorts/U9pVNnMSUmI?feature=shared",
          },
          {
            offlinePath: "assets/videos/forearm3.mp4",
            onlineUrl: "https://youtube.com/shorts/d5YiFNoiCa0?feature=shared",
          },
        ],
      },
    },
  },
  leg: {
    displayName: "Legs",
    description: "Leg exercises to strengthen and tone your legs.",
    thumbnailPath: "assets/images/placeholders/calf1.jpg",
    subCategories: {
      quads: {
        displayName: "Quads (Quadriceps)",
        description: "Quad exercises to strengthen and tone your quadriceps muscles.",
        thumbnailPath: "assets/images/placeholders/thigh1.jpg",
        videos: [
          {
            offlinePath: "assets/videos/thigh4.mp4",
            onlineUrl: "https://www.instagram.com/reel/DJ9Kv0UTevQ/?igsh=MzZvMTd6ZWdxNnMy",
          },
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
      hamstrings: {
        displayName: "Hamstrings",
        description: "Hamstring exercises to strengthen and tone your hamstrings muscles.",
        thumbnailPath: "assets/images/placeholders/thigh1.jpg",
        videos: [],
      },
      glute: {
        displayName: "Glute",
        description: "Glute exercises to strengthen and tone your glutes.",
        thumbnailPath: "assets/images/placeholders/glute1.png",
        videos: [
          {
            offlinePath: "assets/videos/lowerBack3.mp4",
            onlineUrl: "https://youtube.com/shorts/CqWdutpVHxk?feature=shared",
          },
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
        ],
      },
      calves: {
        displayName: "Calves",
        description: "Calf exercises to strengthen and tone your calf muscles.",
        thumbnailPath: "assets/images/placeholders/calf1.jpg",
        videos: [
          {
            offlinePath: "assets/videos/calf1.mp4",
            onlineUrl: "https://youtube.com/shorts/a-x_NR-ibos?feature=shared",
          },
          {
            offlinePath: "assets/videos/calf2.mp4",
            onlineUrl: "https://youtube.com/shorts/L-We4LHKDcU?feature=shared",
          },
          {
            offlinePath: "assets/videos/ankle1.mp4",
            onlineUrl: "https://youtube.com/shorts/oE6SQanl5e4?feature=shared",
          },
        ],
      },
    },
  },
  core: {
    displayName: "Core",
    description: "Core exercises to strengthen and tone your core muscles.",
    thumbnailPath: "assets/images/placeholders/abs1.jpg",
    subCategories: {
      abs: {
        displayName: "Abs",
        description: "Abdominal exercises to strengthen and tone your abdominal muscles.",
        thumbnailPath: "assets/images/placeholders/abs1.jpg",
        videos: [
          {
            offlinePath: "assets/videos/abs1.mp4",
            onlineUrl: "https://youtube.com/shorts/AJPhnaIy7cc?feature=shared",
          },
          {
            offlinePath: "assets/videos/abs2.mp4",
            onlineUrl: "https://youtube.com/shorts/bNbxV1c2c1U?feature=shared",
          },
          {
            offlinePath: "assets/videos/abs3.mp4",
            onlineUrl: "https://youtube.com/shorts/nWnv2psVIOA?feature=shared",
          },
          {
            offlinePath: "assets/videos/abs4.mp4",
            onlineUrl: "https://www.instagram.com/reel/DEbnuJ_oqnt/?igsh=ZGNvYnFzb2g0eDc4",
          },
          {
            offlinePath: "assets/videos/abs5.mp4", // ! Startcut
            onlineUrl: "https://www.instagram.com/reel/DHgHCP3Ir-9/?igsh=ZWNqNjdzOGttbDdm",
          },
          {
            offlinePath: "assets/videos/abs6.mp4",
            onlineUrl: "https://www.instagram.com/reel/DGvGtw0InUN/?igsh=MXc1bWM0Mm9neTVwdg==",
          },
        ],
      },
      obliques: {
        displayName: "Obliques",
        description: "Oblique exercises to strengthen and tone your oblique muscles.",
        thumbnailPath: "assets/images/placeholders/abs1.jpg",
        videos: [],
      },
      pelvicFloor: {
        displayName: "Pelvic Floor",
        description: "Pelvic floor exercises to strengthen and tone your pelvic floor muscles.",
        thumbnailPath: "assets/images/placeholders/pelvicFloor1.png",
        videos: [
          {
            offlinePath: "assets/videos/pelvicFloor1.mp4",
            onlineUrl: "https://www.instagram.com/reel/DCmjPc6IEI-/?igsh=MTk3dmQxbGIxd3M2bg==",
          },
          {
            offlinePath: "assets/videos/pelvicFloor2.mp4",
            onlineUrl: "https://youtube.com/shorts/4GKcC7pNKW4?feature=shared",
          },
          {
            offlinePath: "assets/videos/pelvicFloor3.mp4",
            onlineUrl: "https://youtube.com/shorts/Rlv0zQO-4Kg?feature=shared",
          },
        ],
      },
    },
  },
  calisthenics: {
    displayName: "Calisthenics",
    description: "Bodyweight exercises to build strength and flexibility.",
    thumbnailPath: "assets/images/placeholders/calisthenics1.png",
    videos: [
      {
        offlinePath: "assets/videos/calisthenics1.mp4",
        onlineUrl: "https://www.instagram.com/reel/DGvuaHxoeWS/?igsh=MWVsNGdsNHdxeDFwZA==",
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
        titleEl.textContent = categoryData.displayName;
      }

      // If category has subCategories render them first, otherwise render videos
      if (hasSubcategories(categoryData)) {
        renderSubcategories(categoryKey);
      } else {
        renderVideos(categoryKey);
      }
    });
}

function hasSubcategories(category) {
  return !!(category && category.subCategories && typeof category.subCategories === "object" && Object.keys(category.subCategories).length > 0);
}

function renderSubcategories(categoryKey) {
  const subGrid = document.getElementById("subcategory-grid");
  const videoGrid = document.getElementById("video-grid");
  const controls = document.getElementById("content-controls");
  const topBackBtn = document.getElementById("page-back-btn");
  if (!subGrid) {
    console.error("Subcategory grid container not found in content.html");
    return;
  }

  // Clear existing
  subGrid.innerHTML = "";
  if (videoGrid) videoGrid.innerHTML = "";
  if (controls) controls.innerHTML = "";
  // Ensure top back button returns to home when viewing subcategory list
  if (topBackBtn) {
    topBackBtn.textContent = "← Back";
    topBackBtn.onclick = loadHomePage;
    topBackBtn.classList.remove("btn-secondary");
    topBackBtn.classList.add("btn-dark");
  }

  const category = data[categoryKey];
  const sc = category.subCategories || {};

  const keys = Object.keys(sc);
  if (keys.length === 0) {
    subGrid.innerHTML = `<p class="text-muted">No subcategories available.</p>`;
    return;
  }

  keys.forEach((subKey) => {
    const sub = sc[subKey];
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
      <div class="card h-100 shadow category-card position-relative overflow-hidden border-0">
        <img src="${sub.thumbnailPath || category.thumbnailPath}" class="card-img category-thumbnail" alt="${sub.displayName}">
        <div class="card-overlay d-flex flex-column justify-content-end p-3">
          <h5 class="card-title text-white fw-bold">${sub.displayName}</h5>
          <p class="card-text text-light small">${sub.description || ""}</p>
        </div>
      </div>
    `;

    const innerCard = card.querySelector(".card");
    if (innerCard) {
      innerCard.addEventListener("click", () => renderVideos(categoryKey, subKey));
    }

    subGrid.appendChild(card);
  });
}

function renderVideos(categoryKey, subCategoryKey = null) {
  const videoGrid = document.getElementById("video-grid");
  const subGrid = document.getElementById("subcategory-grid");
  const controls = document.getElementById("content-controls");

  if (!videoGrid) {
    console.error("Video grid container not found in content.html");
    return;
  }

  videoGrid.innerHTML = "";
  if (subGrid) subGrid.innerHTML = ""; // hide subcategories when showing videos

  const category = data[categoryKey];
  if (!category) {
    videoGrid.innerHTML = `<p class="text-muted">Category not found.</p>`;
    return;
  }

  let videos = [];
  let title = category.displayName || "Videos";

  if (subCategoryKey !== null && hasSubcategories(category)) {
    const sc = category.subCategories || {};
    const sub = sc[subCategoryKey];
    if (!sub) {
      videoGrid.innerHTML = `<p class="text-muted">Subcategory not found.</p>`;
      return;
    }

    videos = sub.videos || [];
    title = sub.displayName || title;

    // Set top back button to return to subcategory list, and show breadcrumb
    const topBackBtn = document.getElementById("page-back-btn");
    if (topBackBtn) {
      topBackBtn.textContent = "← Back";
      topBackBtn.onclick = () => renderSubcategories(categoryKey);
      topBackBtn.classList.remove("btn-dark");
      topBackBtn.classList.add("btn-secondary");
    }
    if (controls) {
      controls.innerHTML = `<div class="fw-semibold">${category.displayName} &gt; ${sub.displayName || subCategoryKey}</div>`;
    }
  } else {
    videos = category.videos || [];
    // clear controls
    if (controls) controls.innerHTML = "";
    const topBackBtn = document.getElementById("page-back-btn");
    if (topBackBtn) {
      topBackBtn.textContent = "← Back";
      topBackBtn.onclick = loadHomePage;
      topBackBtn.classList.remove("btn-secondary");
      topBackBtn.classList.add("btn-dark");
    }
  }

  // Update title (show short title)
  const titleEl = document.getElementById("category-title");
  if (titleEl) titleEl.textContent = title + " Videos";

  if (!videos || videos.length === 0) {
    videoGrid.innerHTML = `<p class="text-muted">No videos available.</p>`;
    return;
  }

  videos.forEach((video) => {
    const videoCard = document.createElement("div");
    videoCard.className = "col-md-4 mb-4";

    videoCard.innerHTML = `
      <div class="card h-100 shadow-sm">
        <!-- <img src="${video.videoThumbnailPath}" class="card-img-top" alt="Video Thumbnail"> -->
        <div class="card-body">
          <video controls width="100%" height="auto" src="${video.offlinePath || ""}" class="mt-2"></video>
          ${video.onlineUrl ? `<a href="${video.onlineUrl}" target="_blank" class="btn btn-sm btn-primary mb-2">Watch Online</a>` : ""}
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
