import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts"

import {
  Account,
  Governor,
  Proposal,
  ProposalCall,
  ProposalSupport,
  VoteReceipt,
  ProposalCreated,
  ProposalQueued,
  ProposalExecuted,
  ProposalCanceled,
  Transaction,
  VoteCast
} from "../../generated/schema"

import {
  ProposalCreated as ProposalCreatedEvent,
  ProposalQueued as ProposalQueuedEvent,
  ProposalExecuted as ProposalExecutedEvent,
  ProposalCanceled as ProposalCanceledEvent,
  VoteCast as VoteCastEvent,
  VoteCastWithParams as VoteCastWithParamsEvent,
  Governor as GovernorContract
} from "../../generated/templates/Governor/Governor"

import { constants, decimals } from "@amxx/graphprotocol-utils"

export function handleProposalCreated(event: ProposalCreatedEvent): void {
  let governor = fetchGovernor(event.address)

  let proposal = fetchProposal(governor, event.params.proposalId)
  proposal.proposer = fetchAccount(event.params.proposer).id
  proposal.startBlock = event.params.startBlock
  proposal.endBlock = event.params.endBlock
  proposal.description = event.params.description
  proposal.save()

  let targets = event.params.targets
  let values = event.params.values
  let signatures = event.params.signatures
  let calldatas = event.params.calldatas
  for (let i = 0; i < targets.length; ++i) {
    let id = proposal.id.concat("/").concat(i.toString())
    let call = ProposalCall.load(id)

    if (call == null) {
      call = new ProposalCall(id)
      call.proposal = proposal.id
      call.index = i
    }

    call.target = fetchAccount(targets[i]).id
    call.value =
      i < values.length
        ? decimals.toDecimals(values[i])
        : constants.BIGDECIMAL_ZERO
    call.signature = i < signatures.length ? signatures[i] : ""
    call.calldata = i < calldatas.length ? calldatas[i] : Bytes.empty()
    call.save()
  }

  let ev = new ProposalCreated(
    event.block.number
      .toString()
      .concat("-")
      .concat(event.logIndex.toString())
  )
  ev.emitter = governor.id
  ev.transaction = logTransaction(event).id
  ev.timestamp = event.block.timestamp
  ev.governor = proposal.governor
  ev.proposal = proposal.id
  ev.proposer = proposal.proposer
  ev.save()
}

export function handleProposalQueued(event: ProposalQueuedEvent): void {
  let governor = fetchGovernor(event.address)

  let proposal = fetchProposal(governor, event.params.proposalId)
  proposal.queued = true
  proposal.eta = event.params.eta
  proposal.save()

  let ev = new ProposalQueued(
    event.block.number
      .toString()
      .concat("-")
      .concat(event.logIndex.toString())
  )
  ev.emitter = governor.id
  ev.transaction = logTransaction(event).id
  ev.timestamp = event.block.timestamp
  ev.governor = governor.id
  ev.proposal = proposal.id
  ev.eta = event.params.eta
  ev.save()
}

export function handleProposalExecuted(event: ProposalExecutedEvent): void {
  let governor = fetchGovernor(event.address)

  let proposal = fetchProposal(governor, event.params.proposalId)
  proposal.executed = true
  proposal.save()

  let ev = new ProposalExecuted(
    event.block.number
      .toString()
      .concat("-")
      .concat(event.logIndex.toString())
  )
  ev.emitter = governor.id
  ev.transaction = logTransaction(event).id
  ev.timestamp = event.block.timestamp
  ev.governor = governor.id
  ev.proposal = proposal.id
  ev.save()
}

export function handleProposalCanceled(event: ProposalCanceledEvent): void {
  let governor = fetchGovernor(event.address)

  let proposal = fetchProposal(governor, event.params.proposalId)
  proposal.canceled = true
  proposal.save()

  let ev = new ProposalCanceled(
    event.block.number
      .toString()
      .concat("-")
      .concat(event.logIndex.toString())
  )
  ev.emitter = governor.id
  ev.transaction = logTransaction(event).id
  ev.timestamp = event.block.timestamp
  ev.governor = governor.id
  ev.proposal = proposal.id
  ev.save()
}

export function handleVoteCast(event: VoteCastEvent): void {
  let governor = fetchGovernor(event.address)

  let proposal = fetchProposal(governor, event.params.proposalId)

  let id = proposal.id.concat("/").concat(event.params.support.toString())
  let support = ProposalSupport.load(id)

  if (support == null) {
    support = new ProposalSupport(id)
    support.proposal = proposal.id
    support.support = event.params.support
    support.weight = constants.BIGINT_ZERO
  }

  support.weight = support.weight.plus(event.params.weight)
  support.save()

  let receipt = fetchVoteReceipt(proposal, event.params.voter)
  receipt.support = support.id
  receipt.weight = event.params.weight
  receipt.reason = event.params.reason
  receipt.save()

  let ev = new VoteCast(
    event.block.number
      .toString()
      .concat("-")
      .concat(event.logIndex.toString())
  )
  ev.emitter = governor.id
  ev.transaction = logTransaction(event).id
  ev.timestamp = event.block.timestamp
  ev.governor = governor.id
  ev.proposal = receipt.proposal
  ev.support = receipt.support
  ev.receipt = receipt.id
  ev.voter = receipt.voter
  ev.save()
}

export function handleVoteCastWithParams(event: VoteCastWithParamsEvent): void {
  let governor = fetchGovernor(event.address)

  let proposal = fetchProposal(governor, event.params.proposalId)

  let id = proposal.id.concat("/").concat(event.params.support.toString())
  let support = ProposalSupport.load(id)

  if (support == null) {
    support = new ProposalSupport(id)
    support.proposal = proposal.id
    support.support = event.params.support
    support.weight = constants.BIGINT_ZERO
  }

  support.weight = support.weight.plus(event.params.weight)
  support.save()

  let receipt = fetchVoteReceipt(proposal, event.params.voter)
  receipt.support = support.id
  receipt.weight = event.params.weight
  receipt.reason = event.params.reason
  receipt.params = event.params.params
  receipt.save()

  let ev = new VoteCast(
    event.block.number
      .toString()
      .concat("-")
      .concat(event.logIndex.toString())
  )
  ev.emitter = governor.id
  ev.transaction = logTransaction(event).id
  ev.timestamp = event.block.timestamp
  ev.governor = governor.id
  ev.proposal = receipt.proposal
  ev.support = receipt.support
  ev.receipt = receipt.id
  ev.voter = receipt.voter
  ev.save()
}

// HELPERS

export function fetchAccount(address: Address): Account {
  let account = new Account(address)
  account.save()
  return account
}

export function fetchGovernor(address: Address): Governor {
  let contract = Governor.load(address)

  if (contract == null) {
    const COUNTING_MODE = GovernorContract.bind(address).try_COUNTING_MODE()

    contract = new Governor(address)
    contract.asAccount = address
    if (!COUNTING_MODE.reverted) {
      contract.mode = COUNTING_MODE.value
    }
    contract.save()

    let account = fetchAccount(address)
    account.asGovernor = address
    account.save()
  }

  return contract as Governor
}

export function fetchProposal(
  contract: Governor,
  proposalId: BigInt
): Proposal {
  let id = contract.id
    .toHex()
    .concat("/")
    .concat(proposalId.toHex())
  let proposal = Proposal.load(id)

  if (proposal == null) {
    proposal = new Proposal(id)
    proposal.governor = contract.id
    proposal.proposalId = proposalId
    proposal.proposer = Address.zero()
    proposal.startBlock = BigInt.zero()
    proposal.endBlock = BigInt.zero()
    proposal.description = ""
    proposal.canceled = false
    proposal.queued = false
    proposal.executed = false
  }

  return proposal as Proposal
}

export function fetchVoteReceipt(
  proposal: Proposal,
  voter: Address
): VoteReceipt {
  let id = proposal.id.concat("/").concat(voter.toHex())
  let receipt = VoteReceipt.load(id)

  if (receipt == null) {
    receipt = new VoteReceipt(id)
    receipt.proposal = proposal.id
    receipt.voter = fetchAccount(voter).id
  }

  return receipt as VoteReceipt
}

export function logTransaction(event: ethereum.Event): Transaction {
  let tx = new Transaction(event.transaction.hash.toHex())
  tx.timestamp = event.block.timestamp
  tx.blockNumber = event.block.number
  tx.save()
  return tx as Transaction
}
export type Tx = Transaction
