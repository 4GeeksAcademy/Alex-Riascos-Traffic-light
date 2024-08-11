import React, { useState } from "react";
import Light from "./light";


const lightsData = [
    { color: 'danger', shadowClass: 'rojo' }, // Luz roja (danger) con clase de sombra 'rojo'
    { color: 'warning', shadowClass: 'amarillo' },
    { color: 'success', shadowClass: 'verde' },
];

const Home = () => {
    const [activeColor, setActiveColor] = useState("");
    const [purpleLightAdded, setPurpleLightAdded] = useState(false); // Estado para saber si se ha añadido la luz púrpura

    
    const togglePurpleLight = () => {
        if (purpleLightAdded) {
            setPurpleLightAdded(false); // Si la luz púrpura ya está añadida, la quita
            setActiveColor(""); // Restablece el color activo
        } else {
            setPurpleLightAdded(true); // Si no está añadida, la añade
        }
    };

    return (
        <div className="d-flex align-items-center flex-column">
            <div className="suspension-block mt-1">                    
                    </div>
            <div className={`container  bg-black rounded d-flex justify-content-center col-1 
                ${purpleLightAdded ? 'larger-box' : ''}`}> {/* Contenedor de luces, se expande si la luz púrpura ha sido añadida */}
                
                
                

                <div className="d-inline-block d-flex flex-column justify-content-between"> 
                    {lightsData.map(({ color, shadowClass }) => (
                        <Light
                            key={color} 
                            className={`bg-${color} ${activeColor === color ? shadowClass : ''}`} 
                            onClick={() => setActiveColor(color)} 
                        />
                    ))}

                    {purpleLightAdded && ( // Renderiza la luz púrpura solo si ha sido añadida
                        <Light
                            className={`purple ${activeColor === 'purple' ? 'purpura' : ''}`} 
                            onClick={() => {
                                setActiveColor('purple'); c
                            }}
                        />
                    )}
                </div>
            </div>

            {/* Botón que alterna la luz púrpura */}
            <button 
                className={`btn mt-3 ${purpleLightAdded ? 'btn-danger' : 'btn-primary'}`} 
                onClick={togglePurpleLight}
            >
                {purpleLightAdded ? 'Remove Purple Light' : 'Add Purple Light'} 
            </button>
        </div>
    );
};

export default Home;