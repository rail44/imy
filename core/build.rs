fn main() {
    tonic_build::compile_protos("../proto/imy.proto").unwrap();
}
