const snacks = [
   { name: "Chips", category: "Salty", price: 1.5, inStock: true },
   { name: "Granola Bar", category: "Healthy", price: 1.0, inStock: true },
   { name: "Soda", category: "Drink", price: 2.0, inStock: false },
   { name: "Gummy Bears", category: "Sweet", price: 1.75, inStock: true }
];

function addSnack(snackName, snackCategory, snackPrice, snackInStock) {
    snacks.push({ name: snackName, category: snackCategory, price: snackPrice, inStock: snackInStock });
}

function removeSnack(indexOfSnack) {
    snacks.splice(indexOfSnack, 1);
}

function updateSnack(indexOfSnack, propertyToChange, whatToChangeTo) {

    if (propertyToChange == "name" || propertyToChange == "category" || propertyToChange == "price" || propertyToChange == "inStock") {

        if (propertyToChange == "name") {
            if (typeof(whatToChangeTo) === "string") {
                snacks[indexOfSnack].name = whatToChangeTo;
            } else {
                console.log("Please enter a proper variable for this property!");
            }
        }
        
        if (propertyToChange == "category") {
            if (typeof(whatToChangeTo) === "string") {
                snacks[indexOfSnack].category = whatToChangeTo;
            } else {
                console.log("Please enter a proper variable for this property!");
            }
        }

        if (propertyToChange == "price") {
            if (typeof(whatToChangeTo) === "number") {
                snacks[indexOfSnack].price = whatToChangeTo;
            } else {
                console.log("Please enter a proper variable for this property!");
            }
        }

        if (propertyToChange == "inStock") {
            if (typeof(whatToChangeTo) === " boolean") {
                snacks[indexOfSnack].inStock = whatToChangeTo;
            } else {
                console.log("Please enter a proper variable for this property!");
            }
        }

    } else {
        console.log("Please enter a valid property!");
    }

}

function findSnack(nameOfSnack, ) {

}
 
