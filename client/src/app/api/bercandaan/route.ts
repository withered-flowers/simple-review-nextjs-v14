import { NextRequest, NextResponse } from "next/server";
import {
  createBercandaan,
  fetchBercandaan,
} from "@/externals/services/bercandaan";
import { Bercandaan } from "@/externals/types/bercandaan";
import { ZodInputValidationSchema } from "@/externals/repositories/schema";

export type GetBercandaanResponse = {
  data: Bercandaan[];
};

export type PostBercandaanResponse = {
  message: string;
};

// GET /api/bercandaan
export const GET = async () => {
  const dataBercandaan = await fetchBercandaan();

  return NextResponse.json<GetBercandaanResponse>(
    {
      data: dataBercandaan,
    },
    {
      status: 200,
    }
  );
};

// POST /api/bercandaan
export const POST = async (
  // param 1: request
  request: NextRequest
  // param 2: props (optional)
) => {
  // Kita mau terima data, dari mana?
  // ? asumsikan datanya json
  const data = await request.json();

  // Di sini lakukan validasi !
  const parsedData = ZodInputValidationSchema.parse(data);

  await createBercandaan(parsedData);

  return NextResponse.json(
    {
      message: "Berhasil nambahin data",
    },
    {
      status: 201,
    }
  );
};
