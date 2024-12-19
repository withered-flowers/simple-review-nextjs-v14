type Bercandaan = {
  _id: string;
  setup: string;
  punchline: string;
  type: string;
};

type BercandaanInput = Omit<Bercandaan, "_id">;

export type { Bercandaan, BercandaanInput };
