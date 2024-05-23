// Q2:- Find Unique value from array & count duplicate value form an array

function findUniqueAndCountDuplicates(arr) {
    // Object to track element of each element
    const element = {};
    let totalDuplicate = 0
  
    // Loop through the array and count element
    arr.forEach(value => {
      element[value] = (element[value] || 0) + 1;
    });
  
    // Extract unique values and count duplicates
    const uniqueValues = [];
    const duplicatesCount = {};
  
    for (const [key, value] of Object.entries(element)) {
      if (value === 1) {
        uniqueValues.push(key);
      } else {
        totalDuplicate += 1
        duplicatesCount[key] = value;
      }
    }
  
    return { uniqueValues, duplicatesCount,totalDuplicate };
  }
  
 
  const arr = [1, 2, 3, 4, 5, 1, 2, 3, 6, 7, 8, 8, 9, 10,10,10,10];
  
  const { uniqueValues, duplicatesCount,totalDuplicate } = findUniqueAndCountDuplicates(arr);
  
  console.log("Unique values:", uniqueValues);
  console.log("Duplicates count:", duplicatesCount);
  console.log("Total Duplicates Entries:", totalDuplicate);
  