// Aguarda o carregamento do documento para rodar de forma segura (conforme item 6.1.15)
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.btn-tech');
    const panels = document.querySelectorAll('.tab-panel');

    // Inicializa o primeiro card visualmente como ativo
    if(cards.length > 0) {
        cards[0].classList.add('active');
    }

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');

            // 1. Remove o estado ativo de todos os cards de serviço
            cards.forEach(c => c.classList.remove('active'));

            // 2. Esconde todos os painéis explicativos
            panels.forEach(panel => panel.classList.remove('active'));

            // 3. Ativa o card clicado e mostra seu respectivo painel
            card.classList.add('active');
            const activePanel = document.getElementById(targetId);
            if (activePanel) {
                activePanel.classList.add('active');
            }
        });
    });
});
