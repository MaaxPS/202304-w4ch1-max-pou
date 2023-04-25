export interface señor {
  id: number;
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
  selected: boolean;
}

interface ButtonProps {
  text: string;
  className: string;
  señores: señor[];
}

export const Button = ({
  text,
  className,
  señores,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={className}
      onClick={() => {
        señores.forEach((señor) => (señor.selected = true));
      }}
    >
      {text}
    </button>
  );
};
