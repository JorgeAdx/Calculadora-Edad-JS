/**
 * -------------------------------------------------------
 * File: Age_Calculator.js
 * Description: Calculates a person's age based on a given birth date.
 * Author: JorgeAdx
 * Created: 2025-09-19
 * -------------------------------------------------------
 */

console.log("This program is an age calculator. Please edit the birth date below.");
const birthDateInput = "01/01/2000";   // (EDIT) Enter birth date in format DD/MM/YYYY

// Parse and validate a birth date string in DD/MM/YYYY format.
function parseBirthDate(dateString) {
    const parts = dateString.split("/");    // Assign splitted parameter to 'parts'
    if (parts.length !== 3) {
        console.log("Invalid format. Use DD/MM/YYYY.");
        return null;
    }

    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    // Verify whether the units are numbers
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        console.log("The date contains non-numeric values.");
        return null;
    }

    const today = new Date();    // Validate every integer using object Date
    const dayToday = today.getDate();
    const monthToday = today.getMonth() + 1;    // Match the month according to its number
    const yearToday = today.getFullYear();

    if (year < 1900 || year > yearToday || 
        (year === yearToday && month > monthToday) || 
        (year === yearToday && month === monthToday && day > dayToday)) {
        console.log("The date must be between 1900 and today.");
        return null;
    }

    // Verify real date (for example, not 31/02)
    const dateObj = new Date(year, month - 1, day);
    if (dateObj.getFullYear() !== year || dateObj.getMonth() !==
        month - 1 || dateObj.getDate() !== day) {
        console.log("The entered date does not exist.");
        return null;
    }

    return { day, month, year };
}

// Return true if the given year is a leap year.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Calculate age from birth day
function calculateAge(day, month, year) {
    const today = new Date();
    const dayToday = today.getDate();
    const monthToday = today.getMonth() + 1;
    const yearToday = today.getFullYear();

    let age = yearToday - year;
    if (month > monthToday || (month === monthToday && day > dayToday)) {
        age--;
    }
    return age;
}

// Display results in the console
function showResults(birthData) {
    const today = new Date();
    const dayToday = today.getDate();
    const monthToday = today.getMonth() + 1;
    const yearToday = today.getFullYear();

    console.log(`Today is ${dayToday}/${monthToday}/${yearToday}`);

    // Leap year info
    if (isLeapYear(birthData.year)) {
        console.log(`Your birth year ${birthData.year} is a leap year.`);
    }

    const age = calculateAge(birthData.day, birthData.month, birthData.year);

    // Birthday check
    if (birthData.day === dayToday && birthData.month === monthToday) {
        console.log(`Happy Birthday! You are now ${age} years old.`);
    } else {
        console.log(`You are ${age} years old.`);
    }
}

// Main execution
const birthData = parseBirthDate(birthDateInput);
if (birthData) {
    showResults(birthData);
}
