import Image from "next/image";
import styles from "./page.module.css";
import HomeSection from "./components/HomeSection";
import ServicesComponents from "./components/ServicesComponents";
import Expirence from "./components/Expirence";
import HireMe from "./components/HireMe";
import Projects from "./components/Projects";
import MyHistory from "./components/MyHistory";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomeSection />
        <ServicesComponents />
        <Expirence />
        <HireMe />
        <Projects />
        <MyHistory />
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
