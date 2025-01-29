services:
  - type: web
    name: my-app
    env: node
    buildCommand: "npm install"
    startCommand: "node index.js"
    plan: free