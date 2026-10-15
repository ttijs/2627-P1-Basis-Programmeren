let energy = 100;

function setup() {
    createCanvas(800, 600);

    let buttonEat = createButton("Eet banaan");
    buttonEat.position(100, 400);
    buttonEat.mousePressed(eatFunction);
}
function draw() {
    background("yellow");

    energy = energy - 0.3;
    if (energy <= 0) {
        energy = 0;
    }

    fill("black");
    text("energyyyyyyyy: " + round(energy), 50, 50);

    fill("blue");
    rect(50, 60, energy, 20);

    // Gezicht (gele cirkel)
    fill(255, 204, 0);
    stroke(0);
    strokeWeight(2);
    ellipse(200, 200, 200, 200);

    // Mond (boog)
    noFill();
    strokeWeight(4);
    if (energy > 50) {
        arc(200, 200, 120, 100, 0, PI);
        // Ogen (zwarte cirkels)
        fill(0);
        ellipse(160, 160, 20, 20); // Linkeroog
        ellipse(240, 160, 20, 20); // Rechteroog
    } else if (energy < 50 && energy > 0) {
        line(100, 250, 300, 250);
        // Ogen (zwarte cirkels)
        fill(0);
        ellipse(160, 160, 10, 10); // Linkeroog
        ellipse(240, 160, 20, 20); // Rechteroog
    } else if (energy <= 0) {
        line(120, 250, 300, 200);

        line(140, 160, 170, 170); // Linkeroog
        line(140, 170, 170, 140); // Linkeroog
        line(220, 160, 250, 170); // Rechteroog
        line(220, 170, 250, 160); // Rechteroog
    }
    noStroke();
}

function eatFunction() {
    console.log("ga eten");
    energy += 20;
}
