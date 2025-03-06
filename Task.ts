
// 1.Identify if a Number is Even or Odd
let num : number = 5;

if (num%2==0)
    console.log("This Number Is Even")
else 
    console.log("This Number Is Odd")

//2. Filter Expensive Products from an Array
let Prices: number  [] = [100,200,300,400,500,600,700];

let ExpensivePrice= 300;

console.log("Expensive prices for items are: " );

    for (let i = 0; i <Prices.length ; i++) {
        if (Prices[i] > ExpensivePrice) {
            console.log( Prices[i]);
        }
    }

// 3. Sum All Elements in an Array
    let Numbers: number [] = [1,2,3,4,5,6,7]
    let sum =0;
    for (let i=0 ; i<Numbers.length ; i++){
        sum= sum + i;
    }

    console.log("The Sum is " + sum)