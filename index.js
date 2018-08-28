require('colors');
const jsdiff = require('diff');

const lhs = 'my multiline \n' +
          'awesome sample text';

const rhs = 'my multilines \n' +
          'not so awesome sample ext';

const diff = jsdiff.diffChars(lhs, rhs);

diff.forEach(part => {
  const color = part.added ? 'green' :
              part.removed ? 'red' : 'grey';
  process.stderr.write(part.value[color]);
});

console.log();
