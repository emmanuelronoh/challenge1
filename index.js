function calculateGrade() {
    // Prompt user for input
    let input = prompt("Enter the student's marks (0-100):");

    // Convert input to a number
    let marks = parseFloat(input);

    // Validate if marks is a number and within the range 0-100
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        // Determine the grade based on marks
        let grade;
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 50) {
            grade = 'C';
        } else if (marks >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        // Output the grade
        alert(`The student's grade is ${grade}`);

        // Return the grade for potential future use
        return grade;
    } else {
        // Handle invalid input
        alert('Invalid input. Please enter a number between 0 and 100.');
        return null; // Return null to signify failure in meeting rubric requirements
    }
}

// Call the function to initiate all grading
calculateGrade();