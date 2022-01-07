let display_item = document.getElementById("display_item");

let keys = document.querySelector(".keys");
keys.addEventListener("keydown", (e) =>{
    e.preventDefault();
});


// Functionality for Enter & Backspace Keypress
window.addEventListener("keydown", (e)=>{
    if(e.key == "Enter")
    {
        display_item.value = eval(display_item.value);
        
        let btn = document.querySelector(".equal");
        btn.setAttribute("style","background-color: #f85e2f !important");

        setTimeout(() => {
            btn.removeAttribute("style","background-color: #f85e2f !important");
        }, 100);
    }

    else if(e.key == "Backspace")
    {
        e.preventDefault();
        let value = display_item.value.substr(0, display_item.value.length - 1)
        display_item.value = value;

        let btn = document.querySelector(".del");
        btn.setAttribute("style","background-color: #979797 !important");

        setTimeout(() => {
            btn.removeAttribute("style","background-color: #979797 !important");
        }, 100);
    }

});



// Functionality for Buttons
let buttons = document.querySelectorAll("button");

for(item of buttons)
{
    item.addEventListener("click", (e) =>{
        buttonValue = e.target.innerText;
        console.log(buttonValue);

        if(buttonValue == "C")
        {
            display_item.value = "";
        }

        else if(buttonValue == "←")
        {
            let value = display_item.value.substr(0, display_item.value.length - 1)
            display_item.value = value;
        }

        else if(buttonValue == "=")
        {
            display_item.value = eval(display_item.value);
        }

        else if(buttonValue == '÷')
        {
            buttonValue = '/';
            display_item.value += buttonValue;
        }

        else if(buttonValue == "×")
        {
            buttonValue = "*";
            display_item.value += buttonValue;
        }

        else
        {
            display_item.value += buttonValue;
        }

    });

};
