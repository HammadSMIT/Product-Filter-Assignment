let products = {
    data: [{
        productName : "Regular White T-Shirt",
        category : "Topwear",
        price : "30",
        image: "white-tshirt.jpg.jpeg",
    },
    {
        productName : "Beige Short Skirt",
        category : "Bottomwear",
        price : "49",
        image: "short-skirt.jpg",
    },
    {
        productName : "Sporty SmartWatch",
        category : "Watch",
        price : "99",
        image: "sporty-smartwatch.jpg",
    },
    {
        productName : "Basic Knitted Top",
        category : "Topwear",
        price : "29",
        image: "knitted-top.jpg",
    },
    {
        productName : "Black Leather Jacket",
        category : "Jacket",
        price : "129",
        image: "black-leather.jpg",
    },
    {
        productName : "Stylish Pink Trousers",
        category : "Bottomwear",
        price : "89",
        image: "pink-trouser.jpg",
    },
    {
        productName : "Brown Men's Jacket ",
        category : "Jacket",
        price : "129",
        image: "brown-leather-jacket.jpg",
    },
    {
        productName : "Comfy Gray Pants",
        category : "Bottomwear",
        price : "49",
        image: "Comfy-Pants.jpg",
    },
],


};

for (let i of products.data){
    //create card
    let card = document.createElement("div");
    // Card Should have Category and should stay hidden initially
    card.classList.add("card", i.category , "hide");
    // image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // img tag
    let image = document.createElement('img')
    image.setAttribute("src" , i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    document.getElementById("products").appendChild(card)
    // container
    let container = document.createElement("div");
    container.classList.add("container");
    // Prouct name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name)
    // Price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price + ".00";
    container.appendChild(price);

     card.appendChild(container);
    document.getElementById("products").appendChild(card);
}
//  // search button click
//  document.getElementById("search").addEventListener("click" , () => {
//     // initialization
//     let searchInput = document.getElementById("search-input").value;
//     let elements = document.querySelectorAll("product-name");
//     let cards = document.querySelectorAll(".card");
//     console.log(searchInput); 

//     // loop through all elements
    
//     elements.forEach((element,index) => {
//         // check if text includes the search value 
//         if(element.innerText.includes(searchInput.toUpperCase())){
//             // display matching card
//             cards[index].classList.remove("hide");

//         }else{
//             // hide others
//             cards[index].classList.add("hide")
//         }
//     }
    
//     )
//  })

// Initially display all products
// parameter passed from button (parameter same as category)
function filterProduct(value){
    // button class code
    let button = document.querySelectorAll(".button-value");
    button.forEach(button => {
        //check if value equals innerText 
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");

        } else{
            button.classList.remove("active");
        }
    });
    // select all cards 
    let elements = document.querySelectorAll(".card");
    // loop through all cards
    elements.forEach((element) => {
    // display all cards on "all button click"
    if(value == "All"){
        element.classList.remove("hide")
    }else{
        // check if element contains category class;
        if(element.classList.contains(value)){
            // display element based on category
            element.classList.remove("hide");

        }else{
            // hide other elements
            element.classList.add("hide");

        }
    }
    }
    )
}
window.onload = () =>{
  filterProduct("All");
};




