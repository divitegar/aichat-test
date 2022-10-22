import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="bg-layout">
      <div className="main-layout">{children}</div>
    </div>
  );
}
