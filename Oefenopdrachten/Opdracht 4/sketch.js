let a;
let b;
let c;
let d;

function setup() {
    createCanvas(800, 400);
}

function draw() {
    background(220);




    textSize(20)
    text("hallo", 10, 10);



        if (a <= b) {
            text(a + " is kleiner of gelijk aan  " + b, 10, 50)
        } else if ( a >= b) {
            text(a + " is groter of gelijk aan  " + b, 10, 50)
        } else {
            text(a + " is even groot als  " + b, 10, 50)
        }

        
        text("c = niet afgerond " + c, 10, 100)
        text("c = afgerond  " + d, 10, 150);






















    


    // text("a = " + a, 20, 20);
    // text("b = " + b, 20, 60);

    // if (a > b) {
    //     text("a is groter dan b", 20, 100)
    // } else if (b > a) {
    //     text("b is groter dan a", 20, 100)
    // } else if (a == b) {
    //     text("a is even groot als b", 20, 100);
    // }
}

 function keyPressed() {
    if (key == " ") {
//         console.log("spatie wordt ingedrukt");
        a = round(random(100))
        b = round(random(100))

        c = random(100)
        d = round(c)
    }
}