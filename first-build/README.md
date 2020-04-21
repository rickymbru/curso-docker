<h3 align="center"> First Build </h3>

## Conceitos

Criar um build simples e enviar ao hub.docker.com

## Comandos utilizados

``` bash
docker image build -t first-build .
docker container run --name first-build -p 80:80 first-build
docker login --username <usuario>
docker image push <usuario>/first-build
```
