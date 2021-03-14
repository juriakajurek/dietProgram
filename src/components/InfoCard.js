import { Row, Col, Media, Image } from "react-bootstrap";
import styles from "./InfoCard.module.scss";

function InfoCard(props) {
  let right = props?.right || !props.left;

  const ImageColumn = () => {
    return (
      <Col lg className="py-5">
        <Media>
          <Image
            className=" img-fluid "
            src={props.imageSrc}
            alt={props.imageAlt}
          />
        </Media>
      </Col>
    );
  };

  return (
    <>
      <Row className={`w-100 h-auto my-4`}>
        {right ? <ImageColumn /> : ""}

        <Col
          className={`${styles.section}  d-flex flex-column justify-content-center`}
          lg
        >
          <h5 className="px-5 mx-2 ">{props.header}</h5>
          <p className="mt-1 px-5 mx-2 ">{props.paragraph}</p>
        </Col>

        {!right ? <ImageColumn /> : ""}
      </Row>
    </>
  );
}

export default InfoCard;
