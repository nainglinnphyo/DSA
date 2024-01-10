function bfs(graph, start) {
     const queue = [start];
     const visited = { [start]: true };
   
     while (queue.length > 0) {
       const currentVertex = queue.shift();
       console.log(currentVertex);
   
       for (const neighbor of graph[currentVertex]) {
         if (!visited[neighbor]) {
           visited[neighbor] = true;
           queue.push(neighbor);
         }
       }
     }
   }
   
   // Example usage:
   const graph = {
     A: ["B", "C"],
     B: ["A", "D", "E"],
     C: ["A", "F", "G"],
     D: ["B"],
     E: ["B"],
     F: ["C"],
     G: ["C"],
   };
   
   console.log("BFS starting from vertex 'A':");
   bfs(graph, "A");
   