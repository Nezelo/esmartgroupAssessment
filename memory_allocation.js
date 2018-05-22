/**
 * Cyle
 * 
 * @param banks
 * @returns
 */
function cycle(banks) 
{
  let maxValue = 0;
  let maxIndex = 0;

  banks.forEach((bank, index) => {
    if (bank > maxValue) 
    {
      maxValue = bank;
      maxIndex = index;
    }
  });

  for (let bankCounter = 0; bankCounter < maxValue + 1; bankCounter++) 
  {
    const bankIndex = (maxIndex + bankCounter) % banks.length;
    
    if (bankCounter === 0)
    {
      banks[bankIndex] = 0;
    } 
    else 
    {
      banks[bankIndex]++;
    }
  }
}

/**
 * Part Two
 * 
 * @param input
 * @param {returnTotalCounter:true}
 * @returns
 */
function partOne(input, { returnTotalCounter = true } = {}) 
{
  const banks = input.split(/\s+/).map(number => parseInt(number, 10));

  const seenConfigurations = {};
  let counter = 0;

  while (true) 
  {
    counter++;
    cycle(banks);

    const key = banks.join(':');

    if (seenConfigurations[key]) 
    {
      return returnTotalCounter ? counter : counter - seenConfigurations[key];
    }

    seenConfigurations[key] = counter;
  }
}

/**
 * Part two
 * 
 * @param input
 * @returns
 */
function partTwo(input) 
{
  return partOne(input, { returnTotalCounter: false });
}

console.log('--- Part One ---');
console.log('Test (0 2 7 0):', partOne('0 2 7 0') === 5 ? 'OK' : 'FAIL');
console.log('Result:', partOne('0	5	10	0	11	14	13	4	11	8	8	7	1	4	12	11'));

console.log('');
console.log('--- Part Two ---');
console.log('Test (0 2 7 0):', partTwo('0 2 7 0') === 4 ? 'OK' : 'FAIL');
console.log('Result:', partTwo('0	5	10	0	11	14	13	4	11	8	8	7	1	4	12	11'));