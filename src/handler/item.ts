import "source-map-support/register";
import { middleware } from "util/middleware";
import { response } from "models/lambda";
import { ItemUsecase } from "models/domain";
import ItemHandler from "models/handler/ItemHandler";

const handlers = (itemRepo: ItemUsecase): ItemHandler => ({
  getItems: middleware(async () => {
    try {
      const res = await itemRepo.getItems();
      return response(200, res);
    } catch (e) {
      console.error(e);
      return response(500, { message: "서버 에러" });
    }
  }),
});

export default handlers;
