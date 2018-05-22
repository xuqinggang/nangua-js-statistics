"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAttributesByReg(dom, reg) {
    var rt = [];
    var attributes = Array.from(dom.attributes);
    var m = new Map();
    attributes.forEach(function (attribute) {
        var name = attribute.name;
        var regRt = name.match(reg);
        if (regRt) {
            rt.push({
                regRt: regRt,
                attribute: name,
            });
        }
    });
    return rt;
}
exports.getAttributesByReg = getAttributesByReg;
function getDomParent(dom) {
    return dom.parentNode;
}
exports.getDomParent = getDomParent;
