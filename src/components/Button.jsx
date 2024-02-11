const Button = (props) => {
  return (
    <button onClick={props.handleSideBar} className="btn">
      {props.children}
    </button>
  );
};

export default Button;
