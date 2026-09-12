import { useState } from "react";
import "./StudentCounter.css";

function StudentCounter() {
    const [count, setCount] = useState(0);

    return (
        <section className="student-counter">
            <h2>
                ¿Cuántos Estudiantes van a inscribirse?
            </h2>   
            <p>Usa botones para ajustar el número.</p>

            <div className="counter">
                <button onClick={() => setCount(Math.max(0, count - 1))}>
                    -
                </button>

                <span className="DynamicNumber">
                    {count}
                </span>

                <button onClick={() => setCount(count + 1)}>
                    +
                </button>
            </div>
            <p>Estudiantes Inscritos</p>
        </section>
    );
}

export default StudentCounter;