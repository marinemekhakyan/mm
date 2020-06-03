let image = document.querySelector('about__shape');
window.addEventListener('scroll', function (event) {
	if (isInViewport(image)) {
		image.innerHTML = '<img src="' + image.getAttribute('about__shape') + '">';
	}
}, false);

let isInViewport = function (el) {
  let bounding = el.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

function goHome()
{
  window.location = '/';   
}
