import { useRouteError } from 'react-router-dom';

export function ErrorPage() {
    const error: any = useRouteError();
    console.log(error);

    return (
        <div className="grid place-content-center m-12">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>
                    {error?.statusText
                        ? `${error?.status} ${error?.statusText}`
                        : error?.message}
                </i>
            </p>
        </div>
    );
}
