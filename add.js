const addResto = async () => {
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const img = document.getElementById("img").value;

    if (name && type && img) {
        const param = {
            name: name,
            type: type,
            img: img
        };

        try {
            const restaurant = await fetch("http://localhost:5000/restaurants", {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(param),
            }).then((response) => {
                if (response.status === 201) {
                    console.log("Response from server:", response);
                    return response.json();
                } else {
                    console.log("Error on internal server");
                    throw new Error("Internal Server Error");
                }
            }).then((restaurant) => {
                alert("Restaurant created successfully ! id = " + restaurant.id);
            });
        } catch (error) {
            console.log("Error:", error);
        }
    } else {
        alert("All fields are required!");
    }
};