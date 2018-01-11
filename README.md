# docker-example

A simple example of how to use Docker with Node.js


### Quick start

First, make sure you have Docker installed, and have the Docker daemon running.

Now, run:

```
$ docker build -t docker-example .
$ docker run -p 8080:8080 -d docker-example
56c48fc2b49b037b621bc420dc75f8c5e75a62dc2acfda7d3e95fc957057ce2a
```

You should now be able to see the site at http://localhost:8080. Note that `56c...` is the ID for the Docker container, which will keep running until you kill it. **When following these instructions, the ID for the container will be different.**

To kill it, run:

```
$ docker container kill 56    # You don't need to type out the entire ID
```


### Frequent commands

* `docker --help`: I'm a noob
* `docker images`: List all images
* `docker build -t [TAG] [PATH]`: Build a docker image with a tag, once tag has been set, no need for -t
* `docker run -p 1337:8080 -d [IMAGE]`: Run the image without tying up the terminal, and map public port 1337 to 8080
  * If you don't use `-p`, then you'll be unable to access the docker port
* `docker container ls`: List all running containers
* `docker container kill [CONTAINER]`: Kill a container (^C doesn't seem to work for some reason)

Tutorial page: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
