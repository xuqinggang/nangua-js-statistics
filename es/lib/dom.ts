//  /event-track-param-(\S+))/g
export function getAttributesByReg(dom: HTMLElement, reg: RegExp) {
    const rt: Array<any> = [];
    const attributes = Array.from(dom.attributes);
    const m = new Map();
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

export function getDomParent(dom: HTMLElement) {
    return dom.parentNode;
}
