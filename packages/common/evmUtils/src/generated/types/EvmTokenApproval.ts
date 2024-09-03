import { BigNumber, BigNumberInput, BigNumberJSON } from '@moralisweb3/common-core';
import { EvmTokenApprovalToken, EvmTokenApprovalTokenInput, EvmTokenApprovalTokenJSON } from '../types/EvmTokenApprovalToken';
import { EvmTokenApprovalSpender, EvmTokenApprovalSpenderInput, EvmTokenApprovalSpenderJSON } from '../types/EvmTokenApprovalSpender';

// $ref: #/components/schemas/tokenApproval
// type: tokenApproval
// properties:
// - block_number ($ref: #/components/schemas/tokenApproval/properties/block_number)
// - block_timestamp ($ref: #/components/schemas/tokenApproval/properties/block_timestamp)
// - transaction_hash ($ref: #/components/schemas/tokenApproval/properties/transaction_hash)
// - value ($ref: #/components/schemas/tokenApproval/properties/value)
// - value_formatted ($ref: #/components/schemas/tokenApproval/properties/value_formatted)
// - token ($ref: #/components/schemas/tokenApproval/properties/token)
// - spender ($ref: #/components/schemas/tokenApproval/properties/spender)

export interface EvmTokenApprovalJSON {
  readonly block_number: BigNumberJSON;
  readonly block_timestamp?: string;
  readonly transaction_hash?: string;
  readonly value: string;
  readonly value_formatted?: string;
  readonly token: EvmTokenApprovalTokenJSON;
  readonly spender: EvmTokenApprovalSpenderJSON;
}

export interface EvmTokenApprovalInput {
  readonly blockNumber: BigNumberInput | BigNumber;
  readonly blockTimestamp?: string;
  readonly transactionHash?: string;
  readonly value: string;
  readonly valueFormatted?: string;
  readonly token: EvmTokenApprovalTokenInput | EvmTokenApprovalToken;
  readonly spender: EvmTokenApprovalSpenderInput | EvmTokenApprovalSpender;
}

export class EvmTokenApproval {
  public static create(input: EvmTokenApprovalInput | EvmTokenApproval): EvmTokenApproval {
    if (input instanceof EvmTokenApproval) {
      return input;
    }
    return new EvmTokenApproval(input);
  }

  public static fromJSON(json: EvmTokenApprovalJSON): EvmTokenApproval {
    const input: EvmTokenApprovalInput = {
      blockNumber: BigNumber.fromJSON(json.block_number),
      blockTimestamp: json.block_timestamp,
      transactionHash: json.transaction_hash,
      value: json.value,
      valueFormatted: json.value_formatted,
      token: EvmTokenApprovalToken.fromJSON(json.token),
      spender: EvmTokenApprovalSpender.fromJSON(json.spender),
    };
    return EvmTokenApproval.create(input);
  }

  public readonly blockNumber: BigNumber;
  public readonly blockTimestamp?: string;
  public readonly transactionHash?: string;
  public readonly value: string;
  public readonly valueFormatted?: string;
  public readonly token: EvmTokenApprovalToken;
  public readonly spender: EvmTokenApprovalSpender;

  private constructor(input: EvmTokenApprovalInput) {
    this.blockNumber = BigNumber.create(input.blockNumber);
    this.blockTimestamp = input.blockTimestamp;
    this.transactionHash = input.transactionHash;
    this.value = input.value;
    this.valueFormatted = input.valueFormatted;
    this.token = EvmTokenApprovalToken.create(input.token);
    this.spender = EvmTokenApprovalSpender.create(input.spender);
  }

  public toJSON(): EvmTokenApprovalJSON {
    return {
      block_number: this.blockNumber.toJSON(),
      block_timestamp: this.blockTimestamp,
      transaction_hash: this.transactionHash,
      value: this.value,
      value_formatted: this.valueFormatted,
      token: this.token.toJSON(),
      spender: this.spender.toJSON(),
    }
  }
}
