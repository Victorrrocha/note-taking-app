import { redirect } from "react-router-dom";
import { updateNote } from "../api/notes";

export async function action({request, params} : any) {
    const formData = await request.formData();
    const updateBody = Object.fromEntries(formData);
    await updateNote(params.noteId, updateBody);
    return redirect(`/note/${params.noteId}`);
}