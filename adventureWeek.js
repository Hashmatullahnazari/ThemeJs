let themeName = "Adventure Week";
let durationInDays = 7;
let activities = ["Hiking", "Camping", "Kayaking"];
let dateComponents = ["December", 21, 2024];


console.log("=== Initial Theme Details===");
console.log("Theme Name" + themeName);
console.log("Duration in Days:", durationInDays);
console.log("Date: ", dateComponents.join(", "));
console.log("Activities:", activities.join(", "))


//Update the theme name

themeName = "Relaxation Retreat";
console.log("\n=== Updated Theme Name ===");
console.log("New Theme Name;" + themeName);

//Add a new activity

activities.push("Yoga");
console.log("\n=== Increased Duration ===");
console.log("activities after adding yoga:", activities);

// Increase the duration
durationInDays += 3;
console.log("\=== Increased Duration ===");
console.log("update duration (days):", durationInDays)




