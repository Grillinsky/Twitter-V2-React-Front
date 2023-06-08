import { useSelector } from "react-redux";
import SidebarLeft from "../sidebars/SidebarLeft";
import SidebarRight from "../sidebars/SidebarRight";
import Feed from "../feed/Feed";

import "../feed/home.css";

function Home() {
  const user = useSelector((state) => state.user);
  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-2 col-2">
          <SidebarLeft user={user}></SidebarLeft>
        </div>
        <div className="col-xxl-6 col-8 scrolleable">
          <Feed></Feed>
        </div>
        <div className="col-xxl-4 d-xl-none d-xxl-block pt-3">
          <SidebarRight></SidebarRight>
        </div>
      </div>
    </div>
  );
}

export default Home;
