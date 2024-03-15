import { Alert } from "react-bootstrap";
//variant if i want success it would be green, danger red...
//children is whatever we are wrapping it
// if variant red and children hello = hello in red color
const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
