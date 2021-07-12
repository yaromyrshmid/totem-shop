import { makeVar, ReactiveVar } from '@apollo/client';

export const showCartVar: ReactiveVar<boolean> = makeVar<boolean>(false);

export const openCart = () => showCartVar(true);
export const closeCart = () => showCartVar(false);
