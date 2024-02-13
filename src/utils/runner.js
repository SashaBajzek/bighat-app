// Identify the starting node
// Run time O(v), linear
function getStartingNodeKey(graph) {
  for (let key in graph) {
    if (graph[key].start) {
      return key;
    }
  }
}

// TODO!!!!! clear the setTimeout, otherwise when you run a new DAG, you'll have old one running too

export function runSequence(json, callback) {
  const startTime = new Date().getSeconds();
  const graphObj = JSON.parse(json);

  const recurse = (key, edges) => {
    // print the value of current node
    callback(key, startTime);
    // for each edge, setTimeout to call it once edge time is up
    for (let edge in edges) {
      let scopedEdge = edge;
      setTimeout(
        () => recurse(scopedEdge, graphObj[scopedEdge].edges),
        edges[scopedEdge] * 1000,
      );
    }
  };

  // get the starting node
  const startingNodeKey = getStartingNodeKey(graphObj);

  recurse(startingNodeKey, graphObj[startingNodeKey].edges);
}
