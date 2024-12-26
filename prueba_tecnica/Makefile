# Makefile to automate common tasks

# Build all Docker images
build:
	docker build -t ecastill05/rest-api:latest ./rest-api
	docker build -t ecastill05/graphql:latest ./graphql-server
	docker build -t ecastill05/jupyter-notebook:latest ./jupyter-notebook

# Push Docker images to Docker Hub
push:
	docker push ecastill05/rest-api:latest
	docker push ecastill05/graphql:latest
	docker push ecastill05/jupyter-notebook:latest

# Deploy Kubernetes manifests
deploy:
	kubectl apply -f k8s/

# Clean up deployments
clean:
	kubectl delete -f k8s/

# Rebuild all Docker images and redeploy
rebuild:
	make clean
	make build
	make deploy