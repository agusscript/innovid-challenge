import "./Server.scss";
import PcOff from "../../../assets/pc-off.png";
import PcOn from "../../../assets/pc-on.gif";
import { useState, useEffect } from "react";

function Server({ windowTitle }: { windowTitle: string }): JSX.Element {
  const [serverState, setServerState] = useState(false);
  const [usageCpuSate, setUsageCpuSate] = useState(0);

  function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    let interval: number;

    if (serverState) {
      interval = setInterval(() => {
        setUsageCpuSate(getRandomInt(100));
      }, 4000);
    }

    return () => clearInterval(interval);
  }, [serverState]);

  return (
    <article className="window">
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
        <p className="status-bar-field" onClick={() => setServerState(!serverState)}>
          {serverState ? "Shut down" : "Turn on"}
        </p>
        <p className="status-bar-field">{`CPU Usage: ${serverState ? usageCpuSate : 0}%`}</p>
      </div>
    </article>
  );
}

export default Server;
