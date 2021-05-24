import React, { useState } from "react";
import { Racer } from "./Racer";
import "../styles/_canvas.scss";

export default function Canvas() {
  const [rerenderCount, triggerRerender] = useState(0);

  setTimeout(() => {
    triggerRerender(rerenderCount + 1);
  }, 500);

  return (
    <div className="launchpad">
      <Racer />
    </div>
  );
}
