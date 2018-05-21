//  /event-track-param-(\S+))/g
export function getAttributesByReg(dom, reg) {
    const rt = [];
    const attributes = dom.attributes;
    attributes.forEach((attribute) => {
        const name = attribute.name;
        const regRt = name.match(reg)
        if (regRt) {
            rt.push({
                regRt,
                attribute: name,
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
