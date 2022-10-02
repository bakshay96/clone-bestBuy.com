
  type =
    "text/javascript" >
    $(".gg").flickity({
      // options
      cellAlign: "left",
      wrapAround: true,
      freeScroll: true,
    });
  let data = [
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6470/6470349_sd.jpg;maxHeight=200;maxWidth=300",
      name: "Acer - Acer-Chromebook 317 Laptop–17.3” HD IPS Touch Display–Intel Pentium Silver N6000 Processor–8GB LPDDR4X–64GB eMMC– WiFi6",

      model: "Model: CB317-1HT-P5PFSKU: 6470349",
      price: "$349.00",
      priceb: 349.0,
      offer: "Save $350",
      foffer: "Was $1,149.99",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6498/6498806_sd.jpg;maxHeight=200;maxWidth=300",
      name: 'ASUS - 14.0" Laptop - Intel Celeron N4020 - 4GB Memory - 64GB eMMC - Star Black - Star Black',
      model: "Model: E410MA-TB.CL464BKSKU: 6498806",
      price: "$99.99",
      priceb: 99.99,
      offer: "Save $150",
      foffer: "Was $249.99",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502943_sd.jpg;maxHeight=200;maxWidth=300",
      name: 'HP - Victus 15.6" Gaming Laptop - Intel Core i7-12650H - 16GB Memory - NVIDIA GeForce RTX 3050 Ti - 512GB SSD - Mica Silver',
      model: "Model: 15-fa0032dx SKU: 6502943",
      price: "$849.99",
      priceb: 849.99,
      offer: "Save $250",
      foffer: "Was $1,099.99",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6497/6497829_sd.jpg;maxHeight=200;maxWidth=300",
      name: 'Lenovo - IdeaPad 3 15" HD Touch Screen Laptop - Intel Core i3-1115G4 - Intel UHD Graphics - 8GB Memory - 256GB SSD - Almond',
      model: "Model: 81X800KLUS SKU: 6497829",
      price: "$349.99",
      priceb: 349.99,
      offer: "Save $150",
      foffer: "Was $499.99",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6499/6499742_sd.jpg;maxHeight=200;maxWidth=300",
      name: 'HP - 17.3" Laptop - Intel Core i5 - 8GB Memory - 256GB SSD',
      model: "Model: 17-cn0023dx SKU: 6499742",
      price: "$419.99",
      priceb: 419.99,
      offer: "Save $280",
      foffer: "Was $699.99",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501594_sd.jpg;maxHeight=200;maxWidth=300",
      name: 'Samsung - Galaxy Book2 360 13.3" AMOLED Touch Screen Laptop - Intel 12th Gen Core i7 Evo Platform - 16GB Memory - 512GB SSD - Graphite',
      model: "Model: NP730QED-KA1US SKU: 6501594",
      price: "$799.99",
      priceb: 799.99,
      offer: "Save $350",
      foffer: "Was $1,149.99",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458047_sd.jpg;maxHeight=200;maxWidth=300",
      name: 'HP - 14" 2-In-1 Touchscreen Chromebook - Intel Core i3 - 8GB Memory - 128GB SSD - Mineral Silver',
      model: "Model: 14c-cc0013dx SKU: 6458047",
      price: "$499.00",
      priceb: 499.0,
      offer: "Save $200",
      foffer: "Was $699.00",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477889_sd.jpg;maxHeight=200;maxWidth=300",
      name: 'HP - 15.6" Touch-Screen Laptop - Intel Core i7 - 16GB Memory - 512GB SSD - Natural Silver',
      model: "Model: 15-dy2073dx SKU: 6477889",
      price: "$699.99",
      priceb: 699.99,
      offer: "Save $100",
      foffer: "Was $799.99",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6508/6508652_sd.jpg;maxHeight=200;maxWidth=300",
      name: 'Dell - Inspiron 3515 15.6" Non-Touch Laptop - AMD Ryzen 5 - 8GB Memory - 256GB Solid State Drive - Carbon Black',
      model: "Model: i3515-A706BLK-PUS SKU: 6508652",
      price: "$379.99",
      priceb: 379.99,
      offer: "Save $170",
      foffer: "Was $549.99",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6503/6503846_sd.jpg;maxHeight=200;maxWidth=300",
      name: 'HP OMEN - 16.1" QHD Laptop - Intel Core i7-12700H - 16GB Memory - NVIDIA GeForce RTX 3060 - 1TB SSD - Shadow Black',
      model: "Model: 16-k0023dx SKU: 6503846",
      price: "$1,199.99",
      priceb: 1199.99,
      offer: "Save $500",
      foffer: "Was $1,699.99",
    },
  ];
  let products = document.querySelector(".ddd");
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  function displayproduct(data) {
    products.innerHTML = "";
    data.forEach(function (el,i) {
      let alldata = document.createElement("div");
      let img = document.createElement("img");
      img.src = el.image;

      let name = document.createElement("h5");
      name.innerText = el.name;
      let model = document.createElement("p");
      model.innerText = el.model;
      let price = document.createElement("h1");
      price.innerText = el.price;
      let offer = document.createElement("h4");
      offer.innerText = el.offer;
      let foffer = document.createElement("p");
      foffer.innerText = el.foffer;
      let buttonCart = document.createElement("button");
      buttonCart.innerHTML =
        '  <i class="fa-solid fa-cart-shopping"></i> Add to Cart';
        buttonCart.onclick=()=>{
        addTocart(el)
      } 

      alldata.append(img, name, model, price, offer, foffer, buttonCart);
      products.append(alldata);
    });
  }
  displayproduct(data);

  let addTocart=(data)=>{
console.log(cart)
alert("Product Added")
cart.push(data);
localStorage.setItem("products",JSON.stringify(cart))
}




  let filter = document.getElementById("filter");

  filter.addEventListener("change", function () {
    if (filter.value === "position") {
      displayproduct(data);
      window.location.reload(true);
    } else if (filter.value === "NewArrival") {
      let filtered = data.filter(function (element) {
        return element.nwearrival === 1;
      });
      displayproduct(filtered);
    } else if (filter.value === "LowToHigh") {
      let priceLH = data.sort(function (a, b) {
        if (a.priceb > b.priceb) return 1;
        if (a.priceb < b.priceb) return -1;
        return 0;
      });
      displayproduct(priceLH);
    } else if (filter.value === "HighToLow") {
      let priceHL = data.sort(function (a, b) {
        if (a.priceb > b.priceb) return -1;
        if (a.priceb < b.priceb) return 1;
        return 0;
      });
      displayproduct(priceHL);
    } else if (filter.value === "Name") {
      let nameP = data.sort(function (a, b) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      displayproduct(nameP);
    }
  });

