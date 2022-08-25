
let btnSubmit=document.getElementById("submit");
let fAdults = document.getElementById("num_AF");
btnSubmit.addEventListener("click",submit);

function submit(event){


//for Foriegners//
    event.preventDefault(); //this prevents the page from reloading//

    console.log("Number of Tickets (Adults)",document.getElementById("num_AF").value);
    console.log("Number of tickets (Children)",document.getElementById("num_c").value);
    let timef=document.querySelector("input[name='timef']:checked");
    console.log("Choose your package"+timef);

    console.log("Annual pass(5000LKR pp)",document.getElementById("pass_F").value);
    console.log("Food tokens(500LKR pp)",document.getElementById("food_F").value); 

}

let btnSubmit_1=document.getElementById("submit_1");
btnSubmit.addEventListener("click",submit_1);

function submit_1(){

console.log("Number of Tickets (Adults_)",document.getElementById("numA").value);
console.log("Number of Children below 15",document.getElementById("num_15").value);
console.log("Number of Children below 6",document.getElementById("num_6").value);

let duration=document.getElementById("Choose your package").value;
let time;
if (duration == "3 Hours") {
    time = document.getElementById("3hr").value 
}
else if (duration == "1/2 Day") {
    time = document.getElementById("1/2day").value
}
else if (duration == "1 Day") {
    time = document.getElementById("1day").value
}
else if (duration == "2 Days") {
    time = document.getElementById("2day").value
}
console.log("Choose your package"+ time);

console.log("Annual pass(5000LKR pp)",document.getElementById("pass_L").value);
console.log("Food tokens(500LKR pp)",document.getElementById("food_L").value);

let totaltickets = parseInt(document.getElementById("num_AF").value) + parseInt(document.getElementById("num_c").value) + parseInt(document.getElementById("numA").value) + parseInt(document.getElementById("num_15").value) + parseInt(document.getElementById("num_6").value) + parseInt(document.getElementById("pass_F").value) + parseInt(document.getElementById("food_F").value) + parseInt(document.getElementById("pass_L").value) + parseInt(document.getElementById("food_L").value);
console.log(totaltickets);


document.getElementById("price2").innerText = OverallOrders;

let totalPrice = parseInt(document.getElementById("num_AF").value * 3000) + parseInt(document.getElementById("num_c").value * 2500) + parseInt(document.getElementById("numA").value * 2500) + parseInt(document.getElementById("num_15").value * 1000) + parseInt(document.getElementById("num_6").value * 500) + parseInt(document.getElementById("pass_F").value * 5000) + parseInt(document.getElementById("food_F").value * 500) + parseInt(document.getElementById("pass_L").value * 5000) + parseInt(document.getElementById("food_L").value * 500);
console.log(totalPrice);

document.getElementById("price4").innerText = totalPrice;


}


function MyFunction() {

let duration=document.getElementById("Choose your package").value;
let time;
if (duration == "3 Hours") {
    time = document.getElementById("3hr").value 
}
else if (duration == "1/2 Day") {
    time = document.getElementById("1/2day").value
}
else if (duration == "1 Day") {
    time = document.getElementById("1day").value
}
else if (duration == "2 Days") {
    time = document.getElementById("2day").value
}

    document.getElementById("price1").innerText = "";
    document.getElementById("price3").innerText = "";
}



//ticket calculation//


let tickets = [];
function addCurrent(){
    console.log("asdfgh")

    let currentTickets = parseInt(document.getElementById("num_AF").value) + parseInt(document.getElementById("num_c").value) + parseInt(document.getElementById("pass_F").value) + parseInt(document.getElementById("food_F").value);
    console.log(currentTickets) + parseInt(document.getElementById("pass_L").value) + parseInt(document.getElementById("food_L").value);

       
    document.getElementById("price1").innerText = currentTickets;

    let currentPrice = parseInt(document.getElementById("num_AF").value * 3000) + parseInt(document.getElementById("num_c").value * 2500) + parseInt(document.getElementById("pass_F").value * 5000) + parseInt(document.getElementById("food_F").value * 500) + parseInt(document.getElementById("pass_L").value * 5000) + parseInt(document.getElementById("food_L").value * 500);
    console.log(currentPrice);

    document.getElementById("price3").innerText = currentPrice;
       
        
    }

let btnSubmit2=document.getElementById("submit-2");
btnSubmit2.addEventListener("click",submit_2);
  
function submit_2(){
    console.log("Card_Number",document.getElementById("cdno").value);
    console.log("Expiary date",document.getElementById("exp").value);
    console.log("CVV",document.getElementById("security").value);
}

//Payment form javascript//

function MyFunction1() {

    let Card_number = document.getElementById("cdno").value
    if (Card_number == "")
    {
        alert("Incomplete Order!!");
    }
    else{
        alert("Placed Order Successfully!!")
    }

  }