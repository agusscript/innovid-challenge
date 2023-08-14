import "./Server.scss";
import PcOff from "../../../assets/pc-off.png";
import PcOn from "../../../assets/pc-on.gif";
import { useState } from "react";

function Server({ windowTitle }: { windowTitle: string }): JSX.Element {
  const [serverState, setServerState] = useState(false);

  return (
    <div className="window">

      <div className="title-bar">
        <div className="title-bar-text">{windowTitle}</div>
      </div>

      <div className="window-body" onClick={() => setServerState(!serverState)}>
        <img
          src={serverState ? PcOn : PcOff}
          alt={serverState ? "Pc server image on" : "Pc server image off"}
        />
      </div>

      <div className="status-bar">
        <p className="status-bar-field">{serverState ? "Status: ON" : "Status: OFF"}</p>
        <p className="status-bar-field">{serverState ? "Shut down" : "Turn on"}</p>
        <p className="status-bar-field">CPU Usage: 14%</p>
      </div>

    </div>
  );
}

export default Server;
