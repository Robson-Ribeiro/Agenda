// Validando o contato

import validator from 'validator';

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');

        let error = false;

        if(!!document.querySelectorAll('.error-text')){
            for(let errorText of document.querySelectorAll('.error-text')) {
                errorText.remove();
            }
        }

        if(!nomeInput.value) {
            this.criaErro(nomeInput, 'Nome é um campo obrigatório!');
            error = true;
        }

        if(emailInput.value && !validator.isEmail(this.body.email)) {
            this.criaErro(emailInput, 'E-mail inválido!');
            error = true;
        }

        if(!emailInput.value && !telefoneInput.value) {
            this.criaErro(emailInput, 'Pelo menos um contato precisa ser enviado: e-mail ou telefone!');
            this.criaErro(telefoneInput, 'Pelo menos um contato precisa ser enviado: e-mail ou telefone!');
            error = true;
        }

        if(!error) el.submit();
    }

    criaErro(campo, mensagem) {
        const div = document.createElement('div');
        div.innerHTML = mensagem;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}
