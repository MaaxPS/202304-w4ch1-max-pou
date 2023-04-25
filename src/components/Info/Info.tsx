interface InfoProps {
  name: string;
  profession: string;
  status: string;
  twitter: string;
}

export const Info = ({
  name,
  profession,
  status,
  twitter,
}: InfoProps): JSX.Element => {
  return (
    <div className="gentleman__data-container">
      <h2 className="gentleman__name">{name}</h2>
      <ul className="gentleman__data-list">
        <li className="gentleman__data">
          <span className="gentleman__data-label">Profesión:</span>
          {profession}
        </li>
        <li className="gentleman__data">
          <span className="gentleman__data-label">Estado:</span> {status}
        </li>
        <li className="gentleman__data">
          <span className="gentleman__data-label">Twitter:</span> {twitter}
        </li>
      </ul>
    </div>
  );
};
