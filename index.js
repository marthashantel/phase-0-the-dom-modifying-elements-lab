// 1. Remove the existing <main> element
const main = document.getElementById("main");
main.remove();

// 2. Create a new <h1> element and assign it to newHeader
const newHeader = document.createElement("h1");

// 3. Set the ID of the new element to 'victory'
newHeader.id = "victory";

// 4. Set the text of the new element
newHeader.textContent = "YOUR-NAME is the champion";

// 5. Append the new element to the document body
document.body.append(newHeader);
