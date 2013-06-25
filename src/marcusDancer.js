var MarcusDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.place();
  this.step();
};
// BlinkyDancer.prototype = new Dancer();
MarcusDancer.prototype = Object.create(Dancer.prototype);
MarcusDancer.prototype.constructor = MarcusDancer;
// MarcusDancer.prototype.step = function(){
//   Dancer.prototype.step.call(this);
//   this.$node.css({
//     -webkit-animation-name: shake;
//     -moz-animation-name: shake;
//     -o-animation-name: shake;
//     animation-name: shake;
//     }
//     @-webkit-keyframes bounce {
//     0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);}
//     40% {-webkit-transform: translateY(-30px);}
//     60% {-webkit-transform: translateY(-15px);}
//     }

//     @-moz-keyframes bounce {
//     0%, 20%, 50%, 80%, 100% {-moz-transform: translateY(0);}
//     40% {-moz-transform: translateY(-30px);}
//     60% {-moz-transform: translateY(-15px);}
//     }

//     @-o-keyframes bounce {
//     0%, 20%, 50%, 80%, 100% {-o-transform: translateY(0);}
//     40% {-o-transform: translateY(-30px);}
//     60% {-o-transform: translateY(-15px);}
//     }
//     @keyframes bounce {
//     0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
//     40% {transform: translateY(-30px);}
//     60% {transform: translateY(-15px);}
//     }
// });

// };
MarcusDancer.prototype.place = function(){
  this.$node = $('<img src= "Marcus.jpeg" class = "dancer" style="position: absolute; width: 50px; height: 60px"/>');
  this.setPosition(this.top, this.left);
};