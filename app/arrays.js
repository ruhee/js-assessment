exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var sum = 0;

    for(var i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {
    var len = arr.length;
    arr[len] = item;

    return arr;
  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {
    var newArr = [item];
    for(var i = 0; i < arr.length; i++){
      newArr[i+1] = arr[i];
    }

    return newArr;
  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
