import React from "react";

const Navigation = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-1/4 mx-auto">
        <div className="flex flex-row justify-center"><p>Envios a todo Mexico</p></div>
        <div>
          <div className="flex flex-row justify-center">
            <div className="mx-2" >Obras</div>
            <div className="mx-2" >Artistas</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
