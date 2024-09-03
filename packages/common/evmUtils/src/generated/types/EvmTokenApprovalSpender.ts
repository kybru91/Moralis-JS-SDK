import { EvmAddress, EvmAddressInput, EvmAddressJSON } from '../../dataTypes';

// $ref: #/components/schemas/tokenApproval/properties/spender
// type: tokenApproval_spender
// properties:
// - address ($ref: #/components/schemas/tokenApproval/properties/spender/properties/address)
// - address_label ($ref: #/components/schemas/tokenApproval/properties/spender/properties/address_label)
// - entity ($ref: #/components/schemas/tokenApproval/properties/spender/properties/entity)
// - entity_logo ($ref: #/components/schemas/tokenApproval/properties/spender/properties/entity_logo)

export interface EvmTokenApprovalSpenderJSON {
  readonly address?: EvmAddressJSON;
  readonly address_label?: string;
  readonly entity?: string;
  readonly entity_logo?: string;
}

export interface EvmTokenApprovalSpenderInput {
  readonly address?: EvmAddressInput | EvmAddress;
  readonly addressLabel?: string;
  readonly entity?: string;
  readonly entityLogo?: string;
}

export class EvmTokenApprovalSpender {
  public static create(input: EvmTokenApprovalSpenderInput | EvmTokenApprovalSpender): EvmTokenApprovalSpender {
    if (input instanceof EvmTokenApprovalSpender) {
      return input;
    }
    return new EvmTokenApprovalSpender(input);
  }

  public static fromJSON(json: EvmTokenApprovalSpenderJSON): EvmTokenApprovalSpender {
    const input: EvmTokenApprovalSpenderInput = {
      address: json.address ? EvmAddress.fromJSON(json.address) : undefined,
      addressLabel: json.address_label,
      entity: json.entity,
      entityLogo: json.entity_logo,
    };
    return EvmTokenApprovalSpender.create(input);
  }

  public readonly address?: EvmAddress;
  public readonly addressLabel?: string;
  public readonly entity?: string;
  public readonly entityLogo?: string;

  private constructor(input: EvmTokenApprovalSpenderInput) {
    this.address = input.address ? EvmAddress.create(input.address) : undefined;
    this.addressLabel = input.addressLabel;
    this.entity = input.entity;
    this.entityLogo = input.entityLogo;
  }

  public toJSON(): EvmTokenApprovalSpenderJSON {
    return {
      address: this.address ? this.address.toJSON() : undefined,
      address_label: this.addressLabel,
      entity: this.entity,
      entity_logo: this.entityLogo,
    }
  }
}
