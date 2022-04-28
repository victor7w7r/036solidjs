import { fromFetch } from 'rxjs/fetch';

import type { TBinance } from '../types';

export const binance$ = fromFetch<TBinance[]>('https://api2.binance.com/api/v3/ticker/24hr', {
    selector: response => response.json()
});