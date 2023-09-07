window.addEventListener("load", start);

function start() {
  fetchData();

  setInterval(() => {
    console.log("hello");
    fetchData();
  }, 10000);
}

function fetchData() {
  document.querySelector(".block").classList.remove("smooth");
  fetch("https://kea-alt-del.dk/kata-distortion/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("p").textContent = data.inQueue;
      document.querySelector(".block").style.setProperty("--height", data.inQueue);

      //sets the degrees of the speed hand based on how high inQueue number is. (I think the highest nr. is 25)
      const speedHandDeg = (data.inQueue / 25) * 180;
      document.querySelector(".speed_hand").style.transform = `rotate(${speedHandDeg}deg)`;
    });
}
