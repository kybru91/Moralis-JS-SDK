import { EvmAddress, EvmAddressInput, EvmAddressJSON } from '../../dataTypes';

// $ref: #/components/schemas/tokenApproval/properties/token
// type: tokenApproval_token
// properties:
// - address ($ref: #/components/schemas/tokenApproval/properties/token/properties/address)
// - address_label ($ref: #/components/schemas/tokenApproval/properties/token/properties/address_label)
// - name ($ref: #/components/schemas/tokenApproval/properties/token/properties/name)
// - symbol ($ref: #/components/schemas/tokenApproval/properties/token/properties/symbol)
// - logo ($ref: #/components/schemas/tokenApproval/properties/token/properties/logo)
// - possible_spam ($ref: #/components/schemas/tokenApproval/properties/token/properties/possible_spam)
// - verified_contract ($ref: #/components/schemas/tokenApproval/properties/token/properties/verified_contract)
// - current_balance ($ref: #/components/schemas/tokenApproval/properties/token/properties/current_balance)
// - current_balance_formatted ($ref: #/components/schemas/tokenApproval/properties/token/properties/current_balance_formatted)
// - usd_price ($ref: #/components/schemas/tokenApproval/properties/token/properties/usd_price)
// - usd_at_risk ($ref: #/components/schemas/tokenApproval/properties/token/properties/usd_at_risk)

export interface EvmTokenApprovalTokenJSON {
  readonly address?: EvmAddressJSON;
  readonly address_label?: string;
  readonly name?: string;
  readonly symbol?: string;
  readonly logo?: string;
  readonly possible_spam?: boolean;
  readonly verified_contract?: boolean;
  readonly current_balance?: string;
  readonly current_balance_formatted?: string;
  readonly usd_price?: string;
  readonly usd_at_risk?: string;
}

export interface EvmTokenApprovalTokenInput {
  readonly address?: EvmAddressInput | EvmAddress;
  readonly addressLabel?: string;
  readonly name?: string;
  readonly symbol?: string;
  readonly logo?: string;
  readonly possibleSpam?: boolean;
  readonly verifiedContract?: boolean;
  readonly currentBalance?: string;
  readonly currentBalanceFormatted?: string;
  readonly usdPrice?: string;
  readonly usdAtRisk?: string;
}

export class EvmTokenApprovalToken {
  public static create(input: EvmTokenApprovalTokenInput | EvmTokenApprovalToken): EvmTokenApprovalToken {
    if (input instanceof EvmTokenApprovalToken) {
      return input;
    }
    return new EvmTokenApprovalToken(input);
  }

  public static fromJSON(json: EvmTokenApprovalTokenJSON): EvmTokenApprovalToken {
    const input: EvmTokenApprovalTokenInput = {
      address: json.address ? EvmAddress.fromJSON(json.address) : undefined,
      addressLabel: json.address_label,
      name: json.name,
      symbol: json.symbol,
      logo: json.logo,
      possibleSpam: json.possible_spam,
      verifiedContract: json.verified_contract,
      currentBalance: json.current_balance,
      currentBalanceFormatted: json.current_balance_formatted,
      usdPrice: json.usd_price,
      usdAtRisk: json.usd_at_risk,
    };
    return EvmTokenApprovalToken.create(input);
  }

  public readonly address?: EvmAddress;
  public readonly addressLabel?: string;
  public readonly name?: string;
  public readonly symbol?: string;
  public readonly logo?: string;
  public readonly possibleSpam?: boolean;
  public readonly verifiedContract?: boolean;
  public readonly currentBalance?: string;
  public readonly currentBalanceFormatted?: string;
  public readonly usdPrice?: string;
  public readonly usdAtRisk?: string;

  private constructor(input: EvmTokenApprovalTokenInput) {
    this.address = input.address ? EvmAddress.create(input.address) : undefined;
    this.addressLabel = input.addressLabel;
    this.name = input.name;
    this.symbol = input.symbol;
    this.logo = input.logo;
    this.possibleSpam = input.possibleSpam;
    this.verifiedContract = input.verifiedContract;
    this.currentBalance = input.currentBalance;
    this.currentBalanceFormatted = input.currentBalanceFormatted;
    this.usdPrice = input.usdPrice;
    this.usdAtRisk = input.usdAtRisk;
  }

  public toJSON(): EvmTokenApprovalTokenJSON {
    return {
      address: this.address ? this.address.toJSON() : undefined,
      address_label: this.addressLabel,
      name: this.name,
      symbol: this.symbol,
      logo: this.logo,
      possible_spam: this.possibleSpam,
      verified_contract: this.verifiedContract,
      current_balance: this.currentBalance,
      current_balance_formatted: this.currentBalanceFormatted,
      usd_price: this.usdPrice,
      usd_at_risk: this.usdAtRisk,
    }
  }
}
