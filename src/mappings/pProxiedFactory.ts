import { OwnerChanged, SmartPoolCreated } from '../generated/PProxiedFactory/PProxiedFactory';
import { Owner, Pie } from '../generated/schema';

export function handleSmartPoolCreated(event: SmartPoolCreated): void {
    let pie = new Pie(event.params.poolAddress.toHexString());

    pie.address = event.params.poolAddress;
    pie.name = event.params.name;
    pie.symbol = event.params.symbol;
    pie.save();
}

export function handleOwnerChanged(event: OwnerChanged): void {
    let owner = new Owner(event.params.newOwner.toHexString());

    owner.previousOwner = event.params.previousOwner;
    owner.newOwner = event.params.newOwner;
    owner.save();
}
