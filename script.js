document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        let nombre = document.getElementById('nombreCliente').value;
        let importe = parseFloat(document.getElementById('importe').value);
        let cuotas = document.querySelector('input[name="uno"]:checked, input[name="tres"]:checked, input[name="seis"]:checked, input[name="doce"]:checked');

        let total;

        if (cuotas) {
            let cuotasSeleccionadas = cuotas.name;
            if (cuotasSeleccionadas === 'uno') {
                total = importe + (importe * 0.1);
            } else if (cuotasSeleccionadas === 'tres') {
                total = importe + (importe * 0.4);
            } else if (cuotasSeleccionadas === 'seis') {
                total = importe + (importe * 0.70);
            } else if (cuotasSeleccionadas === 'doce') {
                total = importe + (importe * 1.0);
            } else {
                total = importe;
            }

            let prestamo = {
                nombre: nombre,
                importe: importe,
                cuotas: cuotasSeleccionadas,
                total: total.toFixed(2)
            }

            localStorage.setItem('prestamo', JSON.stringify(prestamo));

            window.location.href = 'resultado.html';
        } else {
            console.log('Por favor seleccione la cantidad de cuotas para calcular el préstamo.');
        }
    });
});