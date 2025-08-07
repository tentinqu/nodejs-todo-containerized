# Todo App with Node.js and Docker

## Overview
This is a Dockerized Todo application with a Node.js backend and frontend. While I successfully containerized the application, I encountered several challenges during the implementation that prevented it from functioning completely. This project represents my learning journey in Dockerizing a full-stack application.

Project Structure
text
todo-app-nodejs-docker/

├── backend/

│   ├── Dockerfile
│   ├── package.json
│   └── server.js


├── frontend/

│   ├── Dockerfile
│   ├── package.json
│   ├── public/
│   └── src/

├── docker-compose.yaml

└── README.md


Challenges Faced
1. Missing index.html File
After running npm install and npm run build in the frontend directory, the expected index.html file was not generated

This resulted in the frontend not being served properly

2. Port Allocation Error
text
Error response from daemon: failed to set up container networking: 
driver failed programming external connectivity on endpoint 
todo-app-nodejs-docker-frontend-1: Bind for 0.0.0.0:3000 failed: 
port is already allocated
The frontend container tried to use port 3000 which was already in use

This required identifying and stopping the process using port 3000

3. Empty Frontend Directory
The frontend directory lacked the necessary React/Vue files to properly build the application

Only basic package.json and Dockerfile were present without the actual application code

4. "Cannot GET /" Error
When accessing the application on port 3001, the server responded with "Cannot GET /"

This indicated either routing issues or missing static files

## Learning Outcomes
Despite these challenges, this project provided valuable learning experiences:
- Docker Configuration: Learned to set up multi-container applications with Docker Compose
- Port Management: Gained understanding of port allocation and conflict resolution
- Frontend-Backend Integration: Explored connecting frontend and backend services in Docker
- Debugging Skills: Developed skills in troubleshooting containerized applications


## Future Improvements
- Complete the frontend application structure
- Implement proper error handling for port conflicts
- Add health checks to the Docker configuration
- Include environment variables for configuration
- Set up proper volume mounting for development

## How to Run (Current State)
Clone the repository
```git clone https://github.com/ajeetraina/todo-app-nodejs-docker.git
cd todo-app-nodejs-docker
```

Build and run the containers
```
docker-compose up
```

Note: As documented above, the application currently doesn't function properly due to the mentioned issues.

## Conclusion
This project represents an important step in my Docker learning journey. While the application doesn't yet work as intended, the process of containerizing it provided invaluable experience with Docker concepts, troubleshooting, and full-stack application architecture.
