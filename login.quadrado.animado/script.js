const container = document.querySelector('.background');
const size = 80; // Tamanho dos quadrados

// adiciona quadrado conforme tamanho da tela
const rows = Math.ceil(window.innerHeight / size);
const cols = Math.ceil(window.innerWidth / size);

for (let i = 0; i < rows * cols; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);

    // caixa identifica mouse
    box.addEventListener('mouseenter', () => {
        box.classList.add('animate');
    });

    box.addEventListener('mouseleave', () => {
        setTimeout(() => box.classList.remove('animate'), 1000); // Tempo do efeito
    });
}