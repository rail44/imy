.PHONY: build dev

build: node_modules
	npx snowpack build

dev: node_modules
	npx snowpack dev

node_modules: package.json
	npm install
	touch $@
