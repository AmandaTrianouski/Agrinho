// Função para abrir o modal
function openModal(destination) {
    const modal = document.getElementById('destinationModal');
    const modalTitle = document.getElementById('modalTitle');
    modalTitle.textContent = destination;
    modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('destinationModal');
    modal.style.display = "none";
}

// Filtro de categorias
document.getElementById('categoryFilter').addEventListener('change', function(event) {
    const selectedCategory = event.target.value;
    const destinations = document.querySelectorAll('.destination');
    
    destinations.forEach(destination => {
        if (selectedCategory === 'todos' || destination.dataset.category === selectedCategory) {
            destination.style.display = 'block';
        } else {
            destination.style.display = 'none';
        }
    });
});