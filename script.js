const app = (() => {
    const place = document.querySelector('.placeGrid');
    const input = document.querySelector('#quantity');
    const sizeGrid = document.querySelector('.create');
    const reset = document.querySelector('.reset');
    const grid = document.querySelector('.grid');
    let isMouseDown = false;
  
    const defaultGrid = () => {
      for (let i = 0; i < 16 * 16; i++) {
        const div = document.createElement('div');
        div.classList.add('colorGrid');
        grid.appendChild(div);
        grid.style.gridTemplateColumns = `repeat(16, 2fr)`;
        grid.style.gridTemplateRows = `repeat(16, 2fr)`;
      }
      colorGrid();
    };
  
    const colorGrid = () => {
      const allColors = document.querySelectorAll('.colorGrid');
      for (const color of allColors) {
        color.addEventListener('mousedown', () => {
          isMouseDown = true;
        });
  
        color.addEventListener('mouseup', () => {
          isMouseDown = false;
        });
  
        color.addEventListener('mousemove', (e) => {
          if (isMouseDown) {
            const colorBackground = getComputedStyle(e.target).backgroundColor;
            const regex = /\d\.\d/;
  
            if (colorBackground.match(regex) !== null) {
              const colorOpacity = Number(colorBackground.match(regex));
              e.target.style.backgroundColor = colorBackground.replace(regex, colorOpacity + 0.2);
            }
          }
        });
      }
    };
  
    const createGrid = () => {
      if (!input.value || input.value <= 0 || input.value.toString().charAt(0) === "0") {
        alert('Please set a grid size');
        input.value = '';
      } else if (input.value >= 31) {
        alert('Exceeded the grid limit');
        input.value = '';
      } else {
         grid.innerHTML = '';
         grid.style.gridTemplateColumns = `repeat(${input.value}, 2fr)`;
         grid.style.gridTemplateRows = `repeat(${input.value}, 2fr)`;
         place.innerHTML = `${input.value}x${input.value}`;
  
         for (let i = 0; i < input.value * input.value; i++) {
           const div = document.createElement('div');
           div.classList.add('colorGrid');
           grid.appendChild(div);
         }
         colorGrid();
       }
  };
  
    const resetGrid = () => {
      grid.innerHTML = '';
      input.value = '';
      place.innerHTML = '16x16';
      defaultGrid();
    };
  
    const init = () => {
      reset.addEventListener('click', resetGrid);
      sizeGrid.addEventListener('click', createGrid);
      window.addEventListener('load', defaultGrid);
    };
  
    return {
      init
    };
  })();
  
  app.init();