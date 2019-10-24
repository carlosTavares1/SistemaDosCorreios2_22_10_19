var obj = {
    nCdEmpresa: "",
    sDsSenha: "",
    sCepOrigem: "",
    sCepDestino: "",
    nVIPeso: "",
    nCdFormato: "",
    nVIComprimento: "",
    nVIAltura: "",
    nVILargura: "",
    sCdMaoPropria: "",
    nVIValorDeclarado: "",
    nCdAvisoRecebimento: "",
    nCdServico: "",
    nVIDiametro: "",
    StrRetorno: "",
    nIndicaCalculo: ""
}
$(document).ready(
    $('input[name="btn"]').click(
        function () {

            obj.nCdEmpresa = $('input[name="codigo"]').val(),
                obj.sDsSenha = $('input[name="senha"]').val(),
                obj.sCepOrigem = $('input[name="cepori"]').val(),
                obj.sCepDestino = $('input[name="cepdes"]').val(),
                obj.nVIPeso = $('input[name="peso"]').val(),
                obj.nCdFormato = $('input[name="formato"]').val(),
                obj.nVIComprimento = $('input[name="comprimento"]').val(),
                obj.nVIAltura = $('input[name="altura"]').val(),
                obj.nVILargura = $('input[name="largura"]').val(),
                obj.sCdMaoPropria = $('input[name="maopropria"]').val(),
                obj.nVIValorDeclarado = $('input[name="valordeclarado"]').val(),
                obj.nCdAvisoRecebimento = $('input[name="avisorecebimento"]').val(),
                obj.nCdServico = $('input[name="servicos"]').val(),
                obj.nVIDiametro = $('input[name="diametro"]').val(),
                obj.StrRetorno = "xml",
                obj.nIndicaCalculo = 3


            $.getJSON("http://usysweb.com.br/api/correiosambev.php?",obj, function (data) {
                //var ObjetoCEP = JSON.stringify(obj);/*Convertendo o objeto para json*/
                //window.location.replace("Consulta.html");

                //window.location = "Consulta.html?obj=" + ObjetoCEP;
                alert(data.cServico);
                //$("input").append(ObjetoCEP);

            });


            /*
   submit JSON as 'post' to a new page
   Parameters:
   path        (URL)   path to the new page
   data        (obj)   object to be converted to JSON and passed
   postName    (str)   name of the POST parameter to send the JSON
*/


                }
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                $('#modal-fracasso').modal('show')
                $('#spinner').css("display", "none")
            })
    })
})