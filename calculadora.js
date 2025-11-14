 const tela = document.getElementById("tela");
    let expressao = "";

    function adicionar(valor) {
      if (tela.textContent === "" && !isNaN(valor)) {
        tela.textContent = valor;
        expressao = valor;
      } else {
        tela.textContent += valor;
        expressao += valor;
      }
    }

    function limpar() {
      tela.textContent = "";
      expressao = "";
    }

    function calcular() {
      try {
        let resultado = eval(expressao);
        tela.textContent = resultado;
        expressao = resultado.toString();
      } catch {
        tela.textContent = "Erro";
        expressao = "";
      }
    }

    function trocarSinal() {
      if (tela.textContent !== "0") {
        let valor = parseFloat(tela.textContent);
        valor = -valor;
        tela.textContent = valor;
        expressao = valor.toString();
      }
    }