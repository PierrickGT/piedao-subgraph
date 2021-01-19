// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class DefaultControllerSet extends ethereum.Event {
  get params(): DefaultControllerSet__Params {
    return new DefaultControllerSet__Params(this);
  }
}

export class DefaultControllerSet__Params {
  _event: DefaultControllerSet;

  constructor(event: DefaultControllerSet) {
    this._event = event;
  }

  get controller(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class FacetAdded extends ethereum.Event {
  get params(): FacetAdded__Params {
    return new FacetAdded__Params(this);
  }
}

export class FacetAdded__Params {
  _event: FacetAdded;

  constructor(event: FacetAdded) {
    this._event = event;
  }

  get param0(): FacetAddedParam0Struct {
    return this._event.parameters[0].value.toTuple() as FacetAddedParam0Struct;
  }
}

export class FacetAddedParam0Struct extends ethereum.Tuple {
  get facetAddress(): Address {
    return this[0].toAddress();
  }

  get action(): i32 {
    return this[1].toI32();
  }

  get functionSelectors(): Array<Bytes> {
    return this[2].toBytesArray();
  }
}

export class FacetRemoved extends ethereum.Event {
  get params(): FacetRemoved__Params {
    return new FacetRemoved__Params(this);
  }
}

export class FacetRemoved__Params {
  _event: FacetRemoved;

  constructor(event: FacetRemoved) {
    this._event = event;
  }

  get param0(): FacetRemovedParam0Struct {
    return this._event.parameters[0].value.toTuple() as FacetRemovedParam0Struct;
  }
}

export class FacetRemovedParam0Struct extends ethereum.Tuple {
  get facetAddress(): Address {
    return this[0].toAddress();
  }

  get action(): i32 {
    return this[1].toI32();
  }

  get functionSelectors(): Array<Bytes> {
    return this[2].toBytesArray();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PieCreated extends ethereum.Event {
  get params(): PieCreated__Params {
    return new PieCreated__Params(this);
  }
}

export class PieCreated__Params {
  _event: PieCreated;

  constructor(event: PieCreated) {
    this._event = event;
  }

  get pieAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get deployer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get index(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class PieFactoryContract__defaultCutResult {
  value0: Address;
  value1: i32;

  constructor(value0: Address, value1: i32) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    return map;
  }
}

export class PieFactoryContract__getDefaultCutResultValue0Struct extends ethereum.Tuple {
  get facetAddress(): Address {
    return this[0].toAddress();
  }

  get action(): i32 {
    return this[1].toI32();
  }

  get functionSelectors(): Array<Bytes> {
    return this[2].toBytesArray();
  }
}

export class PieFactoryContract extends ethereum.SmartContract {
  static bind(address: Address): PieFactoryContract {
    return new PieFactoryContract("PieFactoryContract", address);
  }

  defaultController(): Address {
    let result = super.call(
      "defaultController",
      "defaultController():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_defaultController(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "defaultController",
      "defaultController():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  defaultCut(param0: BigInt): PieFactoryContract__defaultCutResult {
    let result = super.call(
      "defaultCut",
      "defaultCut(uint256):(address,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new PieFactoryContract__defaultCutResult(
      result[0].toAddress(),
      result[1].toI32()
    );
  }

  try_defaultCut(
    param0: BigInt
  ): ethereum.CallResult<PieFactoryContract__defaultCutResult> {
    let result = super.tryCall(
      "defaultCut",
      "defaultCut(uint256):(address,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PieFactoryContract__defaultCutResult(
        value[0].toAddress(),
        value[1].toI32()
      )
    );
  }

  diamondImplementation(): Address {
    let result = super.call(
      "diamondImplementation",
      "diamondImplementation():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_diamondImplementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "diamondImplementation",
      "diamondImplementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getDefaultCut(): Array<PieFactoryContract__getDefaultCutResultValue0Struct> {
    let result = super.call("getDefaultCut", "getDefaultCut():(tuple[])", []);

    return result[0].toTupleArray<
      PieFactoryContract__getDefaultCutResultValue0Struct
    >();
  }

  try_getDefaultCut(): ethereum.CallResult<
    Array<PieFactoryContract__getDefaultCutResultValue0Struct>
  > {
    let result = super.tryCall(
      "getDefaultCut",
      "getDefaultCut():(tuple[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        PieFactoryContract__getDefaultCutResultValue0Struct
      >()
    );
  }

  getDefaultCutCount(): BigInt {
    let result = super.call(
      "getDefaultCutCount",
      "getDefaultCutCount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getDefaultCutCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getDefaultCutCount",
      "getDefaultCutCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isPie(param0: Address): boolean {
    let result = super.call("isPie", "isPie(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isPie(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPie", "isPie(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pies(param0: BigInt): Address {
    let result = super.call("pies", "pies(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_pies(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("pies", "pies(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddFacetCall extends ethereum.Call {
  get inputs(): AddFacetCall__Inputs {
    return new AddFacetCall__Inputs(this);
  }

  get outputs(): AddFacetCall__Outputs {
    return new AddFacetCall__Outputs(this);
  }
}

export class AddFacetCall__Inputs {
  _call: AddFacetCall;

  constructor(call: AddFacetCall) {
    this._call = call;
  }

  get _facet(): AddFacetCall_facetStruct {
    return this._call.inputValues[0].value.toTuple() as AddFacetCall_facetStruct;
  }
}

export class AddFacetCall__Outputs {
  _call: AddFacetCall;

  constructor(call: AddFacetCall) {
    this._call = call;
  }
}

export class AddFacetCall_facetStruct extends ethereum.Tuple {
  get facetAddress(): Address {
    return this[0].toAddress();
  }

  get action(): i32 {
    return this[1].toI32();
  }

  get functionSelectors(): Array<Bytes> {
    return this[2].toBytesArray();
  }
}

export class BakePieCall extends ethereum.Call {
  get inputs(): BakePieCall__Inputs {
    return new BakePieCall__Inputs(this);
  }

  get outputs(): BakePieCall__Outputs {
    return new BakePieCall__Outputs(this);
  }
}

export class BakePieCall__Inputs {
  _call: BakePieCall;

  constructor(call: BakePieCall) {
    this._call = call;
  }

  get _tokens(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _amounts(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _initialSupply(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _symbol(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _name(): string {
    return this._call.inputValues[4].value.toString();
  }
}

export class BakePieCall__Outputs {
  _call: BakePieCall;

  constructor(call: BakePieCall) {
    this._call = call;
  }
}

export class RemoveFacetCall extends ethereum.Call {
  get inputs(): RemoveFacetCall__Inputs {
    return new RemoveFacetCall__Inputs(this);
  }

  get outputs(): RemoveFacetCall__Outputs {
    return new RemoveFacetCall__Outputs(this);
  }
}

export class RemoveFacetCall__Inputs {
  _call: RemoveFacetCall;

  constructor(call: RemoveFacetCall) {
    this._call = call;
  }

  get _index(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RemoveFacetCall__Outputs {
  _call: RemoveFacetCall;

  constructor(call: RemoveFacetCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetDefaultControllerCall extends ethereum.Call {
  get inputs(): SetDefaultControllerCall__Inputs {
    return new SetDefaultControllerCall__Inputs(this);
  }

  get outputs(): SetDefaultControllerCall__Outputs {
    return new SetDefaultControllerCall__Outputs(this);
  }
}

export class SetDefaultControllerCall__Inputs {
  _call: SetDefaultControllerCall;

  constructor(call: SetDefaultControllerCall) {
    this._call = call;
  }

  get _controller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDefaultControllerCall__Outputs {
  _call: SetDefaultControllerCall;

  constructor(call: SetDefaultControllerCall) {
    this._call = call;
  }
}

export class SetDiamondImplementationCall extends ethereum.Call {
  get inputs(): SetDiamondImplementationCall__Inputs {
    return new SetDiamondImplementationCall__Inputs(this);
  }

  get outputs(): SetDiamondImplementationCall__Outputs {
    return new SetDiamondImplementationCall__Outputs(this);
  }
}

export class SetDiamondImplementationCall__Inputs {
  _call: SetDiamondImplementationCall;

  constructor(call: SetDiamondImplementationCall) {
    this._call = call;
  }

  get _diamondImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDiamondImplementationCall__Outputs {
  _call: SetDiamondImplementationCall;

  constructor(call: SetDiamondImplementationCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
