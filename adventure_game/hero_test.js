var assert = require('assert');
var Hero = require('./hero');
var Food = require('./food');
var Rat = require('./rat');

var hero1;
var food1;
var food2;
var rat1;

describe('hero', function() {

  beforeEach(function() {
    hero1 = new Hero("Polarman",100,"Cherry ice-cream");
    food1 = new Food("Biscuits", 25, 0);
    food2 = new Food("Cherry ice-cream", 20, 0);
    food3 = new Food("Lime ice-cream", 20, 0);
    rat1 = new Rat("Lime ice-cream", 0);
  });

  it('should have a name', function() {
    assert.equal("Polarman", hero1.name);
  });

  it('should have 100 health', function() {
    assert.equal(100, hero1.health);
  });

  it('should have a favourite food', function() {
    assert.equal("Cherry ice-cream", hero1.fav_food);
  });

  it('should be able to say catchphrase', function() {
    assert.equal("Freeze!", hero1.catchphrase());
  });

  it('should have a name for food', function() {
    assert.equal("Biscuits",food1.name);
  });

  it('should have a replenishment for food', function() {
    assert.equal(25,food1.replenishment);
  });

  it('should be able to eat food', function() {
    hero1.health = 75;
    hero1.eat(food1);
    assert.equal(100, hero1.health);
  });

  it('should be able to gain more from favourite food', function() {
    hero1.health = 70;
    hero1.eat(food2);
    assert.equal(100, hero1.health);
  });

  it('should be able to poison food with rat', function() {
    rat1.poison(food3);
    assert.equal(-20, food3.poison_value);
  });

  it('should be able to affect replenishment value with poison', function() {
    rat1.poison(food3);
    hero1.eat(food3);
    assert.equal(80, hero1.health);
  });

});