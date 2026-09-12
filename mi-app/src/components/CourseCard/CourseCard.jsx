function CourseCard(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <span>{props.level}</span>
        </div>
    );
}

export default CourseCard;