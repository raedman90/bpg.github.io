const Validate = {

    isNome(input){
        Validate.clearErrrors(input);
        var value = input.value;
        var error = null;

        var formatNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/; ///\D+\s+\D+/;
        if(!value.match(formatNome)){
            error = "Nome inválido";
            Validate.displayError(input,error);
            return;
        }
        input.value = value;

    },
    isEmail(input){
        Validate.clearErrrors(input);
        let value = input.value;
        let error = null;

        const formatEmail = /^\w+([\.-_]?\w+)*@\w+([\.-_]?\w+)*(\.\w{2,3})+$/;
        if(!value.match(formatEmail)){
            error = "Email inválido";
            Validate.displayError(input,error);
            return;
        }
        input.value = value;

    },
    clearErrrors(input){
        const errorDiv = input.parentNode.querySelector('.error');
        if(errorDiv){
            errorDiv.remove();
        }
    },
    displayError(input, error){
        const div = document.createElement('div');
        div.classList.add('error');
        div.innerHTML = error;
        input.parentNode.appendChild(div);
        input.focus();
    }
}