SHELL:=/bin/bash

.DEFAULT_GOAL:=help

# Commands to be shown when running "make help".
.PHONY: help install start conn npm build deploy

help:  ## Displays this help.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

install: ## Builds the environment.
	$(info Building the environment...)
	@chmod 777 ./docker/entrypoint.sh && \
		docker-compose build

start: ## Starts the server with Docker, exposing the web in "http://localhost:8000".
	$(info Starting server...)
	@docker-compose up

conn: ## Connects to the web container.
	$(info Connecting to the web container...)
	@docker-compose run --no-deps --rm web /bin/ash -l

npm:  ## Checks and install new NPM packages.
	$(info Checking and installing NPM packages...)
	@docker-compose run --rm web npm install

build:  ## Builds the compiled version of the site in /public.
	$(info Building web...)
	@docker-compose run --rm web npm run build

deploy:  ## Deploys the master branch to Github Pages.
	$(info Deploying master branch to Github Pages...)
	@docker-compose run --rm web git config --global user.name "$(git config user.name)" && \
	                             git config --global user.email "$(git config user.email)" && \
															 npm run deploy
