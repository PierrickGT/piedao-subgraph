import { PieCreated } from '../generated/PieFactoryContract/PieFactoryContract';
import { ExperiePie } from '../generated/schema';

export function handlePieCreated(event: PieCreated): void {
    let experiePie = new ExperiePie(event.params.pieAddress.toHexString());

    experiePie.address = event.params.pieAddress;
    experiePie.deployer = event.params.deployer;
    experiePie.index = event.params.index;
    experiePie.save();
}
