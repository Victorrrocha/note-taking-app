import classes from "./NoteForm.module.css";
import { Form, useLoaderData, useParams } from "react-router-dom";

const NoteForm = () => {
    const note: any = useLoaderData();
    const { noteId } = useParams();
    const isUpdating: boolean = !!noteId;

    return (
        <>
            <Form method={isUpdating ? "patch" : "post"}  className={classes.form}> 
                <div className="flex flex-col flex-1">
                    <input className={classes.title} type="text" placeholder="Title..." name="title" defaultValue={note?.title ?? ""}/>
                    <textarea className={classes.body} placeholder="..." name="body" defaultValue={note?.body ?? ""}/>
                </div>
                <div className="bottomMenu">
                    <button className="button mr-2">Cancel</button>
                    <button className="button confirm" type="submit">{isUpdating? 'Update' : 'Create'}</button>
                </div>
            </Form>
        </>
    )
}

export default NoteForm;