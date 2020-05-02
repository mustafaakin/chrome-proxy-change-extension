document.getElementById("set").onclick = function(element) {
  let a = document.getElementsByName("addr")[0].value.split(":");
  let addr = a[0];
  let port = parseInt(a[1]);

  var config = {
    mode: "fixed_servers",
    rules: {
      proxyForHttp: {
        scheme: "http",
        host: addr,
        port: port
      },
      proxyForHttps: {
        scheme: "http",
        host: addr,
        port: port
      },
      bypassList: ["localhost", "127.0.0.1"]
    }
  };

  chrome.proxy.settings.set({
    value: config,
    scope: 'regular'
  }, function(err) {
    alert("Set the Proxy Config")
  });
}

console.log("2")
document.getElementById("clear").onclick = function(element) {
  chrome.proxy.settings.clear({
    scope: "regular"
  }, function() {
    alert("Cleared the Proxy Config")
  })
}