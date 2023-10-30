/* exported setValue */

function setValue(obj, key, value) {
  Object.defineProperty(obj, key, {
    value,
    writable: true,
    configurable: true,
    enumerable: true,
  });
}
