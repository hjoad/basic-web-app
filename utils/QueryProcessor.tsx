export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "hjoad"
    );
  }
  if (query.includes("What is your name?")) {
    return (
      "hjoad"
    );
  }
  if (query.includes("Which of the following numbers is the largest:")) {
    // Extract numbers from the query
    const numbersRegex = /\d+/g;
    const numbers = query.match(numbersRegex);

    if (numbers && numbers.length >= 2) {
      // Convert extracted numbers to an array of integers
      const intNumbers = numbers.map((num) => parseInt(num, 10));

      // Find the largest number
      const largestNumber = Math.max(...intNumbers);
      return largestNumber.toString();
    }
  }

  return "";
}
