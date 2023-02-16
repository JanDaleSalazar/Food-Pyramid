const plusFat = document.querySelector(".plusFat");
const minusFat = document.querySelector(".minusFat");
const numFat = document.querySelector(".numFat");

const plusOil = document.querySelector(".plusOil");
const minusOil = document.querySelector(".minusOil");
const numOil = document.querySelector(".numOil");

const plusMilk = document.querySelector(".plusMilk");
const minusMilk = document.querySelector(".minusMilk");
const numMilk = document.querySelector(".numMilk");

const plusFruit = document.querySelector(".plusFruit");
const minusFruit = document.querySelector(".minusFruit");
const numFruit = document.querySelector(".numFruit");

const plusVeg = document.querySelector(".plusVeg");
const minusVeg = document.querySelector(".minusVeg");
const numVeg = document.querySelector(".numVeg");

const plusBread = document.querySelector(".plusBread");
const minusBread = document.querySelector(".minusBread");
const numBread = document.querySelector(".numBread");

let bread =0;
let veg =0;
let fruit =0;
let milk =0;
let oil = 0;
let fat = 0;

function decreaseNum (){
    if(bread>0){
    bread--};
    numBread.innerText = bread;

}

plusBread.addEventListener("click", ()=>{
    bread++;
    numBread.innerText = bread;
    console.log(bread);
});

minusBread.addEventListener("click", ()=>{
    if(bread>0){
    bread--};
    numBread.innerText = bread;
    console.log(bread);
});

plusVeg.addEventListener("click", ()=>{
    veg++;
    numVeg.innerText = veg;
    console.log(veg);
});

minusVeg.addEventListener("click", ()=>{
    if(veg>0){
    veg--};
    numVeg.innerText = veg;
    console.log(veg);
});

plusFruit.addEventListener("click", ()=>{
    fruit++;
    numFruit.innerText = fruit;
    console.log(fruit);
});

minusFruit.addEventListener("click", ()=>{
    if(fruit>0){
    fruit--};
    numFruit.innerText = fruit;
    console.log(fruit);
});

plusMilk.addEventListener("click", ()=>{
    milk++;
    numMilk.innerText = milk;
    console.log(milk);
});

minusMilk.addEventListener("click", ()=>{
    if(milk>0){
    milk--};
    numMilk.innerText = milk;
    console.log(milk);
});

plusOil.addEventListener("click", ()=>{
    oil++;
    numOil.innerText = oil;
    console.log(oil);
});

minusOil.addEventListener("click", ()=>{
    if(oil>0){
    oil--};
    numOil.innerText = oil;
    console.log(oil);
});

plusFat.addEventListener("click", ()=>{
    fat++;
    numFat.innerText = fat;
    console.log(fat);
});


minusFat.addEventListener("click", ()=>{
    if(fat>0){
    fat--
};
    numFat.innerText = fat;
    console.log(fat);
});

const inputDate = document.querySelector("#start");

inputDate.addEventListener("change", () => {
  bread = 0;
veg = 0;
fruit = 0;
milk = 0;
oil = 0;
fat = 0;
numBread.innerText = bread;
numVeg.innerText = veg;
numFruit.innerText = fruit;
numMilk.innerText = milk;
numOil.innerText = oil;
numFat.innerText = fat;
});