export interface DocumentType {
  id: number;
  name: string;
  acronym: string;
  children: Child[];
}

interface Child {
  id: number;
  name: string;
  father: number;
  acronym: string;
}