const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

const darw = () => {

    const width = 800;
    const height = 500;
    canvas.width = width;
    canvas.height = height;
    canvas.top = 0;
    canvas.left = 0;

    // context.fillStyle = '#000'
    // context.fillRect(0, 0, width, height)

    context.font = 'bold 20px Menlo'
    // // context.textAlign = 'left'
    context.textBaseline = 'middle'
    // context.fillStyle = 'red'

    const text = 'Hello, World!'
    // TextMetrics.fontBoundingBoxAscent
    const textWidth = context.measureText(text).width;
    const fontBoundingBoxAscent = context.measureText(text).fontBoundingBoxAscent;
    const fontBoundingBoxDescent = context.measureText(text).fontBoundingBoxDescent;
    const actualBoundingBoxAscent  = context.measureText(text).actualBoundingBoxAscent ;
		const centerX = (width / 2) - (textWidth / 2);

    console.log('fontBoundingBoxAscent', fontBoundingBoxAscent);
    console.log('fontBoundingBoxDescent', fontBoundingBoxDescent);
    console.log('actualBoundingBoxAscent', actualBoundingBoxAscent);


    context.fillStyle = 'green';
    context.fillRect(
      0, 
      0, 
      width, 
      height
    )
    context.fillStyle = '#fff'
    context.fillText(text, centerX, height - fontBoundingBoxAscent)
    // context.fillText(text, 0, 80)

    // context.fillStyle = '#fff'
    // context.font = 'bold 30pt Menlo'
    // context.fillText('flaviocopes.com', 600, 530)
};

darw();
