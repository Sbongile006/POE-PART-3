function validateOrder() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if(name.trim() === ""){
        alert("Please enter your name");
        return false;
    }

    if(phone.length < 10){
        alert("Please enter a valid phone number");
        return false;
    }

    alert("Thank you for your order!");
    return true;
}
function validateEnquiry(){

    alert("Your enquiry has been submitted.");

    return true;
}
window.onload = function(){

    alert(
      "Welcome to Thandi's Bakery!"
    );

}
function hideAllProducts() {

    document.getElementById("scones").style.display = "none";
    document.getElementById("biscuits").style.display = "none";
    document.getElementById("banana").style.display = "none";
    document.getElementById("buns").style.display = "none";
    document.getElementById("muffins").style.display = "none";
}

function showAll() {

    document.getElementById("scones").style.display = "flex";
    document.getElementById("biscuits").style.display = "flex";
    document.getElementById("banana").style.display = "flex";
    document.getElementById("buns").style.display = "flex";
    document.getElementById("muffins").style.display = "flex";
}

function showScones() {
    hideAllProducts();
    document.getElementById("scones").style.display = "flex";
}

function showBiscuits() {
    hideAllProducts();
    document.getElementById("biscuits").style.display = "flex";
}

function showBananaBread() {
    hideAllProducts();
    document.getElementById("banana").style.display = "flex";
}

function showBuns() {
    hideAllProducts();
    document.getElementById("buns").style.display = "flex";
}

function showMuffins() {
    hideAllProducts();
    document.getElementById("muffins").style.display = "flex";
}
const acc = document.querySelectorAll(".accordion");

acc.forEach(item => {

    item.addEventListener("click", function(){

        this.classList.toggle("active");

        let panel = this.nextElementSibling;

        if(panel.style.display === "block"){
            panel.style.display = "none";
        }
        else{
            panel.style.display = "block";
        }

    });

});
function searchProducts(){

    let input =
    document.getElementById("searchBox").value.toLowerCase();

    let products =
    document.querySelectorAll(".product-card");

    products.forEach(product=>{

        let text =
        product.innerText.toLowerCase();

        if(text.includes(input)){
            product.style.display = "flex";
        }
        else{
            product.style.display = "none";
        }

    });
}
function openImage(src){

    document.getElementById("lightbox").style.display="block";

    document.getElementById("lightbox-img").src=src;
}

function closeLightbox(){

    document.getElementById("lightbox").style.display="none";
}
function validateEnquiry(){

    let type =
    document.getElementById("enquiryType").value;

    let response = "";

    if(type === "Product Price"){
        response =
        "Prices start from R200.";
    }

    else if(type === "Volunteer Opportunity"){
        response =
        "Thank you. We will contact you regarding volunteering.";
    }

    else if(type === "Sponsorship Opportunity"){
        response =
        "Our management team will contact you.";
    }

    alert(response);

    return false;
}
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        let email = "thandibakery@gmail.com";

        let subject =
        document.getElementById("messageType").value;

        let body =
        document.getElementById("message").value;

        window.location.href =
        `mailto:${email}?subject=${subject}&body=${body}`;
    });
}

e.preventDefault();

let email =
"thandibakery@gmail.com";

let subject =
document.getElementById("messageType").value;

let body =
document.getElementById("message").value;

window.location.href =
`mailto:${email}?subject=${subject}&body=${body}`;

});