const mIsFor = document.querySelector(".mIsFor");
const circle1 = document.getElementById("circle-1-text");
var str1 = "and";
var str2 = "."
var regexAnd = new RegExp(str1);
var regexPeriod = new RegExp(str2);
var rotatingText = ["Mary and", "Maryam", "mass incarceration.", "Maryam and", "Moses", "Moses and", "make-believe.", "McKenzie.", "miracle", "miracle and", "mayhem", "mayhem and", "mass incarceration.", "migrant", "migrant and", "major", "major and", "magic", "magic and", "metastasization.", "muscle", "muscle and", "memory", "memory and", "mitochondria.", "minor", "minor and", "malevolence", "malevolence and", "manna.", "maternal", "maternal and", "mule", "mule and", "music.", "meal", "meal and", "minute", "minute and", "mandrill.", "mammal", "mammal and", "make-up", "make-up and", "mercury.", "must be", "must be and", "maybe", "maybe and", "much.", "Archive."]; 
const mArchive = document.querySelector(".mArchive");
const mArchiveTL = gsap.timeline({repeat: -1, yoyo: true});

rotatingText.forEach((word, key) => {
  
  function getDelimiter() {
    return (word === "mass incarceration.") ? " " : ""
  }
  function getColor() {
    if (word === "mass incarceration.") {
      return "red"
    }
    else if (word === "metastasization.") {return "pink"}
    else {return "white"}
  }
  
  
  function getSwapDuration() {
    if (regexPeriod.test(word)) {return 3.5}
    else return 0.5
  }
  
  function getSwapDelay() {
    if (regexAnd.test(word)) {return "<75%"}
    else if (regexPeriod.test(word)) {return ">+3"}
    else return "<95%"
  }
  
  mArchiveTL.to(mArchive, {duration: getSwapDuration(), ease: "power4.inOut", color: getColor(), text: {value: word, delimiter: getDelimiter()}}, getSwapDelay())
})

// mIsFor.addEventListener("mouseenter", ()=> {mArchiveTL.resume()});
// mIsFor.addEventListener("mouseleave", ()=> {mArchiveTL.pause()});


gsap.to(circle1, {duration: 1, scale:1.1, x: -6, y: -6});