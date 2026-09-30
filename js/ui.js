window.ONG = window.ONG || {};

ONG.ui = (function () {
    function configurarMenu() {
        var botao = document.querySelector(".menu-toggle");
        var menu = document.getElementById("menu-principal");

        if (!botao || !menu) {
            return;
        }

        botao.onclick = function () {
            var aberto = menu.classList.toggle("aberto");
            botao.setAttribute("aria-expanded", aberto ? "true" : "false");
        };
    }

    function marcarLinkAtivo(rota) {
        var alvo = rota === "/" || rota === "" ? "#/" : "#" + rota;
        var links = document.querySelectorAll("nav [data-link]");
        links.forEach(function (link) {
            if (link.getAttribute("href") === alvo) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    function mostrarToast(mensagem, tipo) {
        var toast = document.getElementById("toastApp");
        if (!toast) {
            return;
        }

        toast.className = "toast " + (tipo === "erro" ? "toast-erro" : "toast-sucesso");
        toast.textContent = mensagem;
        toast.hidden = false;

        window.setTimeout(function () {
            toast.hidden = true;
        }, 3500);
    }

    function abrirModal(texto, aoConfirmar) {
        var modal = document.getElementById("modalApp");
        var textoEl = document.getElementById("modalAppTexto");
        var cancelar = document.getElementById("modalAppCancelar");
        var confirmar = document.getElementById("modalAppConfirmar");

        if (!modal) {
            return;
        }

        textoEl.textContent = texto;
        modal.hidden = false;

        function fechar() {
            modal.hidden = true;
            cancelar.onclick = null;
            confirmar.onclick = null;
        }

        cancelar.onclick = fechar;
        confirmar.onclick = function () {
            fechar();
            if (typeof aoConfirmar === "function") {
                aoConfirmar();
            }
        };
    }

    return {
        configurarMenu: configurarMenu,
        marcarLinkAtivo: marcarLinkAtivo,
        mostrarToast: mostrarToast,
        abrirModal: abrirModal
    };
})();
