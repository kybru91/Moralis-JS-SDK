import { EvmApprovalResponse, EvmApprovalResponseJSON, EvmApprovalResponseInput } from '../types/EvmApprovalResponse';
import { EvmRevokeResponse, EvmRevokeResponseJSON, EvmRevokeResponseInput } from '../types/EvmRevokeResponse';
import { EvmSetApprovalAllResponse, EvmSetApprovalAllResponseJSON, EvmSetApprovalAllResponseInput } from '../types/EvmSetApprovalAllResponse';
import { EvmSetRevokeAllResponse, EvmSetRevokeAllResponseJSON, EvmSetRevokeAllResponseInput } from '../types/EvmSetRevokeAllResponse';

// $ref: #/components/schemas/ResolveContractInteractionResponse
// typeName: ResolveContractInteractionResponse
// unionType: oneOf

export type EvmResolveContractInteractionResponseJSON = EvmApprovalResponseJSON | EvmRevokeResponseJSON | EvmSetApprovalAllResponseJSON | EvmSetRevokeAllResponseJSON;
export type EvmResolveContractInteractionResponseInput = EvmApprovalResponseInput | EvmRevokeResponseInput | EvmSetApprovalAllResponseInput | EvmSetRevokeAllResponseInput;
export type EvmResolveContractInteractionResponseValue = EvmApprovalResponse | EvmRevokeResponse | EvmSetApprovalAllResponse | EvmSetRevokeAllResponse;

export abstract class EvmResolveContractInteractionResponse {
  public static create(input: EvmResolveContractInteractionResponseInput): EvmResolveContractInteractionResponseValue {
    if (EvmApprovalResponse.isInput(input)) {
      return EvmApprovalResponse.create(input);
    }
    if (EvmRevokeResponse.isInput(input)) {
      return EvmRevokeResponse.create(input);
    }
    if (EvmSetApprovalAllResponse.isInput(input)) {
      return EvmSetApprovalAllResponse.create(input);
    }
    if (EvmSetRevokeAllResponse.isInput(input)) {
      return EvmSetRevokeAllResponse.create(input);
    }
    throw new Error('Cannot resolve union from EvmResolveContractInteractionResponseInput');
  }

  public static fromJSON(json: EvmResolveContractInteractionResponseJSON): EvmResolveContractInteractionResponseValue {
    if (EvmApprovalResponse.isJSON(json)) {
      return EvmApprovalResponse.fromJSON(json);
    }
    if (EvmRevokeResponse.isJSON(json)) {
      return EvmRevokeResponse.fromJSON(json);
    }
    if (EvmSetApprovalAllResponse.isJSON(json)) {
      return EvmSetApprovalAllResponse.fromJSON(json);
    }
    if (EvmSetRevokeAllResponse.isJSON(json)) {
      return EvmSetRevokeAllResponse.fromJSON(json);
    }
    const keys = Object.keys(json).join(', ');
    const type = (json as any).type;
    throw new Error(`Cannot resolve union from EvmResolveContractInteractionResponseJSON (keys: ${keys}, type: ${type})`);
  }

  public static toJSON(value: EvmResolveContractInteractionResponseValue): EvmResolveContractInteractionResponseJSON {
    if (value instanceof EvmApprovalResponse) {
      return value.toJSON();
    }
    if (value instanceof EvmRevokeResponse) {
      return value.toJSON();
    }
    if (value instanceof EvmSetApprovalAllResponse) {
      return value.toJSON();
    }
    if (value instanceof EvmSetRevokeAllResponse) {
      return value.toJSON();
    }
    throw new Error('Cannot resolve union from EvmResolveContractInteractionResponseValue');
  }
}
