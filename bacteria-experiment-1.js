const CANVAS_X = CANVAS_Y = 500;
var start_x, start_y;
var bacteria_counts;
const framerate = 30;
function setup() {
  createCanvas(CANVAS_X, CANVAS_Y);
  frameRate(10);
  start_x = int(random(0, CANVAS_X));
  start_y = int(random(0, CANVAS_Y));
  bacteria_counts = new Array(CANVAS_X);
  for (let i = 0; i < CANVAS_X; ++i) {
    bacteria_counts[i] = new Array(CANVAS_Y);
  }
  for (let i = 0; i < CANVAS_X; ++i) {
    for (let j = 0; j < CANVAS_Y; ++j) {
      bacteria_counts[i][j] = 0;
    }
  }
  bacteria_counts[start_x][start_y] = 1;

}

function draw() {
  colorMode(HSL, 100, 100, 100, 1);
  background(12, 90, 95, 0.5);

  for (let i = 0; i < CANVAS_X; ++i) {
    for (let j = 0; j < CANVAS_Y; ++j) {
      if (bacteria_counts[i][j]){
        fill(90, 30, 80, bacteria_counts[i][j])
        stroke(90, 90, 10)
        ellipse(i, j, 2, 2);
      }
    }
  }
  for (let i = 1; i < CANVAS_X - 1; ++i) {
    for (let j = 1; j < CANVAS_Y - 1; ++j) {
      if (bacteria_counts[i][j]) {
        bacteria_counts[i][j] += 1;
        let x_offset = random([1, -1]);
        let y_offset = random([1, -1]);
        bacteria_counts[i + x_offset][j + y_offset] += 1;
      }
    }
  }
}