function calculateTip() {
    const billAmountInput = document.getElementById("billAmount");
    const splitCountInput = document.getElementById("splitCount");
    const mealTypeSelect = document.getElementById("mealType");
    const tipAmountOutput = document.getElementById("tipAmount");
    const totalAmountOutput = document.getElementById("totalAmount");
    const amountPerPersonOutput = document.getElementById("amountPerPerson");
  
    const billAmount = parseFloat(billAmountInput.value);
    const splitcount = parseFloat(splitCountInput.value);
    const mealType = mealTypeSelect.value;
  
    let tip;
  
    // check if custom tip or service rating has been selected
    const customTipRadio = document.getElementById("customTip");
    const customTipInput = document.getElementById("customTipInput");
    const serviceRatingSelect = document.getElementById("serviceRatingSelect");
  
    if (customTipRadio.checked) {
      // get the tip amount
      const customTipAmount = parseFloat(
        document.getElementById("customTipAmount").value
      );
  
      if (isNaN(customTipAmount)) {
        tipAmountOutput.textContent = "Please enter a valid tip amount";
        totalAmountOutput.textContent = "";
        amountPerPersonOutput.textContent = "";
      }
      tip = customTipAmount;
    } else {
      // get tip based on service rating
      const serviceRating = parseFloat(serviceRatingSelect.value);
      if (isNaN(serviceRating)) {
        tipAmountOutput.textContent = "Please select service rating";
        totalAmountOutput.textContent = "";
        amountPerPersonOutput.textContent = "";
        return;
      }
  
      switch (serviceRating) {
        case 1:
          tip = billAmount * 0.5;
          break;
        case 2:
          tip = billAmount * 0.1;
          break;
        case 3:
          tip = billAmount * 0.15;
          break;
        case 4:
          tip = billAmount * 0.2;
          break;
  
        default:
          tipAmountOutput.textContent = "Invalid service rating";
          totalAmountOutput.textContent = "";
          amountPerPersonOutput.textContent = "";
          return;
      }
  
      // adjust tip amount for type of meal
      if (mealType === "dinner") {
        tip += 5;
      }
      // add others
    }
    let totalAmount = billAmount + tip;
    let amountPerPerson = totalAmount / splitcount;
  
    // Display results
    tipAmountOutput.textContent = `Tip: Ghc ${tip.toFixed(2)}`;
    totalAmountOutput.textContent = `Total Amount: Ghc ${totalAmount.toFixed(2)}`;
    amountPerPersonOutput.textContent = `Amount per person: Ghc ${amountPerPerson.toFixed(
      2
    )}`;
  }
  
  document.getElementById("calculateBtn").addEventListener("click", calculateTip);
  
  
  // Event listeners for toggling between custom tip and service rating inputs
  const customTipRadio = document.getElementById("customTip");
  const serviceRatingRadio = document.getElementById("serviceRating");
  const customTipInput = document.getElementById("customTipInput");
  const serviceRatingInput = document.getElementById("serviceRatingInput");
  
  customTipRadio.addEventListener("change", function () {
    if (this.checked) {
      customTipInput.style.display = "block";
      serviceRatingInput.style.display = "none";
    }
  });
  
  serviceRatingRadio.addEventListener("change", function () {
    if (this.checked) {
      serviceRatingInput.style.display = "block";
      customTipInput.style.display = "none";
    }
  });
  
  // Initially show/hide inputs based on selected radio button
  if (customTipRadio.checked) {
    customTipInput.style.display = "block";
    serviceRatingInput.style.display = "none";
  } else if (serviceRatingRadio.checked) {
    serviceRatingInput.style.display = "block";
    customTipInput.style.display = "none";
  }