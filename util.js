function getGetParameters() {
    var qd = {};
    location.search.substr(1).split("&").forEach(function(item) {
        var s = item.split("="),
            k = s[0],
            v = s[1] && decodeURIComponent(s[1].replace(/\+/g, '%20'));
        (k in qd) ? qd[k].push(v) : qd[k] = [v]
    });
    return qd;
}


function nuke(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}


function lookupItem(item, callback) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        callback(req);
    };
    req.open("GET", "http://api.walmartlabs.com/v1/search?apiKey=dvj6prxrbf9t7pe7cqf75tfb&numItems=1&query=" + encodeURI(item), true);
    req.send();
}