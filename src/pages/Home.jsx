import Posts from "../components//postGrid/Posts";
import Sidebar from "../components/Navbar/Sidebar";

export default function Home() {
  return (
    <div className="wrapper">
      <Sidebar />
      <Posts />
    </div>
  );
}
