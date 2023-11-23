import React from 'react';
import perfi from "../../assets/kevinperfil.jpg";
import icono from "../../assets/descargar.png";
import modal from "../../assets/logos.avif";

function Genre() {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <h2 className="uu"></h2>
            <br />

            <div>
                <h1 className="text-2xl font-bold mb-2">Kevin Danilo Lopez</h1>
                <img
                    src={perfi}
                    alt="Perfil de Kevin Danilo Lopez"
                    className="w-48 h-auto rounded-full border-4 border-white mb-4"
                />
            </div>

            <div className="max-w-md mx-auto mb-6">
                <p>
                    My name is Kevin Danilo Lopez. I live in Tambo, Cauca. I am 19 years old. I am 170 cm tall.
                    I was born on September 18, 2004, in the city of Popayan, Cauca.
                </p>
            </div>

            <div className="space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Facebook
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    WhatsApp
                </button>
                <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Twitter
                </button>
            </div>
        </div>
    );
}

export default Genre;
