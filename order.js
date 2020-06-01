let orderNav = document.querySelectorAll(".ordernav");
console.log(orderNav);

function startOrder(type) {
    if (type == "personal") {
        orderNav[0].style.backgroundColor = "#273440";
        document.getElementById("order-section0").style.display = "none";
        document.getElementById("order-section1").style.display = "flex";
    } else if (type == "collab") {
        orderNav[0].style.backgroundColor = "#273440";
        document.getElementById("order-section0").style.display = "none";
        document.getElementById("order-section1").style.display = "flex";
    } else if (type == "staff") {
        orderNav[0].style.backgroundColor = "#273440";
        document.getElementById("order-section0").style.display = "none";
        document.getElementById("order-section1").style.display = "flex";
    } else if (type == "other") {
        orderNav[0].style.backgroundColor = "#273440";
        document.getElementById("order-section0").style.display = "none";
        document.getElementById("order-section1").style.display = "flex";
    }
}

document.getElementById("order-next1").addEventListener("click", function () {
    document.getElementById("order-section1").style.display = "none";
    document.getElementById("order-section2").style.display = "block";
    orderNav[1].style.backgroundColor = "#273440";
    console.log("AAAAA");
});

document.getElementById("order-next2").addEventListener("click", function () {
    document.getElementById("order-section2").style.display = "none";
    document.getElementById("order-section3").style.display = "flex";
    orderNav[2].style.backgroundColor = "#273440";
})

document.getElementById("orderform").addEventListener("submit", function () {
    orderNav[3].style.backgroundColor = "#273440";
    document.getElementById("order-section3").style.display = "none";
    document.getElementById("order-section4").style.display = "block";

    getFormData();
});

function getFormData(){
    var elements = document.getElementById("orderform").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        obj[item.name] = item.value;
    }

    console.log(JSON.stringify(obj));
}
