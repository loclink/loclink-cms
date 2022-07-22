interface IAccountInfo {
  username: string;
  password: string;
}

interface IResponseData {
  data: any;
  code: number;
  message: string;
}

export type { IAccountInfo, IResponseData };
