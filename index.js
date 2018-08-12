var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}

function deleteFromObjectByKey(object, key) {
  Object.assign({}, object);
  delete object.key;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object.key;
}

//var q = {age:10, 'profile.contry': 'india'};
//var duplicateQ = Object.assign({}, q);
//delete duplicateQ['profile.contry'];