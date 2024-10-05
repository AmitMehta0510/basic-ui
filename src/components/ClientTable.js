import ActionButtons from "./ActionButtons";

const ClientTable = () => {
  const clients = [
    {
      sno: 1,
      organization: "SmarDen Automations Pvt. Ltd.",
      label: "SmarDen - Fam",
      code: "8d0e3a40",
      createdOn: "2024-07-29",
    },
    {
      sno: 2,
      organization: "SmarDen Automations Pvt. Ltd.",
      label: "Shrey's Family",
      code: "7b9ef0e6",
      createdOn: "2024-07-31",
    },
    // Add more client objects here
  ];

  return (
    <table className="client-table">
      <thead>
        <tr>
          <th>Sno</th>
          <th>Organization</th>
          <th>Label</th>
          <th>Code</th>
          <th>Created On</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr key={client.sno}>
            <td>{client.sno}</td>
            <td>{client.organization}</td>
            <td>{client.label}</td>
            <td>{client.code}</td>
            <td>{client.createdOn}</td>
            <td>
              <ActionButtons />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientTable;
