export interface Stand {
  id: number;
  name: string;
  owner: string;
  part: string;
  ability: string;
  isKey?: boolean;
  avatarUrl?: string;
  descrShort?: string;
  descrLong?: string;
}
