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

export class LaunchGame extends ethereum.Event {
  get params(): LaunchGame__Params {
    return new LaunchGame__Params(this);
  }
}

export class LaunchGame__Params {
  _event: LaunchGame;

  constructor(event: LaunchGame) {
    this._event = event;
  }

  get gameId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get delegate(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get governor(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenUriResolver(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get caller(): Address {
    return this._event.parameters[4].value.toAddress();
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

export class DefifaDeployer__launchGameWithResult {
  value0: BigInt;
  value1: Address;

  constructor(value0: BigInt, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }

  getGameId(): BigInt {
    return this.value0;
  }

  getGovernor(): Address {
    return this.value1;
  }
}

export class DefifaDeployer__launchGameWithInput_launchProjectDataStruct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get projectMetadata(): DefifaDeployer__launchGameWithInput_launchProjectDataProjectMetadataStruct {
    return changetype<
      DefifaDeployer__launchGameWithInput_launchProjectDataProjectMetadataStruct
    >(this[1].toTuple());
  }

  get contractUri(): string {
    return this[2].toString();
  }

  get baseUri(): string {
    return this[3].toString();
  }

  get tiers(): Array<
    DefifaDeployer__launchGameWithInput_launchProjectDataTiersStruct
  > {
    return this[4].toTupleArray<
      DefifaDeployer__launchGameWithInput_launchProjectDataTiersStruct
    >();
  }

  get token(): Address {
    return this[5].toAddress();
  }

  get mintDuration(): BigInt {
    return this[6].toBigInt();
  }

  get refundPeriodDuration(): BigInt {
    return this[7].toBigInt();
  }

  get start(): BigInt {
    return this[8].toBigInt();
  }

  get end(): BigInt {
    return this[9].toBigInt();
  }

  get splits(): Array<
    DefifaDeployer__launchGameWithInput_launchProjectDataSplitsStruct
  > {
    return this[10].toTupleArray<
      DefifaDeployer__launchGameWithInput_launchProjectDataSplitsStruct
    >();
  }

  get distributionLimit(): BigInt {
    return this[11].toBigInt();
  }

  get ballkidzFeeProjectTokenAccount(): Address {
    return this[12].toAddress();
  }

  get votingPeriod(): BigInt {
    return this[13].toBigInt();
  }

  get defaultTokenUriResolver(): Address {
    return this[14].toAddress();
  }

  get terminal(): Address {
    return this[15].toAddress();
  }

  get store(): Address {
    return this[16].toAddress();
  }
}

export class DefifaDeployer__launchGameWithInput_launchProjectDataProjectMetadataStruct extends ethereum.Tuple {
  get content(): string {
    return this[0].toString();
  }

  get domain(): BigInt {
    return this[1].toBigInt();
  }
}

export class DefifaDeployer__launchGameWithInput_launchProjectDataTiersStruct extends ethereum.Tuple {
  get price(): BigInt {
    return this[0].toBigInt();
  }

  get reservedRate(): i32 {
    return this[1].toI32();
  }

  get reservedTokenBeneficiary(): Address {
    return this[2].toAddress();
  }

  get encodedIPFSUri(): Bytes {
    return this[3].toBytes();
  }

  get shouldUseReservedTokenBeneficiaryAsDefault(): boolean {
    return this[4].toBoolean();
  }

  get name(): string {
    return this[5].toString();
  }
}

export class DefifaDeployer__launchGameWithInput_launchProjectDataSplitsStruct extends ethereum.Tuple {
  get preferClaimed(): boolean {
    return this[0].toBoolean();
  }

  get preferAddToBalance(): boolean {
    return this[1].toBoolean();
  }

  get percent(): BigInt {
    return this[2].toBigInt();
  }

  get projectId(): BigInt {
    return this[3].toBigInt();
  }

  get beneficiary(): Address {
    return this[4].toAddress();
  }

  get lockedUntil(): BigInt {
    return this[5].toBigInt();
  }

  get allocator(): Address {
    return this[6].toAddress();
  }
}

export class DefifaDeployer__timesForResultValue0Struct extends ethereum.Tuple {
  get mintDuration(): BigInt {
    return this[0].toBigInt();
  }

  get refundPeriodDuration(): BigInt {
    return this[1].toBigInt();
  }

  get start(): BigInt {
    return this[2].toBigInt();
  }

  get end(): BigInt {
    return this[3].toBigInt();
  }
}

export class DefifaDeployer extends ethereum.SmartContract {
  static bind(address: Address): DefifaDeployer {
    return new DefifaDeployer("DefifaDeployer", address);
  }

  SPLIT_DOMAIN(): BigInt {
    let result = super.call("SPLIT_DOMAIN", "SPLIT_DOMAIN():(uint256)", []);

    return result[0].toBigInt();
  }

  try_SPLIT_DOMAIN(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("SPLIT_DOMAIN", "SPLIT_DOMAIN():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ballkidzProjectId(): BigInt {
    let result = super.call(
      "ballkidzProjectId",
      "ballkidzProjectId():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_ballkidzProjectId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ballkidzProjectId",
      "ballkidzProjectId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  controller(): Address {
    let result = super.call("controller", "controller():(address)", []);

    return result[0].toAddress();
  }

  try_controller(): ethereum.CallResult<Address> {
    let result = super.tryCall("controller", "controller():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  currentGamePhaseOf(_gameId: BigInt): BigInt {
    let result = super.call(
      "currentGamePhaseOf",
      "currentGamePhaseOf(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_gameId)]
    );

    return result[0].toBigInt();
  }

  try_currentGamePhaseOf(_gameId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "currentGamePhaseOf",
      "currentGamePhaseOf(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_gameId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  delegateCodeOrigin(): Address {
    let result = super.call(
      "delegateCodeOrigin",
      "delegateCodeOrigin():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_delegateCodeOrigin(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "delegateCodeOrigin",
      "delegateCodeOrigin():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  delegatesRegistry(): Address {
    let result = super.call(
      "delegatesRegistry",
      "delegatesRegistry():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_delegatesRegistry(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "delegatesRegistry",
      "delegatesRegistry():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  distributionLimit(_gameId: BigInt): BigInt {
    let result = super.call(
      "distributionLimit",
      "distributionLimit(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_gameId)]
    );

    return result[0].toBigInt();
  }

  try_distributionLimit(_gameId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "distributionLimit",
      "distributionLimit(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_gameId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  endOf(_gameId: BigInt): BigInt {
    let result = super.call("endOf", "endOf(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_gameId)
    ]);

    return result[0].toBigInt();
  }

  try_endOf(_gameId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("endOf", "endOf(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_gameId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feeDivisor(): BigInt {
    let result = super.call("feeDivisor", "feeDivisor():(uint256)", []);

    return result[0].toBigInt();
  }

  try_feeDivisor(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("feeDivisor", "feeDivisor():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  governorCodeOrigin(): Address {
    let result = super.call(
      "governorCodeOrigin",
      "governorCodeOrigin():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_governorCodeOrigin(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "governorCodeOrigin",
      "governorCodeOrigin():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  launchGameWith(
    _launchProjectData: DefifaDeployer__launchGameWithInput_launchProjectDataStruct
  ): DefifaDeployer__launchGameWithResult {
    let result = super.call(
      "launchGameWith",
      "launchGameWith((string,(string,uint256),string,string,(uint80,uint16,address,bytes32,bool,string)[],address,uint48,uint48,uint48,uint48,(bool,bool,uint256,uint256,address,uint256,address)[],uint88,address,uint256,address,address,address)):(uint256,address)",
      [ethereum.Value.fromTuple(_launchProjectData)]
    );

    return new DefifaDeployer__launchGameWithResult(
      result[0].toBigInt(),
      result[1].toAddress()
    );
  }

  try_launchGameWith(
    _launchProjectData: DefifaDeployer__launchGameWithInput_launchProjectDataStruct
  ): ethereum.CallResult<DefifaDeployer__launchGameWithResult> {
    let result = super.tryCall(
      "launchGameWith",
      "launchGameWith((string,(string,uint256),string,string,(uint80,uint16,address,bytes32,bool,string)[],address,uint48,uint48,uint48,uint48,(bool,bool,uint256,uint256,address,uint256,address)[],uint88,address,uint256,address,address,address)):(uint256,address)",
      [ethereum.Value.fromTuple(_launchProjectData)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DefifaDeployer__launchGameWithResult(
        value[0].toBigInt(),
        value[1].toAddress()
      )
    );
  }

  mintDurationOf(_gameId: BigInt): BigInt {
    let result = super.call(
      "mintDurationOf",
      "mintDurationOf(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_gameId)]
    );

    return result[0].toBigInt();
  }

  try_mintDurationOf(_gameId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "mintDurationOf",
      "mintDurationOf(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_gameId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nextPhaseNeedsQueueing(_gameId: BigInt): boolean {
    let result = super.call(
      "nextPhaseNeedsQueueing",
      "nextPhaseNeedsQueueing(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_gameId)]
    );

    return result[0].toBoolean();
  }

  try_nextPhaseNeedsQueueing(_gameId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "nextPhaseNeedsQueueing",
      "nextPhaseNeedsQueueing(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_gameId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
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

  protocolFeeProjectTokenAccount(): Address {
    let result = super.call(
      "protocolFeeProjectTokenAccount",
      "protocolFeeProjectTokenAccount():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_protocolFeeProjectTokenAccount(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "protocolFeeProjectTokenAccount",
      "protocolFeeProjectTokenAccount():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  queueNextPhaseOf(_gameId: BigInt): BigInt {
    let result = super.call(
      "queueNextPhaseOf",
      "queueNextPhaseOf(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_gameId)]
    );

    return result[0].toBigInt();
  }

  try_queueNextPhaseOf(_gameId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "queueNextPhaseOf",
      "queueNextPhaseOf(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_gameId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  refundPeriodDurationOf(_gameId: BigInt): BigInt {
    let result = super.call(
      "refundPeriodDurationOf",
      "refundPeriodDurationOf(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_gameId)]
    );

    return result[0].toBigInt();
  }

  try_refundPeriodDurationOf(_gameId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "refundPeriodDurationOf",
      "refundPeriodDurationOf(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_gameId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  startOf(_gameId: BigInt): BigInt {
    let result = super.call("startOf", "startOf(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_gameId)
    ]);

    return result[0].toBigInt();
  }

  try_startOf(_gameId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("startOf", "startOf(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_gameId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  terminalOf(_gameId: BigInt): Address {
    let result = super.call("terminalOf", "terminalOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_gameId)
    ]);

    return result[0].toAddress();
  }

  try_terminalOf(_gameId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("terminalOf", "terminalOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_gameId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  timesFor(_gameId: BigInt): DefifaDeployer__timesForResultValue0Struct {
    let result = super.call(
      "timesFor",
      "timesFor(uint256):((uint48,uint48,uint48,uint48))",
      [ethereum.Value.fromUnsignedBigInt(_gameId)]
    );

    return changetype<DefifaDeployer__timesForResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_timesFor(
    _gameId: BigInt
  ): ethereum.CallResult<DefifaDeployer__timesForResultValue0Struct> {
    let result = super.tryCall(
      "timesFor",
      "timesFor(uint256):((uint48,uint48,uint48,uint48))",
      [ethereum.Value.fromUnsignedBigInt(_gameId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<DefifaDeployer__timesForResultValue0Struct>(value[0].toTuple())
    );
  }

  tokenUriResolverCodeOrigin(): Address {
    let result = super.call(
      "tokenUriResolverCodeOrigin",
      "tokenUriResolverCodeOrigin():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_tokenUriResolverCodeOrigin(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "tokenUriResolverCodeOrigin",
      "tokenUriResolverCodeOrigin():(address)",
      []
    );
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

  get _delegateCodeOrigin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _governorCodeOrigin(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenUriResolverCodeOrigin(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _controller(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _delegatesRegistry(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _protocolFeeProjectTokenAccount(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _ballkidzProjectId(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _owner(): Address {
    return this._call.inputValues[7].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ChangeFeeCall extends ethereum.Call {
  get inputs(): ChangeFeeCall__Inputs {
    return new ChangeFeeCall__Inputs(this);
  }

  get outputs(): ChangeFeeCall__Outputs {
    return new ChangeFeeCall__Outputs(this);
  }
}

export class ChangeFeeCall__Inputs {
  _call: ChangeFeeCall;

  constructor(call: ChangeFeeCall) {
    this._call = call;
  }

  get _percent(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeFeeCall__Outputs {
  _call: ChangeFeeCall;

  constructor(call: ChangeFeeCall) {
    this._call = call;
  }
}

export class ClaimProtocolProjectTokenCall extends ethereum.Call {
  get inputs(): ClaimProtocolProjectTokenCall__Inputs {
    return new ClaimProtocolProjectTokenCall__Inputs(this);
  }

  get outputs(): ClaimProtocolProjectTokenCall__Outputs {
    return new ClaimProtocolProjectTokenCall__Outputs(this);
  }
}

export class ClaimProtocolProjectTokenCall__Inputs {
  _call: ClaimProtocolProjectTokenCall;

  constructor(call: ClaimProtocolProjectTokenCall) {
    this._call = call;
  }
}

export class ClaimProtocolProjectTokenCall__Outputs {
  _call: ClaimProtocolProjectTokenCall;

  constructor(call: ClaimProtocolProjectTokenCall) {
    this._call = call;
  }
}

export class LaunchGameWithCall extends ethereum.Call {
  get inputs(): LaunchGameWithCall__Inputs {
    return new LaunchGameWithCall__Inputs(this);
  }

  get outputs(): LaunchGameWithCall__Outputs {
    return new LaunchGameWithCall__Outputs(this);
  }
}

export class LaunchGameWithCall__Inputs {
  _call: LaunchGameWithCall;

  constructor(call: LaunchGameWithCall) {
    this._call = call;
  }

  get _launchProjectData(): LaunchGameWithCall_launchProjectDataStruct {
    return changetype<LaunchGameWithCall_launchProjectDataStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class LaunchGameWithCall__Outputs {
  _call: LaunchGameWithCall;

  constructor(call: LaunchGameWithCall) {
    this._call = call;
  }

  get gameId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get governor(): Address {
    return this._call.outputValues[1].value.toAddress();
  }
}

export class LaunchGameWithCall_launchProjectDataStruct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get projectMetadata(): LaunchGameWithCall_launchProjectDataProjectMetadataStruct {
    return changetype<
      LaunchGameWithCall_launchProjectDataProjectMetadataStruct
    >(this[1].toTuple());
  }

  get contractUri(): string {
    return this[2].toString();
  }

  get baseUri(): string {
    return this[3].toString();
  }

  get tiers(): Array<LaunchGameWithCall_launchProjectDataTiersStruct> {
    return this[4].toTupleArray<
      LaunchGameWithCall_launchProjectDataTiersStruct
    >();
  }

  get token(): Address {
    return this[5].toAddress();
  }

  get mintDuration(): BigInt {
    return this[6].toBigInt();
  }

  get refundPeriodDuration(): BigInt {
    return this[7].toBigInt();
  }

  get start(): BigInt {
    return this[8].toBigInt();
  }

  get end(): BigInt {
    return this[9].toBigInt();
  }

  get splits(): Array<LaunchGameWithCall_launchProjectDataSplitsStruct> {
    return this[10].toTupleArray<
      LaunchGameWithCall_launchProjectDataSplitsStruct
    >();
  }

  get distributionLimit(): BigInt {
    return this[11].toBigInt();
  }

  get ballkidzFeeProjectTokenAccount(): Address {
    return this[12].toAddress();
  }

  get votingPeriod(): BigInt {
    return this[13].toBigInt();
  }

  get defaultTokenUriResolver(): Address {
    return this[14].toAddress();
  }

  get terminal(): Address {
    return this[15].toAddress();
  }

  get store(): Address {
    return this[16].toAddress();
  }
}

export class LaunchGameWithCall_launchProjectDataProjectMetadataStruct extends ethereum.Tuple {
  get content(): string {
    return this[0].toString();
  }

  get domain(): BigInt {
    return this[1].toBigInt();
  }
}

export class LaunchGameWithCall_launchProjectDataTiersStruct extends ethereum.Tuple {
  get price(): BigInt {
    return this[0].toBigInt();
  }

  get reservedRate(): i32 {
    return this[1].toI32();
  }

  get reservedTokenBeneficiary(): Address {
    return this[2].toAddress();
  }

  get encodedIPFSUri(): Bytes {
    return this[3].toBytes();
  }

  get shouldUseReservedTokenBeneficiaryAsDefault(): boolean {
    return this[4].toBoolean();
  }

  get name(): string {
    return this[5].toString();
  }
}

export class LaunchGameWithCall_launchProjectDataSplitsStruct extends ethereum.Tuple {
  get preferClaimed(): boolean {
    return this[0].toBoolean();
  }

  get preferAddToBalance(): boolean {
    return this[1].toBoolean();
  }

  get percent(): BigInt {
    return this[2].toBigInt();
  }

  get projectId(): BigInt {
    return this[3].toBigInt();
  }

  get beneficiary(): Address {
    return this[4].toAddress();
  }

  get lockedUntil(): BigInt {
    return this[5].toBigInt();
  }

  get allocator(): Address {
    return this[6].toAddress();
  }
}

export class QueueNextPhaseOfCall extends ethereum.Call {
  get inputs(): QueueNextPhaseOfCall__Inputs {
    return new QueueNextPhaseOfCall__Inputs(this);
  }

  get outputs(): QueueNextPhaseOfCall__Outputs {
    return new QueueNextPhaseOfCall__Outputs(this);
  }
}

export class QueueNextPhaseOfCall__Inputs {
  _call: QueueNextPhaseOfCall;

  constructor(call: QueueNextPhaseOfCall) {
    this._call = call;
  }

  get _gameId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class QueueNextPhaseOfCall__Outputs {
  _call: QueueNextPhaseOfCall;

  constructor(call: QueueNextPhaseOfCall) {
    this._call = call;
  }

  get configuration(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
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