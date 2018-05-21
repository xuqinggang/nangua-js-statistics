"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAttributesByReg(dom, reg) {
    const rt = [];
    const attributes = dom.attributes;
    attributes.forEach((attribute) => {
        const name = attribute.name;
        const regRt = name.match(reg);
        if (regRt) {
            rt.push({
                regRt,
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
function traverseUpPhase(dom) {
}
exports.traverseUpPhase = traverseUpPhase;
