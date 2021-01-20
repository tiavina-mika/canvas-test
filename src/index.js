const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const darw = () => {

    const width = 800;
    const height = 500;
    canvas.width = width;
    canvas.height = height;
    canvas.top = 0;
    canvas.left = 0;

    // ctx.fillStyle = '#000'
    // ctx.fillRect(0, 0, width, height)

    ctx.font = 'bold 20px Menlo';
    // ctx.textAlign = 'left'
    ctx.textBaseline = 'middle';

    const text = 'Hello, World!';
    const textWidth = ctx.measureText(text).width;
    const fontBoundingBoxAscent = ctx.measureText(text).fontBoundingBoxAscent;
    const fontBoundingBoxDescent = ctx.measureText(text).fontBoundingBoxDescent;
    const actualBoundingBoxAscent  = ctx.measureText(text).actualBoundingBoxAscent ;
		const centerX = (width / 2) - (textWidth / 2);

    console.log('fontBoundingBoxAscent', fontBoundingBoxAscent);
    console.log('fontBoundingBoxDescent', fontBoundingBoxDescent);
    console.log('actualBoundingBoxAscent', actualBoundingBoxAscent);


    ctx.fillStyle = 'green';
    ctx.fillRect(
      0, 
      0, 
      width, 
      height
    )
    ctx.fillStyle = '#fff'
    ctx.fillText(text, centerX, height - fontBoundingBoxAscent)
    // ctx.fillText(text, 0, 80)

    // ctx.fillStyle = '#fff'
    // ctx.font = 'bold 30pt Menlo'
    // ctx.fillText('flaviocopes.com', 600, 530)
};

darw();
