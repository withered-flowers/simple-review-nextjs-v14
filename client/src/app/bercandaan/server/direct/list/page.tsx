// Server Component
import ServerTableDirect from "@/components/ServerTableDirect";
import { fetchBercandaan } from "@/externals/services/bercandaan";

// Functional Component
const ListBerCandaanPage = async () => {
  const bercandaan = await fetchBercandaan();

  return (
    <>
      <ServerTableDirect dataBercandaan={bercandaan} />
    </>
  );
};

export default ListBerCandaanPage;
