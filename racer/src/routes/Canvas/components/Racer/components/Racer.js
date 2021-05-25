import React from "react";
import "../styles/_racer.scss";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Racer = () => {
  
  const notify = () => toast("re rendering component !!");

  notify();

  const renderMountains = () => {
    return (
      <div className="grid-mountains">
        {Array.from(Array(3)).map(() => (
          <>
            <div className="grid-mountain">
              <div className="grid-peak"></div>
            </div>

            <div className="grid-mountain small-mountain">
              <div className="small-peak"></div>
            </div>
          </>
        ))}
      </div>
    );
  };

  const renderTrees = () => {
    return (
      <div className="grid-trees">
        {Array.from(Array(6)).map(() => (
          <>
            <div className="grid-tree">
              <div className="grid-bush"></div>
              <div className="grid-trunk"></div>
            </div>
          </>
        ))}
      </div>
    );
  };

  const renderFences = () => {
    return (
      <div className="fences">
        {Array.from(Array(13)).map(() => (
          <div className="fence"></div>
        ))}
      </div>
    );
  };

  const renderCar = () => (
    <div className="grid-car-container">
      <div className="grid-car">
        <div className="window w-back"></div>
        <div className="window w-front"></div>
      </div>
      <div className="grid-wheels">
        <div className="grid-wheel"></div>
        <div className="grid-wheel"></div>
      </div>
    </div>
  );

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
      <section id="griddy-section">
        <div className="grid-sky"></div>

        {renderMountains()}

        {renderTrees()}

        {renderCar()}

        {renderFences()}

        <div className="fence-bar f1"></div>

        <div className="fence-bar f2"></div>

        <div className="grid-ground"></div>
      </section>
    </div>
  );
};
