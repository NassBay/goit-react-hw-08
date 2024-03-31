import PageTitle from "../components/PageTitle/PageTitle";
import css from "../components/PageTitle/PageTitle.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={css.homeContainer}>
      <PageTitle>Get In Touch</PageTitle>
      <p className={css.descrpt}>
        Life's adventures are best shared with loved ones by your side. Let's
        create unforgettable memories together. Give me a call, and let's embark
        on another journey of joy and laughter!"
      </p>
      
    </div>
  );
}
