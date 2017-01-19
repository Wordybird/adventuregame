var Hero = function(name, health, fav_food) {
  this.name = name;
  this.health = health;
  this.fav_food = fav_food;
};

Hero.prototype = {
    catchphrase: function() {
      return("Freeze!");
    },
    eat: function(food) {
      if (this.fav_food == food.name) {
        food.replenishment *= 1.5;
      }
      return this.health += food.replenishment;
    }
};

module.exports = Hero;