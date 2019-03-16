document.addEventListener('click', function(event) {
  var target = event.target;
  if (!target.classList.contains('issue__component')) return;

  var range = target.firstElementChild;
  if (target.classList.contains('issue__component--open')) {
    range.style.display = 'none';
    target.classList.remove('issue__component--open');
  } else {
    range.style.display = 'block';
    target.classList.add('issue__component--open');
  }
});
