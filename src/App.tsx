import { Form, Link, NavLink, Outlet, useLoaderData, useSubmit } from 'react-router-dom'
import './App.css'
import { getNotes } from './api/notes';
import { useEffect } from 'react';

export async function loader({request}: any) {
  const url = new URL(request.url);
  const q: string | null = url.searchParams.get("q");
  const notes = await getNotes(q);
  return { notes, q };
}

function App() {
  const  {notes, q}: any = useLoaderData();
  const submit = useSubmit();

  function handleSearch(event: any) {
    const firstSearch = q === null;
    submit(event.currentTarget.form, {
      replace: !firstSearch
    });
  }

  useEffect(() => {
    const inputSearch = document.getElementById("q") as HTMLInputElement;
    if (inputSearch) {
      inputSearch.value = q;
    }
  }, [q])

  return (
    <main>
      <div className="sidebar">
        <div className="sidebar-menu">
          <Form role="search" className='searchField'>
            <input 
              id="q"
              name="q"
              type="search" 
              defaultValue={q}
              onChange={handleSearch}
              placeholder='Search'/>
          </Form>
          <Link to={"/new"}>
            <button className='button'>New</button>
          </Link>
        </div>
        <div id='notesList' className='notesList'>
          {
            notes.length ? 
            (
              <ul>
                { notes.map((note: any) => {
                  return (
                    <li key={note.id}>
                      <NavLink className={({ isActive }) => (
                        isActive ? "active" : ""
                      )} to={`note/${note.id}`}>
                        <p className='flex justify-between items-center'>
                          {note.title}
                          <p>{note.important ? "⚠" : ""}</p>
                        </p>
                        </NavLink>
                    </li>
                  )
                })}
              </ul>
            ) :
            <p>No notes created</p>
          }
        </div>
      </div>
      <div className="mainContent">
        <Outlet/>
      </div>
    </main>
  )
}

export default App
