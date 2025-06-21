
// Task 3: Render the List in the Browser

let new_item = document.querySelector("input")
let add_item = document.getElementById("addItem")
let remove_item = document.getElementById("removeItem")
let list = document.querySelector("ul")

// function that adds items to array
// displayed list is updated dynamically whenever button is clicked
add_item.addEventListener("click", () => {

    let item = new_item.value

    if(item === "") {
        alert("Please enter an item!")
        return
    }

    let li = document.createElement("li")
    li.textContent = item
    list.appendChild(li)

    new_item.value = ""

})

//
remove_item.addEventListener("click", () => {

    // checks if there are elements in the list (otherwise would get an error),
    // then remove the last item in the list when button is clicked
    if(itemList.lastElementChild) {
        itemList.removeChild(itemList.lastElementChild)
    } else {
        alert("List is empty!")
    }

})

