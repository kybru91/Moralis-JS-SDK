import { EvmAddress, EvmAddressInput, EvmAddressJSON } from '../../dataTypes';

// $ref: #/components/schemas/TokenDetails
// type: TokenDetails
// properties:
// - address ($ref: #/components/schemas/TokenDetails/properties/address)
// - address_label ($ref: #/components/schemas/TokenDetails/properties/address_label)
// - token_name ($ref: #/components/schemas/TokenDetails/properties/token_name)
// - token_logo ($ref: #/components/schemas/TokenDetails/properties/token_logo)
// - token_symbol ($ref: #/components/schemas/TokenDetails/properties/token_symbol)

export interface EvmTokenDetailsJSON {
  readonly address?: EvmAddressJSON;
  readonly address_label?: string;
  readonly token_name?: string;
  readonly token_logo?: string;
  readonly token_symbol?: string;
}

export interface EvmTokenDetailsInput {
  readonly address?: EvmAddressInput | EvmAddress;
  readonly addressLabel?: string;
  readonly tokenName?: string;
  readonly tokenLogo?: string;
  readonly tokenSymbol?: string;
}

export class EvmTokenDetails {
  public static create(input: EvmTokenDetailsInput | EvmTokenDetails): EvmTokenDetails {
    if (input instanceof EvmTokenDetails) {
      return input;
    }
    return new EvmTokenDetails(input);
  }

  public static fromJSON(json: EvmTokenDetailsJSON): EvmTokenDetails {
    const input: EvmTokenDetailsInput = {
      address: json.address ? EvmAddress.fromJSON(json.address) : undefined,
      addressLabel: json.address_label,
      tokenName: json.token_name,
      tokenLogo: json.token_logo,
      tokenSymbol: json.token_symbol,
    };
    return EvmTokenDetails.create(input);
  }

  public readonly address?: EvmAddress;
  public readonly addressLabel?: string;
  public readonly tokenName?: string;
  public readonly tokenLogo?: string;
  public readonly tokenSymbol?: string;

  private constructor(input: EvmTokenDetailsInput) {
    this.address = input.address ? EvmAddress.create(input.address) : undefined;
    this.addressLabel = input.addressLabel;
    this.tokenName = input.tokenName;
    this.tokenLogo = input.tokenLogo;
    this.tokenSymbol = input.tokenSymbol;
  }

  public toJSON(): EvmTokenDetailsJSON {
    return {
      address: this.address ? this.address.toJSON() : undefined,
      address_label: this.addressLabel,
      token_name: this.tokenName,
      token_logo: this.tokenLogo,
      token_symbol: this.tokenSymbol,
    }
  }
}
