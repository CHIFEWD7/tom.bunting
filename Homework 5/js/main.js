$('.hamburger').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
  console.log('nice hamburger menu!');
});