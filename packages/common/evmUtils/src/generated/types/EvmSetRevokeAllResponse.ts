import { EvmSetApprovalAllData, EvmSetApprovalAllDataInput, EvmSetApprovalAllDataJSON } from '../types/EvmSetApprovalAllData';

// $ref: #/components/schemas/SetRevokeAllResponse
// type: SetRevokeAllResponse
// properties:
// - set_revokes_all ($ref: #/components/schemas/SetApprovalAllData)

export interface EvmSetRevokeAllResponseJSON {
  readonly set_revokes_all?: EvmSetApprovalAllDataJSON[];
}

export interface EvmSetRevokeAllResponseInput {
  readonly setRevokesAll?: EvmSetApprovalAllDataInput[] | EvmSetApprovalAllData[];
}

export class EvmSetRevokeAllResponse {
  public static create(input: EvmSetRevokeAllResponseInput | EvmSetRevokeAllResponse): EvmSetRevokeAllResponse {
    if (input instanceof EvmSetRevokeAllResponse) {
      return input;
    }
    return new EvmSetRevokeAllResponse(input);
  }

  public static fromJSON(json: EvmSetRevokeAllResponseJSON): EvmSetRevokeAllResponse {
    const input: EvmSetRevokeAllResponseInput = {
      setRevokesAll: json.set_revokes_all ? json.set_revokes_all.map((item) => EvmSetApprovalAllData.fromJSON(item)) : undefined,
    };
    return EvmSetRevokeAllResponse.create(input);
  }

  public static isInput(input: any): input is EvmSetRevokeAllResponseInput {
    return [].every((name) => input[name] !== undefined);
  }

  public static isJSON(json: any): json is EvmSetRevokeAllResponseJSON {
    return [].every((name) => json[name] !== undefined);
  }

  public readonly setRevokesAll?: EvmSetApprovalAllData[];

  private constructor(input: EvmSetRevokeAllResponseInput) {
    this.setRevokesAll = input.setRevokesAll ? input.setRevokesAll.map((item) => EvmSetApprovalAllData.create(item)) : undefined;
  }

  public toJSON(): EvmSetRevokeAllResponseJSON {
    return {
      set_revokes_all: this.setRevokesAll ? this.setRevokesAll.map((item) => item.toJSON()) : undefined,
    }
  }
}
