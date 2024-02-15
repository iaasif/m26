function calculateRectangleArea() {
    // console.log("rectangle connected ");
    const lengthInput = document.getElementById('rectangle-length');

    const lengthText = lengthInput.value;

    console.log(lengthText);

    const length = parseFloat(lengthText);
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);

    console.log(width);

    const area = length * width;
    console.log(' area of rectangle');


    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

}