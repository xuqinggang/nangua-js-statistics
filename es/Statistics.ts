import * as Ramda from 'ramda';
import * as jquery from 'jquery';
import { getDomParent, getAttributesByReg } from './lib/dom';
import { genParamsObjToUrl } from './lib/utils';
import imageCrossReq from './lib/imageCross';

export default class Statistics {
    static commonParams = {};
    static TrackIde = {
        EVENT_TRACK_CLICK: 'data-event-track-click',
        EVENT_TRACK_PARAM: 'data-event-track-param',
    };

    // 是否是控件元素
    private isControlEle(dom: HTMLElement) {
        return dom && dom.getAttribute && dom.getAttribute(Statistics.TrackIde.EVENT_TRACK_CLICK);
    }

    // 向上查找到控件元素
    private upFindedControlEle(dom: HTMLElement) {
        if (this.isControlEle(dom) || dom === null) {
            return dom;
        }

        return this.upFindedControlEle(getDomParent(dom));
    }

    // 生成控件元素携带的参数键值对象
    private genParamsByControlEle(controlDom: HTMLElement): {} {
        const paramsObj = {};
        const reg = new RegExp(`${Statistics.TrackIde.EVENT_TRACK_PARAM}-(\\S+)`);
        const attributeAndRegArr = getAttributesByReg(controlDom, reg);
        attributeAndRegArr.forEach((item) => {
            const {
                attribute,
                regRt,
            } = item;
            paramsObj[regRt[1]] = controlDom.getAttribute(attribute);
        });

        return paramsObj;
    }

    public pv(url: string, paramsObj: {}) {
        const params = Object.assign({}, Statistics.commonParams, paramsObj);
        const reqDataStr = genParamsObjToUrl(params);
        const reqUrl = `${url}?${reqDataStr}`;
        imageCrossReq(reqUrl);
    }

    public listenControlEle(url: string) {
        document.addEventListener('touchstart', (e: Event) => {
            const targetDom = e.target;
            const controlDom = this.upFindedControlEle(targetDom as HTMLElement);
            if (controlDom) {
                const params = this.genParamsByControlEle(controlDom);
                this.pv(url, params);
            }
        });
    }
}
