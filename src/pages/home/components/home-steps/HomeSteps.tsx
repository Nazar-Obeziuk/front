import React from "react";
import styles from "./HomeSteps.module.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const HomeSteps: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.home__steps_section}>
      <div className={styles.container}>
        <div className={styles.home__steps_wrapper}>
          <h2 className={styles.home__steps_title}>
            {t("home.homeSteps.homeStepsTitleChild1")}
            <span className={styles.home__steps_primary}>
              {t("home.homeSteps.homeStepsTitleChild2")}
            </span>
            {t("home.homeSteps.homeStepsTitleChild3")}
          </h2>
          <div className={styles.home__steps_main}>
            <div
              className={`${styles.home__steps_item} ${styles.home__steps_first}`}
            >
              <div className={styles.home__item_image}>
                <img
                  src="./images/step-1.jpg"
                  alt="step 1 banner"
                  className={styles.home__image_item}
                />
              </div>
              <div className={styles.home__item_info}>
                <h3 className={styles.home__info_title}>
                  {t("home.homeSteps.homeStepsCard1Title")}
                </h3>
                <p className={styles.home__info_text}>
                  {t("home.homeSteps.homeStepsCard1TextChild1")}
                  <a
                    href="https://google.com"
                    className={styles.home__text_primary}
                  >
                    {t("home.homeSteps.homeStepsCard1TextChild2")}
                  </a>
                  {t("home.homeSteps.homeStepsCard1TextChild3")}
                </p>
              </div>
            </div>
            <div
              className={`${styles.home__steps_item} ${styles.home__steps_second}`}
            >
              <div className={styles.home__item_image}>
                <img
                  src="./images/step-2.jpg"
                  alt="step 2 banner"
                  className={styles.home__image_item}
                />
              </div>
              <div className={styles.home__item_info}>
                <h3 className={styles.home__info_title}>
                  {t("home.homeSteps.homeStepsCard2Title")}
                </h3>
                <p className={styles.home__info_text}>
                  {t("home.homeSteps.homeStepsCard2Text")}
                  <svg
                    className={styles.home__text_icon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="24"
                      height="24"
                      fill="url(#pattern0_1478_57778)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_1478_57778"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          href="#image0_1478_57778"
                          transform="translate(0 0.0290698) scale(0.00290698)"
                        />
                      </pattern>
                      <image
                        id="image0_1478_57778"
                        width="344"
                        height="324"
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVgAAAFECAYAAABieCagAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgNzkuMTcxYzI3ZiwgMjAyMi8wOC8xNi0xODowMjo0MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0wMS0xN1QwOTo1NzozNCswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMDEtMThUMTE6MTM6NTYrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDEtMThUMTE6MTM6NTYrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk2MmU1YmY4LWQyZTgtMjQ0Mi1iMjdhLTRiNTFmOTIwMjE0NSIgeG1wTU06RG9jdW1lbnRJRD0i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"
                      />
                    </defs>
                  </svg>
                </p>
              </div>
            </div>
            <div
              className={`${styles.home__steps_item} ${styles.home__steps_third}`}
            >
              <div className={styles.home__item_image}>
                <img
                  src="./images/step-3.jpg"
                  alt="step 3 banner"
                  className={styles.home__image_item}
                />
              </div>
              <div className={styles.home__item_info}>
                <h3 className={styles.home__info_title}>
                  {t("home.homeSteps.homeStepsCard3Title")}
                </h3>
                <p className={styles.home__info_text}>
                  {t("home.homeSteps.homeStepsCard3Text")}
                </p>
              </div>
            </div>
            <div
              className={`${styles.home__steps_item} ${styles.home__steps_fourth}`}
            >
              <div className={styles.home__item_image}>
                <img
                  src="./images/step-4.jpg"
                  alt="step 4 banner"
                  className={styles.home__image_item}
                />
              </div>
              <div className={styles.home__item_info}>
                <h3 className={styles.home__info_title}>
                  {t("home.homeSteps.homeStepsCard4Title")}
                </h3>
                <p className={styles.home__info_text}>
                  {t("home.homeSteps.homeStepsCard4Text")}
                </p>
              </div>
            </div>
            <div
              className={`${styles.home__steps_item} ${styles.home__steps_fifth}`}
            >
              <div className={styles.home__item_image}>
                <img
                  src="./images/step-5.jpg"
                  alt="step 5 banner"
                  className={styles.home__image_item}
                />
              </div>
              <div className={styles.home__item_info}>
                <h3 className={styles.home__info_title}>
                  {t("home.homeSteps.homeStepsCard5Title")}
                </h3>
                <p className={styles.home__info_text}>
                  {t("home.homeSteps.homeStepsCard5Text")}
                </p>
              </div>
            </div>
            <div
              className={`${styles.home__steps_item} ${styles.home__steps_sixth}`}
            >
              <div className={styles.home__item_image}>
                <img
                  src="./images/step-6.jpg"
                  alt="step 6 banner"
                  className={styles.home__image_item}
                />
              </div>
              <div className={styles.home__item_info}>
                <h3 className={styles.home__info_title}>
                  {t("home.homeSteps.homeStepsCard6Title")}
                </h3>
                <p className={styles.home__info_text}>
                  {t("home.homeSteps.homeStepsCard6Text")}
                  <svg
                    className={styles.home__text_icon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="24"
                      height="24"
                      fill="url(#pattern0_1478_57778)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_1478_57778"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          href="#image0_1478_57778"
                          transform="translate(0 0.0290698) scale(0.00290698)"
                        />
                      </pattern>
                      <image
                        id="image0_1478_57778"
                        width="344"
                        height="324"
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVgAAAFECAYAAABieCagAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgNzkuMTcxYzI3ZiwgMjAyMi8wOC8xNi0xODowMjo0MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0wMS0xN1QwOTo1NzozNCswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMDEtMThUMTE6MTM6NTYrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDEtMThUMTE6MTM6NTYrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk2MmU1YmY4LWQyZTgtMjQ0Mi1iMjdhLTRiNTFmOTIwMjE0NSIgeG1wTU06RG9jdW1lbnRJRD0i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"
                      />
                    </defs>
                  </svg>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.home__steps_actions}>
            <button
              className={`${styles.home__actions_button} ${styles.home__actions_order}`}
              type="button"
            >
              {t("home.homeSteps.homeStepsButtonOrderText")}
            </button>
            <NavLink
              to={"https://youtu.be/wzwtNwJ7TLQ"}
              target={"_blank"}
              className={`${styles.home__actions_button} ${styles.home__actions_video}`}
              type="button"
            >
              {t("home.homeSteps.homeStepsButtonVideoText")}
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSteps;
