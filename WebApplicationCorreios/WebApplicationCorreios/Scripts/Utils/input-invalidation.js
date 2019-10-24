$(document).ready(function () {
    // Mascaras dos campos numéricos
    $("#input-cep-origem").mask("99.999-999");
    $("#input-cep-destino").mask("99.999-999");
    $('#input-peso').mask("#0.00", { reverse: true });
    $('#input-peso').mask("#0.00", { reverse: true });
    $('#input-comprimento').mask("#0.00", { reverse: true });
    $('#input-altura').mask("#0.00", { reverse: true });
    $('#input-largura').mask("#0.00", { reverse: true });
    $('#input-diametro').mask("#0.00", { reverse: true });
    $('#input-valor-declarado').mask("#0.00", { reverse: true });


    // Valida todos os inputs e selects com a função validaCampo
    $('#form *').filter('input, select').each(function () {
        var id = "#" + $(this).attr('id')
        validaCampo(id)
    });

    // Valida se existe input em um campo baseado no seu id
    function validaCampo(id) {
        $(id).on("blur", function () {
            var input = $(id).val()
            if (input == "") {
                $(id).removeClass("is-valid")
                $(id).addClass("is-invalid")
            }
            else {
                $(id).removeClass("is-invalid")
                $(id).addClass("is-valid")
            }
        })
    }
})