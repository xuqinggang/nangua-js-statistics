"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () {
    const imgNode = document.createElement('img');
    imgNode.style.display = 'none';
    document.body.appendChild(imgNode);
    return function (src) {
        imgNode.src = src;
    };
})();
