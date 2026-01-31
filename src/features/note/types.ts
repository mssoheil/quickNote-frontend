export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetNotesRequestDto {
  page: number;
  limit: number;
}

export interface CreateNoteRequestDto extends Pick<Note, "title" | "content"> {}

export interface UpdateNoteRequestDto extends Partial<CreateNoteRequestDto> {}

export interface ParamRequestDto {
  id: string;
}
