var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign(object, {});
  return delete clone['key'];
}

function destructivelyDeleteFromObjectByKey(object, key) {
  Object.assign(object, {[key]: value});
  return delete object.key;
}
