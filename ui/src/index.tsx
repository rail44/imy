import { createSignal } from "solid-js";
import { render } from "solid-js/dom";
import ImyGrpc from "../proto/imy_grpc_web_pb";
import ImyPb from "../proto/imy_pb";

import { defineCustomElements } from "../extern/ionic";
defineCustomElements();

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName: string]: any;
    }
  }
}

const client = new ImyGrpc.ImyClient("http://0.0.0.0:8080");

const App = () => {
  const [getMessage, setMessage] = createSignal("loading");

  const req = new ImyPb.EchoRequest();
  req.setMessage("rail44");
  client.hash(req, {}, (_err, res) => {
    setMessage(res.getHash());
  });

  return (
    <ion-app>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="end">
            <ion-button>
              <ion-icon slot="icon-only" name="person-circle"></ion-icon>
            </ion-button>
            <ion-button>
              <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
            </ion-button>
            <ion-button>Sign Up</ion-button>
            <ion-button>Sign In</ion-button>
          </ion-buttons>
          <ion-title>imy forum</ion-title>
        </ion-toolbar>
      </ion-header>

      <p>{getMessage()}</p>

      <ion-list>
        <ion-item>
          <ion-label>Pokémon Yellow</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Mega Man X</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>The Legend of Zelda</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Pac-Man</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Super Mario World</ion-label>
        </ion-item>
      </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon name="arrow-forward-circle"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-app>
  );
};

render(() => <App />, document.getElementById("app"));
