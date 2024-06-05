import { TUser } from "../../shared/types/user";

type TUserInfoProps = {
  user: TUser | null;
};

const UserInfo = (props: TUserInfoProps): JSX.Element | null => {
  const { user } = props;
  return (
    <>
      {!user && "user not found"}
      {user && (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.phone}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default UserInfo;
