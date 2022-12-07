// Part 1
var list = [];
var index = 0;
require('fs').readFileSync("./input.txt", "utf-8").split(/\r?\n/).forEach((line) => {
    if (!list[index]) list[index] = 0;
    if (line == "") index++;
    else list[index] += parseInt(line);
});
console.log("Partie 1:", Math.max(...list));

// Part 2
var total = 0;
var _list = list;
for (i = 0; i < 3; i++) {
    total += Math.max(..._list);
    _list.splice(_list.indexOf(Math.max(..._list)), 1);
}
console.log("Partie 2:", total);