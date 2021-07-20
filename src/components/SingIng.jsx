import React from "react";
import SearchImg from "../assets/icons/recortes-29 (1).png";

const SingIng = () => {
  return (
    <>
      <p className="p-b-6 text-gray-500  text-2xl text-center my-4">
        Crear <strong className="font-bold">Cuenta</strong>
      </p>
      <div className="w-full flex flex-row mt-6">
        <div className="w-1/2  border-r-2">
          <form action="" className=" p-16 mx-auto flex flex-col">
            <img className="w-1/6 mx-auto" src={SearchImg} alt="" srcset="" />
            <p className="p-b-6 text-gray-500  text-2xl text-center my-4">
              Soy <strong className="font-bold">coleccionista</strong>
            </p>
            <p className="w-1/2 mx-auto text-gray-400 tex-center">
              Crea una cuenta para comprar y conocer las obras de diferentes
              artistas
            </p>
            <label className="text-center my-2">Nombre compelto</label>
            <input
              className="my-2 w-1/2 mx-auto border-2 border-gray-200 rounded-md"
              type="text"
            />
            <label className="my-2 text-center">Correo</label>
            <input
              className="my-2 w-1/2 mx-auto border-2 border-gray-200 rounded-md"
              type="text"
            />
            <label className="my-2 text-center">Contraseña</label>
            <input
              className="my-2 w-1/2 mx-auto border-2 border-gray-200 rounded-md"
              type="text"
            />
            <label className="my-2 text-center">Repetir Contraseña</label>
            <input
              className="my-2 w-1/2 mx-auto border-2 border-gray-200 rounded-md"
              type="text"
            />
            <p className="text-center text-pink-400">Olvide mi contraseña</p>
            <button className="w-1/4 mx-auto p-4 bg-pink-400 my-2">
              Submit
            </button>
          </form>
        </div>
        <div className="w-1/2">
          <p>adasdas</p>
        </div>
      </div>
    </>
  );
};

export default SingIng;
