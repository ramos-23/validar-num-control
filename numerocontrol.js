document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const nControl = document.getElementById('controlNumber').value.trim();  
            if (validarNumeroControl(nControl)) {
                this.submit();
            }
        });
        function validarNumeroControl(valor) {
            const regex = /^(1[8-9]|2[0-4])84\d{4}$/;  // rango aceptado de 18 a 24, seguido de 84 y 4 dígitos más
            if(regex.test(valor)){
                alert('Numero de control Valido')
            }
            if (!regex.test(valor)) {
                alert('Numero de control ¡No Valido!');
                return false;
            }
            return true;
        }
    });
