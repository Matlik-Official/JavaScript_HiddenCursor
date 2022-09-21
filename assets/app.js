const button = document.querySelector("#troll");

const counter = document.querySelector("#counter");

let count = 0;

const trollTXT = "Rick Roll";


// Click function
function OnClick() {

    var body = document.body,
        html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );

    var width = Math.max( body.scrollWidth, body.offsetWidth, 
        html.clientWidth, html.scrollWidth, html.offsetWidth );


        if (count === 9) {
            button.innerHTML = trollTXT;
        } else {
            button.innerHTML = "Click Me";
        }


    console.log(height + ' ' + ' ' + width);

    let randHeight = Math.floor(Math.random() * (height - 0 + 1)) + 0
    let randWidth = Math.floor(Math.random() * (width - 0 + 1)) + 0

    button.style.position = "absolute";
    button.style.left = randWidth+'px';
    button.style.top = randHeight+'px';

    count++;

    counter.innerHTML = count;

    // alert('Try again');
}


// Function for loading the game right
function Setup() {

    var body = document.body,
        html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );

    var width = Math.max( body.scrollWidth, body.offsetWidth, 
        html.clientWidth, html.scrollWidth, html.offsetWidth );

    
    const x = button.width/2;
    const y = button.height/2;

    console.log(x + ' ' + y)


    button.style.position = "absolute";
    button.style.left = width/2-50+'px';
    button.style.top = height/2-25+'px';

    counter.innerHTML = 0;

}