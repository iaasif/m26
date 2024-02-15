function calculateparallelogramArea() {
    const heightInput = document.getElementById('parallelogram-height');

    const heightText = heightInput.value;
    // console.log(heightText);

    const height = parseFloat(heightText);
    const baseInput = document.getElementById('parallelogram-base');

    // console.log(baseInput);

    const baseText = baseInput.value;
    const base = parseFloat(baseText);

    const area = height * base;

    // console.log(area);

    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
}