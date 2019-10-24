$(document).ready(function () {
    $("#btn-enviar").click(function () {
        $('#spinner').css("display", "inherit")

        var obj = {
            nCdEmpresa: "",
            sDsSenha: "",
            sCepOrigem: $("#input-cep-origem").val(),
            sCepDestino: $("#input-cep-destino").val(),
            nVlPeso: $("#input-peso").val(),
            nCdFormato: $("#input-formato").val(),
            nVlComprimento: $("#input-comprimento").val(),
            nVlAltura: $("#input-altura").val(),
            nVlLargura: $("#input-largura").val(),
            sCdMaoPropria: $("#input-mao-propria").val(),
            nVlValorDeclarado: $("#input-valor-declarado").val(),
            sCdAvisoRecebimento: $("#input-aviso-recebimento").val(),
            nCdServico: $("#input-servico").val(),
            nVlDiametro: $("#input-diametro").val()
        };

        $.get("http://usysweb.com.br/api/correiosambev.php?", obj)
            .done(function (data) {
                try {
                    $("#resultado-valor").text("R$ " + JSON.parse(data).cServico.Valor)
                    $("#resultado-prazo").text(JSON.parse(data).cServico.PrazoEntrega + " Dias")
                    $('#spinner').css("display", "none")
                    $('#modal-sucesso').modal('show')
                    if (data.length == 0) {

                    }
                } catch (e) {
                    $('#modal-fracasso').modal('show')
                    $('#spinner').css("display", "none")

                }
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                $('#modal-fracasso').modal('show')
                $('#spinner').css("display", "none")
            })
    })
})