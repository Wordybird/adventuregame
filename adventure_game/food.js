var Food = function(name, replenishment, poison_value) {
  this.name = name;
  this.replenishment = replenishment;
  this.poison_value = poison_value;
};

Food.prototype = {
  poisoned: function(rat) {
    if (rat.poisoning = 1) {
      return (this.replenishment -= this.poison_value);
    }
  }
};

module.exports = Food;