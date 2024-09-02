import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import LoadingOverlay from "./LoadingOverlay";
import { RootState } from "../state/store";

const PageContentWrapper = ({ children }: PropsWithChildren) => {
  const usersIsLoading = useSelector(
    (state: RootState) => state.users.isLoading
  );
  const tasksIsLoading = useSelector(
    (state: RootState) => state.tasks.isLoading
  );
  const usersIsError = useSelector((state: RootState) => state.users.isError);
  const tasksIsError = useSelector((state: RootState) => state.tasks.isError);

  const isError: any = usersIsError || tasksIsError;
  if (isError) {
    throw new Error(isError);
  }

  return (
    <div className="w-full p-4">
      {(usersIsLoading || tasksIsLoading) && <LoadingOverlay />}
      {children}
    </div>
  );
};

export default PageContentWrapper;
