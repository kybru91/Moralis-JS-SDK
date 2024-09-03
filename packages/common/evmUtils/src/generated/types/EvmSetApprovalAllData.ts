import { EvmTokenDetails, EvmTokenDetailsInput, EvmTokenDetailsJSON } from '../types/EvmTokenDetails';
import { EvmSpenderDetails, EvmSpenderDetailsInput, EvmSpenderDetailsJSON } from '../types/EvmSpenderDetails';

// $ref: #/components/schemas/SetApprovalAllData
// type: SetApprovalAllData
// properties:
// - token ($ref: #/components/schemas/TokenDetails)
// - operator ($ref: #/components/schemas/SpenderDetails)

export interface EvmSetApprovalAllDataJSON {
  readonly token?: EvmTokenDetailsJSON;
  readonly operator?: EvmSpenderDetailsJSON;
}

export interface EvmSetApprovalAllDataInput {
  readonly token?: EvmTokenDetailsInput | EvmTokenDetails;
  readonly operator?: EvmSpenderDetailsInput | EvmSpenderDetails;
}

export class EvmSetApprovalAllData {
  public static create(input: EvmSetApprovalAllDataInput | EvmSetApprovalAllData): EvmSetApprovalAllData {
    if (input instanceof EvmSetApprovalAllData) {
      return input;
    }
    return new EvmSetApprovalAllData(input);
  }

  public static fromJSON(json: EvmSetApprovalAllDataJSON): EvmSetApprovalAllData {
    const input: EvmSetApprovalAllDataInput = {
      token: json.token ? EvmTokenDetails.fromJSON(json.token) : undefined,
      operator: json.operator ? EvmSpenderDetails.fromJSON(json.operator) : undefined,
    };
    return EvmSetApprovalAllData.create(input);
  }

  public readonly token?: EvmTokenDetails;
  public readonly operator?: EvmSpenderDetails;

  private constructor(input: EvmSetApprovalAllDataInput) {
    this.token = input.token ? EvmTokenDetails.create(input.token) : undefined;
    this.operator = input.operator ? EvmSpenderDetails.create(input.operator) : undefined;
  }

  public toJSON(): EvmSetApprovalAllDataJSON {
    return {
      token: this.token ? this.token.toJSON() : undefined,
      operator: this.operator ? this.operator.toJSON() : undefined,
    }
  }
}
