
const _ = require('lodash')

module.exports = {
  replacePathParameters: (url) => url.replace(/{([^{}]+)}/g, (keyExpr, key) => `{{bundle.inputData.${key}}}`),
  removeKeyPrefixes: (objectsArray) => objectsArray == undefined || typeof objectsArray[0] != 'object' ? objectsArray : objectsArray.map((obj) => Object.keys(obj).reduce((res, key) => (res[(key.split('.')).slice(-1)] = obj[key], res), {})),
  removeIfEmpty: (obj) => _.isEmpty(JSON.parse(JSON.stringify(obj))) ? undefined : obj,
  extractDataMiddleware: (action) => {
    let oldFunc = action.operation.perform
    action.operation.perform = async(z, bundle) => oldFunc(z, bundle).then((response) => response.data)
    return action
  } 
}
