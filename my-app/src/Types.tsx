export interface t_UserInputProps {
    setInput: Function;
    citiesMatch: t_City;
}

export interface t_DisplayListProps {
    citiesMatch: object[];
    resolvedAddress?: string;
    setAllCities: Function;
}

export interface t_DisplayItemProps {
    city: object;
}

export interface t_City {
    resolvedAddress?: string;
}