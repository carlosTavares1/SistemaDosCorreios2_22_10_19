$(document).ready(
    $('input[name="btn"]').click(
        function () {
            $.getJSON("http://usysweb.com.br/api/correiosambev.php?nCdEmpresa=08082650&sDsSenha=564321&sCepOrigem=70002900&sCepDestino=04547000&nVlPeso=1&nCdFormato=1&nVlComprimento=20&nVlAltura=20&nVlLargura=20&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=04510&nVlDiametro=0&StrRetorno=xml&nIndicaCalculo=3", function (data) {
                var obj = {
                    nCdEmpresa: "",
                    sDsSenha: "",
                    sCepOrigem: $('input[name="cepori"]').val(),
                    sCepDestino: $('input[name="cepdes"]').val(),
                    nVIPeso: $('input[name="peso"]').val(),
                    nCdFormato: $('input[name="formato"]').val(),
                    nVIComprimento: $('input[name="comprimento"]').val(),
                    nVIAltura: $('input[name="altura"]').val(),
                    nVILargura: $('input[name="largura"]').val(),
                    sCdMaoPropria: $('input[name="maopropria"]').val(),
                    nVIValorDeclarado: $('input[name="valordeclarado"]').val(),
                    nCdAvisoRecebimento: $('input[name="avisorecebimento"]').val(),
                    nCdServico: $('input[name="servicos"]').val(),
                    nVIDiametro: $('input[name="diametro"]').val(),
                }

                $.post("http://usysweb.com.br/api/correiosambev.php?nCdEmpresa=08082650&sDsSenha=564321&sCepOrigem=89045450&sCepDestino=04547000&nVlPeso=1&nCdFormato=1&nVlComprimento=20&nVlAltura=20&nVlLargura=20&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=04510&nVlDiametro=0&StrRetorno=xml&nIndicaCalculo=3", obj, function (data) {
                    var ObjetoCEP = JSON.stringify(obj);/*Convertendo o objeto para json*/
                    $('').val()
                    window.location.replace("Consulta.html");
                    window.open("http://usysweb.com.br/api/correiosambev.php?nCdEmpresa=08082650&sDsSenha=564321&sCepOrigem=89045450&sCepDestino=04547000&nVlPeso=1&nCdFormato=1&nVlComprimento=20&nVlAltura=20&nVlLargura=20&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=04510&nVlDiametro=0&StrRetorno=xml&nIndicaCalculo=3" + '?json=' + serializedJson)
                });
            });

            /*
   submit JSON as 'post' to a new page
   Parameters:
   path        (URL)   path to the new page
   data        (obj)   object to be converted to JSON and passed
   postName    (str)   name of the POST parameter to send the JSON
*/


        })
);

function submitJSON(path, data, postName) {
    // convert data to JSON
    var dataJSON = JSON.stringify(data);

    // create the form
    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', path);

    // create hidden input containing JSON and add to form
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", postName);
    hiddenField.setAttribute("value", dataJSON);
    form.appendChild(hiddenField);

    // add form to body and submit
    document.body.appendChild(form);
    form.submit();
}