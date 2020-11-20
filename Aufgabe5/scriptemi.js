//Emissionen der Länder
//Afrika
var africa2008 = 1028;
var africa2018 = 1235;
//Süd Amerika
var sAmerica2008 = 1132;
var sAmerica2018 = 1261;
//Europa
var europe2008 = 4965;
var europe2018 = 4209;
//Nord Amerika
var nAmerica2008 = 6600;
var nAmerica2018 = 6035;
//Asien
var asia2008 = 12954;
var asia2018 = 16274;
//Australien
var australia2008 = 1993;
var australia2018 = 2100;
//Berechnungen
//Emissionen Weltweit
var weltweit2018 = africa2018 + sAmerica2018 + europe2018 + nAmerica2018 + asia2018 + australia2018;
//Relationen
//relAfrika
var relAfrica = (africa2018 / weltweit2018 * 100).toFixed(1);
var zuAfricaP = (100 - (africa2008 / africa2018 * 100)).toFixed(1);
var zuAfricaZ = (africa2018 - africa2008).toFixed(1);
//relSAmerika
var relSAmerica = (sAmerica2018 / weltweit2018 * 100).toFixed(1);
var zuSAmericaP = (100 - (sAmerica2008 / sAmerica2018 * 100)).toFixed(1);
var zuSAmericaZ = (sAmerica2018 - sAmerica2008).toFixed(1);
//relEuropa
var relEurope = (europe2018 / weltweit2018 * 100).toFixed(1);
var zuEuropeP = (100 - (europe2008 / europe2018 * 100)).toFixed(1);
var zuEuropeZ = (europe2018 - europe2008).toFixed(1);
//relNAmerika
var relNAmerica = (nAmerica2018 / weltweit2018 * 100).toFixed(1);
var zuNAmericaP = (100 - (nAmerica2008 / nAmerica2018 * 100)).toFixed(1);
var zuNAmericaZ = (nAmerica2018 - nAmerica2008).toFixed(1);
//relAsien
var relAsia = (asia2018 / weltweit2018 * 100).toFixed(1);
var zuAsiaP = (100 - (asia2008 / asia2018 * 100)).toFixed(1);
var zuAsiaZ = (asia2018 - asia2008).toFixed(1);
//relAustralien
var relAustralia = (australia2018 / weltweit2018 * 100).toFixed(1);
var zuAustraliaP = (100 - (australia2008 / australia2018 * 100)).toFixed(1);
var zuAustraliaZ = (australia2018 - australia2008).toFixed(1);
//Console
console.log('Emissionswerte Afrika');
console.log('Die Emission von Arfika in 2018 ist: ' + africa2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + relAfrica + '%');
console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um' + zuAfricaP + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + zuAfricaZ + 'kg CO2');
console.log('Emissionswerte Südamerika');
console.log('Die Emission von Südamerika in 2018 ist: ' + sAmerica2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Südamerika damit ' + relSAmerica + '%');
console.log('Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um' + zuSAmericaP + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + zuSAmericaZ + 'kg CO2');
console.log('Emissionswerte Europa');
console.log('Die Emission von Europa in 2018 ist: ' + europe2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit ' + relEurope + '%');
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um' + zuEuropeP + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + zuEuropeZ + 'kg CO2');
console.log('Emissionswerte Nordamerika');
console.log('Die Emission von Nordamerika in 2018 ist: ' + nAmerica2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ' + relNAmerica + '%');
console.log('Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um' + zuNAmericaP + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + zuNAmericaZ + 'kg CO2');
console.log('Emissionswerte Asien');
console.log('Die Emission von Asien in 2018 ist: ' + asia2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Asien damit ' + relAsia + '%');
console.log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um' + zuAsiaP + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + zuAsiaZ + 'kg CO2');
console.log('Emissionswerte Australien');
console.log('Die Emission von Australien in 2018 ist: ' + australia2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Australien damit ' + relAustralia + '%');
console.log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um' + zuAustraliaP + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + zuAustraliaZ + 'kg CO2');
//# sourceMappingURL=scriptemi.js.map