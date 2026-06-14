const dns = require("dns");

dns.resolveSrv(
  "_mongodb._tcp.cluster0.5udafxp.mongodb.net",
  (err, records) => {
    if (err) {
      console.error("ERROR:");
      console.error(err);
    } else {
      console.log(records);
    }
  }
);