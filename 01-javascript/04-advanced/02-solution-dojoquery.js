//solution 1
function $Dojo(id) {
    this.myId = document.getElementById(id);
    this.click = function (callback) {
        this.myId.addEventListener("click", callback);
    };

    this.hover = function (hoverin, hoverout) {
        this.myId.addEventListener("mouseover", hoverin);
        this.myId.addEventListener("mouseout", hoverout);
    };

    return this;
}

//solution 2

'use strict';
const $Dojo = function(id) {
  return (function($dojo){
    $dojo.myId = document.getElementById(id);
    $dojo.click = function (callback) {
      this.myId.addEventListener("click", callback);
    };

    $dojo.hover = function (hoverin, hoverout) {
      this.myId.addEventListener("mouseover", hoverin);
      this.myId.addEventListener("mouseout", hoverout);
    };

    return $dojo;
  })({});
};