"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
const BgChannelsWebClient_js_1 = require("./BgChannelsWebClient.js");
function init(config) {
    return new BgChannelsWebClient_js_1.BgChannelsWebClient(config);
}
