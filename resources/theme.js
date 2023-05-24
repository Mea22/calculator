

let slider = document.querySelector(".slider");
let body = document.querySelector("body");
let header = document.querySelector("header")
let screen = document.querySelector(".write-number");
let buttonCont = document.querySelector(".button-cont");
let buttons = document.querySelectorAll('.button');
let del = document.querySelector(".del")
let reset = document.querySelector(".reset");
let sum = document.querySelector(".sum");


let hover = (element, color, defaultColor)=>{
    element.addEventListener("mouseenter", function(){
        element.style.backgroundColor = color;
    })
    element.addEventListener('mouseleave', function() {
        element.style.backgroundColor = defaultColor;
      });
}      

let update = () => {
    function changeButtonColor(color, shadow ,textColor,hover,) {
        buttons.forEach(function(button){
          button.style.backgroundColor = color;
          button.style.boxShadow = shadow;
          button.style.color = textColor;
          button.addEventListener("mouseenter", function(){
            button.style.backgroundColor = hover;
        })
          button.addEventListener("mouseleave", function(){
            button.style.backgroundColor = color;
        })
        });
      }

    if(slider.value == 1){
        body.style.backgroundColor = "#3A4663";
        header.style.color = "#FFFFFF";

        slider.style.backgroundColor = "#242D44";
        slider.style.setProperty("--thumb-color", "#D03F2F");

        screen.style.backgroundColor = "#181F33";
        screen.style.color = "#FFFFFF";

        buttonCont.style.backgroundColor = "#242D44";
        changeButtonColor("#EAE3DC", "inset 0px -4px 0px #B3A497", "#434A59", "#FFFFFF");

        reset.style.backgroundColor = "#647198";
        reset.style.color = "#FFFFFF";
        reset.style.boxShadow = "inset 0px -4px 0px #414E73";
        hover(reset, "#A2B2E1", "#647198");


        del.style.backgroundColor = "#647198";
        del.style.boxShadow = "inset 0px -4px 0px #414E73";
        del.style.color = "#FFFFFF";
        hover(del, "#A2B2E1", "#647198");

        sum.style.backgroundColor = "#D03F2F";
        sum.style.color = "#FFFFFF";
        sum.style.boxShadow = "inset 0px -4px 0px #93261A";
        hover(sum, "#F96B5B", "#D03F2F");


        slider.classList.remove("slider2", "slider3")
        slider.classList.add("slider1")
        
        

    }else if(slider.value == 2){
        body.style.backgroundColor = "#E6E6E6";
        header.style.color = "#36362C";

        slider.style.backgroundColor = "#D2CDCD";
        slider.style.setProperty("--thumb-color", "#C85402");

        screen.style.backgroundColor = "#EEEEEE";
        screen.style.color = "#36362C";

        buttonCont.style.backgroundColor = "#D2CDCD";
        changeButtonColor("#E5E4E1", "inset 0px -4px 0px #A79E91", "#36362C", "#FFFFFF");


        reset.style.backgroundColor = "#378187";
        reset.style.color = "#FFFFFF";
        reset.style.boxShadow = "inset 0px -4px 0px #1B6066";
        hover(reset, "#62B5BC", "#378187");

        del.style.backgroundColor = "#378187";
        del.style.boxShadow = "inset 0px -4px 0px #1B6066";
        del.style.color = "#FFFFFF";
        hover(del, "#62B5BC", "#378187");

        sum.style.backgroundColor = "#C85402";
        sum.style.color = "#FFFFFF";
        sum.style.boxShadow = "inset 0px -4px 0px #873901";
        hover(sum, "#FF8A38", "#C85402");



    }else if(slider.value == 3){
        body.style.backgroundColor = "#17062A";
        header.style.color = "#FFE53D";

        slider.style.backgroundColor = "#1E0936";
        slider.style.setProperty("--thumb-color", "#00DED0");

        screen.style.backgroundColor = "#1E0936";
        screen.style.color = "#FFE53D";

        buttonCont.style.backgroundColor = "#1E0936";
        changeButtonColor("#331C4D", "inset 0px -4px 0px #881C9E", "#FFE53D", "#6C34AC");

        reset.style.backgroundColor = "#56077C";
        reset.style.color = "#FFFFFF";
        reset.style.boxShadow = "inset 0px -4px 0px #BE15F4";
        hover(reset, "#8631AF", "#56077C");

        del.style.backgroundColor = "#56077C";
        del.style.color = "#FFFFFF";
        del.style.boxShadow = "inset 0px -4px 0px #BE15F4";
        hover(del, "#8631AF", "#56077C");

        sum.style.backgroundColor = "#00DED0";
        sum.style.color = "#1A2327";
        sum.style.boxShadow = "inset 0px -4px 0px #6CF9F1";
        hover(sum, "#93FFF8", "#00DED0");

        slider.classList.remove("slider2", "slider1")
        slider.classList.add("slider3")

    }
};