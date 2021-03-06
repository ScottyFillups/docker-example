# docker-example

A simple example of how to use Docker with Node.js


### Quick start

First, make sure you have Docker installed, and have the Docker daemon running.

To get started, clone the repo:

```
$ git clone https://github.com/ScottyFillups/docker-example.git
```

Now, run:

```
$ docker build -t $IMAGE_NAME .
$ docker run -p 8080:8080 -d $IMAGE_NAME
56c48fc2b49b037b621bc420dc75f8c5e75a62dc2acfda7d3e95fc957057ce2a
```

Where `-p` specifies internal and external port bindings,and `-d` runs the container in detached mode.

You should now be able to see the site at http://localhost:8080. Note that `56c...` is the ID for the Docker container, which will keep running until you kill it. **When following these instructions, the ID for the container will be different.**

To kill it, run:

```
$ docker container kill 56    # You don't need to type out the entire ID
```

### How to run an interative terminal inside an image

```bash
# Build your image
$ docker build -t $IMAGE_NAME .

# Run it in an interactive terminal, in bash
$ docker run -it $IMAGE_NAME bash
```

### Frequent commands

* `docker --help`: I'm a noob
* `docker [COMMAND] --help`: See above
* `docker ps`: List all running containers
* `docker images`: List all images
* `docker build -t [TAG] [PATH]`: Build a docker image with a tag, once tag has been set, no need for -t
* `docker run -p 1337:8080 -d [IMAGE]`: Run the image without tying up the terminal, and map public port 1337 to 8080
  * If you don't use `-p`, then you'll be unable to access the docker port
* `docker container ls`: List all running containers
* `docker container kill [CONTAINER]`: Kill a container (^C doesn't seem to work for some reason)
* `docker pull [URL]`: Pull a docker image from a respository

Tutorial page: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
