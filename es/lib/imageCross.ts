export default (function() {
    const imgNode = document.createElement('img');
    imgNode.style.display = 'none';
    document.body.appendChild(imgNode);

    return function(src: string) {
        imgNode.src = src;
    }
})();
