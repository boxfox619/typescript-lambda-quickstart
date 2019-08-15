import { Item } from '../../models/entity';

export class ItemObject implements Item {
  constructor(
    public id: number,
    public name: string
  ) { }
}