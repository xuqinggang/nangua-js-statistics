export default class Statistics {
    static commonParams: {};
    static TrackIde: {
        EVENT_TRACK_CLICK: string;
        EVENT_TRACK_PARAM: string;
    };
    private isControlEle(dom);
    private upFindedControlEle(dom);
    private genParamsByControlEle(controlDom);
    pv(url: string, paramsObj: {}): void;
    listenControlEle(): void;
}
