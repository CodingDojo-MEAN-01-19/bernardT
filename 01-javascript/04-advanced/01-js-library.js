  var _ = {
    map: function(item, index) {     
      let output = [];
      for (let x in item) {
        output.push(index(item[x]));
      }
      return output;
    },
    reduce: function(item, index, arr) {    
      var output = arr;                        
      for (let x in item) {                      
        output = index(output, item[x]);
      }
      return output;
    },
    find: function(item, index) {            
      for (let x in item) {                    
        if (index(item[x])) {
          return item[x];
        }
      }
      return false;
    },
    filter: function(item, index) {
      let output = [];
      for (let x in item) {
        if (index(item[x])) {
          output.push(item[x]);
        }
      }
      return output;
    },
    reject: function() {
      let output = [];
      for (let x in item) {
        if (!index(item[x])) {
          output.push(item[x]);
        }
      }
      return output;
    }
  }

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens);