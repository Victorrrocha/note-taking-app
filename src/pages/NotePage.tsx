import { redirect, useLoaderData, useNavigate } from "react-router";
import { Form } from "react-router-dom";
import { getNoteById, updateNote } from "../api/notes";
import { ImportantButton } from "../components/ImportantButton";

export async function loader({params}: any) {
    const note = await getNoteById(params.noteId);
    if (!note) {
        throw new Response("Not found", {
            status: 404,
            statusText: "Not Found"
        })
    }
    return note;
}

export async function action({request, params}:any) {
    const formdData = await request.formData();
    const requestObj = Object.fromEntries(formdData);
    console.log(requestObj);
    return updateNote(params.noteId, {
        important: formdData.get("important") === "true"
    });
}

function NotePage() {
    const note: any = useLoaderData();
    const navigate = useNavigate();

    return (
        <>
            <div className="flex justify-end">
                <button className="button mr-2" onClick={() => {
                    navigate(`/note/${note.id}/update`);
                }}>edit</button>
                <Form method="delete" action="destroy">
                    <button type="submit" className="button delete">delete</button>
                </Form>
            </div>
            <div className="flex items-center">
                <h1 className="text-[30px] mr-4">{note.title}</h1> 
                <ImportantButton note={note} />
            </div>
            <p>{note.body}</p>
        </>
    )
}

export default NotePage;