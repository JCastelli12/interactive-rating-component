const form = document.getElementById('rating-form');
const submitButton = document.querySelector('.btn');
const ratingContainer = document.querySelector('.rating-container');
const thankyouContainer = document.querySelector('.thank-you-container');
const ratings = document.getElementsByName('rating');
let ratingValue;

ratings.forEach((rating) => {
  rating.addEventListener('click', function onClick() {
    ratingValue = rating.value;
  });
});

submitButton.addEventListener('click', () => {
  submitButton.style.backgroundColor = 'hsl(0, 0%, 100%)';
  submitButton.style.color = 'hsl(25, 97%, 53%)';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  ratingContainer.style.display = 'none';
  thankyouContainer.style.display = 'grid';
  document.getElementById('rating-value').innerHTML = ratingValue;
});
