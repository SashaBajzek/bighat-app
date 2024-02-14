import { useRef } from "react";

// Identify the starting node
// Run time O(v), linear
function getStartingNodeKey(graph) {
  for (let key in graph) {
    if (graph[key].start) {
      return key;
    }
  }
}

export function useRunner() {
  const timeoutIdsRef = useRef([]);
  const startTime = useRef();
  const graph = useRef();

  const run = (json, callback) => {
    // clear all timeouts and timeoutIds
    clearTimeouts();
    timeoutIdsRef.current = [];

    // set the start time
    startTime.current = new Date().getSeconds();

    // set graph
    graph.current = JSON.parse(json);

    // get the starting node
    const startingNodeKey = getStartingNodeKey(graph.current);

    recurse(startingNodeKey, graph.current[startingNodeKey].edges, callback);
  };

  const recurse = (key, edges, callback) => {
    // print the value of current node
    callback(key, startTime.current);
    // for each edge, setTimeout to call it once edge time is up
    for (let edge in edges) {
      let scopedEdge = edge;
      const timeoutID = setTimeout(
        () => recurse(scopedEdge, graph.current[scopedEdge].edges, callback),
        edges[scopedEdge] * 1000,
      );
      timeoutIdsRef.current = [...timeoutIdsRef.current, timeoutID];
    }
  };

  const clearTimeouts = () => {
    for (let i = 0; i < timeoutIdsRef.current.length; i++) {
      clearTimeout(timeoutIdsRef.current[i]);
    }
  };

  return run;
}
