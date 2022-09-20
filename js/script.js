function onInputFunction() {
    let finalPrice = document.querySelector("#price").value;
    let finalDiscountPercent = document.querySelector("#discount").value;
    let finalDiscountToman = (finalPrice * finalDiscountPercent) / 100;
    let finalTip = document.querySelector("#tip").value;
    let finalTipToman = (finalPrice * finalTip) / 100;
  
    document.querySelector("#priceAnswer").innerHTML = toFarsiNumber(Math.floor(finalPrice)) + " تومان ";
    document.querySelector(
      "#discountAnswer"
    ).innerHTML = `${toFarsiNumber(finalDiscountPercent)}% | ${toFarsiNumber(Math.floor(
        finalDiscountToman
    ))} تومان`;
    document.querySelector(
      "#tipAnswer"
    ).innerHTML = `${toFarsiNumber(finalTip)}% | ${toFarsiNumber(Math.floor(finalTipToman))} تومان`;
    document.querySelector("#result").innerHTML = toFarsiNumber(Math.floor(
      finalPrice - finalDiscountToman + finalTipToman
    )) + " تومان " ;
  }
  
  function toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return n
      .toString()
      .split('')
      .map(x => farsiDigits[x])
      .join('');
  }

  console.log(submitFunction());