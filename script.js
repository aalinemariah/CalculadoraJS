
// aplicando conceitos calculadora simples

// const display = document.getElementById("display");

//     function appendValue(value) {
//       display.value += value;
//     }

//     function clearDisplay() {
//       display.value = "";
//     }

//     function calculate() {
//       let conta = display.value;

      
//       let resultado = 0;
//       if (conta.includes("+")) {
//         let partes = conta.split("+");
//         resultado = Number(partes[0]) + Number(partes[1]);
//       } else if (conta.includes("-")) {
//         let partes = conta.split("-");
//         resultado = Number(partes[0]) - Number(partes[1]);
//       } else if (conta.includes("*")) {
//         let partes = conta.split("*");
//         resultado = Number(partes[0]) * Number(partes[1]);
//       } else if (conta.includes("/")) {
//         let partes = conta.split("/");
//         resultado = Number(partes[0]) / Number(partes[1]);
//       }

//       display.value = resultado;
//     }

// aplicando Ux/UI
//acessibilidade para pessoas com deficiência visual

 const display = document.getElementById("display");

    //falar
    function falar(texto) {
      let fala = new SpeechSynthesisUtterance(texto);
      fala.lang = "pt-BR"; 
      speechSynthesis.speak(fala);
    }

    function appendValue(value) {
      display.value += value;
      falar(value); 
    }

  const simbolosParaFala = {
            '+': 'mais',
            '-': 'menos',
            '*': 'vezes',
            '/': 'dividido por',
            '.': 'ponto',
            '=': 'igual'
    };
           function appendValue(value) {
            display.value += value;
            
            // Usa o mapeamento para falar a palavra correspondente ao símbolo
            const fala = simbolosParaFala[value] || value;
            falar(fala);
     }
    

    function clearDisplay() {
      display.value = "";
      falar("limpando");
    }

    function calculate() {
      let conta = display.value;
      let resultado = 0;

      if (conta.includes("+")) {
        let partes = conta.split("+");
        resultado = Number(partes[0]) + Number(partes[1]);
      } else if (conta.includes("-")) {
        let partes = conta.split("-");
        resultado = Number(partes[0]) - Number(partes[1]);
      } else if (conta.includes("*")) {
        let partes = conta.split("*");
        resultado = Number(partes[0]) * Number(partes[1]);
      } else if (conta.includes("/")) {
        let partes = conta.split("/");
        resultado = Number(partes[0]) / Number(partes[1]);
      }

      display.value = resultado;
      falar("O resultado é " + resultado);
    }