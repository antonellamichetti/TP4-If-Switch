/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

/*NO LOGRO QUE EL PRECIO DE LA CAJA ME LO MUESTRE CON 2 DIGITOS. EJ: PRECIO DE 12-13 UNIDADES*/

function CalcularPrecio() {
    let vCant;
    let vMarca;
    let vPrecioFinal;
    let vPrecio;
    let vDescuento;
    let vPFconIIBB;
    let vIIBB;
    vPrecio = 35;
    vCant = parseInt(document.getElementById("txtIdCantidad").value);
    vMarca = document.getElementById("Marca").value;



    switch (vCant) {
        case 1:
        case 2:
            vPrecioFinal = vCant * vPrecio;
            document.getElementById("txtIdprecioDescuento").value = vPrecioFinal;
            break;
        case 3:
            if (vMarca == "ArgentinaLuz") {
                vDescuento = 0.85;
                vPrecioFinal = (vCant * vPrecio) * vDescuento;
                document.getElementById("txtIdprecioDescuento").value = vPrecioFinal;
            }
            else if (vMarca == "FelipeLamparas") {
                vDescuento = 0.9;
                vPrecioFinal = (vCant * vPrecio) * vDescuento;
                document.getElementById("txtIdprecioDescuento").value = vPrecioFinal;
            }
            else if (vMarca == "JeLuz" || vMarca == "HazIluminacion" || vMarca == "Osram") {
                vDescuento = 0.95;
                vPrecioFinal = (vCant * vPrecio) * vDescuento;
                document.getElementById("txtIdprecioDescuento").value = vPrecioFinal;
            }
            break;
        case 4:
            if (vMarca == "ArgentinaLuz" || vMarca == "FelipeLamparas") {
                vDescuento = 0.75;
                vPrecioFinal = (vCant * vPrecio) * vDescuento;
                document.getElementById("txtIdprecioDescuento").value = vPrecioFinal;
            }
            else if (vMarca == "JeLuz" || vMarca == "HazIluminacion" || vMarca == "Osram") {
                vDescuento = 0.8;
                vPrecioFinal = (vCant * vPrecio) * vDescuento;
                document.getElementById("txtIdprecioDescuento").value = vPrecioFinal;
            }
            break;
        case 5:
            if (vMarca == "ArgentinaLuz") {
                vDescuento = 0.6;
                vPrecioFinal = (vCant * vPrecio) * vDescuento;
                document.getElementById("txtIdprecioDescuento").value = vPrecioFinal;
            }
            else if (vMarca == "FelipeLamparas" || vMarca == "JeLuz" || vMarca == "HazIluminacion" || vMarca == "Osram") {
                vDescuento = 0.7;
                vPrecioFinal = (vCant * vPrecio) * vDescuento;
                document.getElementById("txtIdprecioDescuento").value = vPrecioFinal;
            }
            break;
        default:
            if (vCant >= 6) {
                vDescuento = 0.5;
                vPrecioFinal = (vCant * vPrecio) * vDescuento.toFixed(2);
                document.getElementById("txtIdprecioDescuento").value = vPrecioFinal;
            }
       
           
    }

    if (vPrecioFinal > 120) {
        vPFconIIBB = vPrecioFinal * 1.1;
        vIIBB = vPrecioFinal * 0.1;
        document.getElementById("txtIdprecioDescuento").value = vPFconIIBB;

        alert("IIBB Usted pagó " + vPFconIIBB.toFixed(2) + ", siendo " + vIIBB.toFixed(2) + " el impuesto que se pagó");
    }
}



