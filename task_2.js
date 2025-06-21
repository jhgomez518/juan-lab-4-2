
//Task 2: Filter (a) and Search (b) an Array

let shoppingList = []

function addItem(array, item) {

    //array.push(item)

    let already_included = false

    for(let item_in_array of array) {
        if(item === item_in_array)
        {
            console.log(`\nItem "${item}" is already in your shopping list!\n`)
            return

        } else {

            continue

        }
    }

    if(!already_included) {
        array.push(item)
    }

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

function filterItems(array, search_item) {

    let search_item_lc = search_item.toLowerCase() //convert search term to all lower case letters
    let matches = [] //will contain all the match items we find based on search

    let term_codes = [] //holistic list of subterms from original array, with each term associated with the original index of the word/term it belong to

    for(let i = 0; i < array.length; i++) { //"break down" all words, render lowercase, associate with original index, and add to "term_codes"
        let sub_terms = array[i].split(" ")
        for(let term of sub_terms) {
            let term_code = i + " " + term.toLowerCase()
            term_codes.push(term_code)
            
        }
    }

    for(let search_match of term_codes) {
        let original_index = Number(search_match.at(0)) //save the index associated with the term being compared (as number type)
        let search_match_trimmed = search_match.slice(2) //remove the index so we can now properly compare strings
        
        if(search_item_lc === search_match_trimmed) {
            matches.push(array[original_index]) //matches are added to "matches" array
        } else {
            
            continue

        }
    }
    
    if(matches.length === 0) {
        console.log(`There are no matches for ${search_item}!`)
    } else {
        console.log(`Matches for "${search_item}":\n`)
        for(let match of matches) {
            console.log(`\t${match}`)
        }
        console.log(`\n`) //for readability of console output
    }
}

addItem(shoppingList, "bananas")
addItem(shoppingList, "lemons")
addItem(shoppingList, "herbal tea")
addItem(shoppingList, "ice cream")
addItem(shoppingList, "orange juice")
addItem(shoppingList, "cream cheese")
addItem(shoppingList, "peppermint tea")
addItem(shoppingList, "apple juice")

displayList(shoppingList) //checks that addItem function is working as intended (adding all unique items at this point)

addItem(shoppingList, "ice cream") //checks that add_item condition for doubles is working (a)

filterItems(shoppingList, "TEA") //checks matches for search term inputted in all caps
filterItems(shoppingList, "jUiCe") //checks matches for search term inputted in mixed caps
filterItems(shoppingList, "cream") //checks matches for search term inputted in no caps