const actions = require("./operations/actions");
const { searchActions } = require("./operations/actions");

let a = ["create"].map(et => `it.fattureincloud.webhooks.${et}`)
console.log(a)