var MarcusDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.place();
  this.step();
};
// BlinkyDancer.prototype = new Dancer();
MarcusDancer.prototype = Object.create(Dancer.prototype);
MarcusDancer.prototype.constructor = MarcusDancer;
MarcusDancer.prototype.step = function(){


};
MarcusDancer.prototype.place = function(){
  this.$node = $('<img src= "Marcus.jpeg" class = "marcus" style="position: absolute; width: 50px; height: 60px"/>');
  this.setPosition(this.top, this.left);
};