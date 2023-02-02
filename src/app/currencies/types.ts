// api return format
export interface IResponse {
    Date: string;
    PreviousDate: string;
    PreviousURL: string;
    Timestamp: string;
    Valute: Record<string, IResCurrency>;
}
export interface IResCurrency {
    ID: string;
    NumCode: string;
    CharCode: string;
    Nominal: number;
    Name: string;
    Value: number;
    Previous: number;
}

export interface IResCurrencyFiltered {
    Name: string;
    CharCode: string;
}

// api require format
export interface ICurrency {
    Name: string;
    CharCode: string;
    RubValue: string;
    UsdValue: string;
    EurValue: string;
    CnyValue: string;
}

// initial state of slice
export interface IInitialState {
    lastUpdate: number;
}
