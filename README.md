## 南瓜租房h5统计 js-sdk

## npm publish
npm publish --registry=http://10.10.126.140:4873

## install
npm install --registry=http://10.10.126.140:4873

## 使用
```js
import NanguaStatistics from 'nangua-js-statistics';
const nanguaStatistics = new NanguaStatistics();

// 主要函数用法
1.pv
/**
* 主动发送pv请求
* @param {string} url pv请求的url
* @param {object} params 请求传递的参数
*/
nanguaStatistics.pv(url, params);


2.listenControlEle
/**
* 监听控件元素主动发送pv请求(控件元素的配置请看下面)
* @param {string} url pv请求的url
*/
nanguaStatistics.listenControlEle(url);


>控件元素的配置如下
<span event-track-click event-track-param-rentUnitId="1111"></span>
绑定`event-track-click`属性的称为控件元素
event-track-param-xxxx1='xxxx' xxxx1为传递的参数键，属性值为传递的参数值

3.配置公共参数
NanguaStatistics.commonParams = {
    
};
```
