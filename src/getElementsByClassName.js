// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var x = 0;
var HTMLCollection = [];
var getElementsByClassName = function(className){
    var newClassName = "."+className;
    var returnValue = $(document).find(newClassName);
        if (returnValue.length > x) {
            HTMLCollection[x]=returnValue[x];
            x++;
            getElementsByClassName(className);
        }
        else {
            console.log(HTMLCollection);
            x=0;
            if(returnValue.length < HTMLCollection.length){
                HTMLCollection = HTMLCollection.slice(0,returnValue.length);
            }
        }
    return HTMLCollection;
    };
