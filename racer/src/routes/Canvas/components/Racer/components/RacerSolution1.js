import React from "react";
import "../styles/_racer.scss";

const Racer = () => {
  console.log("re rendering component");
  return (
    <>
      <section id="griddy-section">
        <div className="grid-sky"></div>
        <div className="grid-mountains">
          <div className="grid-mountain">
            <div className="grid-peak"></div>
          </div>
          <div className="grid-mountain small-mountain">
            <div className="small-peak"></div>
          </div>
          <div className="grid-mountain">
            <div className="grid-peak"></div>
          </div>
          <div className="grid-mountain small-mountain">
            <div className="small-peak"></div>
          </div>
          <div className="grid-mountain">
            <div className="grid-peak"></div>
          </div>
          <div className="grid-mountain small-mountain">
            <div className="small-peak"></div>
          </div>
          <div className="grid-mountain">
            <div className="grid-peak"></div>
          </div>
          <div className="grid-mountain small-mountain">
            <div className="small-peak"></div>
          </div>
        </div>
        <div className="grid-trees">
          <div className="grid-tree">
            <div className="grid-bush"></div>
            <div className="grid-trunk"></div>
          </div>
          <div className="grid-tree">
            <div className="grid-bush"></div>
            <div className="grid-trunk"></div>
          </div>
          <div className="grid-tree">
            <div className="grid-bush"></div>
            <div className="grid-trunk"></div>
          </div>
          <div className="grid-tree">
            <div className="grid-bush"></div>
            <div className="grid-trunk"></div>
          </div>
          <div className="grid-tree">
            <div className="grid-bush"></div>
            <div className="grid-trunk"></div>
          </div>
          <div className="grid-tree">
            <div className="grid-bush"></div>
            <div className="grid-trunk"></div>
          </div>
        </div>
        <div className="grid-car-container">
          <div className="grid-car">
            <div className="window w-back"></div>
            <div className="window w-front"></div>
          </div>
          <div className="grid-wheels">
            <div className="grid-wheel">
              <div className="nut n1"></div>
              <div className="nut n2"></div>
              <div className="nut n3"></div>
              <div className="nut n4"></div>
            </div>
            <div className="grid-wheel">
              <div className="nut n1"></div>
              <div className="nut n2"></div>
              <div className="nut n3"></div>
              <div className="nut n4"></div>
            </div>
          </div>
        </div>
        <div className="fences">
          <div className="fence"></div>
          <div className="fence"></div>
          <div className="fence"></div>
          <div className="fence"></div>
          <div className="fence"></div>
          <div className="fence"></div>
          <div className="fence"></div>
          <div className="fence"></div>
          <div className="fence"></div>
          <div className="fence"></div>
          <div className="fence"></div>
          <div className="fence"></div>
        </div>
        <div className="fence-bar f1"></div>
        <div className="fence-bar f2"></div>
        <div className="grid-ground"></div>
      </section>
    </>
  );
};

const MemoizedRacer = React.memo(Racer);

export { MemoizedRacer as Racer };
