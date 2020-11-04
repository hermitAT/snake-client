/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => {
    if (data === "w") {
      connection.write("Move: up");
    }
    if (data === "a") {
      connection.write("Move: left");
    }
    if (data === "s") {
      connection.write("Move: down");
    }
    if (data === "d") {
      connection.write("Move: right");
    }
  });
  stdin.on('data', (handleUserInterfaces));
  return stdin;
};

const handleUserInterfaces = (data) => {
  if (data === "\u0003") {
    process.exit();
  }
};

module.exports = setupInput;