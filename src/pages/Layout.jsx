import Navbar from "../components/Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="p-6">{children}</div>
      </div>
    </>
  );
}
