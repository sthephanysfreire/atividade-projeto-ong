window.ONG = window.ONG || {};

ONG.router = (function () {
    var rotas = {
        "/": "inicio",
        "/projetos": "projetos",
        "/cadastro": "cadastro"
    };

    function rotaAtual() {
        var hash = window.location.hash.replace(/^#/, "") || "/";
        if (hash.charAt(0) !== "/") {
            hash = "/" + hash;
        }
        return hash;
    }

    function navegar(path) {
        var limpo = String(path || "/").replace(/^#/, "");
        if (limpo.charAt(0) !== "/") {
            limpo = "/" + limpo;
        }
        window.location.hash = "#" + limpo;
    }

    function render() {
        var path = rotaAtual();
        var chave = rotas[path] || "inicio";
        var app = document.getElementById("app");
        if (!app) {
            return;
        }

        app.innerHTML = ONG.templates[chave]();
        ONG.ui.marcarLinkAtivo(path === "/" ? "/" : path);
        ONG.forms.configurarSeExistir();

        var botoesCadastro = app.querySelectorAll("[data-ir-cadastro]");
        botoesCadastro.forEach(function (botao) {
            botao.addEventListener("click", function () {
                ONG.ui.abrirModal("Deseja continuar para a página de cadastro?", function () {
                    navegar("/cadastro");
                });
            });
        });
    }

    function iniciar() {
        window.addEventListener("hashchange", render);
        document.body.addEventListener("click", function (evento) {
            var link = evento.target.closest("[data-link]");
            if (!link) {
                return;
            }
            evento.preventDefault();
            window.location.hash = link.getAttribute("href");
        });

        if (!window.location.hash) {
            window.location.hash = "#/";
        } else {
            render();
        }
    }

    return {
        iniciar: iniciar,
        navegar: navegar,
        render: render
    };
})();
