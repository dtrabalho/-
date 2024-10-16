document.getElementById('submitButton').addEventListener('click', function() {
    const password = document.getElementById('passwordInput').value;
    const correctPassword = 'entidade';
    const errorMessage = document.getElementById('errorMessage');
    const imageGallery = document.getElementById('imageGallery');
    const notesContainer = document.getElementById('notesContainer');
    const savedNotesArea = document.getElementById('savedNotesArea');

    if (password === correctPassword) {
        errorMessage.classList.add('hidden');
        imageGallery.classList.remove('hidden');
        notesContainer.classList.remove('hidden');
        savedNotesArea.classList.remove('hidden'); // Exibe o bloco de notas salvas
    } else {
        errorMessage.classList.remove('hidden');
        imageGallery.classList.add('hidden');
        notesContainer.classList.add('hidden');
        savedNotesArea.classList.add('hidden');  // Esconde o bloco de notas salvas
    }
});

// Lightbox functionality
const images = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDescription = document.getElementById('lightboxDescription');
const closeLightbox = document.getElementById('closeLightbox');

images.forEach(image => {
    image.addEventListener('click', function() {
        const title = image.getAttribute('data-title');
        const description = image.getAttribute('data-description');
        
        lightboxImage.src = image.src;
        lightboxTitle.textContent = title;
        lightboxDescription.textContent = description;
        lightbox.classList.add('active');
    });
});

closeLightbox.addEventListener('click', function() {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', function(e) {
    if (e.target !== lightboxImage && e.target !== lightboxTitle && e.target !== lightboxDescription) {
        lightbox.classList.remove('active');
    }
});

// Salvar Anotação e Tornar Arrastável
const notesList = document.getElementById('notesList');
let noteId = 0;

document.getElementById('saveNoteButton').addEventListener('click', function() {
    const noteText = document.getElementById('noteArea').value;
    if (noteText.trim() === "") return; // Não salvar se estiver vazio
    
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
        <h3 contenteditable="true" class="editable-title">Anotação ${++noteId}</h3>
        <p>${noteText}</p>
    `;
    note.style.top = `${Math.random() * 300}px`; // Posição inicial aleatória
    note.style.left = `${Math.random() * 300}px`;

    notesList.appendChild(note);
    makeNoteDraggable(note);

    document.getElementById('noteArea').value = ""; // Limpa o campo de texto
});

// Função para tornar a nota arrastável (continua a mesma)
function makeNoteDraggable(note) {
    let offsetX, offsetY;

    note.addEventListener('mousedown', function(e) {
        if (e.target.tagName.toLowerCase() === 'h3') return; // Não mover se clicar no título
        offsetX = e.clientX - note.offsetLeft;
        offsetY = e.clientY - note.offsetTop;

        function moveAt(e) {
            note.style.left = `${e.clientX - offsetX}px`;
            note.style.top = `${e.clientY - offsetY}px`;
        }

        document.addEventListener('mousemove', moveAt);

        note.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', moveAt);
        });
    });
}
