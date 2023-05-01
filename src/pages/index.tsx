export function Index() {
    return (
        <section className="h-full flex justify-center">
            <div className="flex flex-col justify-center text-center">
                <h1 className="text-2xl mb-4 text-center">Hello there! In this project you can:</h1>
                <ul className="text-left rounded-lg border p-4">
                    <li>Create notes</li>
                    <li>Delete and edit them in the note's page</li>
                    <li>Filter by title</li>
                    <li>And also mark as important !</li>
                </ul>
                <p className="mt-8">** Made to study the <a className="underline" href="https://reactrouter.com/en/main">React Router</a> library **</p>
                <p className="">** Based on this tutorial project found <a className="underline" href="https://reactrouter.com/en/main/start/tutorial">here</a> **</p>
            </div>
        </section>
    )
}