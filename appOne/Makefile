cluster:
	@cd k8s/; kind create cluster

docker-image:
	@docker build -t appone:v1 .

image-to-cluster:
	@kind load docker-image appone:v1

apply-kube-config:
	@cd k8s/; kubectl apply -f secret.yaml; kubectl apply -f configmap.yaml; kubectl apply -f deployment.yaml; kubectl apply -f service.yaml

port-forwarding:
	@kubectl port-forward svc/appone-svc 8080:8080

watch-pods:
	@watch 'kubectl get pod'

remove-cluster:
	@kind delete cluster

remove-docker-image:
	@docker rmi -f appone:v1