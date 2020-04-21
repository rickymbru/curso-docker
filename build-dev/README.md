<h3 align="center"> 
    Python HTTP Server
<h3>
<br>

## Conceitos
Selecionar usuários, WORKDIR, ENTRYPOINT e VOLUMES

## Comandos utilizados
``` bash
docker image build -t ex-build-dev .
docker container run -it -p 80:8000 --name python-server -v $(pwd):/app ex-build-dev
docker container run -it --volumes-from python-server --name debian debian cat /log/http-server.log
