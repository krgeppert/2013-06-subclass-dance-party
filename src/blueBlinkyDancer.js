var BlueBlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this,arguments);
  var styling = {border: "10px solid blue"};
  this.$node.css(styling);
};
BlueBlinkyDancer.prototype = Object.create(Dancer.prototype);
BlueBlinkyDancer.prototype.constructor = BlueBlinkyDancer;
BlueBlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};