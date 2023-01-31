export interface IResCurrency {
    ID: string;
    NumCode: string;
    CharCode: string;
    Nominal: number;
    Name: string;
    Value: number;
    Previous: number;
}

export interface IResponse {
    Date: string;
    PreviousDate: string;
    PreviousURL: string;
    Timestamp: string;
    Valute: Record<string, IResCurrency>;
}

export interface ICurrency {
    ID: string;
    Name: string;
    NumCode: string;
    CharCode: string;
    Nominal: number;
    RubValue: string;
    UsdValue: string;
    EurValue: string;
    CnyValue: string;
}

export interface IInitialState {
    lastUpdate: number;
}
