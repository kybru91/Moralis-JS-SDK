import { EvmApprovalData, EvmApprovalDataInput, EvmApprovalDataJSON } from '../types/EvmApprovalData';

// $ref: #/components/schemas/ApprovalResponse
// type: ApprovalResponse
// properties:
// - approvals ($ref: #/components/schemas/ApprovalData)

export interface EvmApprovalResponseJSON {
  readonly approvals?: EvmApprovalDataJSON[];
}

export interface EvmApprovalResponseInput {
  readonly approvals?: EvmApprovalDataInput[] | EvmApprovalData[];
}

export class EvmApprovalResponse {
  public static create(input: EvmApprovalResponseInput | EvmApprovalResponse): EvmApprovalResponse {
    if (input instanceof EvmApprovalResponse) {
      return input;
    }
    return new EvmApprovalResponse(input);
  }

  public static fromJSON(json: EvmApprovalResponseJSON): EvmApprovalResponse {
    const input: EvmApprovalResponseInput = {
      approvals: json.approvals ? json.approvals.map((item) => EvmApprovalData.fromJSON(item)) : undefined,
    };
    return EvmApprovalResponse.create(input);
  }

  public static isInput(input: any): input is EvmApprovalResponseInput {
    return [].every((name) => input[name] !== undefined);
  }

  public static isJSON(json: any): json is EvmApprovalResponseJSON {
    return [].every((name) => json[name] !== undefined);
  }

  public readonly approvals?: EvmApprovalData[];

  private constructor(input: EvmApprovalResponseInput) {
    this.approvals = input.approvals ? input.approvals.map((item) => EvmApprovalData.create(item)) : undefined;
  }

  public toJSON(): EvmApprovalResponseJSON {
    return {
      approvals: this.approvals ? this.approvals.map((item) => item.toJSON()) : undefined,
    }
  }
}
