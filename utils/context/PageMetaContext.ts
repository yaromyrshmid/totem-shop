import { createContext } from 'react';

import { PageMeta } from 'domain/types';

export const PageMetaContext = createContext<Partial<PageMeta>>({});
