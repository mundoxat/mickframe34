const r = document.querySelector(":root");
const bodyElement = document.body;
const randomizeElement = document.querySelector(".randomize");
const destinations = [
  {
    name: "Mick",
    location: " (10004)",
    img:
      "https://xatimg.com/image/Evug6N3nYz8M.jpg"
  },
  {
    name: "Mick",
    location: " (10004)",
    img:
      "https://xatimg.com/image/RT2IMJCmpOSw.jpg"
  },
  {
    name: "Mick",
    location: " (10004)",
    img:
      "https://xatimg.com/image/PIait5Tx5WsZ.jpg"
  }
];
let nextDestination = destinations[1];

const getRandomDestination = () => {
  const randomId = Math.floor(Math.random() * destinations.length);
  return destinations[randomId];
};

const displayNextContent = () => {
  if (bodyElement.classList.contains("body--animated")) {
    return;
  }

  bodyElement.classList.add("body--animated");

  setTimeout(() => {
    r.style.setProperty("--img-current", `url(${nextDestination.img})`);
    r.style.setProperty("--text-current-title", `"${nextDestination.name}"`);
    r.style.setProperty(
      "--text-current-subtitle",
      `"${nextDestination.location}"`
    );
    setTimeout(() => {
      bodyElement.classList.remove("body--animated");
      setTimeout(() => {
        nextDestination = getRandomDestination();
        r.style.setProperty("--img-next", `url(${nextDestination.img})`);
        r.style.setProperty("--text-next-title", `"${nextDestination.name}"`);
        r.style.setProperty(
          "--text-next-subtitle",
          `"${nextDestination.location}"`
        );
      }, 1000);
    }, 1000);
  }, 1000);
};

randomizeElement.addEventListener("click", displayNextContent);

// start on fist load only for CodePen Animation ;)
displayNextContent();
