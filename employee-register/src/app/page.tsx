import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import EmployeeTable from "@/components/EmployeeTable";

export default function Home() {
  return (
    <div className="w-screen">
      <Navbar />
      <Header />
      <EmployeeTable />
    </div>
  );
}
