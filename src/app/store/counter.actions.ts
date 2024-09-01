import { createAction, props } from '@ngrx/store';

// Acción para incrementar el contador
export const increment = createAction('[Counter Component] Increment');

// Acción para establecer un valor específico del contador
export const setCounter = createAction('[Counter Component] Set', props<{ value: number }>());
