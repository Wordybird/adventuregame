var Rat = function(touched, poisoning) {
  this.touched = touched;
  this.poisoning = poisoning;
};

Rat.prototype = {
  poison: function(food) {
    if (this.touched == food.name) {
      this.poisoning = 1;
      food.poison_value -= food.replenishment *2;
    }
  }
};

module.exports = Rat;