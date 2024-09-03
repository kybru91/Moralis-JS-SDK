import { EvmTokenApproval, EvmTokenApprovalInput, EvmTokenApprovalJSON } from '../types/EvmTokenApproval';

// $ref: #/components/schemas/walletApprovals
// type: walletApprovals
// properties:
// - page ($ref: #/components/schemas/walletApprovals/properties/page)
// - page_size ($ref: #/components/schemas/walletApprovals/properties/page_size)
// - cursor ($ref: #/components/schemas/walletApprovals/properties/cursor)
// - result ($ref: #/components/schemas/tokenApproval)

export interface EvmWalletApprovalsJSON {
  readonly page: number;
  readonly page_size: number;
  readonly cursor: string;
  readonly result: EvmTokenApprovalJSON[];
}

export interface EvmWalletApprovalsInput {
  readonly page: number;
  readonly pageSize: number;
  readonly cursor: string;
  readonly result: EvmTokenApprovalInput[] | EvmTokenApproval[];
}

export class EvmWalletApprovals {
  public static create(input: EvmWalletApprovalsInput | EvmWalletApprovals): EvmWalletApprovals {
    if (input instanceof EvmWalletApprovals) {
      return input;
    }
    return new EvmWalletApprovals(input);
  }

  public static fromJSON(json: EvmWalletApprovalsJSON): EvmWalletApprovals {
    const input: EvmWalletApprovalsInput = {
      page: json.page,
      pageSize: json.page_size,
      cursor: json.cursor,
      result: json.result.map((item) => EvmTokenApproval.fromJSON(item)),
    };
    return EvmWalletApprovals.create(input);
  }

  /**
   * @description The current page of the result
   */
  public readonly page: number;
  /**
   * @description The number of results per page
   */
  public readonly pageSize: number;
  /**
   * @description The cursor to get to the next page
   */
  public readonly cursor: string;
  public readonly result: EvmTokenApproval[];

  private constructor(input: EvmWalletApprovalsInput) {
    this.page = input.page;
    this.pageSize = input.pageSize;
    this.cursor = input.cursor;
    this.result = input.result.map((item) => EvmTokenApproval.create(item));
  }

  public toJSON(): EvmWalletApprovalsJSON {
    return {
      page: this.page,
      page_size: this.pageSize,
      cursor: this.cursor,
      result: this.result.map((item) => item.toJSON()),
    }
  }
}
