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
//Funktionen
function myFunction(name, value18, valueRel, valueChange, valueGrowth) {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in " + name;
    document.querySelector(".h2_1").innerHTML = value18.toString() + "kg CO2";
    document.querySelector("p").innerHTML = "Emission absolute of " + name + " in 2018";
    document.querySelector(".h2_2").innerHTML = Math.round(value18 / weltweit2018 * 100) + "%";
    document.querySelector(".h2_3").innerHTML = Math.round(valueChange) + "%";
    document.querySelector(".h2_4").innerHTML = valueGrowth + "kg CO2";
    //Diagramm
    document.querySelector(".chart").setAttribute("style", "height:" + Math.round(value18 / weltweit2018 * 100) + "%");
}
//Events
document.querySelector(".europe").addEventListener("click", myFunction.bind(null, "Europe", europe2018, relEurope, zuEuropeP, zuEuropeZ));
document.querySelector(".northamerica").addEventListener("click", myFunction.bind(null, "North America", nAmerica2018, relNAmerica, zuNAmericaP, zuNAmericaZ));
document.querySelector(".southamerica").addEventListener("click", myFunction.bind(null, "South America", sAmerica2018, relSAmerica, zuSAmericaP, zuSAmericaZ));
document.querySelector(".africa").addEventListener("click", myFunction.bind(null, "Africa", africa2018, relAfrica, zuAfricaP, zuAfricaZ));
document.querySelector(".asia").addEventListener("click", myFunction.bind(null, "Asia", asia2018, relAsia, zuAsiaP, zuAsiaZ));
document.querySelector(".australia").addEventListener("click", myFunction.bind(null, "Australia", australia2018, relAustralia, zuAustraliaP, zuAustraliaZ));
//# sourceMappingURL=dia.js.map