const modalWrapper = document.querySelector('.modal-wrapper');
const images = document.querySelectorAll('.image');
const modalImage = document.querySelector('.modal-image');
const todayt = document.querySelector('.todayt');
const todaym = document.querySelector('.todaym');
const tomorrowt = document.querySelector('.tomorrowt');
const tomorrowm = document.querySelector('.tomorrowm');
const forecasttable = document.querySelector('.forecasttable');

images.forEach(function(image) {
     image.addEventListener('click', function() {
          modalWrapper.classList.add('show');
          modalImage.classList.add('show');

          var imageSrc = image.getAttribute('src');
          modalImage.src = imageSrc;
     });
});

modalWrapper.addEventListener('click', function() {
     if (this.classList.contains('show')) {
          this.classList.remove('show');
          modalImage.classList.remove('show');
     }
});

var request = new XMLHttpRequest();

request.open('GET', 'https://weather.tsukumijima.net/api/forecast?city=360010', true);
request.responseType = 'json';

request.onload = function () {
     var data = this.response;
     todayt.textContent = data['forecasts']['0']['image']['title'];
     todaym.src = data['forecasts']['0']['image']['url'];
     tomorrowt.textContent = data['forecasts']['1']['image']['title'];
     tomorrowm.src = data['forecasts']['1']['image']['url'];
     forecasttable.href = data['link'];
};

request.send();