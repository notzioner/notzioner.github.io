// -- SCROLL REVEAL ANIMATION -- /
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

// -- HEADER -- /
sr.reveal('.sr_top', {});
sr.reveal('.sr-top', {});

// -- BODY TEXT -- /
sr.reveal('.sr-fade', { delay: 100 });

// -- LISTS FROM LEFT -- /
sr.reveal('.sr-left', {
  origin: 'left',
  delay: 100
});

// -- FOOTER BUTTONS FROM BOTTOM -- /
sr.reveal('.sr-bottom', {
  origin: 'bottom',
  delay: 200
});
