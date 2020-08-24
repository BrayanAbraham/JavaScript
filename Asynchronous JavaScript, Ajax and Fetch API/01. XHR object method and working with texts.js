document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  const XHR = new XMLHttpRequest();
  XHR.open("GET", "data.txt", true);
  console.log("READY STATE:", XHR.readyState);

  XHR.onprogress = function () {
    console.log("READY STATE:", XHR.readyState);
  };

  XHR.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  //   XHR.onreadystatechange = function () {
  //     console.log("READY STATE:", XHR.readyState);
  //     if (this.status === 200 && this.readyState === 4) {
  //       console.log(this.responseText);
  //     }
  //   };

  XHR.onerror = function () {
    console.log("Error");
  };

  XHR.send();
  // readyState values
  // 0 req not initialized
  // 1 server connection established
  // 2 request recieved
  // 3 processing request
  // 4 req finished res ready
}
