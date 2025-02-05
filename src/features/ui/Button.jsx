
const Button = ({ label, onClick, className, disabled}) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
