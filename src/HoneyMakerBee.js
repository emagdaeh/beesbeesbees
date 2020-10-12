var HoneyMakerBee = function() {
  Grub.call(this);
  this.age = 10;
  this.color = 'yellow';
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.job = 'make honey';

HoneyMakerBee.prototype.honeyPot = 0;

HoneyMakerBee.prototype.makeHoney = function() {
  return this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function() {
  return this.honeyPot--;
}
