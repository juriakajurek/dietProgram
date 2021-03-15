import { Row, Col, Image } from "react-bootstrap";
import styles from "./BenefitsSection.module.scss";

function BenefitsSection(props) {
  return (
    <>
      <Row
        className={`${styles.section} min-vw-75 h-auto m-5 d-flex flex-row align-items-center`}
      >
        {props.data.map((benefit) => {
          return (
            <Col
              className={`${styles.card} d-flex flex-column justify-content-center align-items-center`}
              lg
            >
              <Image
                src={benefit.imageSrc}
                alt={benefit.imageAlt}
                className="p-5 "
              />
              <h5 className="px-5 mx-2 ">{benefit.header}</h5>
              <p className="mt-1 px-5 mx-2 ">{benefit.paragraph}</p>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default BenefitsSection;
