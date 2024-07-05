import React from "react";
import styles from "./AdminProductReviewsTable.module.css";
import { toast } from "react-toastify";
import { IProductReview } from "../../../../../../../../../../services/products/product.interface";
import { deleteReview } from "../../../../../../../../../../services/reviews/reviews";

interface Props {
  productReviews: IProductReview[];
  getAll: () => void;
}

const AdminProductReviewsTable: React.FC<Props> = ({
  productReviews,
  getAll,
}) => {
  const notify = (message: string) => toast(message);

  const handleEditProductReview = (productReview: IProductReview) => {};

  const handleDeleteProductReview = async (id: number) => {
    const token = localStorage.getItem("token");

    if (token) {
      const response = await deleteReview(id, token);
      notify(response.message);
      getAll();
    }
  };

  return (
    <div className={styles.admin__table_block}>
      {productReviews.length > 0 ? (
        <table className={styles.admin__table_item}>
          <thead className={styles.admin__table_head}>
            <tr className={styles.admin__table_tr}>
              <th className={styles.admin__table_th}>Рейтинг</th>
              <th className={styles.admin__table_th}>Назва (Укр)</th>
              <th className={styles.admin__table_th}>Назва (Англ)</th>
              <th className={styles.admin__table_th}>Опис (Укр)</th>
              <th className={styles.admin__table_th}>Опис (Англ)</th>
              <th className={styles.admin__table_th}>Плюси (Укр)</th>
              <th className={styles.admin__table_th}>Плюси (Англ)</th>
              <th className={styles.admin__table_th}>Мінуси (Укр)</th>
              <th className={styles.admin__table_th}>Мінуси (Англ)</th>
              <th className={styles.admin__table_th}>Дії</th>
            </tr>
          </thead>
          <tbody className={styles.admin__table_body}>
            {productReviews.map(
              (adminProductReview: IProductReview, index: number) => {
                const starsArray = [];

                for (let i = 1; i <= adminProductReview.stars; i++) {
                  starsArray.push(i);
                }

                return (
                  <tr key={index} className={styles.admin__table_tr}>
                    <td className={styles.admin__table_td}>
                      {starsArray.map((index: number) => (
                        <img
                          key={index}
                          className={styles.admin__table_star}
                          src="../../images/review-star.svg"
                          alt="star icon"
                        />
                      ))}
                      ({starsArray.length > 0 && adminProductReview.stars})
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminProductReview.name_ua}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminProductReview.name_en}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminProductReview.description_ua}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminProductReview.description_en}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminProductReview.pluses_ua}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminProductReview.pluses_en}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminProductReview.minuses_ua}
                    </td>
                    <td className={styles.admin__table_td}>
                      {adminProductReview.minuses_en}
                    </td>
                    <td
                      className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
                    >
                      <button
                        onClick={() =>
                          handleDeleteProductReview(adminProductReview.id)
                        }
                        className={styles.admin__td_action}
                        type="button"
                      >
                        Видалити
                      </button>
                      <button
                        onClick={() =>
                          handleEditProductReview(adminProductReview)
                        }
                        className={styles.admin__td_action}
                        type="button"
                      >
                        Редагувати
                      </button>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      ) : (
        <p className={styles.admin__table_empty}>
          Відгуків ще немає, додайте одиного щоб побачити його тут...
        </p>
      )}
    </div>
  );
};

export default AdminProductReviewsTable;
