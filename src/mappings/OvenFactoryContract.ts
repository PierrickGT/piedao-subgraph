import { OvenCreated } from '../generated/OvenFactoryContract/OvenFactoryContract';
import { Oven } from '../generated/schema';

export function handleOvenCreated(event: OvenCreated): void {
    let oven = new Oven(event.params.Oven.toHexString());

    oven.address = event.params.Oven;
    oven.controller = event.params.Controller;
    oven.pie = event.params.Pie;
    oven.recipe = event.params.Recipe;
    oven.save();
}
