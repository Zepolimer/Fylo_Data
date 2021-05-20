  document.getElementById("price").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) ' + value + '%, hsl(229, 57%, 11%) ' + value + '%, hsl(229, 57%, 11%) 100%)'
  };