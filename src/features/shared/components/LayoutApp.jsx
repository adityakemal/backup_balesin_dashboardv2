import AnimateWrapper from "./AnimateWrapper";

import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import LoadingScreen from "./LoadingScreen";

export default function LayoutApp({ children, hideSidebar }) {
  const { loading: loadingDashboard } = useSelector((state) => state.dashboard);
  const { loadingOutletList } = useSelector((state) => state.shared);
  return (
    <div className="layoutapp">
      {(loadingDashboard || loadingOutletList) && <LoadingScreen />}

      {/* <Navbar /> */}
      {hideSidebar ? (
        <AnimateWrapper>{children}</AnimateWrapper>
      ) : (
        <div className="d-flex py-0 px-0">
          <SideBar />
          <div className="wrapcon">
            <Navbar />
            <div className="px-4 container-lg pb-5 pt-4">
              <AnimateWrapper>{children}</AnimateWrapper>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
