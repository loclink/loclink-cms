interface IDataType extends Object {
  key: number;
  username: string;
  role: {
    role_name: string;
  };
  last_login_ip: string;
  last_login_time: string;
  created: number;
  updated: number;
}

export type { IDataType };
