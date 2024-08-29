document.getElementById('whatsapp-button').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    const textoWhatsApp = `Olá, meu nome é ${nome}. ${mensagem}`;
    const numeroWhatsApp = '5591991865886'; // Coloque o número sem espaços e com o código do país (55 para o Brasil)
    
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;
    window.open(url, '_blank');
});

function calcularSimulacao() {
    const tipo = document.getElementById('tipo').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const prazo = parseInt(document.getElementById('prazo').value);
    const taxaAnual = parseFloat(document.getElementById('taxa').value);

    // Verificar se os campos são válidos
    if (isNaN(valor) || isNaN(prazo) || isNaN(taxaAnual) || valor <= 0 || prazo <= 0 || taxaAnual <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, preencha todos os campos corretamente.';
        return;
    }

    // Converter taxa anual para taxa mensal
    const taxaMensal = (taxaAnual / 100) / 12;
    const parcelas = prazo;
    let valorParcela;

    // Cálculo da parcela baseado no tipo de crédito
    switch (tipo) {
        case 'consignado':
        case 'salario':
        case 'beneficio':
        case 'pessoal':
        case 'antecipacao':
        case 'renovacao':
            valorParcela = (valor * taxaMensal * Math.pow(1 + taxaMensal, parcelas)) / (Math.pow(1 + taxaMensal, parcelas) - 1);
            break;
        case 'consorcio':
            valorParcela = valor / parcelas;
            break;
        default:
            valorParcela = 0;
    }

    document.getElementById('resultado').innerText = `Valor da parcela: R$ ${valorParcela.toFixed(2)}`;
}

function mostrarInformacoes() {
    const tipo = document.getElementById('tipo').value;
    let infoTexto = '';

    switch (tipo) {
        case 'pessoal':
            infoTexto = `
                <h3>Crédito Pessoal</h3>
                <p>Taxa de Juros: 1.5% a 4% ao mês</p>
                <p>Prazos: 6 a 48 meses</p>
                <p>Requisitos: Renda comprovada, sem garantia.</p>
            `;
            break;
        case 'consignado':
            infoTexto = `
                <h3>Crédito Consignado</h3>
                <p>Taxa de Juros: 1% a 3% ao mês</p>
                <p>Prazos: 12 a 72 meses</p>
                <p>Requisitos: Desconto em folha de pagamento.</p>
            `;
            break;
        case 'salario':
            infoTexto = `
                <h3>Crédito Salário</h3>
                <p>Taxa de Juros: 1% a 3% ao mês</p>
                <p>Prazos: 12 a 48 meses</p>
                <p>Requisitos: Receber salário em conta do banco.</p>
            `;
            break;
        case 'beneficio':
            infoTexto = `
                <h3>Crédito Benefício</h3>
                <p>Taxa de Juros: 1% a 2.5% ao mês</p>
                <p>Prazos: 12 a 60 meses</p>
                <p>Requisitos: Aposentados e pensionistas.</p>
            `;
            break;
        case 'antecipacao':
            infoTexto = `
                <h3>Antecipação de 13º</h3>
                <p>Taxa de Juros: 2% a 4% ao mês</p>
                <p>Prazos: Até 12 meses</p>
                <p>Requisitos: Aposentados, pensionistas ou trabalhadores com 13º salário.</p>
            `;
            break;
        case 'renovacao':
            infoTexto = `
                <h3>Renovação de Empréstimo</h3>
                <p>Taxa de Juros: Pode variar</p>
                <p>Prazos: Dependente do contrato original</p>
                <p>Requisitos: Empréstimo pré-existente.</p>
            `;
            break;
        case 'consorcio':
            infoTexto = `
                <h3>Consórcio</h3>
                <p>Taxa de Juros: Variável, geralmente mais baixa</p>
                <p>Prazos: 12 a 180 meses</p>
                <p>Requisitos: Participar de grupo de consórcio.</p>
            `;
            break;
        default:
            infoTexto = '<p>Selecione um tipo de crédito para ver mais informações.</p>';
    }

    document.getElementById('info-texto').innerHTML = infoTexto;
}

function voltarPagina() {
    window.location.href = "index.html"; // Vai para a página inicial
}
