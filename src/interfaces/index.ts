export interface IHsitoric {
  movimentations: {
    id: number;
    label: string;
    value: string;
    createdAt: string;
    type: string;
  }[];
}

export interface IMoviments {
  moviments: {
    id: number;
    label: string;
    value: string;
    createdAt: string;
    type: string;
  };
}

export interface IHeader {
  userName: string;
}

export interface IBalance {
  balance: { besteding: number; balans: number };
}
