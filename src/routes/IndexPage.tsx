import { ErrorPage } from './ErrorPage';

import { TABLE_HEADER_TITLES } from '../constants';
import { Table } from '../shared';
import { CurrencyConvertForm } from '../shared/Forms/CurrencyConvertForm';
import { useGetCurrenciesQuery } from '../app/currencies';
import { filterCurrencyObject } from '../utils/filters/filterCurrencyObject';

import s from '../style/routes/IndexPage.module.scss';
import { Loader } from '../shared/Loader';

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
                data={currencies?.map((el) => filterCurrencyObject(el))}
                headers={TABLE_HEADER_TITLES}
                hideOverLimit={true}
            />
        </div>
    );
};

export { IndexPage };
