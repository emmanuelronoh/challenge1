# Student Grade Generator/program

This project calculates and displays a student's grade based on their grades

### Function: `calculateGrade()`

The `calculateGrade()` function prompts the user to input a numerical mark between 0 and 100. It then determines and displays the corresponding grade based on the following criteria:

- A > 79
- B - 60 to 79
- C - 50 to 59
- D - 40 to 49
- E - Less than 40

#### Example

1. **Input**: Enter a numerical mark between 0 and 100 when prompted.
2. **Output**: The program will determine and display the corresponding grade.

**Example Run:**

- If you input `85`, the program will output `The student's grade is A`.
- If you input `60`, the program will output `The student's grade is B`.
- If you input `50`, the program will output `The student's grade is C`.
- If you input `40`, the program will output `The student's grade is D`.
- If you input `30`, the program will output `The student's grade is E`.

### Edge Cases

- Entering `0` will result in `The student's grade is E`.
- Entering `100` will result in `The student's grade is A`.
