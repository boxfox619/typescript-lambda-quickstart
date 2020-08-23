import { ItemRepository } from "service";
import ItemHandlers from "handler/item";

const itemsRepo = new ItemRepository();

const itemHandlers = ItemHandlers(itemsRepo);

export const { getItems } = itemHandlers;
export { corsHandler } from "handler/cors";
