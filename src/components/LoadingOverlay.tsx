import { BarLoader } from "react-spinners";

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 bg-slate-400 bg-opacity-80 flex items-center justify-center z-50">
      <BarLoader color="#1554e0" height={8} width={250} />
    </div>
  );
};

export default LoadingOverlay;
