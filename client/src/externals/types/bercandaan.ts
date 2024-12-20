type Bercandaan = {
  id: string;
  setup: string;
  punchline: string;
  type: string;
};

type BercandaanInput = Omit<Bercandaan, "id">;

export type { Bercandaan, BercandaanInput };
