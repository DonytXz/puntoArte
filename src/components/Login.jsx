import React from "react";

const Login = () => {
  return (
    <>
      <div className="h-full">
        <form action="" className="w-1/2 p-2 xl:p-16 mx-auto flex flex-col">
          <p className="text-gray-500  text-2xl text-center my-4">
            Iniciar <strong className="font-bold">Session</strong>
          </p>
          <label className="text-center my-2">Nombre</label>
          <input
            className="my-2 w-full lg:w-1/2 mx-auto border-2 border-gray-200 rounded-md"
            type="text"
          />
          <label className="my-2 text-center">Nombre</label>
          <input
            className="my-2 w-full lg:w-1/2 mx-auto border-2 border-gray-200 rounded-md"
            type="text"
          />
          <p className="text-center text-pink-400">Olvide mi contraseña</p>
          <button className="w-full lg:w-1/4 mx-auto p-4 bg-pink-400 my-2">Entrar</button>
          <div className="border-b-2 border-gray-300 my-4">
            <div className=""></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
