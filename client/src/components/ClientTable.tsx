"use client";

import { Bercandaan } from "@/externals/types/bercandaan";
import { useEffect, useState } from "react";

const ClientTable = () => {
  const [arrBercandaan, setArrBercandaan] = useState<Bercandaan[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3001/bercandaan", {
        method: "GET",
      });
      const responseJson: Bercandaan[] = await response.json();

      setArrBercandaan(responseJson);
    })();
  }, []);

  return (
    <table className="table-auto bg-gray-100">
      <thead>
        <tr>
          <th colSpan={4} className="px-4 py-2 text-center text-xl">
            Client Table
          </th>
        </tr>
        <tr>
          <th className="p-4">Id</th>
          <th className="p-4">Setup</th>
          <th className="p-4">Punchline</th>
          <th className="p-4">Type</th>
        </tr>
      </thead>
      <tbody>
        {arrBercandaan.map((bercanda) => (
          <tr key={bercanda.id}>
            <td className="px-4 py-2">{bercanda.id}</td>
            <td className="px-4 py-2">{bercanda.setup}</td>
            <td className="px-4 py-2">{bercanda.punchline}</td>
            <td className="px-4 py-2">{bercanda.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientTable;
