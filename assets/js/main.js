// -- NAVIGATION BAR FUNCTION --
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");
      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

// -- SHADOW ON NAVIGATION BAR WHILE SCROLLING --
    window.onscroll = function() {headerShadow()};
    function headerShadow() {
      const navHeader = document.getElementById("header");
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
      } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
      }
    }

// -- TYPING EFFECT --
   var typingEffect = new Typed(".typedText",{
      strings : ["Multimedia Artist","Voice Actor","Content Creator"],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
   })

// -- SCROLL REVEAL ANIMATION --
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })
  
  // -- HOME --
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  
  // -- PROJECT BOX --
  sr.reveal('.project-box',{interval: 200})

  // -- HEADINGS --
  sr.reveal('.top-header',{})
  
  // -- ABOUT INFO & CONTACT INFO --
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.slider-container',{delay: 100})

   // -- ABOUT SKILLS & FORM BOX --
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  
 // -- ACTIVE LINK --
  const sections = document.querySelectorAll('section[id]')
  function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
      }  else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
    })
  }
  window.addEventListener('scroll', scrollActive)

  // -- GALLERY CONTROLS ANIMATION --
  sr.reveal('.gallery-controls', { delay: 100 });
  sr.reveal('.search-box', { delay: 200 });
  sr.reveal('.filters button', { interval: 100 });

  // -- GALLERY CARD ANIMATION --
  sr.reveal('.card', { interval: 150 });

  // -- PROJECTS (recent to oldest, by category) --
  const images = [

// -- DESIGN --      
    // -- Logo Layout --
    { src: 'assets/illustration/[I-2026]_STEP.PNG', type: 'image', category: 'illustration', title: 'STEP Dancers (2026)' },
    { src: 'assets/illustration/[I-2026]_Veritas.PNG', type: 'image', category: 'illustration', title: 'Veritas (2026)' },
    { src: 'assets/illustration/[I-2026]_125th-UDAYS.png', type: 'image', category: 'illustration', title: '125th UDAYS (2026)' },
    { src: 'assets/illustration/[I-2026]_125th-UDAYS-Medals.png', type: 'image', category: 'illustration', title: '125th UDAYS Medals (2026)' },
    { src: 'assets/illustration/[I-2025]_BPEDSOC.PNG', type: 'image', category: 'illustration', title: 'FSUU BPED Society (2025)' },
    { src: 'assets/illustration/[I-2023]_Cafe-Select.PNG', type: 'image', category: 'illustration', title: 'Café Select (2023)' },
      
    // -- Shirt Layout --
    { src: 'assets/illustration/[I-2026]_FSUU-SSG_TypeB-Shirt.png', type: 'image', category: 'illustration', title: 'FSUU-SSG Type B (2026)' },
    { src: 'assets/illustration/[I-2025]_THMP-Org-Shirt.png', type: 'image', category: 'illustration', title: 'FSUU THMP-LSG Org. Shirt (2025)' },
    { src: 'assets/illustration/[I-2025]_CSP-Days_C2-Shirt.png', type: 'image', category: 'illustration', title: 'FSUU CSP DAYS Cluster 2 Jersey (2025)' },
    { src: 'assets/illustration/[I-2025]_FSUU-DC_Org-Shirt.png', type: 'image', category: 'illustration', title: 'FSUU DC Org. Shirt (2025)' },
    { src: 'assets/illustration/[I-2025]_UCS-Org-Shirt.png', type: 'image', category: 'illustration', title: 'UCS Org. Shirt (2025)' },
      
    // -- PubMat & Posters --
    { src: 'assets/illustration/[I-2026]_Everwyn-Logo.png', type: 'image', category: 'illustration', title: 'Everwyn Title Screen (2026)' },
    { src: 'assets/illustration/[I-2026]_Everwyn-SDS.png', type: 'image', category: 'illustration', title: 'Everwyn Sigils (2026)' },
    { src: 'assets/illustration/[I-2026]_Zelle-Banner.png', type: 'image', category: 'illustration', title: 'Miss Zelle Banner (2026)' },
    { src: 'assets/illustration/[I-2025]_CSUCC-EE.png', type: 'image', category: 'illustration', title: 'CSU-CC Electical Engineers Banner (2025)' },
      
    { src: 'assets/illustration/[I-2026]_Padayon-Layout.PNG', type: 'image', category: 'illustration', title: 'Padayon Poster (2026)' },
    { src: 'assets/illustration/[I-2026]_LOST-Layout-2.png', type: 'image', category: 'illustration', title: 'LOST Game UI (2026)' },
    { src: 'assets/illustration/[I-2025]_Islaline-Layout.png', type: 'image', category: 'illustration', title: 'Islaline Game UI (2025)' },
      
    { src: 'assets/illustration/[I-2026]_Grad-Starter-Pack.PNG', type: 'image', category: 'illustration', title: 'Graduation Starter Pack (2026)' },
    { src: 'assets/illustration/[I-2026]_Grad-Selection.png', type: 'image', category: 'illustration', title: 'Veritas Announcement (2026)' },
    { src: 'assets/illustration/[I-2026]_1st-Meeting.png', type: 'image', category: 'illustration', title: 'Veritas 1st Meeting (2026)' },
    { src: 'assets/illustration/[I-2025]_Pictorial-Sched.PNG', type: 'image', category: 'illustration', title: 'Veritas Pictorial (2025)' },
      
    { src: 'assets/illustration/[I-2026]_Executive-Bulletin.png', type: 'image', category: 'illustration', title: 'FSUU SSG Bulletin Concept (2025)' },
    { src: 'assets/illustration/[I-2025]_UCS-Bulletin.png', type: 'image', category: 'illustration', title: 'UCS Bulletin Concept (2025)' },
      
    { src: 'assets/illustration/[I-2025]_UCS-Program-Flow.png', type: 'image', category: 'illustration', title: 'UCS Gen. Ass Program Flow (2025)' },
    { src: 'assets/illustration/[I-2026]_Theme-Proposal.PNG', type: 'image', category: 'illustration', title: 'Theme Proposal (2026)' },
    { src: 'assets/illustration/[I-2025]_Theme-Proposal.png', type: 'image', category: 'illustration', title: 'Theme Proposal (2025)' },
    { src: 'assets/illustration/[I-2026]_125th-UDAYS-Banners.png', type: 'image', category: 'illustration', title: 'Banners 125th UDAYS (2026)' },
    { src: 'assets/illustration/[I-2026]_DP-BLASTS_125th-UDAYS.png', type: 'image', category: 'illustration', title: 'DP Blasts 125th UDAYS (2026)' },
    { src: 'assets/illustration/[I-2026]_DP-BLASTS_Uriantation.png', type: 'image', category: 'illustration', title: 'DP Blasts Uriantation (2026)' },
    { src: 'assets/illustration/[I-2026]_125th UDAYS-Medal-Tally.png', type: 'image', category: 'illustration', title: '125th UDAYS Medal Tally (2026)' },
    { src: 'assets/illustration/[I-2025]_124th UDAYS-Medal-Tally.png', type: 'image', category: 'illustration', title: '124th UDAYS Medal Tally (2025)' },
      
    { src: 'assets/illustration/[I-2026]_Virgin-Mary.PNG', type: 'image', category: 'illustration', title: 'Immaculate Conception (2026)' },
    { src: 'assets/illustration/[I-2025]_Musical-Fest_Invitation.png', type: 'image', category: 'illustration', title: 'Musical Fest (2025)' },
    { src: 'assets/illustration/[I-2025]_Uni-Gala_Invitation.png', type: 'image', category: 'illustration', title: 'University Gala (2025)' },
    { src: 'assets/illustration/[I-2025]_Crossover-Invitation.png', type: 'image', category: 'illustration', title: 'Crossover Invitation (2025)' },
    { src: 'assets/illustration/[I-2026]_BNW.png', type: 'image', category: 'illustration', title: 'Buwan ng Wika (2026)' },
    { src: 'assets/illustration/[I-2025]_BNW.PNG', type: 'image', category: 'illustration', title: 'Buwan ng Wika (2025)' },
    { src: 'assets/illustration/[I-2026]_Grad2.png', type: 'image', category: 'illustration', title: 'Graduation 2 (2026)' },
    { src: 'assets/illustration/[I-2026]_Grad1.png', type: 'image', category: 'illustration', title: 'Graduation 1 (2026)' },
    { src: 'assets/illustration/[I-2025]_FSUU-SSG-EXEC_HBD.png', type: 'image', category: 'illustration', title: 'FSUU SSG HBD (2025)' },
    { src: 'assets/illustration/[I-2025]_DOI-MYO.png', type: 'image', category: 'illustration', title: 'DOI Officers (2025)' },

    { src: 'assets/illustration/[I-2025]_124th-UDAYS-OC.PNG', type: 'image', category: 'illustration', title: '124th UDAYS Opening (2025)' },
    { src: 'assets/illustration/[I-2025]_Pasundayag.PNG', type: 'image', category: 'illustration', title: 'Pasundayag (2025)' },
    { src: 'assets/illustration/[I-2025]_Lens-Ready.png', type: 'image', category: 'illustration', title: 'Lens Ready (2025)' },
    { src: 'assets/illustration/[I-2025]_Join-The-Pub.png', type: 'image', category: 'illustration', title: 'Join The Pub (2025)' },
    { src: 'assets/illustration/[I-2025]_TTWE.PNG', type: 'image', category: 'illustration', title: 'FSUU DC Audition (2025)' },
      
    // -- Illustration --
    { src: 'assets/illustration/[I-2026]_125th-UDAYS-Invitation.png', type: 'image', category: 'illustration', title: '125th UDAYS Invitation (2026)' },
    { src: 'assets/illustration/[I-2026]_Pride-Month.png', type: 'image', category: 'illustration', title: 'Pride Month (2026)' },
    { src: 'assets/illustration/[I-2026]_CLAYGO.png', type: 'image', category: 'illustration', title: 'CLAYGO (2026)' },
    { src: 'assets/illustration/[I-2026]_ANK.PNG', type: 'image', category: 'illustration', title: 'Araw ng Kagitingan (2026)' },
    { src: 'assets/illustration/[I-2025]_124th-UDAYS-Invitation.png', type: 'image', category: 'illustration', title: '124th UDAYS Invitation (2025)' },
    { src: 'assets/illustration/[I-2025]_Back2School.png', type: 'image', category: 'illustration', title: 'Back to School (2025)' },
    { src: 'assets/illustration/[I-2025]_Pride-Month.png', type: 'image', category: 'illustration', title: 'Pride Month (2025)' },
    { src: 'assets/illustration/[I-2025]_Zelle.PNG', type: 'image', category: 'illustration', title: 'Miss Zelle (2025)' },
    { src: 'assets/illustration/[I-2025]_ANK.png', type: 'image', category: 'illustration', title: 'Araw ng Kagitingan (2025)' },
    { src: 'assets/illustration/[I-2025]_SBG.png', type: 'image', category: 'illustration', title: 'Senator Bong Go (2025)' },
    { src: 'assets/illustration/[I-2025]_Papyrus.png', type: 'image', category: 'illustration', title: 'Papyrus (2025)' },
    { src: 'assets/illustration/[I-2024]_FPRRD.png', type: 'image', category: 'illustration', title: 'FPRRD (2024)' },
    { src: 'assets/illustration/[I-2024]_Fun-For-Everyone.png', type: 'image', category: 'illustration', title: 'Fun for Everyone (2024)' },
    { src: 'assets/illustration/[I-2024]_Aridashi.png', type: 'image', category: 'illustration', title: 'Aridashi (2024)' },
    { src: 'assets/illustration/[I-2021]_ToxicPioner.png', type: 'image', category: 'illustration', title: 'ToxicPioner (2021)' },
    { src: 'assets/illustration/[I-2021]_Violet-Gamer.png', type: 'image', category: 'illustration', title: 'Violet Gamer (2021)' },
    { src: 'assets/illustration/[I-2021]_Sara.png', type: 'image', category: 'illustration', title: 'Sara (2021)' },
      
// -- PRODUCTION --
    { src: 'assets/graphic/[G-2026]_Samyang-Buldak.mp4', type: 'image', category: 'graphic', title: 'Samyang Buldak (2026)' },     
    { src: 'assets/graphic/[G-2026]_Everyone-Is-Here.mp4', type: 'image', category: 'graphic', title: 'Everyone Is Here (2026)' },      
    { src: 'assets/graphic/[G-2026]_Lucky-Me.mp4', type: 'image', category: 'graphic', title: 'Lucky-Me Pancit Canton (2026)' },
    { src: 'assets/graphic/[G-2025]_EMC-Life.mp4', type: 'image', category: 'graphic', title: 'EMC Student Life (2025)' },   
    { src: 'assets/graphic/[G-2025]_Frostie.mp4', type: 'image', category: 'graphic', title: 'Frostie (2025)' },     
    { src: 'assets/graphic/[G-2025]_Narcissus-&-Echo.mp4', type: 'image', category: 'graphic', title: 'Narcissus & Echo (2025)' }, 
      
// -- ANIMATION --
    // -- Blender & SFM --
    { src: 'assets/motion/[M-2026]_Blender-Twisted-Corridor.mp4', type: 'video', category: 'motion', title: 'Twisted Corridor (2026)' },
    { src: 'assets/motion/[M-2026]_Blender-Desert-Scimitar.png', type: 'video', category: 'motion', title: 'Desert Scimitar (2026)' },
    { src: 'assets/motion/[M-2026]_Blender-DIVOOM.mp4', type: 'video', category: 'motion', title: 'Divoom Ditoo (2026)' },
    { src: 'assets/motion/[M-2026]_Blender-Floating-Room.mp4', type: 'video', category: 'motion', title: 'Floating Room (2026)' },
    { src: 'assets/motion/[M-2026]_Blender-Isometric-Room-1-3.png', type: 'video', category: 'motion', title: 'Isometric Room 3 (2026)' },
    { src: 'assets/motion/[M-2026]_Blender-Isometric-Room-1-2.png', type: 'video', category: 'motion', title: 'Isometric Room 2 (2026)' },
    { src: 'assets/motion/[M-2026]_Blender-Isometric-Room-1.png', type: 'video', category: 'motion', title: 'Isometric Room 1 (2026)' },
    { src: 'assets/motion/[M-2020]_Withered.png', type: 'video', category: 'motion', title: 'Withered (2020)' },
    { src: 'assets/motion/[M-2020]_Phantom.png', type: 'video', category: 'motion', title: 'Phantom (2020)' },
    { src: 'assets/motion/[M-2020]_Sans.png', type: 'video', category: 'motion', title: 'Sans (2020)' },
      
    // -- 3D Animation --
    { src: 'assets/motion/[M-2026]_Character Movement.mp4', type: 'video', category: 'motion', title: 'Principles of 3D Animation (2026)' },
    { src: 'assets/motion/[M-2026]_Single Punch.mp4', type: 'video', category: 'motion', title: 'Single Punch (2026)' },
    { src: 'assets/motion/[M-2026]_Walk Cycle.mp4', type: 'video', category: 'motion', title: 'Walk Cycle (2026)' },
    { src: 'assets/motion/[M-2026]_Shift Weight.mp4', type: 'video', category: 'motion', title: 'Shift Weight (2026)' },
    { src: 'assets/motion/[M-2026]_Dynamic-Poses.mp4', type: 'video', category: 'motion', title: 'Dynamic Poses (2026)' },
    { src: 'assets/motion/[M-2026]_Pendulum.mp4', type: 'video', category: 'motion', title: 'Pendulum (2026)' },
    { src: 'assets/motion/[M-2026]_Surprised-Squirrel.mp4', type: 'video', category: 'motion', title: 'Surprised Jump (2026)' },
    { src: 'assets/motion/[M-2026]_Squirrel-Jump.mp4', type: 'video', category: 'motion', title: 'Squirrel Jump (2026)' },
    { src: 'assets/motion/[M-2026]_Ball-Obstacle.mp4', type: 'video', category: 'motion', title: 'Ball Obstacle (2026)' },
    { src: 'assets/motion/[M-2026]_Different Ball Bounce.mp4', type: 'video', category: 'motion', title: 'Different Ball Bounce (2026)' },
      
    // -- 2D Animation --
    { src: 'assets/motion/[M-2026]_Space Invaders.mp4', type: 'video', category: 'motion', title: 'Particle World (2026)' },
    { src: 'assets/motion/[M-2026]_OC-Rig.mp4', type: 'video', category: 'motion', title: 'DUIK Angela Rig (2026)' },
    { src: 'assets/motion/[M-2026]_Lip-Sync.mp4', type: 'video', category: 'motion', title: 'Mouth Lip-Sync (2026)' },
    { src: 'assets/motion/[M-2026]_Timing-n-Spacing.mp4', type: 'video', category: 'motion', title: 'Timing & Spacing (2026)' },
    { src: 'assets/motion/[M-2026]_Head-Turn.mp4', type: 'video', category: 'motion', title: 'Head Turn (2026)' },
    { src: 'assets/motion/[M-2026]_Horizontal-Ball.mp4', type: 'video', category: 'motion', title: 'Horizontal Ball (2026)' },
    { src: 'assets/motion/[M-2025]_HH Fan Animation.mp4', type: 'video', category: 'motion', title: 'Principles of 2D Animation (2025)' },
    { src: 'assets/motion/[M-2025]_Squash-n-Stretch.mp4', type: 'video', category: 'motion', title: 'Squash & Stretch (2025)' },
    { src: 'assets/motion/[M-2025]_Straight_Ahead.mp4', type: 'video', category: 'motion', title: 'Straight Ahead (2025)' },
    { src: 'assets/motion/[M-2025]_Pose-to-Pose.mp4', type: 'video', category: 'motion', title: 'Pose-to-Pose (2025)' },
    { src: 'assets/motion/[M-2025]_Bouncing-Ball.mp4', type: 'video', category: 'motion', title: 'Bouncing Ball (2025)' },

    // -- LED Backdrop --
    { src: 'assets/motion/[M-2025]_124th-UDAYS-Mass-Demo-LED.mp4', type: 'video', category: 'motion', title: '124th UDAYS Mass Demo LED (2025)' },
    { src: 'assets/motion/[M-2025]_124th-UDAYS-Opening-Ceremonies-LED.mp4', type: 'video', category: 'motion', title: '124th UDAYS Opening LED (2025)' },
      
    // -- MoGraph --
    { src: 'assets/motion/[M-2026]_Stretch.mp4', type: 'video', category: 'motion', title: 'Stretch (2026)' },
    { src: 'assets/motion/[M-2026]_Space.mp4', type: 'video', category: 'motion', title: 'Space (2026)' },
    { src: 'assets/motion/[M-2026]_CITEC.mp4', type: 'video', category: 'motion', title: 'CITEC (2026)' },
    { src: 'assets/motion/[M-2026]_Cocktails.mp4', type: 'video', category: 'motion', title: 'Cocktails (2026)' },
    { src: 'assets/motion/[M-2026]_Google.mp4', type: 'video', category: 'motion', title: 'Google (2026)' },
    { src: 'assets/motion/[M-2026]_Fortnite.mp4', type: 'video', category: 'motion', title: 'Fortnite (2026)' },
    { src: 'assets/motion/[M-2026]_Cafe Select.mp4', type: 'video', category: 'motion', title: 'Café Select Ad (2026)' },
    { src: 'assets/motion/[M-2024]_StephFilms.MP4', type: 'video', category: 'motion', title: 'StephFilms (2024)' },
    { src: 'assets/motion/[M-2024]_Smoochies.mp4', type: 'video', category: 'motion', title: 'Smoochies (2024)' },
    { src: 'assets/motion/[M-2023]_B-Lotion-Products.mp4', type: 'video', category: 'motion', title: 'Body Lotion Products (2023)' },
    { src: 'assets/motion/[M-2022]_Copy-Me-Costplay.mp4', type: 'video', category: 'motion', title: 'VAC CMC Contest (2022)' }
  ];

  const gallery = document.getElementById('gallery');
  const searchInput = document.getElementById('search');
  const filterButtons = document.querySelectorAll('.filters button');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('closeBtn');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const thumbSlider = document.getElementById('thumbSlider');

  let filteredImages = images;
  let currentIndex = 0;

  function renderGallery(imgList) {
  gallery.innerHTML = '';
  imgList.forEach((img, i) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = i;

    let iconClass = '';
    if (img.category === 'illustration') iconClass = 'uil uil-pen';
    else if (img.category === 'graphic') iconClass = 'uil uil-brush-alt';
    else if (img.category === 'motion') iconClass = 'uil uil-video';

    const isVideo = img.src.match(/\.(mp4|mov|gif|ogg)$/i);

    const media = isVideo
      ? `<video src="${img.src}" muted preload="metadata" class="thumb-video"></video>`
      : `<img src="${img.src}" alt="${img.title}" loading="lazy" />`;

    card.innerHTML = `
      ${media}
      <div class="card-info">
        <h3><i class="${iconClass}"></i> ${img.title}</h3>
      </div>
    `;

    gallery.appendChild(card);
  });

  ScrollReveal().reveal('.card', { interval: 100, origin: 'bottom', distance: '30px' });
}

  function filterGallery() {
    const term = searchInput.value.toLowerCase();
    const filterBtn = document.querySelector('.filters button.active');
    const filter = filterBtn ? filterBtn.dataset.filters : 'all';

    filteredImages = images.filter(img =>
      (filter === 'all' || img.category === filter) &&
      img.title.toLowerCase().includes(term)
    );
    renderGallery(filteredImages);
  }

  function renderThumbSlider(list, current) {
    thumbSlider.innerHTML = '';
    list.forEach((img, index) => {
      const thumb = document.createElement('img');
      thumb.src = img.src;
      thumb.alt = img.title;
      if (index === current) thumb.classList.add('selected');
      thumb.onclick = () => showLightbox(index);
      thumbSlider.appendChild(thumb);
    });
  }

  function showLightbox(index) {
    currentIndex = index;
    const img = filteredImages[currentIndex];
    const isVideo = img.src.match(/\.(mp4|mov|webm|ogg)$/i);

    lightbox.innerHTML = ''; 

    if (isVideo) {
      const video = document.createElement('video');
      video.src = img.src;
      video.controls = true;
      video.autoplay = true;
      video.style.maxWidth = '90vw';
      video.style.maxHeight = '70vh';
      video.style.borderRadius = '14px';
      lightbox.appendChild(video);
    } else {
      const image = document.createElement('img');
      image.src = img.src;
      image.alt = img.title;
      lightbox.appendChild(image);
    }

    lightbox.classList.add('visible');
    renderThumbSlider(filteredImages, currentIndex);
    }

    gallery.addEventListener('click', e => {
      const card = e.target.closest('.card');
      if (!card) return;
      const index = +card.dataset.index;
      showLightbox(index);
    });

    closeBtn.addEventListener('click', () => lightbox.classList.remove('visible'));
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) lightbox.classList.remove('visible');
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      showLightbox(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % filteredImages.length;
      showLightbox(currentIndex);
    });

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelector('.filters button.active')?.classList.remove('active');
        btn.classList.add('active');
        filterGallery();
      });
    });

    searchInput.addEventListener('input', filterGallery);

    renderGallery(images);

    let currentSlide = 1;
    const totalSlides = 4;
    let intervalId;

    const startSlider = () => {
      intervalId = setInterval(() => {
        document.getElementById(`customSlide${currentSlide}`).checked = true;
        currentSlide++;
        if (currentSlide > totalSlides) currentSlide = 1;
      }, 5000); 
    };

    const stopSlider = () => {
      clearInterval(intervalId);
    };

    const sliderContainer = document.querySelector('.slider-container');

    startSlider();

    sliderContainer.addEventListener('mouseenter', stopSlider);
    sliderContainer.addEventListener('mouseleave', startSlider);
