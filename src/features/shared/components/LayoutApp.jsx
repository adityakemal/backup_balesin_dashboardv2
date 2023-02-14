import AnimateWrapper from "./AnimateWrapper";

import SideBar from "./SideBar";
import Navbar from "./Navbar";

export default function LayoutApp({ children, hideSidebar }) {
  return (
    <div className="layoutapp">
      {/* <Navbar /> */}
      {hideSidebar ? (
        <AnimateWrapper>{children}</AnimateWrapper>
      ) : (
        <div className="d-flex py-0 px-0">
          <div className="wrapsidebar">
            <SideBar />
          </div>
          <div className="wrapcon">
            <Navbar />
            <div className="px-4">
              <AnimateWrapper>{children}</AnimateWrapper>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
