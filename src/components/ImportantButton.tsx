import { useFetcher } from "react-router-dom";
import classes from './ImportantButton.module.css';

export function ImportantButton({note}: any) {
    let fetcher = useFetcher();
    let important = fetcher.formData?.get('important') === "true" || note?.important;

    return (
        <fetcher.Form method="post">
            <button 
                value={important ? "false" : "true"}
                name="important" 
                className="text-3xl">
                    { 
                        important ? 
                        <span className={classes.active}>⚠</span> :
                        <span className={classes.notActive}>⚠</span>
                    }
                </button>
        </fetcher.Form>
    )
}