const siteA = ['anna','ivan','anna','petr','olga']
const siteB = ['ivan','anna','sergey','olga','ivan']

const setA = new Set(siteA);
console.log(setA);

console.log(setA.size);

console.log(setA.has('petr'));

const allvisitors = new Set([...siteA,...siteB])

console.log([...allvisitors]);