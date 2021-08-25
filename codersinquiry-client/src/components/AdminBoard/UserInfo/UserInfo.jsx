import "./UserInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function UserInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Active User</span>
        <div className="featuredMoneyContainer">
          <span className="featuredNumber">2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Moderator</span>
        <div className="featuredMoneyContainer">
          <span className="featuredNumber">445</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Admin User</span>
        <div className="featuredMoneyContainer">
          <span className="featuredNumber">22</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}