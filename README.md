docker run -v $(pwd):/app:ro -v /app/node_modules -p 3000:3000 -d --name image-name container-name
docker rm container-name -f `-f for force other wise stop and remove`