"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ramda = require("ramda");
const dom_1 = require("./lib/dom");
const utils_1 = require("./lib/utils");
const imageCross_1 = require("./lib/imageCross");
console.log('Ramda', Ramda);
class Statistics {
    isControlEle(dom) {
        return dom.getAttribute(Statistics.TrackIde.EVENT_TRACK_CLICK);
    }
    upFindedControlEle(dom) {
        if (this.isControlEle(dom) || dom === null) {
            return dom;
        }
        return this.upFindedControlEle(dom_1.getDomParent(dom));
    }
    genParamsByControlEle(controlDom) {
        const paramsObj = {};
        const reg = new RegExp(`${Statistics.TrackIde.EVENT_TRACK_PARAM}-(\\S+)`);
        const attributeAndRegArr = dom_1.getAttributesByReg(controlDom, reg);
        attributeAndRegArr.forEach((item) => {
            const { attribute, regRt, } = item;
            paramsObj[regRt[1]] = controlDom.getAttribute(attribute);
        });
        return paramsObj;
    }
    pv(url, paramsObj) {
        const params = Object.assign({}, Statistics.commonParams, paramsObj);
        const reqDataStr = utils_1.genParamsObjToUrl(params);
        const reqUrl = `${url}?${reqDataStr}`;
        imageCross_1.default(reqUrl);
    }
    listenControlEle(url) {
        document.addEventListener('touchstart', (e) => {
            const targetDom = e.target;
            const controlDom = this.upFindedControlEle(targetDom);
            if (controlDom) {
                const params = this.genParamsByControlEle(controlDom);
                this.pv(url, params);
            }
        });
    }
}
Statistics.commonParams = {};
Statistics.TrackIde = {
    EVENT_TRACK_CLICK: 'data-event-track-click',
    EVENT_TRACK_PARAM: 'data-event-track-param',
};
exports.default = Statistics;
