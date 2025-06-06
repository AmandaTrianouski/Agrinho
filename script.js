// Função para abrir o modal e preencher o título
function openModal(eventName) {
    // Atualiza o título do modal com o nome do evento
    const modalTitle = document.getElementById('modalTitle');
    modalTitle.textContent = eventName + " - Detalhes do Evento";
    
    // Exibe o modal
    const modal = document.getElementById('eventModal');
    modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('eventModal');
    modal.style.display = "none";
}

// Fecha o modal se o usuário clicar fora da área de conteúdo do modal
window.onclick = function(event) {
    const modal = document.getElementById('eventModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Exemplo de implementação de uma função de scroll suave no menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: 'smooth'
        });
    });
});
