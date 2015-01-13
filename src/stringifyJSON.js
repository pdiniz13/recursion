// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj, string) {
    if (typeof obj === "string") {
        return '"' + obj + '"';
    }
    if (typeof obj === "number") {
        return obj.toString();
    }
    if (obj === null) {
        return ("null")
    }
    if (typeof obj === "boolean") {
        return obj.toString();
    }
    if (Array.isArray(obj)) {

        if (string === undefined){
            string = "[";
        }
        if (obj.length > 1) {
            string += stringifyJSON(obj.shift()) + ",";
            return stringifyJSON(obj, string);
        }
        else if (obj.length > 0){
            string += stringifyJSON(obj.shift());
            return stringifyJSON(obj, string);
        }
        else if(obj.length === 0){
            return string + "]";
        }
        return string;
    }
    if (typeof(obj) === "object"){

        if (string === undefined){
            string = "{"
        }
        for (var key in obj) {
            if (obj.hasOwnProperty(key)){
                if (obj[key] === undefined || typeof obj[key] === "function"){
                    string = "{";
                    break;
                }
                string += stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
            }
        }
        if (string.charAt(string.length-1)===","){
            string=string.slice(0,-1)
        }
        return string + "}";
    }


};