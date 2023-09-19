import { useEffect, useState } from "react";
import { User, UserRol, initUser } from "../../../../interfaces/User";

import styles from "./ContractsForm.module.css";
import Input from "../../../../components/Inputs/Input";
import SelectInput from "../../../../components/Inputs/SelectInput";

export interface Props {
  data: User | null;
  handleClose: () => void;
  handleSubmit: (user: User) => void;
}

export default function ContractsForm({ data, handleClose, handleSubmit }: Props) {
  const [user, setUser] = useState<User>(initUser());

  useEffect(() => {
    if (data) setUser(data);
  }, [data]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h3 className={styles.headerTitle}>New user</h3>
          <button className={styles.headerClose} type="button" onClick={handleClose}>X</button>
        </header>
        <form className={styles.form} onSubmit={() => handleSubmit(user)}>
          <SelectInput
            name="rol"
            label="Rol"
            value={user.rol}
            list={[UserRol.USER, UserRol.ADMIN]}
            handleChange={handleChange}
          />
          <Input
            name="name"
            label="Name"
            value={user.name}
            handleChange={handleChange}
          />
          <Input
            name="email"
            label="Email"
            value={user.email}
            handleChange={handleChange}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            value={user.password}
            handleChange={handleChange}
          />
          <button className="btn btn-success" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  )
}
