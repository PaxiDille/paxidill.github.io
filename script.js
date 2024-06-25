function handleFruitChange() {
  const channels = document.querySelector(".content");
  const channel = document.querySelector("#select");
  const selectedFruit = channel.value;
  if (selectedFruit === "2") {
    channels.style.display = "block";
  } else {
    channels.style.display = "none";
  }
}

const btn = document.querySelector(".start");
function Start () {
    const modal = document.querySelector("#modal-btn");
    modal.classList.add('open') = "open";
    console.log("modal clicked");
}

btn.addEventListener("click", () => setTimeout(Start, 2000));

// setTimeout(Start, 2000);

// btn.addEventListener("click", (e) => {
//         e.preventDefault();
//     modal.classList.add('open') = "open";
//     console.log("modal clicked");
// })
