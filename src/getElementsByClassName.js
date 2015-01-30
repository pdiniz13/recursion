// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className2, newArray, returnValue){
    if (newArray === undefined){
        newArray = [];
        newArray.push(document.body);
    }
    if (returnValue === undefined){
        returnValue = [].slice.apply(document.body.childNodes);
    }
    if (returnValue.length > 0) {
        var newValue = returnValue.shift();
        if (newValue !== undefined && newValue.className !== undefined && newValue.className.indexOf(className2) > -1){
            newArray.push(newValue);
        }
        if (newValue.hasChildNodes()){
            var newValue2 = [].slice.apply(newValue.childNodes);
            getElementsByClassName(className2, newArray, newValue2);
        }
        getElementsByClassName(className2, newArray, returnValue);
    }
    return newArray;
};


//test git in linux
//var x = 0;
//var HTMLCollection = [];
//var getElementsByClassName = function(className){
//    var newClassName = "."+className;
//    var returnValue = $(document).find(newClassName);
//        if (returnValue.length > x) {
//            HTMLCollection[x]=returnValue[x];
//            x++;
//            getElementsByClassName(className);
//        }
//        else {
//            x=0;
//            if(returnValue.length < HTMLCollection.length){
//                HTMLCollection = HTMLCollection.slice(0,returnValue.length);
//            }
//        }
//    return HTMLCollection;
//    };
