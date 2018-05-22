"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Service = {
    baseConfig: {},
    reqServer: function (url, paramters, type, extraConf) {
        if (extraConf === void 0) { extraConf = {}; }
        var commonParamters = Service.baseConfig.commonParamters;
        var _a = extraConf.contentType, contentType = _a === void 0 ? 'json' : _a, _b = extraConf.timeout, timeout = _b === void 0 ? 10000 : _b;
        if (commonParamters) {
            Object.assign(paramters, commonParamters);
        }
        var promise = new Promise(function (resolve, reject) {
            var xmlHttp = new XMLHttpRequest();
            var reqData = '';
            if (typeof paramters === 'object' && Object.keys(paramters).length) {
                for (var key in paramters) {
                    if (Object.prototype.hasOwnProperty.call(paramters, key)) {
                        if (paramters[key] instanceof Array) {
                            reqData += key + '=' + JSON.stringify(paramters[key]) + '&';
                        }
                        else {
                            reqData += key + '=' + paramters[key] + '&';
                        }
                    }
                }
                reqData = reqData.substr(0, reqData.length - 1);
            }
            xmlHttp.onload = function () {
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                    try {
                        var result = JSON.parse(xmlHttp.responseText);
                        console.log("\u56DE\u8C03success:server:url=" + url + " [result]=", result);
                        if (result && result.code === 200) {
                            resolve(result);
                        }
                        else {
                            var errRt = JSON.parse(xmlHttp.responseText);
                            console.error("\u56DE\u8C03error:server:url=" + url + " [errRt]=", errRt);
                            reject(errRt);
                        }
                    }
                    catch (err) {
                        reject(err);
                    }
                }
                else {
                    reject('服务器错误码:' + xmlHttp.status);
                }
            };
            xmlHttp.onerror = function () {
                reject('服务器错误码:' + xmlHttp.status);
            };
            if ('timeout' in xmlHttp && 'ontimeout' in xmlHttp) {
                xmlHttp.timeout = timeout;
                xmlHttp.ontimeout = function () {
                    reject('timeout');
                };
            }
            if (type === 'GET' && reqData.length) {
                url = url + '?' + reqData;
            }
            xmlHttp.open(type, url, true);
            if (type === 'GET' || type === 'DELETE') {
                xmlHttp.send(null);
            }
            else if (type === 'PUT' || type === 'POST') {
                if (contentType === 'form') {
                    xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                    xmlHttp.send(reqData);
                }
                else if (contentType === 'form-data') {
                    var form = new FormData();
                    for (var key in paramters) {
                        form.append(key, paramters[key]);
                    }
                    xmlHttp.send(form);
                }
                else {
                    xmlHttp.setRequestHeader('Content-type', 'application/json');
                    xmlHttp.send(JSON.stringify(paramters));
                }
            }
            console.info("\u8BF7\u6C42server: type=" + type + " url=" + url);
        });
        return promise;
    },
    get: function (url, paramters, extraConf) {
        return Service.reqServer(url, paramters, 'GET', extraConf);
    },
    post: function (url, paramters, extraConf) {
        return Service.reqServer(url, paramters, 'POST', extraConf);
    },
    put: function (url, paramters) {
        return Service.reqServer(url, paramters, 'PUT');
    },
    delete: function (url) {
        return Service.reqServer(url, {}, 'DELETE');
    },
};
exports.default = Service;
