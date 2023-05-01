import { redirect } from "react-router-dom";
import { newNote } from "../api/notes";

export async function action({request, params}: any) {
    const formData = await request.formData();
    const note = Object.fromEntries(formData);
    const response = await newNote(note);
    return redirect(`/note/${response.id}`);
}