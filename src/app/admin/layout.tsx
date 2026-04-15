import type { Metadata } from "next";
import "../globals.css";
import AdminLayoutClient from "./AdminLayoutClient";

export const metadata: Metadata = {
  title: "EatTogether Admin",
  description: "Admin dashboard for EatTogether platform",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex">
      <AdminLayoutClient>{children}</AdminLayoutClient>
    </div>
  );
}
