import { useRouteError } from 'react-router-dom';

export function ErrorPage() {
    const error: any = useRouteError();
    console.log(error);

    return (
        <div className="m-12 grid place-content-center">
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
