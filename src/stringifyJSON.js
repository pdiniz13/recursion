// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    newObj = obj.toString();
    newObj = newObj.split();
    var newArray = [];
    var repeat = function (){
        newArray.push(newObj.shift());
        if(newObj.length > 0){
            repeat();
        }
        else{
            return newArray.toString();
        }
    }
};
