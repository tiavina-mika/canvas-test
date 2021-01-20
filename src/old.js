// const canvas = document.getElementById("canvas");
// const context = canvas.getContext("2d");

// const fill = color => ctx => {
//   ctx.fillStyle = color;
// };

// const fillRect = (w, h) => (x, y, ctx) => {
//   ctx.fillRect(x, y, w, h);
// };

// const strokeRect = (w, h) => (x, y, ctx) => {
//   ctx.strokeRect(x, y, w, h);
// };

// const clearRect = (w, h) => (x, y, ctx) => {
//   ctx.clearRect(x, y, w, h);
// };

// const fillWithBlack = fill("rgb(0, 0, 0)");
// const fillBox = fillRect(50, 50);
// const strokeBox = strokeRect(48, 48);
// const clearBox = clearRect(96, 96);

// fill("rgba(0, 0, 150, .05)")(context);
// fillRect(300, 300)(0, 0, context);

// const drawBorder = () => {
//   fillWithBlack(context);
//   fillBox(50, 50, context);
//   strokeBox(101, 51, context);
//   fillBox(100, 100, context);
//   strokeBox(51, 101, context);
//   clearBox(52, 52, context);
// };

// const draw = () => {
//   const randomX = Math.random() * 5;
//   const randomY = Math.random() * 5;

//   clearRect(300, 300)(0, 0, context);
//   fill("rgba(0, 0, 150, .05)")(context);
//   fillRect(300, 300)(0, 0, context);

//   fillWithBlack(context);
//   fillBox(randomX, randomY, context);
//   strokeBox(1 + randomX, 50 + randomY, context);
//   fillBox(50 + randomX, 50 + randomY, context);
//   strokeBox(51 + randomX, randomY, context);
//   // setTimeout(() => requestAnimationFrame(draw), 80);
// };
