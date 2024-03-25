let product = [
  {
    id: 1,
    img: "assets/img/2.jpg",
    name: "Mamaearth Onion Shampoo for Hair Growth (600 ml)",
    highlights:"Damage Repair Shampoo",
    price: 561,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 2,
    img: "assets/img/3.jpg",
    name: "Mamaearth Ubtan Natural forDry Skin Face Wash  (100 ml)",
    highlights:"For All Skin Types",
    price: 280,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 3,
    img: "assets/img/4.jpg",
    name: "Mamaearth Multani Mitti Moisturizing Lotion Soap (4 x 125 g)",
    highlights:"Pack of: 4",
    price: 276,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 4,
    img: "assets/img/5.jpg",
    name: "Mamaearth Charcoal Face Scrub For Oily Skin & Normal skin (100 g)",
    highlights:"For Men & Women",
    price: 306,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 5,
    img: "assets/img/6.jpg",
    name: "Mamaearth Soft Matte Long Stay Lipstick & Vitamin E (3.5 g)",
    highlights:"Gives a Matte finish look",
    price: 350,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 6,
    img: "assets/img/7.jpg",
    name: "Mamaearth Lash Care Volumizing Mascara with Castor Oil (13 g, Black)",
    highlights:"Organic Mascara",
    price:448,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 7,
    img: "assets/img/8.jpg",
    name: "Mamaearth Nourishing Tinted 100% Natural Lip Balm (Pack of: 1, 4 g)",
    highlights:"Berry Flavor",
    price:174,
    qty: 1,
    pic: "assets/img/12.png",
  },
  {
    id: 8,
    img: "assets/img/9.jpg",
    name: "Mamaearth ME Aqua Eau De Parfum For Parfum (50 ml)",
    highlights:"Fragrance Family: Fresh",
    price: 628,
    qty: 1,
    pic: "assets/img/12.png",
  },
];

function viewProducts() {
  let tbl = "";
  product.map((val) => {
    tbl += `
       <div class = "col-3 ">
            <div class="card mb-4">
               <div class = "imgs m-3"><img src="${val.img}" class="card-img-top" style="width: 100%; height: 220px;"></div>
               <div class="card-body">
                    <h5 class="card-title">${val.name}</h5>
                    <p class="card-text mb-2">${val.highlights}</p>
                    <p class="card-text mb-2">RS.${val.price}</p>
                    <a onclick = "addToCart(${val.id})" class="btn btn-primary">Buy Now</a>
                </div>
            </div>
        </div> 
    `;
  });
  document.getElementById("product").innerHTML = tbl;
}
viewProducts();

let cart = [];
function addToCart(id) {
  let allcart = JSON.parse(localStorage.getItem("cart")) || [];
  let found = false;

  for (let i = 0; i < allcart.length; i++) {
    if (allcart[i].id == id) {
      allcart[i].qty++;
      found = true;
      break;
    }
  }
  if (!found) {
    let productToAdd = product.find((item) => item.id === id);
    if (productToAdd) {
      productToAdd.qty = 1;
      allcart.push(productToAdd);
    } else {
      console.error("Product not available!");
      return;
    }
  }
  localStorage.setItem("cart", JSON.stringify(allcart));
  alert("Added to Cart");
}
