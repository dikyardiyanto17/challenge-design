import "../css/sidebar.css";
import dummyprofile from "../assets/dummyicon.png";

export default function Sidebar2() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-2 color-custom">
            <div className="border-custom">
              <div id="square" className="margin-left-custom">
                Square
              </div>
              <div className="menu-custom margin-left-custom">
                <span>Menu</span>
              </div>
              <div className="margin-left-custom margin-bottom-custom" tabIndex="0">
                <span className="list-custom">Dashboard</span>
              </div>
              <div className="margin-left-custom margin-bottom-custom" tabIndex="0">
                <span className="list-custom">Stock</span>
              </div>
              <div className="margin-left-custom margin-bottom-custom" tabIndex="0">
                <span className="list-custom">Customer</span>
              </div>
              <div className="margin-left-custom margin-bottom-custom" tabIndex="0">
                <span className="list-custom">Restaurant</span>
              </div>
              <div className="margin-left-custom margin-bottom-custom" tabIndex="0">
                <span className="list-custom">Design</span>
              </div>
              <div className="margin-left-custom margin-bottom-custom" tabIndex="0">
                <span className="list-custom">Report</span>
              </div>
              <div className="margin-left-custom margin-bottom-custom" tabIndex="0">
                <span className="list-custom">Role & Admin</span>
              </div>
              <div className="margin-left-custom margin-bottom-custom" tabIndex="0">
                <span className="list-custom">Settings</span>
              </div>
              <div className="menu-custom margin-left-custom">
                <span>Integration</span>
              </div>
              <div className="margin-left-custom margin-bottom-custom" tabIndex="0">
                <span className="list-custom">Stock</span>
              </div>
              <div className="margin-left-custom margin-bottom-custom" tabIndex="0">
                <span className="list-custom">Supply</span>
              </div>
            </div>
            <div className="border-custom padding-custom">
              <div className="d-flex justify-content-center align-items-center">
                <div className="profile-custom-in">
                  <img className="profile-custom-out" src={dummyprofile} alt="dummyprofuile" />
                </div>
                <div className="margin-left-custom-2">
                  <div>
                    <span className="profile-name">Savannah N</span>
                  </div>
                  <div>
                    <span className="profile-description">Food Quality Manager</span>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center" style={{ marginTop: "20px" }}>
                <button className="button-custom">
                  <span style={{ marginLeft: "5px" }}>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
