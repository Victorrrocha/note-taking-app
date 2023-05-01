import { redirect } from "react-router-dom";
import { deleteNote } from "../api/notes";

export async function action({params}: any) {
    // console.log("deleting note with id: " + params.noteId);
    await deleteNote(params.noteId);
    return redirect("/");
}