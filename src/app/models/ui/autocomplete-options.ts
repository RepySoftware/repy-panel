import { AutocompleteItem } from './autocomplete-item';
import { Observable } from 'rxjs';

export interface AutocompleteOptions<T> {
    placeholder: string;
    onGetItems: (query: string) => Observable<AutocompleteItem<T>[]>;
    onSelectItem: (item: AutocompleteItem<T>) => void;
    emitOnClear?: boolean;
}