// define the targets 
const qualityWork1 = document.querySelector(".image-6");
const qualityWork2 = document.getElementsByClassName(".image-7");
const about1 = document.getElementsByClassName(".nafora");
const about2 = document.getElementsByClassName(".hasan");
const pants = document.getElementsByClassName(".pants");
const wood = document.getElementsByClassName(".wood");
const blue = document.getElementsByClassName(".blue");
const yellow = document.getElementsByClassName(".yellow");
const jaket = document.getElementsByClassName(".jaket");
const green = document.getElementsByClassName(".green");

// define the area 
const areaQualityWork = document.querySelector(".quality-of-work");

// functions
window.addEventListener("scroll", function (e) {
    var scroll = window.pageYOffset;
    var rate = scroll * 2;
    // qualityWork1.style.transform = 'translate3d(0px,' + rate + 'px, 0px)';
    // console.log(qualityWork1.offsetHeight)
    console.log(areaQualityWork.getBoundingClientRect(qualityWork1).y);

});

