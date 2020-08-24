window.alert("Hello"); //same as alert()

window.console.log(12); // same as console.log

const input = prompt();
console.log(input);

if (confirm("Are you sure?")) {
  console.log("sure");
}

const arr = [
  window.outerHeight,
  window.outerWidth,
  window.innerHeight,
  window.innerWidth,
  window.scrollX,
  window.scrollY,
];

setTimeout(() => {
  console.log("Hello");
}, 2000);

arr.forEach((i) => console.log(i));

console.log(window.location);
// LOCATION OBJECT CONTAINS
// assign: function assign()
// hash: ""
// host: "127.0.0.1:5500"
// hostname: "127.0.0.1"
// href: "http://127.0.0.1:5500/Javascript%20Basics/index.html"
// origin: "http://127.0.0.1:5500"
// pathname: "/Javascript%20Basics/index.html"
// port: "5500"
// protocol: "http:"
// reload: function reload()
// replace: function replace()
// search: ""
// toString: function toString()
// valueOf: function valueOf()
// Symbol(Symbol.toPrimitive): undefined
//     < get hash() >: function hash()
// <set hash() >: function hash()
// <get host() >: function host()
// <set host() >: function host()
// <get hostname() >: function hostname()
// <set hostname() >: function hostname()
// <get href() >: function href()
// <set href() >: function href()
// <get origin() >: function origin()
// <get pathname() >: function pathname()
// <set pathname() >: function pathname()
// <get port() >: function port()
// <set port() >: function port()
// <get protocol() >: function protocol()
// <set protocol() >: function protocol()
// <get search() >: function search()
// <set search() >: function search()
// <prototype>: LocationPrototype

console.log(window.navigator);
// NAVIGATOR OBJECT CONTAINS
// activeVRDisplays: Array[]
// appCodeName: "Mozilla"
// appName: "Netscape"
// appVersion: "5.0 (Windows)"
// buildID: "20181001000000"
// clipboard: Clipboard { }
// cookieEnabled: true
// credentials: CredentialsContainer { }
// doNotTrack: "unspecified"
// geolocation: Geolocation { }
// hardwareConcurrency: 4
// language: "en-US"
// languages: Array["en-US", "en"]
// maxTouchPoints: 0
// mediaCapabilities: MediaCapabilities { }
// mediaDevices: MediaDevices { ondevicechange: null }
// mimeTypes: MimeTypeArray { length: 0 }
// onLine: true
// oscpu: "Windows NT 6.3; Win64; x64"
// permissions: Permissions { }
// platform: "Win32"
// plugins: PluginArray { length: 0 }
// product: "Gecko"
// productSub: "20100101"
// serviceWorker: ServiceWorkerContainer { controller: null, ready: Promise { "pending" }, oncontrollerchange: null, … }
// storage: StorageManager { }
// userAgent: "Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0"
// vendor: ""
// vendorSub: ""
// webdriver: false
//     <prototype>: NavigatorPrototype { vibrate: vibrate(), javaEnabled: javaEnabled(), getGamepads: getGamepads(), … }

console.log(window.history.length);

alert("gonna shift");

window.history.go(-2); //-ve for backs and +ve for forward
