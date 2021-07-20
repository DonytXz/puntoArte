import React from "react";

const Login = () => {
  return (
    <>
      <div className="h-screen">
        <form action="" className="w-1/2 p-16 mx-auto flex flex-col">
          <label className="text-center my-2">Nombre</label>
          <input className="my-2 w-1/2 mx-auto border-2 border-gray-200 rounded-md" type="text"/>
          <label className="my-2 text-center">Nombre</label>
          <input className="my-2 w-1/2 mx-auto border-2 border-gray-200 rounded-md" type="text"/>
          <p className="text-center text-pink-400">Olvide mi contraseña</p>
        <button className="w-1/4 mx-auto p-4 bg-pink-400 my-2">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
