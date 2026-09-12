import "./CourseCard.css";

function CourseCard(props) {
    return (
        <div className="course-card">

            <div className="course-emoji">
                {props.emoji}
            </div>

            <h3>{props.title}</h3>

            <p>{props.description}</p>

            <span className="course-level">
                {props.level}
            </span>

        </div>
    );
}

export default CourseCard;