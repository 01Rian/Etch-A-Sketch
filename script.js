const place = document.querySelector('.placeGrid');
const input = document.querySelector('#quantity');
const sizeGrid = document.querySelector('.create');
const reset = document.querySelector('.reset');
const grid = document.querySelector('.grid');

function defaultGrid() {
    for (let i = 0; i < 16 * 16; i++) {
        const div = document.createElement('div');
        div.classList.add('colorGrid');
        grid.appendChild(div);
        grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
        grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    }

    const allColors = document.querySelectorAll('.colorGrid');
    for (color of allColors) {
        color.addEventListener('mouseover', (e) => {
            const colorBackground = getComputedStyle(e.target).backgroundColor;
            const regex = /\d\.\d/;

            if (colorBackground.match(regex) !== null) {
                const colorOpacity = Number(colorBackground.match(regex));
                e.target.style.backgroundColor = colorBackground.replace(regex, colorOpacity + 0.2);
            }
        });
    }
}

defaultGrid();