window.ONG = window.ONG || {};

ONG.forms = (function () {
    function coletar(form) {
        var interesse = form.querySelector('input[name="interesse"]:checked');
        return {
            nome: form.nome.value.trim(),
            email: form.email.value.trim(),
            nascimento: form.nascimento.value,
            cpf: form.cpf.value.trim(),
            telefone: form.telefone.value.trim(),
            cep: form.cep.value.trim(),
            endereco: form.endereco.value.trim(),
            cidade: form.cidade.value.trim(),
            estado: form.estado.value.trim().toUpperCase(),
            interesse: interesse ? interesse.value : "",
            criadoEm: new Date().toISOString()
        };
    }

    function configurarSeExistir() {
        var form = document.getElementById("cadastroForm");
        var mensagem = document.getElementById("mensagemSucesso");
        var alerta = document.getElementById("alertaFormulario");

        if (!form) {
            return;
        }

        form.addEventListener("submit", function (evento) {
            evento.preventDefault();

            if (!form.checkValidity()) {
                if (alerta) {
                    alerta.hidden = false;
                }
                ONG.ui.mostrarToast("Corrija os campos inválidos.", "erro");
                form.reportValidity();
                return;
            }

            if (alerta) {
                alerta.hidden = true;
            }

            var total = ONG.storage.salvar(coletar(form));
            if (mensagem) {
                mensagem.hidden = false;
                mensagem.textContent = "Cadastro salvo com sucesso. Total no localStorage: " + total + ".";
            }

            ONG.ui.mostrarToast("Cadastro registrado no localStorage.");
            form.reset();
        });
    }

    return {
        configurarSeExistir: configurarSeExistir
    };
})();
