let noteCount = 0; // Contador de notas para nomes únicos

function verificarSenha() {
    const senhaCorreta = "entidade";
    const senhaInput = document.getElementById("password").value;
    const message = document.getElementById("message");
    
    if (senhaInput === senhaCorreta) {
        document.getElementById("password-container").classList.add("hidden");
        document.getElementById("image-container").classList.remove("hidden");
        message.textContent = "";
    } else {
        message.textContent = "Senha incorreta! Tente novamente.";
    }
}

function expandImage(img, name) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const imageName = document.getElementById("imageName");
    
    modal.style.display = "block"; // Mostra o modal
    modalImage.src = img.src; // Define a imagem do modal
    imageName.textContent = name; // Define o nome da imagem
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Esconde o modal
}

function startDrag(event) {
    event.dataTransfer.setData("text/plain", event.target.id); // Permite arrastar a imagem
}

function toggleNotepad() {
    const notepad = document.getElementById("notepad");
    notepad.classList.toggle("hidden"); // Mostra ou esconde o bloco de notas
}

function saveNote() {
    const noteTitle = document.getElementById("note-title").value; // Obtém o título da anotação
    const noteContent = document.getElementById("note").value; // Obtém o conteúdo da anotação
    const notepadContainer = document.getElementById("notepad-container");
    
    if (noteTitle && noteContent) {
        noteCount++;
        const noteItem = document.createElement("div"); // Cria um novo item de anotação
        noteItem.classList.add("notepad-item");
        noteItem.textContent = `${noteTitle}: ${noteContent}`; // Define o texto da anotação
        notepadContainer.appendChild(noteItem); // Adiciona a anotação à gaveta

        // Limpa os campos após salvar
        document.getElementById("note-title").value = '';
        document.getElementById("note").value = '';
    } else {
        alert("Por favor, preencha o título e o conteúdo da anotação.");
    }
}
