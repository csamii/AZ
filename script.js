


/*********
***Date***
**********/

const currentDate = document.getElementById("year");
const date = new Date();
const year = date.getFullYear();
currentDate.textContent = year;

/**************
 ****Spinner***
 *************/

document.addEventListener("DOMContentLoaded", function() {
  const spinner = document.getElementById("spinner");

  if (spinner) {
    // Simulate content loading
    setTimeout(() => {
      spinner.classList.add("hide");
    }, 1500); // Adjust the timeout as needed
  }
});
 

/*****************************************************
*CLOSE THE NAV WHEN NAVLNKS ARE CLICKED (MOBILE ONLY)*
*****************************************************/
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
        navList.style.left = '-100%';
    })
});

// Sticky Navbar
window.addEventListener('scroll', function() {
  let navbar = document.querySelector('.sticky-top');
  if (window.scrollY > 300) {
    navbar.classList.add('shadow-sm');
    navbar.style.top = '0px';
  } else {
    navbar.classList.remove('shadow-sm');
    navbar.style.top = '-150px';
  }
});


/***********
**Carousel**
***********/ 

let slideIndex = [1, 1];
let slideId = ["slide", "slide2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

// Initial call to initializeCarousel
initializeCarousel();

// Event listener to handle window resize
window.addEventListener('resize', initializeCarousel);

function showSlides(n, no) {
  
  if(document.getElementsByClassName(slideId[no])){
    let x = document.getElementsByClassName(slideId[no]);
    let i;
    if (n > x.length) {slideIndex[no] = 1}    
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    // x[slideIndex[no]-1].style.display = "block";
    const index = slideIndex[no] - 1;
    if (index >= 0 && index < x.length) {
      x[index].style.display = "block";
    }
  }
}

function initializeCarousel() {
  if (window.innerWidth <= 768) {
    // Show navigation buttons for smaller screens
    if (document.getElementById('prevBtn1')) {
      document.getElementById('prevBtn1').style.display = 'inline-block';
    }
    if (document.getElementById('nextBtn1')) {
      document.getElementById('nextBtn1').style.display = 'inline-block';
    }
    if (document.getElementById('prevBtn2')) {
      document.getElementById('prevBtn2').style.display = 'inline-block';
    }
    if (document.getElementById('nextBtn2')) {
      document.getElementById('nextBtn2').style.display = 'inline-block';
    }
    
    // Show the first slide of each carousel
    if (document.getElementsByClassName(slideId[0]).length > 0) {
      showSlides(slideIndex[0], 0);
    }
    if (document.getElementsByClassName(slideId[1]).length > 0) {
      showSlides(slideIndex[1], 1);
    }
  } else {
    // Show all slides for larger screens
    let slides1 = document.getElementsByClassName("slide");
    let slides2 = document.getElementsByClassName("slide2");
    
    for (let i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "block";
    }
    for (let i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "block";
    }
    
    // Hide navigation buttons for larger screens
    if (document.getElementById('prevBtn1')) {
      document.getElementById('prevBtn1').style.display = 'none';
    }
    if (document.getElementById('nextBtn1')) {
      document.getElementById('nextBtn1').style.display = 'none';
    }
    if (document.getElementById('prevBtn2')) {
      document.getElementById('prevBtn2').style.display = 'none';
    }
    if (document.getElementById('nextBtn2')) {
      document.getElementById('nextBtn2').style.display = 'none';
    }
  }
}

/**************
***accordion***
**************/
document.addEventListener("DOMContentLoaded", function() {
  const acc = document.getElementsByClassName("accordion");

  // Ensure the first panel is always open on load
  if (acc.length > 0) {
    acc[0].classList.add("active");
    const firstPanel = acc[0].nextElementSibling;
    firstPanel.style.maxHeight = firstPanel.scrollHeight + "px";
  }

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      for (let j = 0; j < acc.length; j++) {
        if (acc[j] !== this) {
          acc[j].classList.remove("active");
          let otherPanel = acc[j].nextElementSibling;
          otherPanel.style.maxHeight = null;
        }
      }
      
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});






const products = [
  {
    name: "Glass Hand Wash Basin with Mixer",
    category: "",
    price: 20,
    discount: "10%",
    tag: "Plumbering",
    stock: "Avaliable",
    image: "images/image1.jpeg"
  },
  {
    name: "Dangote",
    category: "Cement",
    price: 30,
    discount: "15%",
    tag: "Cement",
    stock: "Out of Stock",
    image: "images/image2.jpg"
  },
  {
    name: "White Cement",
    category: "Cement",
    price: 30,
    discount: "15%",
    tag: "Cement",
    stock: "Avaliable",
    image: "images/image3.png"
  },
  {
    name: "Razor Wire",
    category: "Security",
    price: 30,
    discount: "15%",
    tag: "Security",
    stock: "Avaliable",
    image: "images/image4.jpeg"
  },
  {
    name: "Lafarge",
    category: "Cement",
    price: 30,
    discount: "15%",
    tag: "Cement",
    stock: "Avaliable",
    image: "images/image5.jpg"
  },
  {
    name: "Good Man Floor Tiles",
    category: "Tile",
    price: 30,
    discount: "15%",
    tag: "Tile",
    stock: "Out of Stock",
    image: "images/image6.jpeg"
  },
  {
    name: "Luxury Ceramic Toilet Seat",
    category: "Plumbering",
    price: 30,
    discount: "15%",
    tag: "Plumbering",
    stock: "Avaliable",
    image: "images/image7.jpeg"
  },
  {
    name: "Single Lever Hole Tap",
    category: "Plumbering",
    price: 30,
    discount: "15%",
    tag: "Plumbering",
    stock: "Out of Stock",
    image: "images/image8.jpeg"
  },
  {
    name: "Single Lever Basin Mixer Tap",
    category: "Plumbering",
    price: 30,
    discount: "15%",
    tag: "Plumbering",
    stock: "Avaliable",
    image: "images/image9.jpeg"
  },
  {
    name: "Wash Hand Basin with Tap",
    category: "Plumbering",
    price: 30,
    discount: "15%",
    tag: "Plumbering",
    stock: "Avaliable",
    image: "images/image10.jpeg"
  },
  {
    name: "16mm Steel Bars",
    category: "Steel Rod",
    price: 30,
    discount: "15%",
    tag: "Rod",
    stock: "Out of Stock",
    image: "images/image11.jpg"
  },
  {
    name: "Single Tap",
    category: "Plumbering",
    price: 30,
    discount: "15%",
    tag: "Plumbering",
    stock: "Avaliable",
    image: "images/tap.jpg"
  },
  {
    name: "Nero Brick",
    category: "Brick",
    price: 30,
    discount: "15%",
    tag: "Brick",
    stock: "Avaliable",
    image: "images/nerobricks.jpg"
  },
  {
    name: "Quality Woods",
    category: "Wood",
    price: 30,
    discount: "15%",
    tag: "Wood",
    stock: "Avaliable",
    image: "images/building_5.jpg"
  },
  {
    name: "Quality Cement Colored Bricks",
    category: "Brick",
    price: 30,
    discount: "15%",
    tag: "Brick",
    stock: "Out of Stock",
    image: "images/building_8.jpg"
  },
  {
    name: "2X4 Quality Wood",
    category: "Wood",
    price: 30,
    discount: "15%",
    tag: "Wood",
    stock: "Avaliable",
    image: "images/building_9.jpg"
  },
  {
    name: "Multi-Color Bricks",
    category: "Brick",
    price: 30,
    discount: "15%",
    tag: "Brick",
    stock: "Out of Stock",
    image: "images/building_12.jpg"
  },
  {
    name: "16mm Plated Rod",
    category: "Rod",
    price: 30,
    discount: "15%",
    tag: "Rod",
    stock: "Avaliable",
    image: "images/building_10.jpg"
  }
];

const productsContainer = document.getElementById("productsContainer");

products.forEach(product => {
  const stockClass = product.stock === "Avaliable" ? "avaliable" : "out-of-stock";

  productsContainer.innerHTML += `
  <div class="card animate-bottom">
    <div class="card_section_a">
        <img src="${product.image}" alt="${product.name}" class="img" />
        <div class="sale ${stockClass}">${product.stock}</div>
    </div>
    <div class="card_section_b">
        <div class="card_b_head">
            <h3>${product.name}</h3>
        </div>
        <div class="card_b_head_b">
            <p>${product.tag}</p>
        </div>
        <div class="card_b_span">
            <h3 class="span_a">Price: $${product.price}</h3>
            <p>Discount: <span class="span_b">$${product.discount}</span></p>
        </div>
        <div>
            <a class="read-btn">Get Quote</a>
        </div>
    </div>
  </div>
  `;
});

const productsDropdownList = document.getElementById("products");

const setProductCards = (arr = products) => {

  productsContainer.innerHTML += arr
    .map(
      ({ image, stock, name, tag, discount, price }) => {
      const stockClass = stock === "Avaliable" ? "avaliable" : "out-of-stock";
      return `
      <div class="card animate-bottom">
        <div class="card_section_a">
            <img src="${image}" alt="${name}" class="img" />
            <div class="sale ${stockClass}">${stock}</div>
        </div>
        <div class="card_section_b">
            <div class="card_b_head">
                <h3>${name}</h3>
            </div>
            <div class="card_b_head_b">
                <p>${tag}</p>
            </div>
            <div class="card_b_span">
                <h3 class="span_a">Price: $${price}</h3>
                <p>Discount: <span class="span_b">$${discount}</span></p>
            </div>
            <div>
                <a class="read-btn">Get Quote</a>
            </div>
        </div>
      </div>
          `
        ;
      }
    )
    .join("");
};

productsDropdownList.addEventListener("change", (e) => {
  productsContainer.innerHTML = "";

  switch (e.target.value) {
    case "door":
      setProductCards(products.filter((product) => product.tag === "Door"));
      break;
    case "cement":
      setProductCards(products.filter((product) => product.tag === "Cement"));
      break;
    case "plumbering":
      setProductCards(products.filter((product) => product.tag === "Plumbering"));
      break;
    case "brick":
      setProductCards(products.filter((product) => product.tag === "Brick"));
      break;
    case "steel_rod":
      setProductCards(products.filter((product) => product.tag === "Rod"));
      break;
    case "wood":
      setProductCards(products.filter((product) => product.tag === "Wood"));
      break;
    case "tile":
      setProductCards(products.filter((product) => product.tag === "Tile"));
      break;
    case "security":
      setProductCards(products.filter((product) => product.tag === "Security"));
      break;
    default:
        setProductCards()
    }
  });
  

// SCROLL REVEAL

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});
