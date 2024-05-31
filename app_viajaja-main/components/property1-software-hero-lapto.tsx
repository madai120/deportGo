import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./property1-software-hero-lapto.module.css";

const Property1SoftwareHeroLapto: NextPage = () => {
  return (
    <section className={styles.property1softwareHeroLapto}>
      <div className={styles.wrapper}>
        <div className={styles.copyContainerWrapper}>
          <div className={styles.copyContainer}>
            <div className={styles.copyComponent}>
              <h1 className={styles.heading}>
                Dividir costos de viaje facilmente
              </h1>
              <div className={styles.descagarParent}>
                <h1 className={styles.descagar}>Descargar aplicacion de</h1>
                <div className={styles.frameParent}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <img
                      className={styles.vectorIcon}
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                    <div className={styles.frameGroup}>
                      <div className={styles.getItOnWrapper}>
                        <div className={styles.getItOn}>Get it on</div>
                      </div>
                      <h3 className={styles.googlePlay}>Google Play</h3>
                    </div>
                  </div>
                  <div className={styles.downloadOnTheParent}>
                    <div className={styles.downloadOnThe}>Download on the</div>
                    <Button
                      className={styles.frameItem}
                      variant="outline-primary"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.buttonCombo}>
                <Button className={styles.ctaButton} variant="primary" />
                <Button
                  className={styles.secondaryButton}
                  variant="outline-primary"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mediaLayouts}>
          <div className={styles.device}>
            <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
            <img className={styles.mainIcon} alt="" src="/main@2x.png" />
            <img
              className={styles.iphone13MockupLabel}
              loading="lazy"
              alt=""
              src="/iphone-13-mockup-label@2x.png"
            />
            <img className={styles.mainIcon1} alt="" src="/main-1@2x.png" />
            <img
              className={styles.iphone13MockupLabel1}
              loading="lazy"
              alt=""
              src="/iphone-13-mockup-label-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property1SoftwareHeroLapto;
