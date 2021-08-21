const costPrice = document.querySelector("#cost");
const quantity = document.querySelector("#number");
const currentVal = document.querySelector("#currentVal");
const stockBtn = document.querySelector("#stock__btn");
const stockAns = document.querySelector("#stock__ans");

const calProfitandLoss = () => {
  let cost = Number(costPrice.value);
  let current = Number(currentVal.value);
  let number = Number(quantity.value);
  console.log(cost, current);
  if (cost > current) {
    let loss = (cost - current) * number;
    let percentLoss = (loss / cost) * 100;
    stockAns.textContent = `loss ${loss} and losspercentage is ${percentLoss}`;
  } else if (current > cost) {
    let profit = (current - cost) * number;
    let percentProfit = (profit / cost) * 100;
    stockAns.textContent = `profit ${profit} and profitpercentage is ${percentProfit}`;
  } else {
    stockAns.textContent = "No pain no gain";
  }
};

stockBtn.addEventListener("click", calProfitandLoss);
