// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

  var change = {"H":50,"Q":25,"D":10,"N":5,"P":1};
  var ret = {};
  var error  = {error: "You are rich, my friend! We don\'t have so much coins for exchange"};

  if (currency > 10000) {
    return error
  }

  if (currency <= 0) {return ret}

  for (var key in change) {
    var coin = currency / change[key] ^ 0;
    if (coin === 0) {
      continue
    }
    ret[key] = coin;
    currency -= change[key]*coin;

  }
  return ret;
}
