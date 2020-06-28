import { render } from "solid-js/dom";
import ImyGrpc from "../proto/imy_grpc_web_pb";
import ImyPb from "../proto/imy_pb";

import "@material/mwc-button";

interface Prop {
  message: string,
}

const App = (prop: Prop) => {
  return (
    <div>
      <mwc-button>hoge</mwc-button>
      <h1>{prop.message}</h1>
    </div>
  );
};

const client = new ImyGrpc.ImyClient("http://0.0.0.0:8080");
const req = new ImyPb.EchoRequest();
req.setMessage("rail44");
client.echo(req, {}, (_err, res) => {
  const message = res.getMessage();
  render(() => <App message={message} />, document.getElementById("app"));
});
