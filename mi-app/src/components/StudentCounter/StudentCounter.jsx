import { useState } from "react";

function StudentCounter() {
    return (
        <section>
            <h2>
                ¿Cuántos Estudiantes van a inscribirse?
            </h2>
            <button> - </button>
            <span className="DynamicNumber">0</span>
            <button>+</button>
        </section>
    );
}

export default StudentCounter;