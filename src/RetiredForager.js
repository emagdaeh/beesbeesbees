var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.color = 'grey';
  this.job = 'gamble';
  this.canFly = false;
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function(no) {
  no = 'I am too old, let me play cards instead';
  return no;
}

RetiredForagerBee.prototype.gamble = function(treasure) {
  return this.treasureChest.push(treasure);
}