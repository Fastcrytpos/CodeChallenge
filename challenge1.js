// Initialize marks variable with a default value of 0
let marks = 0;

// Prompt the user to enter student marks
console.log("question: Enter student marks (between 0 and 100): ");

// Function to determine the grade based on the marks
function grader(marks) {
  // Check if the entered marks are within the valid range
  if (marks >= 0 && marks <= 100) {
    // Determine the grade based on the marks
    if (marks >= 90) {
      console.log("Grade: A");
    } else if (marks >= 80) {
      console.log("Grade: B");
    } else if (marks >= 70) {
      console.log("Grade: C");
    } else if (marks >= 60) {
      console.log("Grade: D");
    } else {
      console.log("Grade: F");
    }
  } else {
    // If marks are not within the valid range, print an error message
    console.log("Invalid marks entered. Marks should be between 0 and 100.");
  }
}

// Test the grader function with a sample marks value
grader(78);