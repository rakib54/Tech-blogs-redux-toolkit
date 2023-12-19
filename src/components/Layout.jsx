// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <div className="p-6">{children}</div>
    </div>
  );
}
