function zetadieta (C,P,G) {

    const ChBanana = 27;    // Carbohidrato por banana
    const CalBanana =  105; // Calorias por banana
    const ProteAtun = 30;   // Proteinas por atun
    const CalAtun = 120;    // Calorias por atun
    const GrasAceite = 1;   // Grasas por aceite
    const CalAceite = 9;    // Calorias por aceite

    let Bananas = Math.ceil (C / ChBanana)
    let Atun = Math.ceil (P / ProteAtun)
    let Aceite = G;         // Aceite no requiere ser redondeado hacia arriba ya que es medido con exactitud decimal

    let calorias = 0;
    calorias += Bananas * CalBanana;
    calorias += Atun * CalAtun;
    calorias += Aceite * CalAceite;

    return calorias;

}

let result = zetadieta (1000, 1000, 1000)
console.log(result);