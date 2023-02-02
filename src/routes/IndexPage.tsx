import { useGetCurrenciesQuery } from '../app/currencies';
import { TABLE_HEADER_TITLES } from '../constants';
import { Table } from '../shared';
import { CurrencyConvertForm } from '../shared/Forms/CurrencyConvertForm';
import { Loader } from '../shared/Loader';
import s from '../style/routes/IndexPage.module.scss';
import { ErrorPage } from './ErrorPage';

const IndexPage = () => {
    const {
        data: currencies = [],
        isLoading,
        isError,
    } = useGetCurrenciesQuery('');

    if (isLoading) return <Loader />;
    if (isError) return <ErrorPage />;

    return (
        <div className={s['app-container']}>
            <CurrencyConvertForm />
            <Table
                data={currencies}
                headers={TABLE_HEADER_TITLES}
                hideOverLimit={true}
            />
        </div>
    );
};

export { IndexPage };
