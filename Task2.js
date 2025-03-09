// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age.
//  Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."
//.........................................................................................
var Persons = [{ name: "Toqa", age: 25 }, { name: "Reem", age: 15 }, { name: "Tariq", age: 38 }];
function CheckAge(Persons) {
    if (Persons.age >= 18)
        console.log(Persons.name + " is an adult");
    else
        console.log(Persons.name + " is a minor");
}
;
Persons.forEach(function (person) {
    CheckAge(person);
});
var teachers = [
    { name: "Sara", subjects: ["English", "Math"] },
    { name: "Hamzeh", subjects: ["Social Study", "History"] },
    { name: "Mousa", subjects: ["Arabic", "Religon"] }
];
teachers.forEach(function (teacher) {
    console.log(teacher.name + " teaches " + teacher.subjects);
});
var Products = [
    { name: "Heart Shaped Earrings", price: 15.00, quantity: 10 },
    { name: " Gold Necklace ", price: 20.00, quantity: 12 },
    { name: " Set Of Silicon Hair Ties", price: 5.00, quantity: 4 }
];
// function Modify(Products) {
//     if (Products.quantity<5)
//     Products.price= (Products.price - (Products.price*0.15))
// };
Products.forEach(function (Product) {
    if (Product.quantity < 5)
        Product.price = (Product.price - (Product.price * 0.15));
    console.log("Product Name : " + Product.name);
    console.log("Product Quantity : " + Product.quantity);
    console.log("Product Price : " + Product.price);
});
function Add(event) {
    var PName = document.getElementById("name");
    var PDescription = document.getElementById("desc");
    var PPrice = document.getElementById("Price");
    var PQuantity = document.getElementById("quant");
    localStorage.setItem("PName", PName.value);
    localStorage.setItem("PDescription", PDescription.value);
    localStorage.setItem("PPrice", PPrice.value);
    localStorage.setItem("PQuantity", PQuantity.value);
    View();
}
function View() {
    var ProductCard = document.getElementById("ProductCard");
    if (ProductCard) {
        ProductCard.innerHTML +=
            "<div class=\"card\" style=\"width: 18rem;\">\n        <div class=\"card-header\">\n           <h3> ".concat(localStorage.getItem("PName"), "</h3>\n        </div>\n        <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">  <p>  <strong>Description: </strong> ").concat(localStorage.getItem("PDescription"), "</p></li>\n            <li class=\"list-group-item\">  <p> <strong>Price:</strong> ").concat(localStorage.getItem("PPrice"), "</p></li>\n            <li class=\"list-group-item\">     <p><strong>Quantity:</strong> ").concat(localStorage.getItem("PQuantity"), "</p>\n            </li>\n            \n        </ul>\n        </div>");
    }
}
