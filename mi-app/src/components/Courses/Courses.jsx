import CourseCard from "../CourseCard/CourseCard";
function Courses() {
const courses = [
    {
        id: 1,
        title: "React Básico",
        description: "Componentes, props, estados y eventos. Todo lo quer necesitas para empezar.",
        level: "Principiante"
    },
    {
        id: 2,
        title: "React Hooks",
        description: "Profundiza en useState, useEffect y crea tus propios Custom Hooks",
        level: "Intermedio"
    },
    {
        id: 3,
        title: "Estado Global",
        description: "Gestiona el estado con context API y aprende cuándo usarlo",
        level: "Intermedio"
    },
    {
        id: 4,
        title: "React Avanzado",
        description: "Rendimiento, patrones avanzados y arquitectura para proyectos grandes",
        level: "Avanzado"
    }


];

    return (
        <section>
            <h2>Nuestros Cursos</h2>

            <div>
                {courses.map((course) => (
                    <CourseCard
                        key={course.id}
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