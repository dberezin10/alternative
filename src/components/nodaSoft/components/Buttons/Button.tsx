type TButtonProps = {
  isLoading: boolean;
  onClick: () => void;
};

const Button = ({ isLoading, onClick }: TButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLoading}
      aria-label="get-user"
    >
      get random user
    </button>
  );
};

export default Button;
