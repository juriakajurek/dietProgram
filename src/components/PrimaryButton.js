import { Button } from "react-bootstrap";
import primaryButtonStyles from "./PrimaryButton.module.scss";

function PrimaryButton(props) {
  return (
    <>
      <Button
        variant="primary"
        size={props.size}
        className={`m-1 ${primaryButtonStyles.primaryButton} ${props.className} `}
      >
        {props.children}
      </Button>
    </>
  );
}

export default PrimaryButton;
