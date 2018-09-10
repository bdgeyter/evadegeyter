# EVADEGEYTER.BE #

## Local Dev
First add this to `_config.yml`:
```
github:
    url: http://localhost:4000
```
then start the docker container:

`docker run -t -i --rm -v "$PWD":/usr/src/app:delegated -p "4000:4000" starefossen/github-pages`

## deploy