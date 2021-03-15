import { Container, Row, Col, Media, Button, Image } from "react-bootstrap";
import styles from "./MainPage.module.scss";
import generacja_i_kalendarz from "../../images/generacja_i_kalendarz.svg";
import diety_i_choroby from "../../images/diety_i_choroby.svg";
import jadlospisy from "../../images/jadlospisy.svg";
import baza_pacjentow from "../../images/baza_pacjentow.svg";
import karta_pacjenta from "../../images/karta_pacjenta.svg";
import organizacja_pracy from "../../images/organizacja_pracy.svg";
import oszczednosc_czasu from "../../images/oszczednosc_czasu.svg";
import Navbar from "../Navbar";
import PrimaryButton from "../PrimaryButton";
import InfoCard from "../InfoCard";
import BenefitSection from "../BenefitsSection";

function MainPage() {
  const benefits = [
    {
      header: "Karta pacjenta",
      paragraph:
        "Przyjemny i wygodny proces dodawania nowych pacjentów podczas wywiadu",
      imageSrc: karta_pacjenta,
      imageAlt: "karta pacjenta",
    },
    {
      header: "Lepsza organizacja pracy",
      paragraph: "Zwiększysz swoją produktywność i komfort pracy.",
      imageSrc: organizacja_pracy,
      imageAlt: "organizacja pracy",
    },
    {
      header: "Oszczędność czasu",
      paragraph: "Automatyczna generacja personalizowanych jadłospisów ",
      imageSrc: oszczednosc_czasu,
      imageAlt: "oszczędność czasu",
    },
  ];
  return (
    <>
      <Navbar />
      <Container className={`${styles.topContainer} min-vh-100 h-auto`}>
        <Row className="h-auto">
          <Col
            className={`${styles.topSection}  d-flex flex-column justify-content-center my-2`}
            lg
          >
            <h5>
              Rewolucyjne narzędzie <span>do tworzenia</span> spersonalizowanych
              diet
            </h5>
            <p className="mt-1 py-4 pr-5 mr-5">
              Twórz spersonalizowane diety z uwzględnieniem preferencji i chorób
              pacjenta w mniej niż 30 minut!
            </p>
            <Container className="px-0">
              <PrimaryButton size="lg" className=" px-4">
                Dołącz teraz
              </PrimaryButton>
              <Button className={styles.buttonLink} variant="link" size="lg">
                Jak to działa? ›
              </Button>
            </Container>
          </Col>
          <Col lg className={`${styles.topSection}   `}>
            <Media className={styles.imageContainer}>
              <Image
                className=" "
                src={generacja_i_kalendarz}
                alt="Generacja i kalendarz"
              />
            </Media>
          </Col>
        </Row>

        <Row className="min-vh-75 mt-5 mb-5 pb-5">
          <InfoCard
            right
            imageSrc={diety_i_choroby}
            imageAlt="diety_i_choroby"
            header={
              <>
                Baza diet i chorób <span>w jednym</span> miejscu
              </>
            }
            paragraph={
              <>
                Wybierz chorobę na jaką cierpi pacjent <span>a algorytm</span>{" "}
                uwzględni ją w jadłospisie. Masz do wyboru również nomenklatury
                diet. Wybierz jaką chcesz zastosować - resztę zrobi algorytm.
              </>
            }
          />
        </Row>
        <Row className="min-vh-75">
          <InfoCard
            left
            imageSrc={jadlospisy}
            imageAlt="jadlospisy"
            header={
              <>
                Jadłospisy <span>na jedno kliknięcie</span>
              </>
            }
            paragraph={
              <>
                Generator dobiera najlepiej pasujące potrawy z naszej bazy oraz
                uwzględnia wszystkie wykluczenia. Twórz spersonalizowane diety
                szybko i pewnie.
              </>
            }
          />
        </Row>
        <Row className="min-vh-75">
          <InfoCard
            right
            imageSrc={baza_pacjentow}
            imageAlt="baza pacjentow"
            header={
              <>
                Baza pacjentów <span>z wygodnym dostępem</span>
              </>
            }
            paragraph={
              <>
                Każdy program ma bazę pacjentów. Jeśli już z jakiegoś korzystasz
                pomożemy Ci przenieść dane!
              </>
            }
          />
        </Row>
      </Container>
      <Container className={` min-vw-100 p-0 m-0`}>
        <Container className={`${styles.background} min-vw-100`}>
          <Row
            className={`${styles} d-flex  justify-content-center align-items-center min-vh-75 min-vw-100`}
          >
            <BenefitSection data={benefits} />
          </Row>
        </Container>
      </Container>
      <Row>
        {" "}
        <InfoCard />
      </Row>
    </>
  );
}

export default MainPage;
