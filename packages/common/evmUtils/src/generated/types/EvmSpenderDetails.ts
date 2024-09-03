import { EvmAddress, EvmAddressInput, EvmAddressJSON } from '../../dataTypes';

// $ref: #/components/schemas/SpenderDetails
// type: SpenderDetails
// properties:
// - address ($ref: #/components/schemas/SpenderDetails/properties/address)
// - address_label ($ref: #/components/schemas/SpenderDetails/properties/address_label)
// - name ($ref: #/components/schemas/SpenderDetails/properties/name)
// - symbol ($ref: #/components/schemas/SpenderDetails/properties/symbol)
// - logo ($ref: #/components/schemas/SpenderDetails/properties/logo)
// - entity ($ref: #/components/schemas/SpenderDetails/properties/entity)
// - entity_logo ($ref: #/components/schemas/SpenderDetails/properties/entity_logo)

export interface EvmSpenderDetailsJSON {
  readonly address?: EvmAddressJSON;
  readonly address_label?: string;
  readonly name?: string;
  readonly symbol?: string;
  readonly logo?: string;
  readonly entity?: string;
  readonly entity_logo?: string;
}

export interface EvmSpenderDetailsInput {
  readonly address?: EvmAddressInput | EvmAddress;
  readonly addressLabel?: string;
  readonly name?: string;
  readonly symbol?: string;
  readonly logo?: string;
  readonly entity?: string;
  readonly entityLogo?: string;
}

export class EvmSpenderDetails {
  public static create(input: EvmSpenderDetailsInput | EvmSpenderDetails): EvmSpenderDetails {
    if (input instanceof EvmSpenderDetails) {
      return input;
    }
    return new EvmSpenderDetails(input);
  }

  public static fromJSON(json: EvmSpenderDetailsJSON): EvmSpenderDetails {
    const input: EvmSpenderDetailsInput = {
      address: json.address ? EvmAddress.fromJSON(json.address) : undefined,
      addressLabel: json.address_label,
      name: json.name,
      symbol: json.symbol,
      logo: json.logo,
      entity: json.entity,
      entityLogo: json.entity_logo,
    };
    return EvmSpenderDetails.create(input);
  }

  public readonly address?: EvmAddress;
  public readonly addressLabel?: string;
  public readonly name?: string;
  public readonly symbol?: string;
  public readonly logo?: string;
  public readonly entity?: string;
  public readonly entityLogo?: string;

  private constructor(input: EvmSpenderDetailsInput) {
    this.address = input.address ? EvmAddress.create(input.address) : undefined;
    this.addressLabel = input.addressLabel;
    this.name = input.name;
    this.symbol = input.symbol;
    this.logo = input.logo;
    this.entity = input.entity;
    this.entityLogo = input.entityLogo;
  }

  public toJSON(): EvmSpenderDetailsJSON {
    return {
      address: this.address ? this.address.toJSON() : undefined,
      address_label: this.addressLabel,
      name: this.name,
      symbol: this.symbol,
      logo: this.logo,
      entity: this.entity,
      entity_logo: this.entityLogo,
    }
  }
}
