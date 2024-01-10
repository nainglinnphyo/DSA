function dfs(graph, start, visited = {}) {
     if (!graph[start]) {
          console.log("Vertex not found");
          return;
     }

     visited[start] = true;
     console.log(start);

     for (const neighbor of graph[start]) {
          if (!visited[neighbor]) {
               dfs(graph, neighbor, visited);
          }
     }
}

// Example usage:
const graph = {
     A: ["B", "C"],
     B: ["A", "D", "E"],
     C: ["A", "F", "G"],
};

console.log("DFS starting from vertex 'A':");
dfs(graph, "A");
