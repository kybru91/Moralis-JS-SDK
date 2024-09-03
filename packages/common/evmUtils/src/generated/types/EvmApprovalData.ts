import { EvmTokenDetails, EvmTokenDetailsInput, EvmTokenDetailsJSON } from '../types/EvmTokenDetails';
import { EvmSpenderDetails, EvmSpenderDetailsInput, EvmSpenderDetailsJSON } from '../types/EvmSpenderDetails';

// $ref: #/components/schemas/ApprovalData
// type: ApprovalData
// properties:
// - value ($ref: #/components/schemas/ApprovalData/properties/value)
// - value_formatted ($ref: #/components/schemas/ApprovalData/properties/value_formatted)
// - token ($ref: #/components/schemas/TokenDetails)
// - spender ($ref: #/components/schemas/SpenderDetails)

export interface EvmApprovalDataJSON {
  readonly value?: string;
  readonly value_formatted?: string;
  readonly token?: EvmTokenDetailsJSON;
  readonly spender?: EvmSpenderDetailsJSON;
}

export interface EvmApprovalDataInput {
  readonly value?: string;
  readonly valueFormatted?: string;
  readonly token?: EvmTokenDetailsInput | EvmTokenDetails;
  readonly spender?: EvmSpenderDetailsInput | EvmSpenderDetails;
}

export class EvmApprovalData {
  public static create(input: EvmApprovalDataInput | EvmApprovalData): EvmApprovalData {
    if (input instanceof EvmApprovalData) {
      return input;
    }
    return new EvmApprovalData(input);
  }

  public static fromJSON(json: EvmApprovalDataJSON): EvmApprovalData {
    const input: EvmApprovalDataInput = {
      value: json.value,
      valueFormatted: json.value_formatted,
      token: json.token ? EvmTokenDetails.fromJSON(json.token) : undefined,
      spender: json.spender ? EvmSpenderDetails.fromJSON(json.spender) : undefined,
    };
    return EvmApprovalData.create(input);
  }

  public readonly value?: string;
  public readonly valueFormatted?: string;
  public readonly token?: EvmTokenDetails;
  public readonly spender?: EvmSpenderDetails;

  private constructor(input: EvmApprovalDataInput) {
    this.value = input.value;
    this.valueFormatted = input.valueFormatted;
    this.token = input.token ? EvmTokenDetails.create(input.token) : undefined;
    this.spender = input.spender ? EvmSpenderDetails.create(input.spender) : undefined;
  }

  public toJSON(): EvmApprovalDataJSON {
    return {
      value: this.value,
      value_formatted: this.valueFormatted,
      token: this.token ? this.token.toJSON() : undefined,
      spender: this.spender ? this.spender.toJSON() : undefined,
    }
  }
}
