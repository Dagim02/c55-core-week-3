//  Conversion Functions 
const toFahrenheit = (celsius) => (celsius * 9/5) + 32;
const toKelvin = (celsius) => celsius + 273.15;
//  Weather Status Function 
const getWeatherStatus = (celsius) => {
  if (celsius < 0) return "Freezing";
  if (celsius < 10) return "Cold";
  if (celsius < 20) return "Mild";
  if (celsius < 30) return "Warm";
  return "Hot";
};
// Wind Chill Function 
const calculateWindChill = (tempCelsius, windSpeed) => {
  return (
    13.12 +
    0.6215 * tempCelsius -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * tempCelsius * Math.pow(windSpeed, 0.16)
  );
};
// Main Weather Report Function
const printWeatherReport = (city, tempCelsius, windSpeed) => {
  const fahrenheit = toFahrenheit(tempCelsius);
  const kelvin = toKelvin(tempCelsius);
  const status = getWeatherStatus(tempCelsius);
  const windChill = calculateWindChill(tempCelsius, windSpeed);

  console.log(`Weather Report for ${city}`);
  console.log(`Temperature: ${tempCelsius}°C`);
  console.log(`Temperature: ${fahrenheit}°F`);
  console.log(`Temperature: ${kelvin}K`);
  console.log(`Status: ${status}`);
  console.log(`Wind chill in ${city}: ${windChill.toFixed(2)}°C`);
  console.log("---");
};
// Original 3 Cities 
printWeatherReport("Amsterdam", 22, 15);
printWeatherReport("Berlin", 15, 20);
printWeatherReport("Copenhagen", -5, 25);
// Bonus: Add 2 More Cities 
printWeatherReport("Madrid", 30, 10);
printWeatherReport("Oslo", -12, 18);
