/*
d3.tsv("master/masterBoost.tsv", function(data) {
    console.log(data);
});
*/
fetch("master/masterBoost.tsv").then( data => {
    console.log(data);
});
