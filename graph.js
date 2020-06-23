class Graph {
  constructor(v,e) {
    this.vertices = v;
    this.edges = e;
    this.adj = {}
    //Initializing the adjacency lists for each vertex
    for(let i = 0; i < this.vertices.length; ++i) {
      this.adj[this.vertices[i]] = [];
    }
    this.edges.forEach(e => {
      let v = e[0];
      let w = e[1];
      this.adj[v].push(w);
      this.adj[w].push(v)
    });
  }

  showGraph(){
    this.vertices.forEach((vertex) => {
      let adjacents = this.adj[vertex]
      console.log(vertex + " -> " + adjacents.join(" "));
    });
  }
}

let vs = [0,1,2,3,4];
let eds = [[0,1], [0,2], [1,3], [2,4]];
const g = new Graph(vs, eds);
g.showGraph()
