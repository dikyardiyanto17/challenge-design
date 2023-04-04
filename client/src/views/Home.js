import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="col-7">Hello Worlds</div>
        <Rightbar />
      </div>
    </>
  );
}
