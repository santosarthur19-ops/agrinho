// Aguarda o carregamento do DOM para garantir estabilidade
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-tech');
    const panels = document.querySelectorAll('.tab-panel');

    // Define o primeiro botão como ativo visualmente ao carregar
    if(buttons.length > 0) {
        buttons[0].classList.add('active');
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');

            // 1. Remove a classe ativa de todos os botões
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // 2. Oculta todos os painéis de texto
            panels.forEach(panel => panel.classList.remove('active'));

            // 3. Adiciona classe ativa apenas ao botão clicado e ao painel correspondente
            button.classList.add('active');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
});
