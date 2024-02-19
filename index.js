const seat = document.getElementsByClassName("seat");
let minousCount = 40;
let count = 0;
let inTotal = 0;
for (let singleSeat of seat) {
  singleSeat.addEventListener("click", function () {
    if (count > 0 || count < 4) {
      document.getElementById("btn-nexr").removeAttribute("disabled");
      document.getElementById("btn-cupon").removeAttribute("disabled");
    }
    if (count == 4) {
      singleSeat.setAttribute("disabled");
    }

    singleSeat.classList.add("bg-green-500");
    singleSeat.classList.add("text-white");
    const selectedSeat = document.getElementById("selectedSeat");
    const ul = document.createElement("ul");
    const createdSet = document.createElement("li");
    const Economoy = document.createElement("li");
    const createdPrice = document.createElement("li");

    createdSet.innerText = singleSeat.innerText;
    Economoy.innerText = "Economoy";
    createdPrice.innerText = "500";

    ul.appendChild(createdSet);
    ul.appendChild(Economoy);
    ul.appendChild(createdPrice);
    selectedSeat.appendChild(ul);
    count += 1;
    minousCount -= 1;
    inTotal += 500;

    document.getElementById("addseat").innerText = count;
    document.getElementById("left").innerText = minousCount;
    document.getElementById("total").innerText = inTotal;
    document.getElementById("grandTotal").innerText = inTotal;

    event.target.setAttribute("disabled", true);
  });
}
const phn = document.getElementById("phone").value;
console.log(phn);

document.getElementById("btn-cupon").addEventListener("click", function () {
  const cupon = document.getElementById("cuponDiscount").value;
  if (cupon === "Couple 20") {
    // const mainGrand= document.getElementById('grandTotal').innerText=inTotal;
    const mainGrand = inTotal - (inTotal * 20) / 100;
    document.getElementById("grandTotal").innerText = mainGrand;
    inTotal += 500;
  } else if (cupon === "NEW15") {
    const mainGrand = inTotal - (inTotal * 15) / 100;
    document.getElementById("grandTotal").innerText = mainGrand;
    inTotal += 500;
  } else {
    alert("oops invalid cupon");
    return;
  }
  document.getElementById("cup-con").classList.add("hidden");
});
