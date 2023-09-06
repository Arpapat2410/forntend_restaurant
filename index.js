const deleteRestaurant = async (id) => {
    if (id) {
        try{
          const restaurant = await fetch( "http://localhost:5000/restaurants/" + id, {
            method: "DELETE",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {"Content-Type": "application/json",
          },
        }).then((response) => {
            return response.json();  
        }).then(() => {
            alert(`Delete Succeed`); 
            location.reload(); 
        });
        } catch (error) {
            //alert(`Restaurent : ${id} is missing`);
        }
      } else {
          //alert("Restaurent is missing")
      }
  }

const genRestaurantCard = (restaurant) => {
    const card = document.createElement("div")
    card.className = "card"
    card.style = "width : 20rem;"

    const resCrad = `
            <img src="${restaurant.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${restaurant.name}</h5></h5>
            <p class="card-text">${restaurant.type}</p>
            <a href="edit.html?id=${restaurant.id}" class="btn btn-warning">Edit</a>
          <a href="" class="btn btn-danger col-xs-2" onclick="deleteRestaurant(${restaurant.id})">Delete</a>
            </div>
        </div>
        `;      
        card.innerHTML = resCrad;

        const restaurants = document.querySelector("#restaurants");
        console.log(card);
        restaurants.appendChild(card);
}

const onload = async () => {
    const allrestaurants = await fetch("http://localhost:5000/restaurants", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    }).then((response) => {
        return response.json();
    });
    //console.log(allrestaurants);
    allrestaurants.forEach((restaurant) => genRestaurantCard(restaurant));


}
const main = () => {
    onload();
}

main();