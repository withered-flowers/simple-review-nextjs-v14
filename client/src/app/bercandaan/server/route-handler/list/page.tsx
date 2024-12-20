import { GetBercandaanResponse } from "@/app/api/bercandaan/route";
import ServerTableRoute from "@/components/ServerTableRoute";

const comotDataBercandaanDariRouteHandler =
  async (): Promise<GetBercandaanResponse> => {
    const response = await fetch("http://localhost:3000/api/bercandaan", {
      method: "GET",
    });
    const dataBercandaan = await response.json();

    return dataBercandaan;
  };

const ListBerCandaanPage = async () => {
  const dataBercandaan = await comotDataBercandaanDariRouteHandler();

  return (
    <>
      <ServerTableRoute dataKumpulanBercanda={dataBercandaan.data} />
    </>
  );
};

export default ListBerCandaanPage;
