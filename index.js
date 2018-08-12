var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}

function deleteFromObjectByKey(object, key) {
  var prop = Object.assign({}, object);
  delete prop.key;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object.key;
}
