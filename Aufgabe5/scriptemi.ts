//Emissionen der Länder
//Afrika
const africa2008 : number = 1028;
const africa2018 : number = 1235;

//Süd Amerika
const sAmerica2008 : number = 1132;
const sAmerica2018 : number = 1261;

//Europa
const europe2008 : number = 4965;
const europe2018 : number = 4209;

//Nord Amerika
const nAmerica2008: number = 6600;
const nAmerica2018: number = 6035;

//Asien
const asia2008: number = 12954;
const asia2018: number = 16274;

//Australien
const australia2008: number = 1993;
const australia2018: number = 2100;



//Berechnungen
//Emissionen Weltweit
const weltweit2018: number = africa2018 + sAmerica2018 + europe2018 + nAmerica2018 + asia2018 + australia2018;


//Relationen
//relAfrika
const relAfrica: number = (africa2018 / weltweit2018 * 100).toFixed(1);
const zuAfricaP: number = (100 - (africa2008 / africa2018 *100)).toFixed(1);
const zuAfricaZ: number = (africa2018 - africa2008).toFixed(1);

//relSAmerika
const relSAmerica: number = (sAmerica2018 / weltweit2018 * 100).toFixed(1);
const zuSAmericaP: number = (100 - (sAmerica2008 / sAmerica2018 *100)).toFixed(1);
const zuSAmericaZ: number = (sAmerica2018 - sAmerica2008).toFixed(1);

//relEuropa
const relEurope: number = (europe2018 / weltweit2018 *100).toFixed(1);
const zuEuropeP: number = (100 - (europe2008 / europe2018 *100)).toFixed(1);
const zuEuropeZ: number = (europe2018 - europe2008).toFixed(1);

//relNAmerika
const relNAmerika: number = (nAmerica2018 / weltweit2018 *100).toFixed(1);
const zuNAmericaP: number = (100 - (nAmerica2008 / nAmerica2018 *100)).toFixed(1);
const zuNAmericaZ: number = (nAmerica2018 - nAmerica2008).toFixed(1);

//relAsien
const relAsia: number = (asia2018 / weltweit2018 *100).toFixed(1);
const zuAsiaP: number = (100 - (asia2008 / asia2018 *100)).toFixed(1);
const zuAsiaZ: number = (asia2018 - asia2008).toFixed(1);

//relAustralien
const relAustralia: number = (australia2018 / weltweit2018 *100).toFixed(1);
const zuAustraliaP: number = (100 - (australia2008 / australia2018 *100)).toFixed(1);
const zuAustraliaZ: number = (australia2018 - australia2008).toFixed(1);


//Console
console.log ('Emissionswerte Afrika');
console.log ('Die Emission von Arfika in 2018 ist: ' + africa2018 +'kg CO2');
console.log ('Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + relAfrica +'%');
console.log ('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um' + zuAfricaP +'% verändert.');
console.log ('2018 im Vergleich zu 2008 sind das ' +zuAfricaZ +'kg CO2');