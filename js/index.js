// let b = document.getElementById("b1");
// b.onclick = () => {
//     b.classList.toggle("open");
    
// }




// let count = document.querySelector(".count");
// let input = document.querySelector("input");
// let progress = document.querySelector(".progress") 
// let maxlength = input.getAttribute("maxlength")
// count.innerHTML = maxlength;
// input.oninput = function() {
//     count.innerHTML = maxlength - this.value.length;
//     count.innerHTML ==0 ? count.classList.add("zero") : count.classList.remove("zero");
//     progress.style.width = `${(this.value.length * 100) / maxlength}%`;
// }




// let ulall = document.querySelectorAll(".switcher li");
// ulall.forEach(li =>{
//     li.addEventListener("click",(e) => {
//         ulall.forEach(li => {
//             li.classList.remove("active");
//         });
//         e.target.classList.add("active");

//         document.querySelectorAll(".gallary img").forEach(img => {
//             img.style.display = `none`;
//         });

//         document.querySelectorAll(e.target.dataset.cat).forEach(el =>{
//             el.style.display = "block";
//         });
//     })
// })



// let tab = document.querySelectorAll(".tabs li");
// tab.forEach(li => {
//     li.addEventListener("click", function(e) {
//         tab.forEach(el => {
//             el.classList.remove("active");
//         })
//         e.target.classList.add("active");

//         document.querySelectorAll(".content div").forEach(div => {
//             div.style.display=`none`;
//         })
//         document.querySelector(e.target.dataset.con).style.display = `block`;
        
//     });
// });




let words = ["apple","banana","words","dataset","active","positive","adding","lists","target","goals","messi","pavard"];
let lev = {
    "easy": 7,
    "medium": 5,
    "hard": 4,
}


let level = document.querySelector(".message .lvl");
level.innerHTML = Object.keys(lev)[0];

let second = document.querySelector(".message .seconds");
second.innerHTML = lev.easy;



let startplay = document.querySelector(".start");
let theword = document.querySelector(".the-word");
let allwords = document.querySelector(".upcoming-words");
let time = document.querySelector(".time");
let result = document.querySelector(".finish");
let score = document.querySelector(".score .got");
let totalscore = document.querySelector(".score .total");
let input = document.querySelector(".input");

let defaultlevel ="easy";
level.innerHTML = defaultlevel;
second.innerHTML = lev[defaultlevel];
time.innerHTML = lev[defaultlevel];
document.querySelectorAll(".choice span").forEach(span => {
    span.addEventListener("click", (e) => {
        if(e.target.className === "easy"){
            defaultlevel = "easy";
            console.log("easy");
        }
        else if(e.target.className === "medium"){
            defaultlevel = "medium";
            console.log("medium");
        }
        else if(e.target.className === "hard"){
            defaultlevel = "hard";
            console.log("hard");
        }
        level.innerHTML = defaultlevel;
        second.innerHTML = lev[defaultlevel];
        time.innerHTML = lev[defaultlevel];
    })
})

totalscore.innerHTML = words.length;
input.onpaste = () => {
    return false;
}
startplay.onclick = () => {
    startplay.remove();
    input.focus();
    generate();
}


function generate(){
    startplay.remove();
    allwords.innerHTML ="";
    randomword = words[Math.floor(Math.random()*words.length)]
    theword.innerHTML = randomword;
    let wordindex = words.indexOf(randomword);
    words.splice(wordindex,1);


    for(let i=0;i<words.length;i++){
        let div = document.createElement("div");
        let word = document.createTextNode(words[i]);
        div.appendChild(word);
        allwords.appendChild(div);
    }
    start_play()
}

function start_play(){
    time.innerHTML = lev[defaultlevel];
    let counter = setInterval(()=>{
        time.innerHTML--;

        if(time.innerHTML === "0"){
            clearInterval(counter);
            if(input.value.toLowerCase() === theword.innerHTML.toLowerCase()){
                input.value = '';
                score.innerHTML++;
                if(words.length > 0){
                    generate();
                }
                else{
                    let div1 = document.createElement("div");
                    div1.className = "good";
                    let text = document.createTextNode("Congratulation");
                    div1.appendChild(text);
                    result.appendChild(div1);
                    allwords.remove();
                }
            }
            else {
                let div1 = document.createElement("div");
                div1.className = "bad";
                let text = document.createTextNode("Game Over");
                div1.appendChild(text);
                result.appendChild(div1);
                input.remove();
            }
        }
    },1000);
}
document.getElementById("re").onclick = ()=> {
    location.reload();
}












