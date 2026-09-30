window.ONG = window.ONG || {};

ONG.storage = (function () {
    var STORAGE_KEY = "ongEsperancaCadastros";

    function ler() {
        try {
            var bruto = window.localStorage.getItem(STORAGE_KEY);
            return bruto ? JSON.parse(bruto) : [];
        } catch (erro) {
            return [];
        }
    }

    function salvar(dados) {
        var lista = ler();
        lista.push(dados);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
        return lista.length;
    }

    function total() {
        return ler().length;
    }

    return {
        ler: ler,
        salvar: salvar,
        total: total
    };
})();
