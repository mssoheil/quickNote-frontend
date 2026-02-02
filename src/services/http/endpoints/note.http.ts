import { HttpService } from "@/services/http";
// Types
import type {
  CreateNoteRequestDto,
  GetNotesRequestDto,
  ParamRequestDto,
  UpdateNoteRequestDto,
} from "@/features/note/types";

class NoteHttpService extends HttpService {
  constructor() {
    super({ suffix: "notes" });
  }

  getNotes(payload: GetNotesRequestDto) {
    const query = new URLSearchParams({
      page: String(payload.page),
      limit: String(payload.limit),
    });

    return this.httpService.get(`?${query.toString()}`);
  }

  createNote(payload: CreateNoteRequestDto) {
    return this.httpService.post("", payload);
  }

  updateNote(payload: UpdateNoteRequestDto & ParamRequestDto) {
    return this.httpService.put(`/${payload.id}`, {
      title: payload.title,
      content: payload.content,
    });
  }

  removeNote(param: ParamRequestDto) {
    return this.httpService.delete(`/${param.id}`);
  }
}

const NoteService = new NoteHttpService();

export default NoteService;
