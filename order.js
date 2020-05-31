let orderNav = document.querySelectorAll(".ordernav");
console.log(orderNav);
orderNav[0].style.backgroundColor = "#273440";


document.getElementById("order-next1").addEventListener("click", function(){
    document.getElementById("order-section1").style.display = "none";
    document.getElementById("order-section2").style.display = "block";
    orderNav[1].style.backgroundColor = "#273440";
    console.log("AAAAA");
});

document.getElementById("order-next2").addEventListener("click", function(){
    document.getElementById("order-section2").style.display = "none";
    document.getElementById("order-section3").style.display = "block";
    orderNav[2].style.backgroundColor = "#273440";
})

document.getElementById("orderform").addEventListener("submit", function(){
    orderNav[3].style.backgroundColor = "#273440";
    document.getElementById("order-section3").style.display = "none";
    document.getElementById("order-section4").style.display = "block";
});
