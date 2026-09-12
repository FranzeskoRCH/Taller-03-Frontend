import "./Courses.css";
import CourseCard from "../CourseCard/CourseCard";

const courses = [
    {
        id: 1,
        emoji: "📚",
        title: "React Básico",
        description:
            "Componentes, props, estados y eventos. Todo lo que necesitas para empezar.",
        level: "Principiante"
    },
    {
        id: 2,
        emoji: "⚙️",
        title: "React Hooks",
        description:
            "Profundiza en useState, useEffect y crea tus propios Custom Hooks.",
        level: "Intermedio"
    },
    {
        id: 3,
        emoji: "🌎",
        title: "Estado Global",
        description:
            "Gestiona el estado con Context API y aprende cuándo usarlo.",
        level: "Intermedio"
    },
    {
        id: 4,
        emoji: "🚀",
        title: "React Avanzado",
        description:
            "Rendimiento, patrones avanzados y arquitectura para proyectos grandes.",
        level: "Avanzado"
    }
];

function Courses() {
    return (
        <section className="courses">
            <h2>Nuestros Cursos</h2>

            <p className="courses-subtitle">
                Aprende a tu ritmo con contenido práctico y actualizado
            </p>

            <div className="course-grid">
                {courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        emoji={course.emoji}
                        title={course.title}
                        description={course.description}
                        level={course.level}
                    />
                ))}
            </div>
        </section>
    );
}

export default Courses;