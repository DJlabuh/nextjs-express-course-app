import styles from "./page.module.css";
import cource from "./course.json"

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
      {cource.lessons.map((lesson)=>{
        return <li key={lesson.name}>
          <h1>{lesson.name}</h1>
          <p>{lesson.title}</p>
          <p>{lesson.points}</p>
        </li>
      })}
      </ul>
    </main>
  );
}
