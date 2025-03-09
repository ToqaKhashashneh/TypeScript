// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age.
//  Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."
//.........................................................................................

interface Person {
    name: string;
    age: number;
}

const Persons: Person[] = [ {name: "Toqa", age: 25}, { name: "Reem",age: 15}, {  name: "Tariq", age: 38}];

function CheckAge(Persons) {

if (Persons.age>=18) 
console.log(Persons.name + " is an adult")
else
console.log( Persons.name + " is a minor")

};

Persons.forEach(person => {
    CheckAge(person)
});

//.........................................................................................

// Task 2: Iterate Through an Array in an Interface
// You are given an object that follows an interface Teacher with properties name and subjects (an array of subjects).
//  Print all the subjects the teacher teaches.
//.........................................................................................

interface teacher {
    name : string
    subjects: string []
}

const teachers : teacher [] = [
    {name: "Sara" , subjects:["English", "Math"]},
    {name:"Hamzeh", subjects:["Social Study" , "History"]},
    {name:"Mousa", subjects:["Arabic", "Religon"]}
];

teachers.forEach(teacher => {
    console.log(teacher.name + " teaches " + teacher.subjects)
    
});

//.........................................................................................
// Task 3: Modify Object in an Array of Interfaces
// You are given an array of Product interfaces, where each product has a name, price, and quantity. 
// Write a script to decrease the price of each product by 15% if the quantity is greater than 5.
//.........................................................................................

interface Product {
    name: string
    price: number
    quantity: number
}

const Products: Product [] = [
    {name: "Heart Shaped Earrings", price:15.00 , quantity:10},
    {name: " Gold Necklace " , price:20.00 , quantity:12},
    {name: " Set Of Silicon Hair Ties" , price:5.00, quantity:4}
]

// function Modify(Products) {
//     if (Products.quantity<5)
//     Products.price= (Products.price - (Products.price*0.15))
// };

Products.forEach(Product => {
    if (Product.quantity<5)
   Product.price= (Product.price - (Product.price*0.15))
    console.log("Product Name : " + Product.name)
    console.log("Product Quantity : " + Product.quantity)
    console.log("Product Price : " + Product.price)
});

//.........................................................................................
// Task 4 : Create a form inside the HTML page that contains inputs for ( name , description, price and quantity) for product 
// and when you submit the form it will save the product inside array in the local storage and then display all the products 
// as a cards under the form.
// *use interface to create a structure for this product 


interface EProduct 
{ name : string
  description: string
  price: number
  quantity: number   
}

function Add(event:Event) {
    const PName = document.getElementById("name") as HTMLInputElement;
    const PDescription = document.getElementById("desc") as HTMLInputElement;
    const PPrice = document.getElementById("Price") as HTMLInputElement;
    const PQuantity = document.getElementById("quant") as HTMLInputElement;

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


        `<div class="card" style="width: 18rem;">
        <div class="card-header">
           <h3> ${localStorage.getItem("PName")}</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">  <p>  <strong>Description: </strong> ${localStorage.getItem("PDescription")}</p></li>
            <li class="list-group-item">  <p> <strong>Price:</strong> ${localStorage.getItem("PPrice")}</p></li>
            <li class="list-group-item">     <p><strong>Quantity:</strong> ${localStorage.getItem("PQuantity")}</p>
            </li>
            
        </ul>
        </div>`
    }
}

