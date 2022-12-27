import { Item } from "../Item.interface";

export interface AddItemProps {
    onPressButton: (item: Item) => void;
}