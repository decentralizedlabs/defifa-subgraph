import {
  Address,
  BigInt,
  Bytes,
  dataSource,
  DataSourceContext,
  ethereum,
  json,
  log
} from "@graphprotocol/graph-ts"
import {
  CrumbsWereSwept as CrumbsWereSweptEvent,
  LunchWasServed as LunchWasServedEvent
} from "../../generated/FairLunch/FairLunch"
// import {
//   CrumbsWereSwept,
//   Owner,
//   Contract,
//   Token,
//   TokenMetadata
// } from "../../generated/schema"
import { DefifaNFT } from "../../generated/templates"

export function handleCrumbsWereSwept(event: CrumbsWereSweptEvent): void {
  // const { ethFeeAmount, lpId, projectId, sender, tokenFeeAmount } = event.params
  let projectIdHex = event.params.projectId.toHex()
}

export function handleLunchWasServed(event: LunchWasServedEvent): void {
  // const {
  //   ethBalance,
  //   projectBalance,
  //   lpId,
  //   projectId,
  //   sender,
  //   tokenBalance
  // } = event.params
  let projectIdHex = event.params.projectId.toHex()

  let defifaNftAddress = event.params.sender // TODO: fix

  let context = new DataSourceContext()
  context.setString("projectId", projectIdHex)
  DefifaNFT.createWithContext(defifaNftAddress, context)
}
