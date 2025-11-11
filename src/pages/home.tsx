import { Play } from "phosphor-react";
import styles from "../styles/modules/home.module.css";

export function Home() {
  return (
    <main>
      <form>
        <p>Vou trabalhar em</p>
        <input type="text" name="work" id="work" />
        <p>Por</p>
        <input
          type="number"
          name="hours"
          id="hours"
          step={5}
          min={5}
          max={60}
        />
        <p>minutos</p>
      </form>

      <section>
        <span>0</span>
        <span>0</span>
        <div>:</div>
        <span>0</span>
        <span>0</span>
      </section>

      <button>
        <Play /> Começar
      </button>
    </main>
  );
}
