const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const sizeOfSquare = +prompt('Type a number');
    
    deleteContainer();
    createGridOfSquare(sizeOfSquare);
})

function deleteContainer() {
    const container = document.querySelector('.container');
    container.remove();
}

function createGridOfSquare(size) {
    const container = document.createElement('div');
    container.classList.add('container')
    document.body.append(container);

    for (let i = 0; i < size * size; i++) {
        const block = document.createElement('div');
        block.style.width = `${500 / size}px`;
        block.style.minHeight = `${500 / size}px`;
        block.style.backgroundColor = 'green';
        block.style.border = '1px solid black';
    
        container.append(block);

        block.addEventListener('mouseover', () => {
            block.style.backgroundColor = 'pink';
        })
    }
}

createGridOfSquare(13);
