// Helper function to find the maximum value in an array
function findMaxValue(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error("Input must be a non-empty array");
    }
  
    return Math.max(...arr);
  }
  
  // Helper function to filter even numbers from an array
  function filterEvenNumbers(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error("Input must be a non-empty array");
    }
  
    return arr.filter(num => num % 2 === 0);
  }
  
  // Demo using the helper functions
  try {
    const numbers = [8, 3, 12, 5, 9, 2, 6];
    const maxNumber = findMaxValue(numbers);
    console.log("Maximum Value:", maxNumber);
  
    const evenNumbers = filterEvenNumbers(numbers);
    console.log("Even Numbers:", evenNumbers);
  } catch (error) {
    console.error("Error:", error.message);
  }
  