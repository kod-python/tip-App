
   let calculate =document.getElementById("calculate").onclick = function (){

    let billAm = document.getElementById("billAmount").value

    if(!billAm){
        alert("input number")
    }

    else{
        console.log(billAm)
    };


    let cust = document.getElementById("serviceRating").value

    if (cust.cheked) {
        console.log(cust)
    }

   else{
    alert("please check your button")
   };


   let serv = document.getElementById("serviceRating").value

   if (serv.cheked) {
       console.log(serv)
   }

  else{
   alert("please check your button")
  };



    let customTip = document.getElementById("customerTipAmount").value
    if(!customTip){
        alert("input number")
    }

    else{
        console.log(customTip)
    };

    let numberOf = document.getElementById("splitCount").value
    if(!splitCount){
        alert("input number")
    }

    else{
        console.log(numberOf)
    };


    let meal = document.getElementById("mealType").value

    if(meal.select){
        console.log(meal)
    }

    else{
        alert("please select meal type")
    }


    let final = calculate.innerHTml = `${calculate}`

    console.log(final)
}

