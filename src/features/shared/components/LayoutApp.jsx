import AnimateWrapper from "./AnimateWrapper";

import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import LoadingScreen from "./LoadingScreen";

export default function LayoutApp({ children, hideSidebar }) {
  const { loading: loadingDashboard, customerLoading } = useSelector(
    (state) => state.dashboard
  );
  const { loadingOutletList } = useSelector((state) => state.shared);
  return (
    <>
      <div className="disable_mobile_screen d-flex d-sm-none">
        <div className="text-center">
          <h2>📵 </h2>
          <p>Mobile screen not allowed!!</p>
        </div>
      </div>
      <div className="layoutapp">
        {(loadingDashboard || loadingOutletList || customerLoading) && (
          <LoadingScreen />
        )}

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
    </>
  );
}
