"use strict";
function genParamsObjToUrl(paramsObj) {
    let reqData = '';
    if (typeof paramsObj === 'object' && Object.keys(paramsObj).length) {
        for (const key in paramsObj) {
            if (Object.prototype.hasOwnProperty.call(paramsObj, key)) {
                if (paramsObj[key] instanceof Array) {
                    reqData += key + '=' + JSON.stringify(paramsObj[key]) + '&';
                }
                else {
                    reqData += key + '=' + paramsObj[key] + '&';
                }
            }
        }
        reqData = reqData.substr(0, reqData.length - 1);
    }
    return reqData;
}
exports.genParamsObjToUrl = genParamsObjToUrl;
