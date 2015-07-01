function countdown(num) {
  setTimeout(function() {
    console.log(num);
    if (num > 0) {
      countdown(num - 1);
    } else {
      console.log("Blastoff!!!");
    }
  }, 1000);
}

countdown(5);
