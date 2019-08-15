import sinon from 'sinon';
import { ItemRepository } from '../../service';
import { apiGatewayEventMock, contextMock } from '../../util/mock';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import ItemHandlers from '../item';
import { ItemObject } from '../../service/mock';
import { ItemUsecase } from '../../models/domain';

describe('link handlers', () => {
    const itemRepo = <ItemUsecase>{
        getItems: jest.fn(async () => [new ItemObject(1, 'test')])
    }
    const itemHanders = ItemHandlers(itemRepo);

    describe('link address handler', () => {
        it('should return status code 400 with error', async () => {
            const event: APIGatewayProxyEvent = apiGatewayEventMock();
            const res = await itemHanders.getItems(event, contextMock(), () => { });
            expect(res).toBeDefined();
            const response = res as APIGatewayProxyResult;
            expect(response.statusCode).toBe(200);
        });
    });
});
