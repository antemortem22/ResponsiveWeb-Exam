function consultarExpediente() {
    
    const numeroExpediente = document.getElementById('expedienteInput').value;

    
    const casos = {
        '456': 'Pendiente de resolución del juez',
        '789': 'Finalizado',
        
    };

    
    const estado = casos[numeroExpediente];

    mostrarResultado(estado || 'Expediente no encontrado');
}

function mostrarResultado(resultado) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p><strong>Resultado:</strong> ${resultado}</p>`;
}