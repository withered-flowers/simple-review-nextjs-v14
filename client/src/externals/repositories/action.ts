"use server";

import { redirect } from "next/navigation";
import { createBercandaan } from "../services/bercandaan";

import { revalidatePath } from "next/cache";
import { ZodInputValidationSchema } from "./schema";

export const formServerDirectActionHandler = async (formData: FormData) => {
  // Pengen comot data dari Formnya terlebih dahulu
  // setup, punchline, type
  const dataSetup = formData.get("setup");
  const dataPunchline = formData.get("punchline");
  const dataType = formData.get("type");

  // ? VALIDASIKAN INPUTNYA DENGAN TIPE DATA YANG KITA MILIKI
  // ? DENGAN MENGGUNAKAN SESUATU YANG BERNAMA........ zod
  const parsedDataFromZod = ZodInputValidationSchema.parse({
    setup: dataSetup,
    punchline: dataPunchline,
    type: dataType,
  });

  // console.log(dataSetup, dataPunchline, dataType);

  await createBercandaan(parsedDataFromZod);

  revalidatePath("/bercandaan/server/direct/list");
  redirect("/bercandaan/server/direct/list");
};

export const formServerRouteActionHandler = async (formData: FormData) => {
  await fetch("http://localhost:3000/api/bercandaan", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      setup: formData.get("setup"),
      punchline: formData.get("punchline"),
      type: formData.get("type"),
    }),
  });

  revalidatePath("/bercandaan/server/route-handler/list");
  redirect("/bercandaan/server/route-handler/list");
};

export const formClientOnSubmitHandler = async (formData: FormData) => {
  // Pengen comot data dari Formnya terlebih dahulu
  // setup, punchline, type
  const dataSetup = formData.get("setup");
  const dataPunchline = formData.get("punchline");
  const dataType = formData.get("type");

  // ? VALIDASIKAN INPUTNYA DENGAN TIPE DATA YANG KITA MILIKI
  // ? DENGAN MENGGUNAKAN SESUATU YANG BERNAMA........ zod
  const parsedDataFromZod = ZodInputValidationSchema.parse({
    setup: dataSetup,
    punchline: dataPunchline,
    type: dataType,
  });

  // console.log(dataSetup, dataPunchline, dataType);

  await createBercandaan(parsedDataFromZod);

  revalidatePath("/bercandaan/client/list");
  redirect("/bercandaan/client/list");
};
