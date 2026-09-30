window.ONG = window.ONG || {};

ONG.templates = (function () {
    function inicio() {
        return [
            '<section class="hero">',
            '  <div>',
            '    <h2>Juntos podemos transformar realidades</h2>',
            '    <p>A ONG Esperança conecta pessoas, voluntários e doadores para apoiar iniciativas que fortalecem comunidades.</p>',
            '    <a class="button" href="#/projetos" data-link>Conheça nossos projetos</a>',
            '  </div>',
            '  <img src="imagens/ong.jpg" alt="Voluntários organizando alimentos para uma ação social">',
            '</section>',
            '<section>',
            '  <h2>Sobre a ONG</h2>',
            '  <p>Nosso trabalho busca incentivar a solidariedade e ampliar o acesso a recursos básicos.</p>',
            '  <div class="alerta alerta-info" role="status">SPA acadêmica com navegação por hash, templates e localStorage.</div>',
            '</section>',
            '<section class="cards">',
            '  <article class="card">',
            '    <span class="badge badge-sucesso">Ativo</span>',
            '    <h3>Doações</h3>',
            '    <p>Contribuições ajudam na organização de campanhas e na distribuição de itens essenciais.</p>',
            '    <div class="card-acoes"><button type="button" class="button" data-ir-cadastro>Quero doar</button></div>',
            '  </article>',
            '  <article class="card">',
            '    <span class="badge badge-info">Aberto</span>',
            '    <h3>Voluntariado</h3>',
            '    <p>Voluntários podem participar de ações comunitárias, campanhas e atividades de apoio.</p>',
            '    <div class="card-acoes"><button type="button" class="button" data-ir-cadastro>Quero me voluntariar</button></div>',
            '  </article>',
            '</section>'
        ].join("\n");
    }

    function projetos() {
        return [
            '<section>',
            '  <h2>Conheça nossas iniciativas</h2>',
            '  <p>Nossas ações incentivam a participação da comunidade e apoiam quem precisa.</p>',
            '  <img class="project-image" src="imagens/projetos.png" alt="Voluntários em ação de distribuição de alimentos">',
            '</section>',
            '<section class="cards">',
            '  <article class="card">',
            '    <span class="badge badge-sucesso">Em andamento</span>',
            '    <h2>Campanhas de doação</h2>',
            '    <ul><li>Alimentos não perecíveis;</li><li>Itens de higiene;</li><li>Materiais para famílias.</li></ul>',
            '  </article>',
            '  <article class="card">',
            '    <span class="badge badge-info">Inscrições abertas</span>',
            '    <h2>Voluntariado</h2>',
            '    <ul><li>Organização de doações;</li><li>Ações comunitárias;</li><li>Divulgação.</li></ul>',
            '  </article>',
            '</section>',
            '<section>',
            '  <h2>Como participar</h2>',
            '  <p>Faça seu cadastro e indique se tem interesse em doação, voluntariado ou ambos.</p>',
            '  <a class="button" href="#/cadastro" data-link>Quero participar</a>',
            '</section>'
        ].join("\n");
    }

    function cadastro() {
        var total = ONG.storage.total();
        return [
            '<section>',
            '  <h2>Faça parte da ONG Esperança</h2>',
            '  <p>Preencha seus dados. Os cadastros ficam salvos no localStorage deste navegador.</p>',
            '  <div class="alerta alerta-info" role="status">Cadastros salvos neste navegador: ' + total + '</div>',
            '  <div id="alertaFormulario" class="alerta alerta-erro" role="alert" hidden>Existem campos inválidos.</div>',
            '  <form id="cadastroForm" novalidate>',
            '    <fieldset><legend>Dados pessoais</legend>',
            '      <p><label for="nome">Nome completo:</label><br><input id="nome" name="nome" type="text" minlength="3" required></p>',
            '      <p><label for="email">E-mail:</label><br><input id="email" name="email" type="email" required></p>',
            '      <p><label for="nascimento">Data de nascimento:</label><br><input id="nascimento" name="nascimento" type="date" required></p>',
            '      <p><label for="cpf">CPF:</label><br><input id="cpf" name="cpf" type="text" pattern="[0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}-?[0-9]{2}" required></p>',
            '      <p><label for="telefone">Telefone:</label><br><input id="telefone" name="telefone" type="tel" pattern="\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}" placeholder="(11) 99999-9999" required></p>',
            '    </fieldset>',
            '    <fieldset><legend>Endereço</legend>',
            '      <p><label for="cep">CEP:</label><br><input id="cep" name="cep" type="text" pattern="[0-9]{5}-?[0-9]{3}" required></p>',
            '      <p><label for="endereco">Endereço:</label><br><input id="endereco" name="endereco" type="text" required></p>',
            '      <p><label for="cidade">Cidade:</label><br><input id="cidade" name="cidade" type="text" required></p>',
            '      <p><label for="estado">Estado:</label><br><input id="estado" name="estado" type="text" maxlength="2" required></p>',
            '    </fieldset>',
            '    <fieldset><legend>Forma de participação</legend>',
            '      <p><input type="radio" id="doacao" name="interesse" value="doacao" required> <label for="doacao">Doações</label></p>',
            '      <p><input type="radio" id="voluntariado" name="interesse" value="voluntariado"> <label for="voluntariado">Voluntariado</label></p>',
            '      <p><input type="radio" id="ambos" name="interesse" value="ambos"> <label for="ambos">Ambas</label></p>',
            '    </fieldset>',
            '    <button type="submit">Enviar cadastro</button>',
            '    <button type="reset">Limpar formulário</button>',
            '    <p id="mensagemSucesso" class="mensagem-sucesso" hidden></p>',
            '  </form>',
            '</section>'
        ].join("\n");
    }

    return {
        inicio: inicio,
        projetos: projetos,
        cadastro: cadastro
    };
})();
