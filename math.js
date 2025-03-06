function makeAdder(x) {
    return function (y) {
      return x + y;
    };
}
module.exports = {
    makeAdder: makeAdder
}