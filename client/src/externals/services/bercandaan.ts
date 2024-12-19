import type { Bercandaan, BercandaanInput } from "../types/bercandaan";

const fetchBercandaan = async (): Promise<Bercandaan[]> => {
  const response = await fetch("http://localhost:3001/bercandaan", {
    method: "GET",
  });
  const responseJson = await response.json();

  return responseJson;
};

const createBercandaan = async (
  bercandaanInput: BercandaanInput,
): Promise<Bercandaan> => {
  const response = await fetch("http://localhost:3001/bercandaan", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bercandaanInput),
  });
  const responseJson = await response.json();

  return responseJson;
};

export { createBercandaan, fetchBercandaan };
