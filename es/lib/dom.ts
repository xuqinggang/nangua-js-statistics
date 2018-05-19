//  /event-track-param-(\S+))/g
export function getAttributesByReg(dom, reg) {
    const rt = [];
    const attributes = dom.attributes;
    attributes.forEach((attribute) => {
        const regRt = attribute.match(reg)
        if (regRt) {
            rt.push({
                regRt,
                attribute,
            });
        }
    });

    return rt;
}

export function getDomParent(dom) {
    return dom.parentNode;
}

export function traverseUpPhase(dom) {

}
//  /event-track-param-(\s+)/g
