import type { NextPage } from "next";
import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import styles from "./property1-simple-centered-sig.module.css";

const Property1SimpleCenteredSig: NextPage = () => {
  const onGoogleLoginClick = useCallback(() => {
    window.open("https://myaccount.google.com/");
  }, []);

  return (
    <div className={styles.property1simpleCenteredSig}>
      <div className={styles.signUpContainer}>
        <div className={styles.copyComponent}>
          <div className={styles.imageLummiCategoryavatParent}>
            <img
              className={styles.imageLummiCategoryavat}
              loading="lazy"
              alt=""
              src="/image--lummi-categoryavatars@2x.png"
            />
            <div className={styles.signUpHeadingParent}>
              <h1 className={styles.signUpHeading}>Sign up</h1>
              <div className={styles.subheading}>Join Us Today!</div>
            </div>
            <Button
              className={styles.googleLogin}
              variant="primary"
              onClick={onGoogleLoginClick}
            />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.lineWrapper}>
              <div className={styles.line} />
            </div>
            <div className={styles.or}>or</div>
            <div className={styles.lineContainer}>
              <div className={styles.line1} />
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.input}>
              <div className={styles.label}>Your Name</div>
              <Form className={styles.inputForm}>
                <Form.Control type="text" />
              </Form>
            </div>
            <Button className={styles.button} variant="primary" />
          </div>
          <div className={styles.byContinuingYou}>
            By signing up, you agree to our terms.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1SimpleCenteredSig;
