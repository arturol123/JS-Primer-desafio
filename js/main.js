
//********************** declarar variables globales - constantes*****************************//

const costo_Lamborghini_SC20 = 180540.00
const costo_BMW_i8 = 150269.00
const costo_Ferrari = 145026.30
const iva = 0.16
let EngancheInicial
let NombreVehiculo
let NumVehiculo
let cantidadmeses
let calculoiva
let CalculoFinal
let CalculoMeses
let ValorEngancheInicial


//********************** introducir dato de vehiculo*****************************//

do{
    NumVehiculo = parseInt(prompt("Vehiculo a Cotizar. \n 1 = Lamborghini SC20 \n 2 = BMW i8" ))

    if (isNaN(NumVehiculo)){
        alert("Seleccione un vehiculo a Cotizar")             
    }
    
    if (NumVehiculo == 0 || NumVehiculo >2 ){
        alert("Seleccione una opcion valida")
    }


} while ((isNaN(NumVehiculo) || NumVehiculo == 0 || NumVehiculo >3 )) 



//********************** introducir dato de meses*****************************//

do {
    cantidadmeses = parseInt(prompt("Cantidad de meses a cotizar. \n 12 meses \n 24 meses \n 36 meses \n 48 meses \n 60 meses"))

    if (isNaN(cantidadmeses)){
        alert("Ingrese un valor correcto")

    }
    else if (cantidadmeses != 12 && cantidadmeses != 24 && cantidadmeses != 36 && cantidadmeses != 48 && cantidadmeses != 60 ){
        alert("Seleccione una opcion valida")
    }

 } while (isNaN(cantidadmeses) || ( cantidadmeses != 12 && cantidadmeses != 24 && cantidadmeses != 36 && cantidadmeses != 48 && cantidadmeses != 60))



 do {
    EngancheInicial = parseInt(prompt("Seleccione el porcentaje de Enganche Inicial"))

    if (isNaN(EngancheInicial)){
        alert("Ingrese un valor correcto")
    }
    else if (EngancheInicial>99) {
        alert("Seleccione una opcion valida")
    }

 } while (isNaN(EngancheInicial) || EngancheInicial >99 )

 
//************************Calcular******************************************//

   

Cotizacion()

function Cotizacion (){
    switch (NumVehiculo) {
        case 1:
            NombreVehiculo = "Lamborghini_SC20"

            calculoiva = costo_Lamborghini_SC20 * iva;

            ValorEngancheInicial = (costo_Lamborghini_SC20 + calculoiva) * (EngancheInicial * 0.01)

            CalculoFinal =  (costo_Lamborghini_SC20 + calculoiva) - ValorEngancheInicial

            CalculoMeses = CalculoFinal / cantidadmeses

            alert(
            "                 Cotizacion Vehiculo: "  + NombreVehiculo +
            "\n" +
            "\nEl costo del vehiculo es de :      "+ costo_Lamborghini_SC20 + 
            "\nEl valor de iva es:                        " + calculoiva + 
            "\nEl Valor del vehiculo + iva :      " + (costo_Lamborghini_SC20 + calculoiva) +
            "\nEl Enganche del " + EngancheInicial + " % es           " + ValorEngancheInicial +
            "\nEl Credito del Vehiculo es :     " + CalculoFinal +
            "\nEl pago mensual a " + cantidadmeses + "meses es: " + CalculoMeses 
            )
            break;
        
        case 2:

            NombreVehiculo = "BMW_i8"
            
            calculoiva = costo_BMW_i8 * iva;

            ValorEngancheInicial = (costo_BMW_i8 + calculoiva) * (EngancheInicial * 0.01)

            CalculoFinal =  (costo_BMW_i8 + calculoiva) - ValorEngancheInicial

            CalculoMeses = CalculoFinal / cantidadmeses

            alert(
            "                 Cotizacion Vehiculo: "  + NombreVehiculo +
            "\n" +
            "\nEl costo del vehiculo es de :      "+ costo_BMW_i8 + 
            "\nEl valor de iva es:                        " + calculoiva + 
            "\nEl Valor del vehiculo + iva :      " + (costo_BMW_i8 + calculoiva) +
            "\nEl Enganche del " + EngancheInicial + " % es           " + ValorEngancheInicial +
            "\nEl Credito del Vehiculo es :       " + CalculoFinal +
            "\nEl pago mensual a " + cantidadmeses + "meses es: " + CalculoMeses 
            )
            break;
    }
}

    



