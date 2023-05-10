import LessonContext from "../context/LessonContext";
import Lesson from "./lesson/Lesson";
import { NavLink, useNavigate } from "react-router-dom";

export default function Lessons({ navigation }) {

  const navigate = useNavigate();

  const navigateToLessonDetails = (lesson) => {
    navigation.navigate("/ProductDetails", { lesson });
  };

  const { lessonList } = useContext(LessonContext);
  const result = lessonList;

  return (
    <>
      {result.length ? (
        <div>
          {result.map((lesson) => (
            <Lesson
              key={lesson.data.id}
              id={lesson.id}
              category={lesson.data.category}
              level={lesson.data.level}
              location={lesson.data.location}
              date={lesson.data.date}
              description={lesson.data.description}
              price={lesson.data.price}
              checked={lesson.data.checked}
              lesson={lesson}
            />
          ))}
        </div>
      ) : (
        <p>Lesson List is empty</p>
      )}
    </>
  );
}