const replaceSmiley = (input) => {
  let res = "";
  for (let i = 0; i < input.length; i++) {
    res += input[i] === ")" ? "(" : input[i];
  }
  return res;
};
// console.log(replaceSmiley(":) :) :) All smiles here :)"));

const hideCreditCard = (cardNumber) => {
  let PassCard = "";
  const cardStr = String(cardNumber);
  for (let i = 0; i < cardStr.length; i++) {
    PassCard += i < 12 ? "*" : cardStr[i];
  }
  return PassCard;
};

// console.log(hideCreditCard(1234567890123456));

function checkPronic(num) {
  for (let i = 0; i < num / 2; i++) {}
}
