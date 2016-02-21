var Promise = require('bluebird');
/*For refrence
//normal callback
var getTheFamily = function(animal,callback){
  console.log('get family called');
  if(animal === 'dog'){
    callback('canine');
  }
  else{
    callback('other');
  }
}

getTheFamily('dog',function(family){
  console.log('returned family is :',family);
});
*/

//using promise
var getTheFamilyUsingPromise = function(animal,callback){
  return new Promise(function(resolve,reject){
    if(animal === 'dog'){
      resolve('canine');
    }
    else{
      reject('other');
    }
  });
};

getTheFamilyUsingPromise('dog').then(function(animal,error){
  if(error){
    console.log('error is :',error);
  }
  else{
    console.log('animal is :',animal);
  }

});
