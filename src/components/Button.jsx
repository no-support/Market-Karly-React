import '@/styles/components/button.scss';

const Button = (props) => {
  const { label, styleClass, onClick, disabled } = props;

  return (
    <button className={styleClass} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
