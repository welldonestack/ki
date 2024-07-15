let tickerTexts = ["PACKAGING", "MOTION", "BRANDING", "TYPOGRAPHY", "PUBLICATION"];
let textSpeed = 8; // Speed of the ticker
let textPositions = []; // Array to hold position vectors of the ticker texts
let textWidths = []; // Array to hold widths of the ticker texts
let spacing = 50; // Spacing between ticker texts
let tickerAreaWidth = 800; // Width of the ticker area
let tickerAreaHeight = 350; // Height of the ticker area
let tickerAreaPos; // Position vector of the ticker area
let fontSize = 500; // Font size of the ticker text

function windowResize(){
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  // Calculate the height of the first row
  firstRowHeight = document.querySelector('.row:first-of-type').offsetHeight + 130;
  rowElement = document.querySelector('.row');
  rowLeft = rowElement.offsetLeft;
  rowWidth = rowElement.offsetWidth;
  
  // Create canvas with limited height to match the first row
  let canvas = createCanvas(rowWidth, firstRowHeight);
  canvas.position(rowLeft, 50);
  canvas.style('z-index','-1');
  
  // Set the font and size
  textFont('Bebas Neue');
  textSize(fontSize);

  // Calculate the widths of the ticker texts
  calculateTextWidths();

  // Initialize the ticker area position
  tickerAreaPos = createVector((windowWidth - tickerAreaWidth) / 2, fontSize*1.3-firstRowHeight);

  // Initialize the positions of the ticker texts
  let initialX = tickerAreaPos.x + tickerAreaWidth;
  for (let i = 0; i < tickerTexts.length; i++) {
    let posY = tickerAreaPos.y + (tickerAreaHeight / 2); // Adjust vertically
    textPositions[i] = createVector(initialX, posY);
    initialX += textWidths[i] + spacing;
  }
}

function draw() {
  background(255); // White background
  fill(63, 0, 255);
  noStroke();

  // Update the position of the ticker texts
  updateTickerPositions();

  // Draw the ticker texts
  drawTickerTexts();
}

function calculateTextWidths() {
  for (let i = 0; i < tickerTexts.length; i++) {
    textWidths[i] = textWidth(tickerTexts[i]);
  }
}

function updateTickerPositions() {
  for (let i = 0; i < tickerTexts.length; i++) {
    textPositions[i].x -= textSpeed;

    // Check if the text has completely scrolled off the left side of the canvas
    if (textPositions[i].x + textWidths[i] < 0) {
      // Reset to the right side of the ticker area with spacing
      let previousIndex = (i === 0) ? tickerTexts.length - 1 : i - 1;
      textPositions[i].x = textPositions[previousIndex].x + textWidths[previousIndex] + spacing;
    }
  }
}

function drawTickerTexts() {
  push();
  fill(0);
  textFont('Bebas Neue'); // Set the custom font
  textSize(fontSize); // Set the font size
  for (let i = 0; i < tickerTexts.length; i++) {
    text(tickerTexts[i], textPositions[i].x, textPositions[i].y);
  }
  pop();
}
