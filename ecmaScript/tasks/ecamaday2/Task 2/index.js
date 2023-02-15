let productsContainer = document.querySelector(".prodContain");
// console.log(productContain);

async function getProducts() {
    // alert(user);
    try {
        let res = await fetch("https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products");
        let data = await res.json();
        // console.log(data);
        data.forEach((product) => {
            let prodContain = document.createElement("div");
            prodContain.classList.add("prodCar");
            prodCar.innerHTML = `
                <img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <p>EGP${product.price}</p>
            `;
            productsContainer.appendChild(productCard);
        });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getProducts();
