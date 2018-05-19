"use strict";
function getAttributesByReg(dom, reg) {
    const rt = [];
    const attributes = dom.attributes;
    attributes.forEach((attribute) => {
        const regRt = attribute.match(reg);
        if (regRt) {
            rt.push({
                regRt: regRt,
                attribute: attribute,
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
