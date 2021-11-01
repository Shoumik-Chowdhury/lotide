const head = require('../head');
const assertEqual = require('../assertEqual');

//TEST CASE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([6]), 6);