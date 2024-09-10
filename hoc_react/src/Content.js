import { useState, useEffect } from "react";

const lessons = [
  {
    id: 1,
    name: "ReactJS là gì? Tại sao nên học ReactJS",
  },
  {
    id: 2,
    name: "SPA/MPA là gì?",
  },
  {
    id: 3,
    name: "Arrow function",
  },
];

function Content() {
  const [lessonId, setLessonId] = useState();

  useEffect(() => {
    const handleComment = (e) => {
      console.log(e);
    };

     window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(
        `lesson-${lessonId}`,
        handleComment
      );
    };
  }, [lessonId]);

  return (
    <div style={{ padding: 50 }}>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{
              color: lessonId === lesson.id ? "red" : "#333",
            }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Content;
