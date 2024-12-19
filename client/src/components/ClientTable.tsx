"use client";

const ClientTable = () => {
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
        <tr>
          <td className="px-4 py-2">1</td>
          <td className="px-4 py-2">Lorem Ipsum</td>
          <td className="px-4 py-2">Dolor sit amet</td>
          <td className="px-4 py-2">General</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ClientTable;
