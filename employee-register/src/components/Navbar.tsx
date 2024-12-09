"use client";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex items-center justify-between px-36">
      <div className="flex items-center gap-2">
        <div className="bg-[#7541fa] text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold">
          TD
        </div>
        <h1 className="text-lg text-gray-700 font-semibold">Teste Doqr</h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-purple-300"></div>
        <span className="text-gray-700">Seu Nome</span>
      </div>
    </nav>
  );
}
