import {matchSorter} from 'match-sorter'

export async function getNotes(query?: string | null) {
    const response = await fetch("http://localhost:3000/notes");
    let notesArray = await response.json();
    if (!notesArray) {
        notesArray = [];
    }
    if (!!query) {
        notesArray = matchSorter(notesArray, query, { keys: ["title", "body"] });
    }
    return notesArray;
}

export async function getNoteById(id: string) {
    const notes = await getNotes();
    const foundNote = notes.find((note: any) => note.id+'' === id);
    return foundNote;
}

export async function newNote(note: any) {
    const id = note.title[0] + Math.floor(Math.random() * 1000) + note.title[note.title.length - 1];
    note["id"] = id.trim();
    const response = await fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(note)
    });
    return await response.json();
}

export async function deleteNote(id: any) {
    const response = await fetch(`http://localhost:3000/notes/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    })
    return await response.json();
}

export async function updateNote(id: any, body: any) {
    const response = await fetch(`http://localhost:3000/notes/${id}`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    });
    return await response.json();
}