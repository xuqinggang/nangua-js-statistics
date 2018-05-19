export function genParamsObjToUrl(paramsObj) {
    // 请求参数
    let reqData = '';
    if (typeof paramsObj === 'object' && Object.keys(paramsObj).length) {
        for (const key in paramsObj) {
            // 请求参数拼接
            if (Object.prototype.hasOwnProperty.call(paramsObj, key)) {
                // 传参为数组时， 需要解析成json字符串
                if (paramsObj[key] instanceof Array) {
                    reqData += key + '=' + JSON.stringify(paramsObj[key]) + '&';
                } else {
                    reqData += key + '=' + paramsObj[key] + '&';
                }
            }
        }
        reqData = reqData.substr(0, reqData.length - 1);
    }

    return reqData;
}
