import React, { useState } from "react";
import useThrottle from "./shared/hooks/useThrottle";
import { TUser } from "./shared/types/user";
import { receiveRandomUser } from "./services/user";
import UserInfo from "./components/UserInfo/UserInfo";
import Button from "./components/Buttons/Button";

const NodaSoft = (): JSX.Element => {
  const [user, setUser] = useState<TUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetUser = useThrottle((): void => {
    setIsLoading(true);
    receiveRandomUser()
      .then((data) => {
        if (user?.id === data?.id) {
          return false;
        }
        if (data) {
          setUser(data);
        } else {
          setUser(null);
        }
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, 500);

  return (
    <div>
      <h3>Get a random user</h3>
      <Button isLoading={isLoading} onClick={handleGetUser} />
      {error && <p>Произошла следующая ошибка - {error}</p>}
      {isLoading ? "loading..." : <UserInfo user={user} />}
    </div>
  );
};

export default NodaSoft;
