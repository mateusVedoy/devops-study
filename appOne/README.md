# K8S test

This is a test app to practive k8s basic commands and comcepts

## Dependencies

* [Kind](https://kind.sigs.k8s.io/)
* [Kubectl](https://kubernetes.io/pt-br/docs/tasks/tools/#kubectl)
* [Make](https://www.gnu.org/software/make/manual/make.html)
* [Docker]()

## How to run using makefile
You will need to be inside */appone* folder
### Steps

Emulate a k8s cluster using kind
```
make cluster
```
Build docker image from app
```
make docker-image
```
Load built docker image to k8s cluster
```
make image-to-cluster
```
Apply yaml files to cluster
```
make apply-kube-config
```
Forward pod port to machine port
```
make port-forwarding
```

### Watching pods
```
make watch-pods
```

### Deleting cluster and docker image

Delete cluster
```
make remove-cluster
```
Delete docker image
```
make remove-docker-image
```

## How to run using command line
Check makefile commands and run its values.
