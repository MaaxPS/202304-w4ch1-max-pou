/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Info } from "../Info/Info";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";
import { señor } from "../Button/Button";

interface GentlemanProps {
  señor: señor;
}

export const Gentleman = ({
  señor: {
    alternativeText,
    name,
    picture,
    profession,
    selected,
    status,
    twitter,
  },
}: GentlemanProps): JSX.Element => {
  return (
    <li
      className="gentleman"
      onClick={() => {
        selected = true;
      }}
    >
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={picture}
          alt={alternativeText}
        />
        <span className="gentleman__initial">{name[0].toUpperCase()}</span>
      </div>
      <Info
        name={name}
        profession={profession}
        status={status}
        twitter={twitter}
      />
      <i className="icon gentleman__icon fas fa-check"></i>
    </li>
  );
};
