//Emissionen der Länder
//Afrika
const africa2008: number = 1028;
const africa2018: number = 1235;

//Süd Amerika
const sAmerica2008: number = 1132;
const sAmerica2018: number = 1261;

//Europa
const europe2008: number = 4965;
const europe2018: number = 4209;

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
const relAfrica: number = (africa2018 / weltweit2018 * 100);
const zuAfricaP: number = (100 - (africa2008 / africa2018 * 100));
const zuAfricaZ: number = (africa2018 - africa2008);

//relSAmerika
const relSAmerica: number = (sAmerica2018 / weltweit2018 * 100);
const zuSAmericaP: number = (100 - (sAmerica2008 / sAmerica2018 * 100));
const zuSAmericaZ: number = (sAmerica2018 - sAmerica2008);

//relEuropa
const relEurope: number = (europe2018 / weltweit2018 * 100);
const zuEuropeP: number = (100 - (europe2008 / europe2018 * 100));
const zuEuropeZ: number = (europe2018 - europe2008);

//relNAmerika
const relNAmerica: number = (nAmerica2018 / weltweit2018 * 100);
const zuNAmericaP: number = (100 - (nAmerica2008 / nAmerica2018 * 100));
const zuNAmericaZ: number = (nAmerica2018 - nAmerica2008);

//relAsien
const relAsia: number = (asia2018 / weltweit2018 * 100);
const zuAsiaP: number = (100 - (asia2008 / asia2018 * 100));
const zuAsiaZ: number = (asia2018 - asia2008);

//relAustralien
const relAustralia: number = (australia2018 / weltweit2018 * 100);
const zuAustraliaP: number = (100 - (australia2008 / australia2018 * 100));
const zuAustraliaZ: number = (australia2018 - australia2008);




//Funktionen

function myFunction(name: string, value18: number, valueRel: number, valueChange: number, valueGrowth: number ){

    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in " + name;
    document.querySelector(".h2_1").innerHTML = value18.toString() + "kg CO2"; 
    document.querySelector("p").innerHTML = "Emission absolute of " + name + " in 2018";
    document.querySelector(".h2_2").innerHTML =  Math.round(value18 / weltweit2018 * 100)  + "%";
    document.querySelector(".h2_3").innerHTML =  `${Math.round(valueChange)}%`;
    document.querySelector(".h2_4").innerHTML =  valueGrowth + "kg CO2";

    //Diagramm
    document.querySelector(".chart").setAttribute( "style", "height:" + Math.round(value18 / weltweit2018 * 100) + "%");
}




//Events

document.querySelector(".europe").addEventListener("click", myFunction.bind( null,"Europe", europe2018, relEurope, zuEuropeP, zuEuropeZ));


document.querySelector(".northamerica").addEventListener("click", myFunction.bind(null, "North America", nAmerica2018, relNAmerica, zuNAmericaP, zuNAmericaZ));

document.querySelector(".southamerica").addEventListener("click", myFunction.bind(null, "South America", sAmerica2018, relSAmerica, zuSAmericaP, zuSAmericaZ));

document.querySelector(".africa").addEventListener("click", myFunction.bind(null, "Africa", africa2018, relAfrica, zuAfricaP, zuAfricaZ));

document.querySelector(".asia").addEventListener("click", myFunction.bind(null, "Asia", asia2018, relAsia, zuAsiaP, zuAsiaZ));

document.querySelector(".australia").addEventListener("click", myFunction.bind(null, "Australia", australia2018, relAustralia, zuAustraliaP, zuAustraliaZ));

















