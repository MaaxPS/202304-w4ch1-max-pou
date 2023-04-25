/* eslint-disable react/jsx-key */
import { Button } from "../Button/Button";
import { Gentleman } from "../Gentleman/Gentleman";

const señores = [
  {
    id: 1,
    name: "Bertin Osborne",
    status: "Alive",
    profession: "Youtuber",
    twitter: "@osbourne",
    picture: "img/bertin.jpg",
    alternativeText: "Osbourne pointing at you",
    selected: false,
  },
  {
    id: 2,
    name: "The Farytale",
    status: "RIP",
    profession: "Influencer",
    twitter: "pending",
    picture: "img/fary.jpg",
    alternativeText: "The Fary pointing at you",
    selected: false,
  },
  {
    id: 3,
    name: "Julius Churchs",
    status: "Alive",
    profession: "Java developer",
    twitter: "@julius_churchs",
    picture: "img/julio.jpg",
    alternativeText: "Churchs pointing at you",
    selected: false,
  },
];

const App = (): JSX.Element => {
  const buttonText = "Marcar todos";
  const buttonClassName = "button button--select";

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">Señores que te apuntan con el dedo</h1>
      </header>
      <section className="controls">
        <p className="info">
          {señores.length} señores que te apuntan con el dedo marcados
        </p>
        <Button
          text={buttonText}
          className={buttonClassName}
          señores={señores}
        />
      </section>
      <main className="main">
        <ul className="gentlemen">
          {señores.map((señor) => (
            <Gentleman key={señor.id} señor={señor} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
