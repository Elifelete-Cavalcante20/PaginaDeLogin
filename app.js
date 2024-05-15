// Obtém a referência para a imagem do cabeçalho
const headerImage = document.querySelector('.nav img');

// Adiciona a classe 'pulse' quando o mouse passa sobre a imagem
headerImage.addEventListener('mouseover', function() {
    headerImage.classList.add('pulse');
});

// Remove a classe 'pulse' quando o mouse sai da imagem
headerImage.addEventListener('mouseout', function() {
    headerImage.classList.remove('pulse');
});
