export interface DocumentType {
  id: number | null;
  name: string | null;
  acronym: string | null;
  subTypeDocument: SubTypeDocument[] | null;
}

export interface SubTypeDocument {
  id: number | null;
  name: string | null;
  father: number | null;
  acronym: string | null;
}
