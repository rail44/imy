.PHONY: proto

proto:
	rm -rf proto
	mkdir proto
	protoc -I=../proto imy.proto --js_out=import_style=commonjs,binary:./proto --grpc-web_out=import_style=commonjs+dts,mode=grpcweb:./proto
