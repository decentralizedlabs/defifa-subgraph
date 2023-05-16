import { Address, BigInt, DataSourceContext } from "@graphprotocol/graph-ts"
import {
  Transfer as TransferEvent,
  DefifaNFT
} from "../../generated/templates/DefifaNFT/DefifaNFT"
import { Transfer, Owner, Contract, Token } from "../../generated/schema"
import { TokenMetadata as TokenMetadataTemplate } from "../../generated/templates"

export function handleTransfer(event: TransferEvent): void {
  let transfer = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  transfer.blockNumber = event.block.number
  transfer.timestamp = event.block.timestamp

  let tokenId = event.params.tokenId.toString()
  let to = getOrCreateOwner(event.params.to)
  let from = getOrCreateOwner(event.params.from)
  let contract = Contract.load(event.address.toHex())!
  let instance = DefifaNFT.bind(event.address)
  let token = Token.load(tokenId)

  // Do not go to minus with null-address
  if (from.balance > BigInt.fromI32(0)) {
    from.balance = from.balance.minus(BigInt.fromI32(1))
  }

  to.balance = to.balance.plus(BigInt.fromI32(1))

  if (token == null) {
    token = new Token(tokenId)
    token.number = event.params.tokenId
    token.contract = contract.id
    let uri = instance.try_tokenURI(event.params.tokenId)
    if (!uri.reverted) {
      token.uri = uri.value
      const dataSourceContext = new DataSourceContext()
      dataSourceContext.setBigInt("tokenId", event.params.tokenId)
      TokenMetadataTemplate.createWithContext(
        uri.value.substring(7),
        dataSourceContext
      )
    }
    contract.totalSupply = contract.totalSupply.plus(BigInt.fromI32(1))
    contract.save()
  }

  token.owner = to.id
  transfer.from = from.id
  transfer.to = to.id
  transfer.transactionHash = event.transaction.hash
  transfer.token = token.id
  to.save()
  from.save()
  transfer.save()
  token.save()
}

export function getOrCreateOwner(id: Address): Owner {
  let owner = Owner.load(id.toHexString())
  if (owner == null) {
    owner = new Owner(id.toHexString())
    owner.balance = BigInt.fromI32(0)
    owner.save()
  }
  return owner
}
