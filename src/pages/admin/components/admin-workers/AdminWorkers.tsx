import React, { useEffect, useState } from "react";
import styles from "./AdminWorkers.module.css";
import AdminWorkersForm from "./components/admin-workers-form/AdminWorkersForm";
import AdminWorkersTable from "./components/admin-workers-table/AdminWorkersTable";
import { useNavigate } from "react-router-dom";
import { IWorker } from "../../../../services/workers/worker.interface";
import {
  deleteWorker,
  getAllWorkers,
} from "../../../../services/workers/workers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminWorkers: React.FC = () => {
  const [isAdminWorkersFormOpen, setAdminWorkersFormOpen] = useState(true);
  const [adminWorkers, setAdminWorkers] = useState<IWorker[]>([]);
  const navigate = useNavigate();

  const notify = (message: string) => toast(message);

  const getAll = async () => {
    const workersData = await getAllWorkers();
    setAdminWorkers(workersData);
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleWorkersForm = () => {
    setAdminWorkersFormOpen((prevState) => !prevState);
  };

  const onEditWorker = (worker: IWorker) => {
    navigate(`/prostopoo-admin-panel/update-worker/${worker.id}`);
  };

  const onDeleteWorker = async (id: number) => {
    const confirmation = window.confirm(
      "Ви впевнені, що хочете видалити цього працівника?"
    );

    if (confirmation) {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await deleteWorker(id, token);
        notify(response.message);
        getAll();
      }
    }
  };

  return (
    <div className={styles.admin__main_workers}>
      <div className={styles.admin__workers_form}>
        {isAdminWorkersFormOpen && (
          <button
            onClick={handleWorkersForm}
            className={styles.admin__form_show}
            type="button"
          >
            Додати працівника
          </button>
        )}
        {!isAdminWorkersFormOpen && (
          <AdminWorkersForm
            getAll={getAll}
            toggleWorkersForm={handleWorkersForm}
            key={"uniq1"}
          />
        )}
      </div>
      <AdminWorkersTable
        adminWorkers={adminWorkers}
        handleEditWorker={onEditWorker}
        handleDeleteWorker={onDeleteWorker}
        key={"uniq1"}
      />
    </div>
  );
};

export default AdminWorkers;
