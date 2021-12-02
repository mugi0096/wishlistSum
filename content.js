// URLチェック
const currentUrl = window.location.href;
let validUrl = false;
if (currentUrl.includes("wishlist")) {
  validUrl = true;
}

// ほしい物リストの格金額を収集
const pricesInWishList = document.getElementsByClassName("a-section price-section");
const pricesWithMarks = [];
for (let i = 0; i < pricesInWishList.length; i++) {
  const priceWithMark = pricesInWishList[i].firstElementChild.firstElementChild.innerText;
  pricesWithMarks.push(priceWithMark);
}

const pricesList = [];
// エレメントをリストに変換
for(let i = 0; i < pricesWithMarks.length; i++){
  pricesList.push(pricesWithMarks[i].replace(",", "").slice(1));
}

// リストの文字列をNumber型へ
const pricesNum = pricesList.map(price => Number(price));
const sumPrice = pricesNum.reduce((acc, price) => acc + price, 0);

// アラート表示
const text = "リスト内の合計金額\n" + String(sumPrice) + "円";
const errorText = "ほしい物リストページに移動してください。";
validUrl? alert(text) : alert(errorText);
