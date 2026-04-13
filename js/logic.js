function Discount() {
    let Purchase = Number(document.getElementById("totalPurchase").value);
    let hasCoupon = document.getElementById("hasCoupon").value === "true";
    
    let discountP = document.getElementById("Discount");
    let totalP = document.getElementById("Total");


    
    if (Purchase <= 0) {
        discountP.textContent = "Please enter a valid Purchase amount";
        totalP.textContent = "";
        return;
    }

    let discountRate = 0;
    if (Purchase > 100) {
        discountRate =  0.20;
        if(hasCoupon){
            
            discountRate += 0.05; 
            discountP.textContent = "20% discount - 5% coupon applied ";
        } else {
            discountP.textContent = "20% discount applied (no coupon)";

        }
    }else if (Purchase > 50){
        discountRate =  0.10;
        if(hasCoupon){
            
            discountRate += 0.05; 
            discountP.textContent = "10% discount - 5% coupon applied ";
        } else {
            discountP.textContent = "10% discount applied (no coupon)";
       
        }
    }
    else{
        if(hasCoupon){
            
            discountRate += 0.05; 
            discountP.textContent = "no discount - 5% coupon applied ";
        } else {
            discountP.textContent = "no discount applied (no coupon)";

        }
    }
    
    let discountAmount = Purchase * discountRate;
    let finalTotal = Purchase - discountAmount;

     totalP.textContent =
      `Final total: $${finalTotal.toFixed(2)} (Discount: ${(discountRate * 100).toFixed(0)}%)`;


}

 