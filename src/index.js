// See all ramen images in the div with the id of ramen-menu. 
// When the page loads, request the data from the server to get all the ramen objects. 
// Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

//make a fetch request to get all the ramen objects
//make function displayImages 
//create image tag inside the #ramen-menu div
// append image to imge tag inside the #ramen-menu div

const ramenUrl =  "http://localhost:3000/ramens"
const menu = document.querySelector("#ramen-menu")
// console.log(menu)

function ramenObject(){
    fetch(ramenUrl)
    .then(res => res.json())
    .then(ramens => ramens.forEach(ramen => displayImages(ramen)))
}
ramenObject()

function displayImages(ramen){
        //  console.log(ramen)
        const img = document.createElement("img")
        img.src = ramen.image
        menu.append(img)

        img.addEventListener("click", () => clickEvent(ramen))
    }

// Click on an image from the #ramen-menu div 
// and see all the info about that ramen displayed inside the #ramen-detail div 
// and where it says insert comment here and insert rating here.

//add event listener to display images
//create function clickEvent
// grab image,name,res,rating,comment and 
//append to the #ramen-detail div

function clickEvent(ramen){
    const name = document.querySelector(".name")
    // console.log(name)
    name.innerText = ramen.name
    const restaurant = document.querySelector(".restaurant")
    restaurant.innerText = ramen.restaurant
    const rating = document.querySelector("#rating-display")
    rating.innerText = ramen.rating
    const comment = document.querySelector("#comment-display")
    comment.innerText = ramen.comment
    const img = document.querySelector(".detail-image")
    img.src = ramen.image
}

// Create a new ramen after submitting the new-ramen form. 
// The new ramen should be added to the#ramen-menu div. 
// The new ramen does not need to persist; 

//create new ramen form variable 
//add event listener to new ramen form
//grab name,res,img.value etc
//create new ramen object
//create img tag 
//append image 
//add event listener to image

const newRamenForm = document.getElementById('new-ramen');
// console.log(newRamenForm)
newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById("new-name").value
    const restaurant = document.getElementById("new-restaurant").value
    const rating = document.getElementById("new-rating").value
    const comment = document.getElementById("new-comment").value
    const image = document.getElementById("new-image").value
    // console.log(name, restaurant, rating, comment)

    const newRamen = {
        name:name,
        restaurant:restaurant,
        image:image,
        rating:rating,
        comment:comment,
    }

   displayImages(newRamen)
    
})
















// // 1: See all ramen images in the div with the id of ramen-menu. 
// // When the page loads, request the data from the server to get all the ramen objects. 
// // Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

// //fetch request to retrieve all the ramen objects
// //create function to display the image for each ramen
// //use for each to iterate through object and find "image" property
// // create image element for the images 
// //append image to the #ramen-menu div

// const ramenUrl = "http://localhost:3000/ramens"
// const menu = document.getElementById("ramen-menu")

// function getRamenObject(){
//     fetch(ramenUrl)
//     .then(res => res.json())
//     .then(data => displayImages(data))
// }

// getRamenObject()

// function displayImages(ramens){
//     // console.log(ramens)
//     ramens.forEach(ramen => {
//         // console.log(ramen)
//         const img = document.createElement("img");
//         img.src = ramen.image
//         menu.append(img)

// img.addEventListener("click",() => clickImgEvent(ramen))
// }
// )}



// // Click on an image from the #ramen-menu div 
// // and see all the info about that ramen displayed inside the #ramen-detail div 
// // and where it says insert comment here and insert rating here.

// //add event listener to img (click)
// // make variable for names
// //make variable for resterant etc
// //append names to names
// //append resterant names to resterant etc


// function clickImgEvent(ramen) {
//     const name = document.querySelector(".name")
//     // console.log(name)
//     name.innerText = ramen.name
//     // console.log(name)
//     const restaurant = document.querySelector(".restaurant")
//     restaurant.innerText = ramen.restaurant
//     const rating = document.querySelector("#rating-display")
//     rating.innerText = ramen.rating
//     const comment = document.querySelector("#comment-display")
//     comment.innerText = ramen.comment
//     const img = document.querySelector(".detail-image")
//     img.src = ramen.image

// }


// //create a new ramen after submitting the new-ramen form
// //the new ramen should be added to the #ramen-menu div
// //the new ramen does not need to persist



// const newRamenForm = document.getElementById("new-ramen");

// newRamenForm.addEventListener("submit", (event) => {
//     event.preventDefault()

//     const name = document.getElementById("new-name").value;
//     const restaurant = document.getElementById("new-restaurant").value;
//     const image = document.getElementById("new-image").value;
//     const rating = document.getElementById("new-rating").value;
//     const comment = document.getElementById("new-comment").value;
//     // console.log(name,restaurant,image,rating,comment)

//     const newRamen = {
//         name:name,
//         restaurant:restaurant,
//         image:image,
//         rating:rating,
//         comment:comment
//     }

//     const img = document.createElement("img");
//     img.src = newRamen.image
//     menu.append(img)

// img.addEventListener("click",() => clickImgEvent(newRamen))
// })

  




