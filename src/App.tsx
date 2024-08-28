import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://s1.cdn.autoevolution.com/images/news/gallery/1989-batmobile-gets-full-restoration-batman-says-it-s-his-favorite_3.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
