asyncThing1().then(function() {
    return asyncThing2();
  }).then(function() {
    return asyncThing3();
  }).catch(function(err) {
    return asyncRecovery1();
  }).then(function() {
    return asyncThing4();
  }, function(err) {
    return asyncRecovery2();
  }).catch(function(err) {
    console.log("Don't worry about it");
  }).then(function() {
    console.log("All done!");
  })
  