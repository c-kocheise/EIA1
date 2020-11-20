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
var relAfrica = (africa2018 / weltweit2018 * 100);
var zuAfricaP = (100 - (africa2008 / africa2018 * 100));
var zuAfricaZ = (africa2018 - africa2008);
//relSAmerika
var relSAmerica = (sAmerica2018 / weltweit2018 * 100);
var zuSAmericaP = (100 - (sAmerica2008 / sAmerica2018 * 100));
var zuSAmericaZ = (sAmerica2018 - sAmerica2008);
//relEuropa
var relEurope = (europe2018 / weltweit2018 * 100);
var zuEuropeP = (100 - (europe2008 / europe2018 * 100));
var zuEuropeZ = (europe2018 - europe2008);
//relNAmerika
var relNAmerica = (nAmerica2018 / weltweit2018 * 100);
var zuNAmericaP = (100 - (nAmerica2008 / nAmerica2018 * 100));
var zuNAmericaZ = (nAmerica2018 - nAmerica2008);
//relAsien
var relAsia = (asia2018 / weltweit2018 * 100);
var zuAsiaP = (100 - (asia2008 / asia2018 * 100));
var zuAsiaZ = (asia2018 - asia2008);
//relAustralien
var relAustralia = (australia2018 / weltweit2018 * 100);
var zuAustraliaP = (100 - (australia2008 / australia2018 * 100));
var zuAustraliaZ = (australia2018 - australia2008);
//Console
console.log('Emissionswerte Afrika');
console.log('Die Emission von Arfika in 2018 ist: ' + africa2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + relAfrica.toFixed(1) + '%');
console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + zuAfricaP.toFixed(1) + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + zuAfricaZ.toFixed(1) + 'kg CO2');
console.log('Emissionswerte Südamerika');
console.log('Die Emission von Südamerika in 2018 ist: ' + sAmerica2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Südamerika damit ' + relSAmerica.toFixed(1) + '%');
console.log('Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + zuSAmericaP.toFixed(1) + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + zuSAmericaZ.toFixed(1) + 'kg CO2');
console.log('Emissionswerte Europa');
console.log('Die Emission von Europa in 2018 ist: ' + europe2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit ' + relEurope.toFixed(1) + '%');
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + zuEuropeP.toFixed(1) + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + zuEuropeZ.toFixed(1) + 'kg CO2');
console.log('Emissionswerte Nordamerika');
console.log('Die Emission von Nordamerika in 2018 ist: ' + nAmerica2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ' + relNAmerica.toFixed(1) + '%');
console.log('Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + zuNAmericaP.toFixed(1) + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + zuNAmericaZ.toFixed(1) + 'kg CO2');
console.log('Emissionswerte Asien');
console.log('Die Emission von Asien in 2018 ist: ' + asia2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Asien damit ' + relAsia.toFixed(1) + '%');
console.log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' + zuAsiaP.toFixed(1) + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + zuAsiaZ.toFixed(1) + 'kg CO2');
console.log('Emissionswerte Australien');
console.log('Die Emission von Australien in 2018 ist: ' + australia2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Australien damit ' + relAustralia.toFixed(1) + '%');
console.log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' + zuAustraliaP.toFixed(1) + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + zuAustraliaZ.toFixed(1) + 'kg CO2');
//# sourceMappingURL=scriptemi.js.map