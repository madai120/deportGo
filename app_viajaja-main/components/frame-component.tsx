import type { NextPage } from "next";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <footer className={styles.bubbleContainerWrapper}>
      <div className={styles.bubbleContainer}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
              <div className={styles.brandname}>SplitTravel</div>
            </div>
            <div className={styles.slogan}>Share Costs Seamlessly</div>
          </div>
          <div className={styles.links}>
            <div className={styles.list}>
              <div className={styles.listHeading}>Company</div>
              <div className={styles.listLinkItem}>About</div>
              <div className={styles.listLinkItem1}>Careers</div>
              <div className={styles.listLinkItem2}>Newsroom</div>
            </div>
            <div className={styles.list1}>
              <div className={styles.listHeading1}>Features</div>
              <div className={styles.listLinkItem3}>Speed</div>
              <div className={styles.listLinkItem4}>Ease</div>
              <div className={styles.listLinkItem5}>Integration</div>
            </div>
            <div className={styles.list2}>
              <div className={styles.listHeading2}>Social</div>
              <div className={styles.listLinkItem6}>Twitter</div>
              <div className={styles.listLinkItem7}>Instagram</div>
              <div className={styles.listLinkItem8}>Threads</div>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.legals}>
          <div className={styles.copyrightWrapper}>
            <div className={styles.copyright}>All rights reserved 2024</div>
          </div>
          <div className={styles.listLinkItemParent}>
            <div className={styles.listLinkItem9}>Terms</div>
            <div className={styles.listLinkItem10}>Privacy</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
