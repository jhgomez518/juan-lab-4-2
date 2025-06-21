
//Task 1: Array Manipulation Basics

let shoppingList = []

function addItem(array, item) {

    array.push(item)

}

function removeLastItem(array) {

    array.pop()

}

function displayList(array) {

    console.log(`\nHere are all the items in our shopping list:\n`)

    for(let item of array) {
        console.log(`\t${item}`)
    }

}

addItem(shoppingList, "bananas")
addItem(shoppingList, "apples")
addItem(shoppingList, "ice cream")
addItem(shoppingList, "orange juice")
addItem(shoppingList, "peppermint coffee")
console.log(shoppingList) //checks that addItem function is working as intended

removeLastItem(shoppingList)
console.log(shoppingList) //checks that removeItem function is working as intended

displayList(shoppingList) //checks that displayList function is working as intended

