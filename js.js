// Função para mostrar os campos corretos conforme o tipo de conversão escolhido
function mostrarCampos() {
    const tipo = document.getElementById("tipoConversao").value;
    // Esconde todos os campos de conversão
    document.getElementById("distanciaCampos").style.display = "none";
    document.getElementById("pesoCampos").style.display = "none";
    document.getElementById("temperaturaCampos").style.display = "none";

    // Exibe o campo correto com base na seleção
    if (tipo === "distancia") {
        document.getElementById("distanciaCampos").style.display = "block";
    } else if (tipo === "peso") {
        document.getElementById("pesoCampos").style.display = "block";
    } else if (tipo === "temperatura") {
        document.getElementById("temperaturaCampos").style.display = "block";
    }
}

// Função para inverter as unidades de distância (origem e destino)
function trocarDistancia() {
    const origem = document.getElementById("origemDistancia");
    const destino = document.getElementById("destinoDistancia");

    // Troca os valores de origem e destino
    const temp = origem.value;
    origem.value = destino.value;
    destino.value = temp;
}

// Função principal de conversão
function converter() {
    const tipo = document.getElementById("tipoConversao").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const resultadoElement = document.getElementById("resultado");

    // Verificação de valor válido
    if (isNaN(valor)) {
        resultadoElement.innerText = "Por favor, insira um valor válido.";
        return;
    }

    // Chama a função correspondente com base no tipo de conversão
    switch (tipo) {
        case "distancia":
            const origemDistancia = document.getElementById("origemDistancia").value;
            const destinoDistancia = document.getElementById("destinoDistancia").value;
            resultadoElement.innerText = converterDistancia(valor, origemDistancia, destinoDistancia);
            break;
        case "peso":
            const origemPeso = document.getElementById("origemPeso").value;
            const destinoPeso = document.getElementById("destinoPeso").value;
            resultadoElement.innerText = converterPeso(valor, origemPeso, destinoPeso);
            break;
        case "temperatura":
            const origemTemperatura = document.getElementById("origemTemperatura").value;
            const destinoTemperatura = document.getElementById("destinoTemperatura").value;
            resultadoElement.innerText = converterTemperatura(valor, origemTemperatura, destinoTemperatura);
            break;
        default:
            resultadoElement.innerText = "Selecione um tipo de conversão.";
    }
}

// Função de conversão de distância
function converterDistancia(valor, origem, destino) {
    if (origem === "km" && destino === "m") {
        return `${valor} km = ${valor * 1000} metros`;
    } else if (origem === "m" && destino === "km") {
        return `${valor} metros = ${valor / 1000} km`;
    }
}

// Função de conversão de peso
function converterPeso(valor, origem, destino) {
    if (origem === "kg" && destino === "lbs") {
        return `${valor} kg = ${valor * 2.20462} libras`;
    } else if (origem === "lbs" && destino === "kg") {
        return `${valor} libras = ${valor / 2.20462} kg`;
    }
}

// Função de conversão de temperatura
function converterTemperatura(valor, origem, destino) {
    if (origem === "celsius" && destino === "fahrenheit") {
        return `${valor}°C = ${(valor * 9 / 5) + 32}°F`;
    } else if (origem === "fahrenheit" && destino === "celsius") {
        return `${valor}°F = ${(valor - 32) * 5 / 9}°C`;
    }
}
