// cursor animation
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    // cursor.style.display = "flex";
    // console.log(cursor.style.display)
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})



// define the targets 
const qualityWork1 = document.querySelector(".image-6");
const qualityWork2 = document.querySelector(".image-7");
const about1 = document.querySelector(".nafora");
const about2 = document.querySelector(".hasan");
const pants = document.querySelector(".pants");
const wood = document.querySelector(".wood");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const jaket = document.querySelector(".jaket");
const green = document.querySelector(".green");
//  array of the cloths
let cloths = [pants, wood, blue, yellow, jaket, green];

// define the area 
const areaQualityWork = document.querySelector(".kk");

// functions
window.addEventListener("scroll", function (e) {
    var scroll = window.pageYOffset;
    // quality work section
    var rate = scroll / 50;
    var rate2 = scroll / -50;
    qualityWork1.style.transform = 'translate3d(0px,' + rate + '%, 0px)';
    qualityWork2.style.transform = 'translate3d(0px,' + rate2 + '%, 0px)';
    // the about 
    var rate3 = scroll / 40;
    var rate4 = scroll / -40;
    var finalRate1 = rate3 - 60;
    var finalRate2 = rate4 + 60;
    about1.style.transform = 'translate3d(0px,' + finalRate1 + '%, 0px)';
    about2.style.transform = 'translate3d(0px,' + finalRate2 + '%, 0px)';
    // cloths we operate on
    // get one item working
    var pantsRate = rate4 + 60;
    // var woodRate = rate4 + 90;
    var woodRate = scroll / 20 - 99;
    // scroll - 200

    var blueRate = scroll / -30 + 90;
    var yellowRate = rate4 + 50;
    var jaketRate = pantsRate - 20;
    var greenRate = rate4 + 50;
    pants.style.transform = 'translate3d(0px,' + pantsRate + '%, 0px)';
    wood.style.transform = 'translate3d(0px,' + woodRate + '%, 0px)';
    blue.style.transform = 'translate3d(0px,' + blueRate + '%, 0px)';
    yellow.style.transform = 'translate3d(0px,' + blueRate + '%, 0px)';
    jaket.style.transform = 'translate3d(0px,' + jaketRate + '%, 0px)';
    green.style.transform = 'translate3d(0px,' + woodRate + '%, 0px)';

    // console.log(blueRate)


    // console.log(finalRate1)



    // console.log("qualityWork1.offsetHeight " + qualityWork1.offsetHeight)
    // console.log("window.pageYOffset : " + scroll)
});
// i don't have a clue on why isn't this working
// areaQualityWork.addEventListener("scroll", function (e) {
//     console.log(areaQualityWork.getBoundingClientRect().y);
//     console.log("wax")

// })

// - steps
// get the yoffset || the hieght of the div relatev to the viwport
// ie. geting the persontage of the area that we hade covered out of a div
// get the values
//
//
//
//
//
//
//
//
//
//
//
//
// the main idea of this piece of code is giving each clothing item a random value which sets it in a difrent postion when ever you reffresh the page, the problem is just how to get the peice of data from load function and use it on a scrool event, the scoop is the main problem here, if you see this peice of code that means that i couldn't make it functional
// i think that it's better to use a dictionary or an object, so that each image can have it's key value ?
// to be worked on later but now lets just make the site work
// cloths.forEach(item => {
//     window.addEventListener("load", function (e) {
//         for (x = 0; x < cloths.length; x++) {
//             Random = Math.floor(Math.random() * (20 - (- 15))) - 15;
//             var scroll = window.pageYOffset;
//             var randomRate = scroll / Random;
//             var finalRandomRate = randomRate / 40;
//             cloths[x].style.transform = 'translate3d(0px,' + finalRandomRate + '%, 0px)';
//             // some new shit
//             // the live reading and writing values is working, but somehow it's reading and writing all of the item's values :} wtf...
//             this.window.addEventListener("scroll", function (e) {
//                 // var scroll = window.pageYOffset;
//                 // var randomRate = scroll / Random;
//                 // var finalRandomRate = randomRate / 40;
//                 // where we are
//                 var scrollY = this.window.pageXOffset;
//                 var randomRateY = scrollY / Random;
//                 // where to go
//                 item.style.transform = 'translate3d(0px,' + randomRateY + '%, 0px)';
//                 console.log(scrollY)
//             })
//         }
//         // console.log(Random)
//     });
// });
// how to give each item a random value of it's own
//








// // in case you want to laugh run this, each time you scroll it creats new offset values which makes the images jump around
// cloths.forEach(item => {
//     // create a random number
//     // give this number some constraint
//     // Random = Math.floor(Math.random() * (20 - (- 15))) - 15;
//     // the value that the item will take as a y transformation
//     Random = Math.floor(Math.random() * (20 - (- 15))) - 15;

//     window.addEventListener("scroll", function (e) {
//         // giving each item a value
//         for (x = 0; x < cloths.length; x++) {
//             var scroll = window.pageYOffset;
//             var randomRate = scroll / Random;
//             var finalRandomRate = randomRate / 40;
//             cloths[x].style.transform = 'translate3d(0px,' + finalRandomRate + '%, 0px)';
//             //  = Random;
//             // console.log(x)
//         }
//         // assign this number as avalue for the animation
//         // item.style.transform = 'translate3d(0px,' + finalRandomRate + '%, 0px)';
//         console.log(Random)
//     });
// });
// // how to give each item a random value of it's own
// // 


