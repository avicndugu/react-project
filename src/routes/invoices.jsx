import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Invoices</h2>
      <div>
        {invoices.map((invoice) => (
          <Link to={`/invoices/${invoice.number}`}>{invoice.name}</Link>
        ))}
      </div>
      <Outlet />
    </main>
  );
}