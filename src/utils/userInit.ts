import moment from "moment";
import { UserType } from "../state/slices/usersSlice";
export const initializeUserData = (user: UserType, isBtnUpdate?: boolean) => {
  const lastLoginDay = moment()
    .subtract(Math.floor(Math.random() * 27), "days")
    .format("MMMM DD, YYYY");

  const now = moment();
  const minutesDifference = now.diff(lastLoginDay, "minutes");
  const hoursDifference = now.diff(lastLoginDay, "hours");
  const daysDifference = now.diff(lastLoginDay, "days");
  let lastLoginMessage;
  if (daysDifference > 0) {
    lastLoginMessage = `Last login ${daysDifference} day${
      daysDifference !== 1 ? "s" : ""
    } ago`;
  } else if (hoursDifference > 0) {
    lastLoginMessage = `Last login ${hoursDifference} hour${
      hoursDifference !== 1 ? "s" : ""
    } ago`;
  } else if (minutesDifference > 0) {
    lastLoginMessage = `Last login ${minutesDifference} minute${
      minutesDifference !== 1 ? "s" : ""
    } ago`;
  } else {
    lastLoginMessage = "Last login just now";
  }

  const departments = [
    "Development",
    "Human Resources",
    "Accounting",
    "Marketing",
    "Sales",
    "Customer Service",
  ];

  const isActive = Boolean(Math.floor(Math.random() * 2));
  const statusColor = isActive ? "green" : "red";
  const statusStyle = `px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${statusColor}-100 text-${statusColor}-800`;

  const avatar = `https://avatar.iran.liara.run/public?username=${
    isBtnUpdate ? Date.now() : user.username
  }`;

  user = {
    ...user,
    lastLoginDay,
    lastLoginMessage,
    department: departments[Math.floor(Math.random() * 6)],
    isActive,
    statusColor,
    statusStyle,
    avatar,
  };
  return user;
};
