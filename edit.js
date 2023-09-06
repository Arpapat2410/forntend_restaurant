const init = async () => {
    let params = new URL(document.location).searchParams;
    let id = params.get("id");
    if (id) {
        try {
            const restaurant = await fetch("http://localhost:5000/restaurants/" + id,
                {
                    method: "GET",
                    mode: "cors",
                    cache: "no-cache",
                    credentials: "same-origin",
                    headers: {
                    "Content-Type": "application/json",
                    },
                }
            ).then((response) => {
                return response.json();
            });

            document.getElementById("id").value = restaurant.id;
            document.getElementById("name").value = restaurant.name;
            document.getElementById("type").value = restaurant.type;
            document.getElementById("img").value = restaurant.img;

           
            
        } catch (error) {
            alert(`ไม่พบร้านอาหาร ขอรับนายน้อย`)
        }
    } else {
        // alert(`Restaurant ID is missing`);
    }
};

const editRestaurant = async () => {
   const id = document.getElementById("id").value;
    if (id) {
        const params = {
            name: document.getElementById("name").value,
            type: document.getElementById("type").value,
            img: document.getElementById("img").value,
        };
        const restaurant = await fetch("http://localhost:5000/restaurants/" + id,
            {
                method: "PUT",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(params),
            }
        ).then((response) => {
            return response.json();
        }).then((restaurant) => {
            alert(`อาหาร : ${id} Update อาหารให้เเล้วขอรับนายน้อย!`);
            location.replace("index.html");
        });
    }
    else {
        //alert(`edit faill`);
    }
}

init();
editRestaurant();