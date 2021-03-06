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

    this.marked = {};
    this.vertices.forEach((v) => {
      this.marked[v] = false;
    });
  }

  dfs(v){
    this.marked[v] = true;

    if(this.adj[v] !== undefined){
      console.log("Visited vertex: ", v);
    }

    for(let i=0; i < this.adj[v].length; ++i){
      let w = this.adj[v][i];
      if(!this.marked[w]){
        this.dfs(w);
      }
    }
  }

  dfsStack(v){
    console.log("Using a stack...")
    var s = [v];
    while(s.length > 0){
      let w = s.pop();
      if(!this.marked[w]){
        this.marked[w] = true;
        console.log("Visited vertex: ", w);
        if(this.adj[w] != undefined){
          s = s.concat(this.adj[w].reverse());
        }
      }
    }
  }

  showGraph(){
    this.vertices.forEach((vertex) => {
      let adjacents = this.adj[vertex]
      console.log(vertex + " -> " + adjacents.join(" "));
    });
  }
}

export default Graph;

/*
let vs = [0,1,2,3,4];
let eds = [[0,1], [0,2], [1,3], [2,4]];
const g = new Graph(vs, eds);
g.showGraph();
g.dfs(0);
*/
