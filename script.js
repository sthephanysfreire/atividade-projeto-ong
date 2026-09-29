(function () {
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

            if (mensagemSucesso) {
                mensagemSucesso.hidden = false;
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
