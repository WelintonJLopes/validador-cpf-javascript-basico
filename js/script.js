function validacao() {
    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "none";
    var cpf = document.getElementById("cpf").value;
    if (validaCpf(cpf)) {
        document.getElementById("success").style.display = "block";
    } else {
        document.getElementById("error").style.display = "block";
    }
}

function validaCpf(cpf) {
    if (cpf.length != 11) return false;

    /* Validação primeiro digito */
    var soma = 0;
    var numeros = cpf.substring(0, 9);
    var digitos = cpf.substring(9);
    for (var i = 10; i > 1; i--) {
        soma += numeros.charAt(10 - i) * i;
    }
    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(0)) return false;

    /* Validação segundo digito */
    soma = 0;
    numeros = cpf.substring(0, 10);
    for (var i = 11; i > 1; i--) {
        soma += numeros.charAt(11 - i) * i;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(1)) return false;

    return true;
}