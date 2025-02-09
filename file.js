document.addEventListener("DOMContentLoaded", function () {
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      this.getElementsByClassName('plusMoins')[0].getElementsByTagName('img')[0].src='./assets/Plus.png'
    } else {
      panel.style.display = "block";
      this.getElementsByClassName('plusMoins')[0].getElementsByTagName('img')[0].src='./assets/Minus.png'
    }
  });
}

const para1 = document.getElementById("para1");
animate(para1);


var numsDone=false
    window.addEventListener("scroll",function(){
        var sc=document.getElementById("nums")
        var position=sc.getBoundingClientRect()
        if (position.top < window.innerHeight && position.bottom > 0) {
            if(!numsDone){
                var i=0
                var j=0;
                var k=0
                setInterval(()=>{
                    document.getElementById("entrepreneurs").innerText="+"+i+""
                    if(i < 1000){
                        i+=10
                    }
                },50)
                setInterval(()=>{
                    document.getElementById("res").innerText=""+k+"X"
                    if(k < 10){
                        k+=1
                    }
                },300) 
            }
            numsDone=true
        }
    })

    var numBook=document.getElementById('bookNum')
    var bookTitle=document.getElementById('bookTitle')
    document.getElementById('book1').addEventListener('click',function(){
        numBook.innerText="MODULE 1"
        bookTitle.innerText="LES DÉBUTS DE VOTRE SUCCÈS"
    })
    document.getElementById('book2').addEventListener('click',function(){
        numBook.innerText="MODULE 2"
        bookTitle.innerText="LIBERER VOTRE ESPRIT"
    })
})
function animate(element) {
    let elementWidth = element.offsetWidth;
    let parentWidth = element.parentElement.offsetWidth;
    let flag = 0;
    
setInterval(() => {
    element.style.marginLeft = --flag + "px";

    if (elementWidth == -flag) {
        flag = parentWidth;
    }
}, 10);
}