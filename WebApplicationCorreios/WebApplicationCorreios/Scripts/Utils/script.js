

$(document).ready(function () {
    $('input[name="bntconsultar"]').click(function () {
        //obter as informações dos meus campos
        //Obtemos as informações do nosso formulario web completo
        var informacoes = $('form[name="formenviar"]').serializeArray();
        //Obtemos o atributo que indica a pagina que vamos enviar o post
        var obterAtributo = $('form[name="formenviar"]').attr('send-post');

        //Enviamos o post para nosso servidor web
                                     //api/CalculoImc?altura={altura}&peso={peso}&nomeUsuario={nomeUsuario}
        $.get("http://localhost:52242/Api/CalculoImc?altura=1.89&peso=70&nomeUsuario=web", function (data) {
  
            //temos que passar ela para o JSON parecido com o int.Parse()
            data = JSON.parse(data);
            //Aqui carregamos as informações automaticamente
            $.each(data.cServico, function (key, value) {
                $('p[name="{key}"'.replace("{key}", key)).text(value);
            });
        });
    });
});