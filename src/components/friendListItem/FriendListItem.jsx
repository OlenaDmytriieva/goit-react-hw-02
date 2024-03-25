import style from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img className={style.avatar} src={avatar} alt="Avatar" />
      <p className={style.title}>{name}</p>
      <p className={isOnline ? style.greenStatus : style.redStatus}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
};
