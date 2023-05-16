// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class DefifaNFT extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("DefifaNFT", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "DefifaNFT",
      [address.toHex()],
      context
    );
  }
}

export class TokenMetadata extends DataSourceTemplate {
  static create(cid: string): void {
    DataSourceTemplate.create("TokenMetadata", [cid]);
  }

  static createWithContext(cid: string, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext("TokenMetadata", [cid], context);
  }
}