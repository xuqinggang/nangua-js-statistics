"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("./lib/dom");
var utils_1 = require("./lib/utils");
var imageCross_1 = require("./lib/imageCross");
var Statistics = (function () {
    function Statistics() {
    }
    Statistics.prototype.isControlEle = function (dom) {
        return dom && dom.getAttribute && dom.getAttribute(Statistics.TrackIde.EVENT_TRACK_CLICK);
    };
    Statistics.prototype.upFindedControlEle = function (dom) {
        if (this.isControlEle(dom) || dom === null) {
            return dom;
        }
        return this.upFindedControlEle(dom_1.getDomParent(dom));
    };
    Statistics.prototype.genParamsByControlEle = function (controlDom) {
        var paramsObj = {};
        var reg = new RegExp(Statistics.TrackIde.EVENT_TRACK_PARAM + "-(\\S+)");
        var attributeAndRegArr = dom_1.getAttributesByReg(controlDom, reg);
        attributeAndRegArr.forEach(function (item) {
            var attribute = item.attribute, regRt = item.regRt;
            paramsObj[regRt[1]] = controlDom.getAttribute(attribute);
        });
        return paramsObj;
    };
    Statistics.prototype.pv = function (url, paramsObj) {
        var params = Object.assign({}, Statistics.commonParams, paramsObj);
        var reqDataStr = utils_1.genParamsObjToUrl(params);
        var reqUrl = url + "?" + reqDataStr;
        imageCross_1.default(reqUrl);
    };
    Statistics.prototype.listenControlEle = function (url) {
        var _this = this;
        document.addEventListener('touchstart', function (e) {
            var targetDom = e.target;
            var controlDom = _this.upFindedControlEle(targetDom);
            if (controlDom) {
                var params = _this.genParamsByControlEle(controlDom);
                _this.pv(url, params);
            }
        });
    };
    Statistics.commonParams = {};
    Statistics.TrackIde = {
        EVENT_TRACK_CLICK: 'data-event-track-click',
        EVENT_TRACK_PARAM: 'data-event-track-param',
    };
    return Statistics;
}());
exports.default = Statistics;
