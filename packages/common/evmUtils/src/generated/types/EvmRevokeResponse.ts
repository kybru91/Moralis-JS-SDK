import { EvmApprovalData, EvmApprovalDataInput, EvmApprovalDataJSON } from '../types/EvmApprovalData';

// $ref: #/components/schemas/RevokeResponse
// type: RevokeResponse
// properties:
// - revokes ($ref: #/components/schemas/ApprovalData)

export interface EvmRevokeResponseJSON {
  readonly revokes?: EvmApprovalDataJSON[];
}

export interface EvmRevokeResponseInput {
  readonly revokes?: EvmApprovalDataInput[] | EvmApprovalData[];
}

export class EvmRevokeResponse {
  public static create(input: EvmRevokeResponseInput | EvmRevokeResponse): EvmRevokeResponse {
    if (input instanceof EvmRevokeResponse) {
      return input;
    }
    return new EvmRevokeResponse(input);
  }

  public static fromJSON(json: EvmRevokeResponseJSON): EvmRevokeResponse {
    const input: EvmRevokeResponseInput = {
      revokes: json.revokes ? json.revokes.map((item) => EvmApprovalData.fromJSON(item)) : undefined,
    };
    return EvmRevokeResponse.create(input);
  }

  public static isInput(input: any): input is EvmRevokeResponseInput {
    return [].every((name) => input[name] !== undefined);
  }

  public static isJSON(json: any): json is EvmRevokeResponseJSON {
    return [].every((name) => json[name] !== undefined);
  }

  public readonly revokes?: EvmApprovalData[];

  private constructor(input: EvmRevokeResponseInput) {
    this.revokes = input.revokes ? input.revokes.map((item) => EvmApprovalData.create(item)) : undefined;
  }

  public toJSON(): EvmRevokeResponseJSON {
    return {
      revokes: this.revokes ? this.revokes.map((item) => item.toJSON()) : undefined,
    }
  }
}
