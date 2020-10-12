var ForagerBee = function() {
  Grub.call(this);
  this.age = 10;
  this.color = 'yellow';
};

ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.job = 'find pollen';

ForagerBee.prototype.canFly = true;

ForagerBee.prototype.treasureChest = [];

ForagerBee.prototype.forage = function(treasure) {
  return this.treasureChest.push(treasure);
}