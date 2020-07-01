use tonic::{transport::Server, Request, Response, Status};

pub mod pb {
    tonic::include_proto!("imy");
}

use pb::{
    imy_server::{
        Imy,
        ImyServer,
    },
    EchoResponse,
    EchoRequest,
    HashRequest,
    HashResponse
};

#[derive(Default)]
struct Core;

#[tonic::async_trait]
impl Imy for Core {
    async fn echo(&self, req: Request<EchoRequest>) -> Result<Response<EchoResponse>, Status> {
        let reply = EchoResponse {
            message: format!("Die {}!", req.into_inner().message).into(),
        };
        Ok(Response::new(reply))
    }

    async fn hash(&self, req: Request<HashRequest>) -> Result<Response<HashResponse>, Status> {
        let res = HashResponse {
            hash: blake3::hash(req.into_inner().message.as_bytes()).to_hex().to_string()
        };
        Ok(Response::new(res))
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let addr = "127.0.0.1:50051".parse().unwrap();
    let greeter = Core::default();

    Server::builder()
        .add_service(ImyServer::new(greeter))
        .serve(addr)
        .await?;

    Ok(())
}
