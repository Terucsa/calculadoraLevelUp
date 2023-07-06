function calcular(valor) {
    document.getElementById('display').value += valor;
  }

  function limpiar() {
    document.getElementById('display').value = '';
  }

  function calcularResultado() {
    let resultado = eval(document.getElementById('display').value);
    document.getElementById('display').value = resultado;
  }