import { EvmSetApprovalAllData, EvmSetApprovalAllDataInput, EvmSetApprovalAllDataJSON } from '../types/EvmSetApprovalAllData';

// $ref: #/components/schemas/SetApprovalAllResponse
// type: SetApprovalAllResponse
// properties:
// - set_approvals_all ($ref: #/components/schemas/SetApprovalAllData)

export interface EvmSetApprovalAllResponseJSON {
  readonly set_approvals_all?: EvmSetApprovalAllDataJSON[];
}

export interface EvmSetApprovalAllResponseInput {
  readonly setApprovalsAll?: EvmSetApprovalAllDataInput[] | EvmSetApprovalAllData[];
}

export class EvmSetApprovalAllResponse {
  public static create(input: EvmSetApprovalAllResponseInput | EvmSetApprovalAllResponse): EvmSetApprovalAllResponse {
    if (input instanceof EvmSetApprovalAllResponse) {
      return input;
    }
    return new EvmSetApprovalAllResponse(input);
  }

  public static fromJSON(json: EvmSetApprovalAllResponseJSON): EvmSetApprovalAllResponse {
    const input: EvmSetApprovalAllResponseInput = {
      setApprovalsAll: json.set_approvals_all ? json.set_approvals_all.map((item) => EvmSetApprovalAllData.fromJSON(item)) : undefined,
    };
    return EvmSetApprovalAllResponse.create(input);
  }

  public static isInput(input: any): input is EvmSetApprovalAllResponseInput {
    return [].every((name) => input[name] !== undefined);
  }

  public static isJSON(json: any): json is EvmSetApprovalAllResponseJSON {
    return [].every((name) => json[name] !== undefined);
  }

  public readonly setApprovalsAll?: EvmSetApprovalAllData[];

  private constructor(input: EvmSetApprovalAllResponseInput) {
    this.setApprovalsAll = input.setApprovalsAll ? input.setApprovalsAll.map((item) => EvmSetApprovalAllData.create(item)) : undefined;
  }

  public toJSON(): EvmSetApprovalAllResponseJSON {
    return {
      set_approvals_all: this.setApprovalsAll ? this.setApprovalsAll.map((item) => item.toJSON()) : undefined,
    }
  }
}
