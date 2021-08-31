//const fs = require("fs");
//const csv = require('csvtojson');

//(async () => {
//  const items = await csv().fromFile("items.csv");
//})();

function loadCSVMenu(){
  var data = $.csv.toObjects("items.csv");
}

function toggleSidebar(ref){
  document.getElementById("sidebar").classList.toggle('active');
}
