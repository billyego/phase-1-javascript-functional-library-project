const standardInput = (collection)=>{
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }

function myEach(collection,cb){
    const freshcollection=standardInput(collection);
    for (let i = 0; i < freshcollection.length; i++) {
        cb(freshcollection[i]);
      }
    
      return collection;
    }
function myMap(collection,cb){
    const freshcollection=standardInput(collection);
    const arr=[]
    for(let i=0;i<freshcollection.length;i++){
        arr.push(cb(freshcollection[i]))
    }
    return arr;
}
function myReduce(collection,cb,arr){
    let freshcollection=standardInput(collection)
    if (!arr) {
        arr = freshcollection[0];
        freshcollection = freshcollection.slice(1);}

    for(let i=0;i<freshcollection.length;i++){
        arr=cb(arr,freshcollection[i],freshcollection)
    }
      return arr;
}
function myFind(collection,cb){
    const freshcollection=standardInput(collection)
    for(let i=0;i<freshcollection.length;i++){
        if(cb(freshcollection[i]))
        return freshcollection[i]
    }return undefined
}
function myFilter(collection,cb){
    const freshcollection=standardInput(collection)
    let array=[]
    for (let i=0;i<freshcollection.length;i++){
       if(cb(freshcollection[i]))array.push(freshcollection[i])
    }
    return array
}
function mySize(collection){
    const freshcollection=standardInput(collection)
    return freshcollection.length

}
function myFirst(collection,n){
    const freshcollection=standardInput(collection)
    if(n !==undefined){
    return freshcollection.splice(0,n)}
    else{
        return freshcollection[0]
    }
}
function myLast(collection,n){
    const freshcollection=standardInput(collection)
    if(n !==undefined){
        return freshcollection.slice(-n)
    }else{
        return freshcollection[freshcollection.length-1]
    }
}
function myKeys(collection) {
    const keys = [];
    for (let key in collection){
      keys.push(key);
    }
    return keys;
  }
  function myValues(collection) {
    const values = [];
    for (let key in collection){
      values.push(collection[key]);
    }
    return values;
}