const navigation = document.getElementById("navigation");
const headerMenu = document.getElementById("headermenu");
const imgcontainer = document.getElementById("imgcontainer");
const productimgzoom = document.getElementById("productimgzoom");
const closee = document.getElementById("close");
const checkout = document.getElementById("checkout");

const details = document.getElementById("details");
const shipping = document.getElementById("shipping");
const pay = document.getElementById("pay");

const detailsproceed = document.getElementById("proceeddetails");
const shippingproceed = document.getElementById("shippingproceed");
const paypaymentproceed = document.getElementById("paymentproceed");

const searchinput = document.getElementById("searchinput");
const searchbutton = document.getElementById("searchbutton");

function menuControl() {
  navigation.classList.toggle("off");
  headerMenu.classList.toggle("close");
}

function zoomimg() {
  productimgzoom.style.display = "block";
}

function closeZoom() {
  productimgzoom.style.display = "none";
}

function openCheckout() {
  details.style.display = "block";
}

function openShipping() {
  details.style.display = "none";
  shipping.style.display = "block";
}

function openPay() {
  shipping.style.display = "none";
  pay.style.display = "block";
}

function openSearch() {
  console.log("presed");
  searchinput.style.display = "block";
  searchinput.classList.add("searchexpand");
}

if (headerMenu) {
  headerMenu.addEventListener("click", menuControl);
}

if (checkout) {
  checkout.addEventListener("click", openCheckout);
}
if (imgcontainer) {
  imgcontainer.addEventListener("click", zoomimg);
}

if (closee) {
  closee.addEventListener("click", closeZoom);
}

if (detailsproceed) {
  detailsproceed.addEventListener("click", openShipping);
}
if (shippingproceed) {
  shippingproceed.addEventListener("click", openPay);
}
if (searchbutton) {
  searchbutton.addEventListener("click", openSearch);
}
