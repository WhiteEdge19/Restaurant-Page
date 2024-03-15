

const menuAmostrar = document.querySelector(".container");

function mostrarMenu() {
    menuAmostrar.innerHTML=`
    <div class="menu">
    <div class="platos">
        <h3>Locro de Pecho</h3>
        <p>Un plato hecho con pure de papa
            ,carne y arroz finamente cocido.
            Pruebelo¡
        </p>
        <p>Precio : $10.00</p>

    </div>
    <div class="platos">
        <h3>Caldo de gallina</h3>
        <p>Un potente plato que ademas de 
            ser delicioso, ayuda a recomponer
             energias por la consistencia de su 
             sabor
        </p>
        <p>Precio : $15.00</p>
    </div>
    <div class="platos">
        <h3>Arroz chaufa</h3>
        <p>Un delicioso plato que lleva trozos
             de huevo , salchicha, verduras y
              y de pollo.
        </p>
        <p>Precio : $12.00</p>
    </div>
</div>
<div class="menu">
    <div class="bebidas">
        <h3>Jugo de maracuya</h3>
        <p>Acompaña tus platos con este delicioso
             jugo de maracuya, fresco y gratificante.
        </p>
        <p>Precio : $8.00</p>
    </div>
    <div class="bebidas">
        <h3>Inca kola</h3>
        <p>Disfruta de la tipica gaseosa con tu plato 
            favorito.
        </p>
        <p>Precio : $5.00</p>
    </div>
    <div class="bebidas">
        <h3>Chicha morada</h3>
        <p>Prueba esta deliciosa bebida natural 
            acompañada de tu plato favorito!
        </p>
        <p>Precio : $7.00</p>
    </div>
</div>
<div class="menu">
    <div class="postres">
        <h3>Pastel de platano</h3>
        <p>Prueba el delicioso pastel de platano 
            cuyo sabor te encantara!
        </p>
        <p>Precio : $5.00</p>
    </div>
    <div class="postres">
        <h3>Mazamorra de fresa</h3>
        <p>Degusta este postre fantastico que pasa 
            suave despues de una comida
        </p>
        <p>Precio : $6.00</p>
    </div>
    <div class="postres">
        <h3>Helado Frito</h3>
        <p>Prueba los diferentes sabores disponibles 
            de este delicioso postre :
            Menta , Fresa y Mango!
        </p>
        <p>Precio : $8:00</p>
    </div>`;
}


export{mostrarMenu};