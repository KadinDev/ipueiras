const open_modal = document.querySelector('.open-mapa i');
const close_modal = document.querySelector('.modal-mapa i');
const modal = document.querySelector('.modal-mapa');

open_modal.addEventListener('click', () => {
    modal.classList.remove('active');
    close_modal.addEventListener('click', () => {
        modal.classList.add('active');
    })
})


// PEGANDO IMAGEM NO INPUT E COLOCANDO NA DIV
/*
function loadImage(){
    if ( this.files && this.files[0] ) {
        const file = new FileReader();
        file.onload = function(e){
            document.getElementById("preview").src = e.target.result;
        };
        file.readAsDataURL(this.files[0]);
    }
}
*/
//document.getElementById('avatar-input').addEventListener('change', loadImage, false);
//


// SELECIONANDO SIM OU NÃO E MUDANDO O VALOR DE ACORDO COM O CLIQUE
function toggleSelect(event) {
    // remove the .active class from the buttons
    document.querySelectorAll('.button-select button')
    .forEach(function (button) {
      button.classList.remove("active")
    })
  
    // put the .active class on the clicked button
    const button = event.currentTarget
    button.classList.add("active")
  
    // update input hidden with the selected value
    const input = document.querySelector('[name="open_weekend"]')
  
    // check yes or no
    input.value = button.dataset.value
}


// validações do form
const Validate = {
    // VALIDATION E-MAIL
    apply( input, func ){
        // sempre vai entrar no input limpando o error
        Validate.clearError(input);
    
        let results = Validate[func](input.value)
        input.value = results.value

        if ( results.error )
    
        Validate.displayError(input, results.error)
    },

    // esse displayError já vale para todos os inputs do formulário
    displayError(input, error) {
        const div = document.createElement('div');
        div.classList.add('error');
        div.innerHTML = error;

        input.parentNode.appendChild(div);
        input.focus();
    },
    // limpa os inputs
    clearError(input) {
        const errorDiv = input.parentNode.querySelector('div');
        if (errorDiv) {
            errorDiv.remove();
        }
    },
    
    isEmail(value) {
        let error = null;

        const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!value.match(emailFormat))
            error = "Insira um e-mail válido!" //se o email estiver errado não vai aparecer essa msg,
            //vai aparecer a que coloquei no div.innerHTML

        return {
            error,
            value,
        }
    },
    // END VALIDATION E-MAIL

    isPassword(value){
       let error = null;
       const password_lenght = value.length
       
       if (password_lenght < 6 ) 
        error = 'Minímo 6 digitos'
       
        return {
            error,
            value
        }

    },

    isContact(value) {
        let error = null;
        value = value.replace(/\D/g, "")
        
        if ( value.length < 11 ) 
        error = "Número incorreto"

        value = value.replace( /(\d{0})(\d)/, "$1($2" )
        value = value.replace( /(\d{2})(\d)/, "$1)$2" )
        value = value.replace( /(\d{5})(\d)/, "$1-$2" )

        return {
            error,
            value
        }
    },
    
}