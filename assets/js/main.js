// -- NAVIGATION BAR FUNCTION --
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");
      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

// -- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING --
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
      strings : ["Create","Collaborate","Inspire"],
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
  
 // -- CHANGE ACTIVE LINK --
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

  // -- PROJECTS (recent to oldest) --
  const images = [
    { src: 'assets/illustration/[I-2025]_Zelle.PNG', type: 'image', category: 'illustration', title: 'Zelle (2025)' },
    { src: 'assets/illustration/[I-2025]_Araw-ng-Kagitingan.png', type: 'image', category: 'illustration', title: 'Araw ng Kagitingan (2025)' },
    { src: 'assets/illustration/[I-2025]_SBG.png', type: 'image', category: 'illustration', title: 'Senator Bong Go (2025)' },
    { src: 'assets/illustration/[I-2025]_Papyrus.png', type: 'image', category: 'illustration', title: 'Papyrus (2025)' },
    { src: 'assets/illustration/[I-2024]_FPRRD.png', type: 'image', category: 'illustration', title: 'FPRRD (2024)' },
    { src: 'assets/illustration/[I-2024]_Fun-for-Everyone.png', type: 'image', category: 'illustration', title: 'Fun for Everyone (2024)' },
    { src: 'assets/illustration/[I-2024]_Aridashi.png', type: 'image', category: 'illustration', title: 'Aridashi (2024)' },
    { src: 'assets/illustration/[I-2021]_ToxicPioner.png', type: 'image', category: 'illustration', title: 'ToxicPioner (2021)' },
    { src: 'assets/illustration/[I-2021]_Violet-Gamer.png', type: 'image', category: 'illustration', title: 'Violet Gamer (2021)' },
    { src: 'assets/illustration/[I-2021]_Sara.png', type: 'image', category: 'illustration', title: 'Sara (2021)' },
    { src: 'assets/illustration/[I-2020]_Sans.png', type: 'image', category: 'illustration', title: 'Sans (2020)' },
    { src: 'assets/illustration/[I-2020]_Phantoms.png', type: 'image', category: 'illustration', title: 'Phantoms (2020)' },
    { src: 'assets/illustration/[I-2020]_Withered.png', type: 'image', category: 'illustration', title: 'Withered (2020)' },

    { src: 'assets/graphic/[G-2025]_Zelle-Banner.png', type: 'image', category: 'graphic', title: 'Zelle Banner (2025)' },
    { src: 'assets/graphic/[G-2025]_Meeting-Attendance.png', type: 'image', category: 'graphic', title: 'Meeting Attendance (2025)' },
    { src: 'assets/graphic/[G-2025]_FSUU_SSG-EXEC_HBD.PNG', type: 'image', category: 'graphic', title: 'FSUU SSG-EXEC HBD (2025)' },
    { src: 'assets/graphic/[G-2025]_Lens-Ready.png', type: 'image', category: 'graphic', title: 'Lens Ready (2025)' },
    { src: 'assets/graphic/[G-2025]_Pictorial-Sched.PNG', type: 'image', category: 'graphic', title: 'Pictorial Schedule (2025)' },
    { src: 'assets/graphic/[G-2025]_Join-The-Pub.png', type: 'image', category: 'graphic', title: 'Join The Pub (2025)' },
    { src: 'assets/graphic/[G-2025]_Music_Album_Cover.png', type: 'image', category: 'graphic', title: 'Music Album Cover (2025)' },
    { src: 'assets/graphic/[G-2025]_Piniliay-Stances.png', type: 'image', category: 'graphic', title: 'Piniliay Stances (2025)' },
    { src: 'assets/graphic/[G-2025]_Rizal-and-Leonor.PNG', type: 'image', category: 'graphic', title: 'Rizal and Leonor (2025)' },
    { src: 'assets/graphic/[G-2025]_UCS-Program-Flow.png', type: 'image', category: 'graphic', title: 'UCS Program Flow (2025)' },
    { src: 'assets/graphic/[G-2025]_UCS-Bulletin.PNG', type: 'image', category: 'graphic', title: 'UCS Bulletin Board (2025)' },
    { src: 'assets/graphic/[G-2025]_CSP-Days_C2-Shirt.png', type: 'image', category: 'graphic', title: 'CSP Days C2 Shirt (2025)' },
    { src: 'assets/graphic/[G-2025]_FSUU-DC_Org-Shirt.png', type: 'image', category: 'graphic', title: 'FSUU DC Org. Shirt (2025)' },
    { src: 'assets/graphic/[G-2024]_UCS_Org-Shirt.png', type: 'image', category: 'graphic', title: 'UCS Org. Shirt (2025)' },
    { src: 'assets/graphic/[G-2025]_Pasundayag.PNG', type: 'image', category: 'graphic', title: 'Pasundayag (2025)' },
    { src: 'assets/graphic/[G-2025]_Manobo.PNG', type: 'image', category: 'graphic', title: 'Auditions 3 (2025)' },
    { src: 'assets/graphic/[G-2025]_Circus.PNG', type: 'image', category: 'graphic', title: 'Auditions 2 (2025)' },
    { src: 'assets/graphic/[G-2025]_TTWE.PNG', type: 'image', category: 'graphic', title: 'Auditions 1 (2025)' },
    { src: 'assets/graphic/[G-2024]_TBS-Lattes.PNG', type: 'image', category: 'graphic', title: 'TThe Bean Scene Lattes (2024)' },
    { src: 'assets/graphic/[G-2024]_TBS-Cookies.PNG', type: 'image', category: 'graphic', title: 'The Bean Scene Cookies (2024)' },
    { src: 'assets/graphic/[G-2023]_STEM-Field-Careers.png', type: 'image', category: 'graphic', title: 'STEM Field Careers (2023)' },
    { src: 'assets/graphic/[G-2023]_Media-Brochure.png', type: 'image', category: 'graphic', title: 'Media Brochure (2023)' },
    { src: 'assets/graphic/[G-2023]_Krosword-Puzzle.PNG', type: 'image', category: 'graphic', title: 'Krosword Puzzle (2023)' },
    { src: 'assets/graphic/[G-2023]_CS_Flyer.PNG', type: 'image', category: 'graphic', title: 'Café Select Flyer (2023)' },
    { src: 'assets/graphic/[G-2023]_Café-Select.png', type: 'image', category: 'graphic', title: 'Café Select (2023)' },
    { src: 'assets/graphic/[G-2023]_ByteStudios.png', type: 'image', category: 'graphic', title: 'Byte Studios (2023)' },
    { src: 'assets/graphic/[G-2023]_Buhay-ng-Estudyante.png', type: 'image', category: 'graphic', title: 'Buhay ng Estudyante (2023)' },
    { src: 'assets/graphic/[G-2022]_Wika-Timeline.PNG', type: 'image', category: 'graphic', title: 'Wika Timeline (2022)' },
    { src: 'assets/graphic/[G-2022]_Stop-Smoking.PNG', type: 'image', category: 'graphic', title: 'Stop Smoking (2022)' },
    { src: 'assets/graphic/[G-2022]_Internet-Safety.PNG', type: 'image', category: 'graphic', title: 'Internet Safety (2022)' },
    { src: 'assets/graphic/[G-2022]_Book-of-Proverbs.PNG', type: 'image', category: 'graphic', title: 'Book of Proverbs (2022)' },
    { src: 'assets/graphic/[G-2021]_OneHealth.png', type: 'image', category: 'graphic', title: 'OneHealth (2021)' },

    { src: 'assets/motion/[M-2024]_StephFilms.MP4', type: 'video', category: 'motion', title: 'StephFilms (2024)' },
    { src: 'assets/motion/[M-2024]_Smoochies.mp4', type: 'video', category: 'motion', title: 'Smoochies (2024)' },
    { src: 'assets/motion/[M-2023]_Sagutin-Mo-Ako.mp4', type: 'video', category: 'motion', title: 'Sagutin Mo Ako (2023)' },
    { src: 'assets/motion/[M-2023]_B-Lotion-Products.mp4', type: 'video', category: 'motion', title: 'Body Lotion Products (2023)' },
    { src: 'assets/motion/[M-2023]_B-Lotion-Levels.mp4', type: 'video', category: 'motion', title: 'Body Lotion Levels (2023)' },
    { src: 'assets/motion/[M-2022]_MelVid-Productions.mp4', type: 'video', category: 'motion', title: 'MelVid Productions (2022)' },
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
