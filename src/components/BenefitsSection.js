import { Row, Col, Image } from "react-bootstrap";
import styles from "./BenefitsSection.module.scss";

function BenefitsSection(props) {
  return (
    <>
      <Row
        className={`${styles.section} w-100 h-auto my-5 d-flex flex-row align-items-center`}
      >
        <div className={`${styles.background} m-0 p-0`}></div>
        {props.data.map((benefit) => {
          return (
            <Col
              className={`${styles.card} d-flex flex-column justify-content-center`}
              lg
            >
              <Image src={benefit.imageSrc} alt={benefit.imageAlt} />
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
