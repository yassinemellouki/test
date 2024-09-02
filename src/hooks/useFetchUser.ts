import { useDispatch, useSelector } from "react-redux";
import {
  userRequest,
  usersRequest,
  UsersType,
} from "../state/slices/usersSlice";
import { RootState } from "../state/store";
import { useEffect } from "react";

const useFetchUser = () => {
  const { isError, data }: UsersType = useSelector(
    (state: RootState) => state.users
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersRequest());
  }, [dispatch]);

  const handleUserUpdate = ({ id }: { id: string }) => {
    dispatch(userRequest({ id }));
  };

  return { isError, handleUserUpdate, data };
};

export default useFetchUser;
