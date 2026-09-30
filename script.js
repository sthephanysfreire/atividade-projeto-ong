(function () {
    var STORAGE_KEY = "ongEsperancaCadastros";

    function configurarMenu() {
        var botao = document.querySelector(".menu-toggle");
        var menu = document.getElementById("menu-principal");

        if (!botao || !menu) {
            return;
        }

        botao.addEventListener("click", function () {
            var aberto = menu.classList.toggle("aberto");
            botao.setAttribute("aria-expanded", aberto ? "true" : "false");
        });
    }

    function mostrarToast(id, tempo) {
        var toast = document.getElementById(id);
        if (!toast) {
            return;
        }

        toast.hidden = false;
        window.setTimeout(function () {
            toast.hidden = true;
        }, tempo || 3500);
    }

    function configurarFeedbackDemo() {
        var btnToast = document.getElementById("btnToast");
        var btnModal = document.getElementById("btnModal");
        var modal = document.getElementById("modalDemo");
        var fecharModal = document.getElementById("fecharModal");

        if (btnToast) {
            btnToast.addEventListener("click", function () {
                mostrarToast("toastDemo");
            });
        }

        if (btnModal && modal) {
            btnModal.addEventListener("click", function () {
                modal.hidden = false;
            });
        }

        if (fecharModal && modal) {
            fecharModal.addEventListener("click", function () {
                modal.hidden = true;
            });
        }

        if (modal) {
            modal.addEventListener("click", function (evento) {
                if (evento.target === modal) {
                    modal.hidden = true;
                }
            });
        }
    }

    function lerCadastros() {
        try {
            var bruto = window.localStorage.getItem(STORAGE_KEY);
            return bruto ? JSON.parse(bruto) : [];
        } catch (erro) {
            return [];
        }
    }

    function salvarCadastro(dados) {
        var lista = lerCadastros();
        lista.push(dados);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
        return lista.length;
    }

    function coletarDadosFormulario(form) {
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

    function configurarCadastro() {
        var form = document.getElementById("cadastroForm");
        var mensagemSucesso = document.getElementById("mensagemSucesso");
        var alertaFormulario = document.getElementById("alertaFormulario");

        if (!form) {
            return;
        }

        form.addEventListener("submit", function (evento) {
            evento.preventDefault();

            if (!form.checkValidity()) {
                if (alertaFormulario) {
                    alertaFormulario.hidden = false;
                }
                form.reportValidity();
                return;
            }

            if (alertaFormulario) {
                alertaFormulario.hidden = true;
            }

            var total = salvarCadastro(coletarDadosFormulario(form));

            if (mensagemSucesso) {
                mensagemSucesso.hidden = false;
                mensagemSucesso.textContent =
                    "Cadastro enviado com sucesso! Total salvo neste navegador: " +
                    total +
                    ".";
            }

            mostrarToast("toastCadastro");
            form.reset();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    configurarMenu();
    configurarFeedbackDemo();
    configurarCadastro();
})();
