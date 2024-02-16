import { getStartingNodeKey } from "./getStartingNodeKey";

export function runSequence(json) {
  const startTime = performance.now();
  const graphObj = JSON.parse(json);

  // Printing function
  const printValue = (string) => {
    const printTime = performance.now();
    const difference = Math.floor((printTime - startTime) / 1000);
    console.log(`${string}, Elapsed Time: ${difference}s`);
  };

  const recurse = (key, edges) => {
    // print the value of current node
    printValue(key);
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
