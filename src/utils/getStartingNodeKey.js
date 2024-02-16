// Identify the starting node
// Run time O(v), linear
export function getStartingNodeKey(graph) {
  for (let key in graph) {
    if (graph[key].start) {
      return key;
    }
  }
}
