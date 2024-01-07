// Declare and assign the variables below
let shuttlename = 'Determination';
let shuttpleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400;
cons milesPerKm = 0.621;

console.log (typeof "Determination")
console.log (typeof 17500)
console.log (typeof 225000000)
console.log (typeof 38400)
console.log (typeof 0.621)
// Calculate a space mission below
console.log (225000000 * 0.621)
let milesToMars = kilometersToMars * milesPerKilometer;
let hoursToMars = milesToMars / shuttpleSpeedMph
let daysToMars = hoursToMars / 24
// Print the results of the space mission calculations below
console.log(shuttleName + "will take" + daysToMars + "days to reach Mars.")
// Calculate a trip to the moon below
let milesToMoon = kilometersToMoon * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.")