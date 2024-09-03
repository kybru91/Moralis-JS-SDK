import { EvmChain, EvmChainInput, EvmChainJSON, EvmAddress, EvmAddressInput, EvmAddressJSON } from '../../dataTypes';
import { EvmWalletApprovals, EvmWalletApprovalsJSON } from '../types/EvmWalletApprovals';

// request parameters:
// - chain ($ref: #/components/schemas/chainList)
// - limit ($ref: #/paths/~1wallets~1{address}~1approvals/get/parameters/1/schema)
// - cursor ($ref: #/paths/~1wallets~1{address}~1approvals/get/parameters/2/schema)
// - address ($ref: #/paths/~1wallets~1{address}~1approvals/get/parameters/3/schema)

export interface GetWalletApprovalsOperationRequest {
  /**
   * @description The chain to query
   */
  readonly chain?: EvmChainInput | EvmChain;
  /**
   * @description The desired page size of the result.
   */
  readonly limit?: number;
  /**
   * @description The cursor returned in the previous response (used for getting the next page).
   */
  readonly cursor?: string;
  /**
   * @description The wallet address from which to retrieve active ERC20 token approvals
   */
  readonly address: EvmAddressInput | EvmAddress;
}

export interface GetWalletApprovalsOperationRequestJSON {
  readonly chain?: EvmChainJSON;
  readonly limit?: number;
  readonly cursor?: string;
  readonly address: EvmAddressJSON;
}

export type GetWalletApprovalsOperationResponse = EvmWalletApprovals;
export type GetWalletApprovalsOperationResponseJSON = EvmWalletApprovalsJSON;

export const GetWalletApprovalsOperation = {
  operationId: "getWalletApprovals",
  groupName: "wallets",
  httpMethod: "get",
  routePattern: "/wallets/{address}/approvals",
  parameterNames: ["chain","limit","cursor","address"],
  hasResponse: true,
  hasBody: false,

  parseResponse(json: EvmWalletApprovalsJSON): EvmWalletApprovals {
    return EvmWalletApprovals.fromJSON(json);
  },

  serializeRequest(request: GetWalletApprovalsOperationRequest): GetWalletApprovalsOperationRequestJSON {
    const chain = request.chain ? EvmChain.create(request.chain) : undefined;
    const limit = request.limit;
    const cursor = request.cursor;
    const address = EvmAddress.create(request.address);
    return {
      chain: chain ? chain.toJSON() : undefined,
      limit: limit,
      cursor: cursor,
      address: address.toJSON(),
    };
  },

}
