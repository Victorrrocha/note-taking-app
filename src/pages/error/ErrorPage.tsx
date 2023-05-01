import { useRouteError } from "react-router"

export function ErrorPage() {
    const error: any = useRouteError();

    return (
        <div className="errorPage">
            <h1>{error.status}</h1>
            <p>
                <i>{error.statusText}</i>
            </p>
        </div>
    )
}