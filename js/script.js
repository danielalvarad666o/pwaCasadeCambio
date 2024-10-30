document.addEventListener("DOMContentLoaded", () => {
    const btnEstablecer = document.getElementById("btn-establecer");
    const monedaSeleccionada = document.getElementById("moneda-seleccionada");

    // Listado de monedas de todo el mundo (muestra algunas como ejemplo; se pueden agregar más)
    const monedas = {
        mxn: { code: "MXN", symbol: "🇲🇽", nombre: "Peso Mexicano", img: "img/banderas/mx.png" },
        usd: { code: "USD", symbol: "🇺🇸", nombre: "Dólar Estadounidense", img: "img/banderas/us.png" },
        eur: { code: "EUR", symbol: "🇪🇺", nombre: "Euro", img: "img/banderas/eu.png" },
        jpy: { code: "JPY", symbol: "🇯🇵", nombre: "Yen Japonés", img: "img/banderas/jp.png" },
        gbp: { code: "GBP", symbol: "🇬🇧", nombre: "Libra Esterlina", img: "img/banderas/gb.png" },
        cad: { code: "CAD", symbol: "🇨🇦", nombre: "Dólar Canadiense", img: "img/banderas/ca.png" },
        aud: { code: "AUD", symbol: "🇦🇺", nombre: "Dólar Australiano", img: "img/banderas/au.png" },
        chf: { code: "CHF", symbol: "🇨🇭", nombre: "Franco Suizo", img: "img/banderas/ch.png" },
        cny: { code: "CNY", symbol: "🇨🇳", nombre: "Yuan Chino", img: "img/banderas/cn.png" },
        inr: { code: "INR", symbol: "🇮🇳", nombre: "Rupia India", img: "img/banderas/in.png" }
        // Se pueden agregar más monedas aquí siguiendo el mismo formato.
    };

    // Cargar moneda desde localStorage si existe
    function cargarMoneda() {
        const monedaGuardada = localStorage.getItem("monedaSeleccionada");
        if (monedaGuardada) {
            mostrarMoneda(JSON.parse(monedaGuardada));
        } else {
            // Mostrar MXN por defecto
            mostrarMoneda(monedas.mxn);
        }
    }

    // Mostrar moneda seleccionada en el HTML
    function mostrarMoneda(moneda) {
        monedaSeleccionada.innerHTML = `
            <div class="card-body d-flex align-items-center justify-content-around">
                <img src="${moneda.img}" alt="${moneda.code}">
                <span>${moneda.symbol}</span>
                <div><p class="m-0">${moneda.code} ${moneda.nombre}</p></div>
                <p class="m-0">Cantidad Inicial:<br> $10,000</p>
            </div>
        `;
    }

    // Cambiar y guardar moneda seleccionada
    function cambiarMoneda() {
        const nuevaMoneda = prompt("Ingresa el código de moneda (MXN, USD, EUR, JPY, GBP, CAD, AUD, CHF, CNY, INR):").toLowerCase();
        if (monedas[nuevaMoneda]) {
            mostrarMoneda(monedas[nuevaMoneda]);
            localStorage.setItem("monedaSeleccionada", JSON.stringify(monedas[nuevaMoneda]));
        } else {
            alert("Moneda no disponible. Verifica el código.");
        }
    }

    // Evento para el botón Establecer
    btnEstablecer.addEventListener("click", cambiarMoneda);

    // Cargar la moneda guardada al cargar la página
    cargarMoneda();
});
