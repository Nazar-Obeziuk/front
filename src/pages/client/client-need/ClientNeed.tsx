import React from "react";
import styles from "./ClientNeed.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ClientNeed: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className={styles.client__individual_section}>
        <div className={styles.container}>
          <div className={styles.client__individual_wrapper}>
            <div className={styles.client__individual_route}>
              <NavLink to={"/"}>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  className={styles.client__router_icon}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9412 9.69951C15.61 9.92767 15.2538 9.98393 14.8538 9.96518C14.8507 11.6123 14.8663 13.2251 14.8444 14.866C14.8288 15.7411 14.0819 16.4756 13.207 16.4912C12.332 16.5069 11.454 16.4975 10.5759 16.4944C10.2946 16.4944 10.1071 16.2912 10.1071 15.9911C10.104 15.2504 10.1071 14.5097 10.104 13.7689C10.104 13.2813 10.104 12.7906 10.104 12.3031C10.1009 11.7998 9.78529 11.4779 9.27594 11.4717C8.79783 11.4654 8.31973 11.4654 7.84163 11.4717C7.34478 11.4779 7.02605 11.803 7.02605 12.2999C7.02292 13.5095 7.02292 14.7159 7.02292 15.9255C7.02292 16.3287 6.85418 16.4975 6.44795 16.4975C5.65424 16.4975 4.86053 16.4975 4.06682 16.4975C3.02 16.4944 2.27629 15.763 2.27004 14.7128C2.26379 13.1313 2.26691 11.5467 2.26691 9.96518C0.816983 10.1027 -0.0267248 8.47119 1.01072 7.41789C3.15437 5.2738 5.29801 3.1297 7.44478 0.988734C7.57915 0.848087 7.73539 0.732443 7.90725 0.638678C8.40723 0.388638 9.18532 0.466776 9.66029 0.954354C10.8634 2.18893 12.0914 3.3985 13.3101 4.61744C14.2444 5.55509 15.1725 6.49899 16.1225 7.42414C16.7474 8.03362 16.6881 9.20255 15.9412 9.69951Z"
                    stroke="white"
                    strokeOpacity="0.8"
                  />
                </svg>
              </NavLink>
              <img
                src="../../images/navigation-arrow.svg"
                alt="router arrow"
                className={styles.client__router_arrow}
              />
              <p
                className={`${styles.client__router_name} ${styles.client__router_active}`}
              >
                {t("clientWhoNeeds.clientWhoNeedsRoute")}
              </p>
            </div>
            <div className={styles.client__individual_main}>
              <h2 className={styles.client__main_title}>
                <span className={styles.client__title_primary}>
                  {t("clientWhoNeeds.clientWhoNeedsTitle1Child1")}
                </span>
                {t("clientWhoNeeds.clientWhoNeedsTitle1Child2")}
              </h2>
              <div className={styles.client__main_insoles}>
                <div className={styles.home__insole_item}>
                  <img
                    src="../../images/soldier-icon.svg"
                    alt="insole item icon"
                    className={styles.home__item_image}
                  />
                  <p className={styles.home__item_text}>
                    {t("clientWhoNeeds.clientWhoNeedsItemText1")}
                  </p>
                </div>
                <div className={styles.home__insole_item}>
                  <img
                    src="../../images/sportman-icon.svg"
                    alt="insole item icon"
                    className={styles.home__item_image}
                  />
                  <p className={styles.home__item_text}>
                    {t("clientWhoNeeds.clientWhoNeedsItemText2")}
                  </p>
                </div>
                <div className={styles.home__insole_item}>
                  <img
                    src="../../images/pregnant-icon.svg"
                    alt="insole item icon"
                    className={styles.home__item_image}
                  />
                  <p className={styles.home__item_text}>
                    {t("clientWhoNeeds.clientWhoNeedsItemText3")}
                  </p>
                </div>
                <div className={styles.home__insole_item}>
                  <img
                    src="../../images/children-icon.svg"
                    alt="insole item icon"
                    className={styles.home__item_image}
                  />
                  <p className={styles.home__item_text}>
                    {t("clientWhoNeeds.clientWhoNeedsItemText4")}
                  </p>
                </div>
                <div className={styles.home__insole_item}>
                  <img
                    src="../../images/old-icon.svg"
                    alt="insole item icon"
                    className={styles.home__item_image}
                  />
                  <p className={styles.home__item_text}>
                    {t("clientWhoNeeds.clientWhoNeedsItemText5")}
                  </p>
                </div>
                <div className={styles.home__insole_item}>
                  <img
                    src="../../images/flat-foot-icon.svg"
                    alt="insole item icon"
                    className={styles.home__item_image}
                  />
                  <p className={styles.home__item_text}>
                    {t("clientWhoNeeds.clientWhoNeedsItemText6")}
                  </p>
                </div>
                <div className={styles.home__insole_item}>
                  <img
                    src="../../images/foot-hole-icon.svg"
                    alt="insole item icon"
                    className={styles.home__item_image}
                  />
                  <p className={styles.home__item_text}>
                    {t("clientWhoNeeds.clientWhoNeedsItemText7")}
                  </p>
                </div>
                <div className={styles.home__insole_item}>
                  <img
                    src="../../images/pain-icon.svg"
                    alt="insole item icon"
                    className={styles.home__item_image}
                  />
                  <p className={styles.home__item_text}>
                    {t("clientWhoNeeds.clientWhoNeedsItemText8")}
                  </p>
                </div>
                <div className={styles.home__insole_item}>
                  <img
                    src="../../images/work-on-foot-icon.svg"
                    alt="insole item icon"
                    className={styles.home__item_image}
                  />
                  <p className={styles.home__item_text}>
                    {t("clientWhoNeeds.clientWhoNeedsItemText9")}
                  </p>
                </div>
                <div className={styles.home__insole_item}>
                  <img
                    src="../../images/size-icon.svg"
                    alt="insole item icon"
                    className={styles.home__item_image}
                  />
                  <p className={styles.home__item_text}>
                    {t("clientWhoNeeds.clientWhoNeedsItemText10")}
                  </p>
                </div>
                <div className={styles.home__insole_item}>
                  <img
                    src="../../images/amputation-icon.svg"
                    alt="insole item icon"
                    className={styles.home__item_image}
                  />
                  <p className={styles.home__item_text}>
                    {t("clientWhoNeeds.clientWhoNeedsItemText11")}
                  </p>
                </div>
                <div className={styles.home__insole_item}>
                  <img
                    src="../../images/varusna-icon.svg"
                    alt="insole item icon"
                    className={styles.home__item_image}
                  />
                  <p className={styles.home__item_text}>
                    {t("clientWhoNeeds.clientWhoNeedsItemText12")}
                  </p>
                </div>
                <div className={styles.home__insole_item}>
                  <img
                    src="../../images/overweight-icon.svg"
                    alt="insole item icon"
                    className={styles.home__item_image}
                  />
                  <p className={styles.home__item_text}>
                    {t("clientWhoNeeds.clientWhoNeedsItemText13")}
                  </p>
                </div>
                <div className={styles.home__insole_item}>
                  <img
                    src="../../images/diabet-icon.svg"
                    alt="insole item icon"
                    className={styles.home__item_image}
                  />
                  <p className={styles.home__item_text}>
                    {t("clientWhoNeeds.clientWhoNeedsItemText14")}
                  </p>
                </div>
                <div className={styles.home__insole_item}>
                  <img
                    src="../../images/diffirent-icon.svg"
                    alt="insole item icon"
                    className={styles.home__item_image}
                  />
                  <p className={styles.home__item_text}>
                    {t("clientWhoNeeds.clientWhoNeedsItemText15")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.client__orthopedic_section}>
        <div className={styles.container}>
          <div className={styles.client__orthopedic_wrapper}>
            <h2 className={styles.client__main_title}>
              {t("clientWhoNeeds.clientWhoNeedsTitle2Child1")}
              <span className={styles.client__title_primary}>
                {t("clientWhoNeeds.clientWhoNeedsTitle2Child2")}
              </span>
            </h2>
            <div className={styles.client__main_insoles}>
              <div className={styles.home__insole_item}>
                <img
                  src="../../images/protect-icon.svg"
                  alt="insole item icon"
                  className={styles.home__item_image}
                />
                <p className={styles.home__item_text}>
                  {t("clientWhoNeeds.clientWhoNeedsItemText16")}
                </p>
              </div>
              <div className={styles.home__insole_item}>
                <img
                  src="../../images/load-on-foot-icon.svg"
                  alt="insole item icon"
                  className={styles.home__item_image}
                />
                <p className={styles.home__item_text}>
                  {t("clientWhoNeeds.clientWhoNeedsItemText17")}
                </p>
              </div>
              <div className={styles.home__insole_item}>
                <img
                  src="../../images/stabilization-icon.svg"
                  alt="insole item icon"
                  className={styles.home__item_image}
                />
                <p className={styles.home__item_text}>
                  {t("clientWhoNeeds.clientWhoNeedsItemText18")}
                </p>
              </div>
              <div className={styles.home__insole_item}>
                <img
                  src="../../images/endurance-icon.svg"
                  alt="insole item icon"
                  className={styles.home__item_image}
                />
                <p className={styles.home__item_text}>
                  {t("clientWhoNeeds.clientWhoNeedsItemText19")}
                </p>
              </div>
              <div className={styles.home__insole_item}>
                <img
                  src="../../images/aparat-icon.svg"
                  alt="insole item icon"
                  className={styles.home__item_image}
                />
                <p className={styles.home__item_text}>
                  {t("clientWhoNeeds.clientWhoNeedsItemText20")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientNeed;
