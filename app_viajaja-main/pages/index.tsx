import type { NextPage } from "next";
import Property1SoftwareHeroLapto from "../components/property1-software-hero-lapto";
import Property1SimpleCenteredSig from "../components/property1-simple-centered-sig";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const TravelCostSharingAppHome: NextPage = () => {
  return (
    <div className={styles.travelCostSharingAppHome}>
      <header className={styles.typebrandLeftAndNavOnRig}>
        <div className={styles.brand}>
          <div className={styles.brandname}>SplitTravel</div>
        </div>
        <div className={styles.navLinks}>
          <div className={styles.navLink}>
            <div className={styles.navLabel}>COMO FUNCIONA</div>
          </div>
          <div className={styles.navLink1}>
            <div className={styles.navLabel1}>SOBRE NOSOTROS</div>
          </div>
          <div className={styles.navLink2}>
            <div className={styles.navLabel2}>DESCARGAR</div>
          </div>
          <div className={styles.button}>
            <div className={styles.textContainer}>
              <div className={styles.cta}>REGISTRARSE</div>
            </div>
          </div>
        </div>
      </header>
      <Property1SoftwareHeroLapto />
      <section className={styles.property1simpleCenteredSigParent}>
        <Property1SimpleCenteredSig />
        <FrameComponent />
      </section>
    </div>
  );
};

export default TravelCostSharingAppHome;
