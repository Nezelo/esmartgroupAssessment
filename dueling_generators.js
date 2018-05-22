/**
 * Part one 
 * 
 * @param startValueA
 * @param startValueB
 * @returns foundPairs
 */
function partOne(startValueA, startValueB) 
{
  const factorA = 16807;
  const factorB = 48271;
  let previousValueA = startValueA;
  let previousValueB = startValueB;
  let foundPairs = 0;

  for (let i = 0; i < 40000000; i++)
  {
    const nextValueA = (previousValueA * factorA) % 2147483647;
    const nextValueB = (previousValueB * factorB) % 2147483647;

    previousValueA = nextValueA;
    previousValueB = nextValueB;

    const sixteenBits = 2 ** 16;
    const lowestDigitsA = nextValueA % sixteenBits;
    const lowestDigitsB = nextValueB % sixteenBits;

    if (lowestDigitsA === lowestDigitsB) 
    {
      foundPairs++;
    }
  }

  return foundPairs;
}

/**
 * Part Two
 * 
 * @param startValueA
 * @param startValueB
 * @returns foundPairs
 */
function partTwo(startValueA, startValueB) 
{
  const factorA = 16807;
  const factorB = 48271;
  let previousValueA = startValueA;
  let previousValueB = startValueB;
  let foundPairs = 0;
  let stackA = [];
  let stackB = [];

  while (stackA.length < 5000000 || stackB.length < 5000000) 
  {
    const nextValueA = (previousValueA * factorA) % 2147483647;
    const nextValueB = (previousValueB * factorB) % 2147483647;

    previousValueA = nextValueA;
    previousValueB = nextValueB;

    if (nextValueA % 4 === 0) 
    {
      stackA.push(nextValueA);
    }

    if (nextValueB % 8 === 0) 
    {
      stackB.push(nextValueB);
    }
  }

  for (let i = 0; i < stackA.length; i++) 
  {
    const sixteenBits = 2 ** 16;
    const lowestDigitsA = stackA[i] % sixteenBits;
    const lowestDigitsB = stackB[i] % sixteenBits;
    
    if (lowestDigitsA === lowestDigitsB) 
    {
      foundPairs++;
    }
  }

  return foundPairs;
}

console.log('--- Part One ---');
console.log('Test One:', partOne(65, 8921) === 588 ? 'OK' : 'FAIL');
console.log('Result:', partOne(516, 190));

console.log('');
console.log('--- Part two ---');
console.log('Test Two:', partTwo(65, 8921) === 309 ? 'OK' : 'FAIL');
console.log('Result:', partTwo(516, 190));