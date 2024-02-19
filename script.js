
   let calculate =document.getElementById("calculate").onclick = function (){

    let billAm = document.getElementById("billAmount").value

    if(!billAm){
        alert("input bill amount")
    }

    else{
        console.log(billAm)
    };


    // let cust = document.getElementById("customerTip").value

    if (document.getElementById("customerTip").checked == true && document.getElementById("serviceRating").checked == false) {
        alert("custom checked")
    }

   else if (document.getElementById("serviceRating").checked == true && document.getElementById("customerTip").checked == false){
    alert("servce rating checked")
   }

    
   else{
    alert("plesase choose type of tip")
   }

// //    let serv = document.getElementById("serviceRating").value

//    if (document.getElementById("")) {
//     alert("service checked")
//    }

//   else{
//       alert("check service rating")
//   };



    let customTip = document.getElementById("customerTipAmount").value
    if(!customTip){
       
        alert("please enter customer tip number")
    }
    
    else{
        console.log(customTip)
    }

    

    let numberOf = document.getElementById("splitCount").value
    if(!splitCount){
        alert("input number of people")
    }

    else{
        console.log(numberOf)
    };


    

    if(meal.options){
        console.log(meal)
    }

    else{
        alert("please select meal type")
    }


    let final = calculate.innerHtml = `${calculate}`
     console.log(final)
}

