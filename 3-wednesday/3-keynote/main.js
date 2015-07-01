
var slideLoader = require('./slide-loader');

slideLoader('./keynotes/sample_keynfote', function (err, slides) {
  if (err) {
    console.log(err);
  } else {
    slides.forEach(function (slide) {
      console.log(slide);
    });
  }
});
