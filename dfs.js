import Graph from './graph.js';

let vs = [0,1,2,3,4];
let eds = [[0,1], [0,2], [1,3], [2,4]];
var g = new Graph(vs, eds);
g.showGraph();
g.dfs(0);

var g1 = new Graph(vs, eds);
g1.dfsStack(0);
