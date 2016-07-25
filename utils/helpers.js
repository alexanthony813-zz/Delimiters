
module.exports = {

    flatten: function (obj){
        obj._id = Object.keys(obj)[0];

        function recurse(obj){
          if(everyValNotObj(obj)){
              return obj;
          } else {
              var newObj = {};
              for(var prop in obj){
                  if(!isObj(obj[prop])){
                      newObj[prop] = obj[prop];
                  } else {
                      for(var innerProp in obj[prop]){
                          newObj[innerProp] = obj[prop][innerProp];
                      }
                  }
              }
              return recurse(newObj);
          }
        }

        return recurse(obj);
    }
}

function isObj(obj){
    return typeof obj === "object" && obj !== "null";
}

function everyValNotObj(obj){
  for(var prop in obj){
      if(isObj(obj[prop])){
         return false;
      }
  }
  return true;
}