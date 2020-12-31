import { AutocompleteItem } from './autocomplete-item';
import { Observable } from 'rxjs';

export interface AutocompleteOptions {
    placeholder: string;
    onGetItems: (query: string) => Observable<AutocompleteItem[]>;
    onSelectItem: (item: AutocompleteItem) => void;
}