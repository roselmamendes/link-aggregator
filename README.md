# link-aggregator
[![Build Status](https://travis-ci.org/roselmamendes/link-aggregator.svg?branch=master)](https://travis-ci.org/roselmamendes/link-aggregator)

The intent is create a aggregator of links which will organize the links by subject.

## Development

**To Start contributing**

Requirements

Docker

Node

**Start in your machine**

1. Git clone git@github.com:roselmamendes/link-aggregator.git
2. Run `docker build -t link-agg .`

Run Webpack in watch mode (build the public folder) `sudo docker run --rm -v ${PWD}:/usr/src/app -it link-agg ../node_modules/.bin/webpack --watch`

Start the project locally `docker run --rm -p 3000:3000 -v ${PWD}:/usr/src/app -it link-agg npm run server`

To stop the container run `docker stop link-agg && docker rm link-agg`

To open a terminal from th container `docker run --rm -it link-agg /bin/bash`

**[Board of Issues to work](https://github.com/roselmamendes/link-aggregator/projects/1)**

**Tests**

`docker run --rm -v ${PWD}:/usr/src/app -it link-agg ./node_modules/.bin/jest`

