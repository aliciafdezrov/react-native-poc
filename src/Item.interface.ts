export type QUANTITY_TYPES = 'ud' | '100gr';

export interface Item {
    name: string;
    kcal: number
    quantity: QUANTITY_TYPES;
};

export const createEmptyItem = (): Item => ({
    name: '',
    kcal: 0,
    quantity: '100gr'
});