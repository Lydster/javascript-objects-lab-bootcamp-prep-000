var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}

function deleteFromObjectByKey(object, key) {
  clone = Object.assign(object, {});
  delete clone{key];
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object.key;
}
