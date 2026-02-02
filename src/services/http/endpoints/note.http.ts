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
    console.log("🚀 ~ NoteHttpService ~ createNote ~ payload:", payload);
    return this.httpService.post("", payload);
  }

  updateNote(param: ParamRequestDto, payload: UpdateNoteRequestDto) {
    return this.httpService.put(`/${param.id}`, payload);
  }

  removeNote(param: ParamRequestDto) {
    console.log("🚀 ~ NoteHttpService ~ removeNote ~ param:", param);
    return this.httpService.delete(`/${param.id}`);
  }
}

const NoteService = new NoteHttpService();

export default NoteService;
