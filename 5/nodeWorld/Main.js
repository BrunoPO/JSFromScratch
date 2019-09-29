//To Run this File just type "node Main.js" (remember to have the same path of this file)

//This is modularization on node
//You'll see similar things on the webpack 
//Webpack use the node style to manage the use of modularization

//the line below is most comum use of require
var myLogModule = require('./Log.js');
//We'll require a model to start use it.
var ValueModule = require('./Model.js');
//Is a way to get just one attribute from the original require
var { info } = require('./Log.js');

//Display Mensages using the our new Module
myLogModule.info('Node.js - started');
myLogModule.warning('Node.js - warning');
myLogModule.error('Node.js - error');

info("Node.js - here i'm receiving just one attribute from the module");

var valueModule = new ValueModule("Value from a ValueModel");
info(valueModule.getVal())
//require (CommomJs, sync) vs import(ES6, async)
