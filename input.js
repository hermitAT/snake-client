/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInterfaces = (data) => {
  if (data === "\u0003") {
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (handleUserInterfaces));
  return stdin;
};

module.exports = setupInput;