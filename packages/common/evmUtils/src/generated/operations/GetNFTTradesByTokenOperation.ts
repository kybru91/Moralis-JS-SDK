import { EvmChain, EvmChainInput, EvmChainJSON, EvmAddress, EvmAddressInput, EvmAddressJSON } from '../../dataTypes';
import { EvmTradeCollection, EvmTradeCollectionJSON } from '../types/EvmTradeCollection';

// request parameters:
// - chain ($ref: #/components/schemas/nftTradesChainList)
// - from_block ($ref: #/paths/~1nft~1{address}~1{token_id}~1trades/get/parameters/1/schema)
// - to_block ($ref: #/paths/~1nft~1{address}~1{token_id}~1trades/get/parameters/2/schema)
// - from_date ($ref: #/paths/~1nft~1{address}~1{token_id}~1trades/get/parameters/3/schema)
// - to_date ($ref: #/paths/~1nft~1{address}~1{token_id}~1trades/get/parameters/4/schema)
// - cursor ($ref: #/paths/~1nft~1{address}~1{token_id}~1trades/get/parameters/5/schema)
// - limit ($ref: #/paths/~1nft~1{address}~1{token_id}~1trades/get/parameters/6/schema)
// - nft_metadata ($ref: #/paths/~1nft~1{address}~1{token_id}~1trades/get/parameters/7/schema)
// - address ($ref: #/paths/~1nft~1{address}~1{token_id}~1trades/get/parameters/8/schema)
// - token_id ($ref: #/paths/~1nft~1{address}~1{token_id}~1trades/get/parameters/9/schema)

export interface GetNFTTradesByTokenOperationRequest {
  /**
   * @description The chain to query
   */
  readonly chain?: EvmChainInput | EvmChain;
  /**
   * @description The minimum block number from which to get the transfers
   * * Provide the param 'from_block' or 'from_date'
   * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
   */
  readonly fromBlock?: number;
  /**
   * @description The block number to get the trades from
   */
  readonly toBlock?: number;
  /**
   * @description The start date from which to get the transfers (format in seconds or datestring accepted by momentjs)
   * * Provide the param 'from_block' or 'from_date'
   * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
   */
  readonly fromDate?: Date;
  /**
   * @description The end date from which to get the transfers (format in seconds or datestring accepted by momentjs)
   * * Provide the param 'to_block' or 'to_date'
   * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
   */
  readonly toDate?: Date;
  /**
   * @description The cursor returned in the previous response (used for getting the next page).
   */
  readonly cursor?: string;
  /**
   * @description The desired page size of the result.
   */
  readonly limit?: number;
  /**
   * @description Include the NFT Metadata of the NFT Token
   */
  readonly nftMetadata?: boolean;
  /**
   * @description The address of the NFT contract
   */
  readonly address: EvmAddressInput | EvmAddress;
  /**
   * @description The token ID of the NFT contract
   */
  readonly tokenId: string;
}

export interface GetNFTTradesByTokenOperationRequestJSON {
  readonly chain?: EvmChainJSON;
  readonly from_block?: number;
  readonly to_block?: string;
  readonly from_date?: string;
  readonly to_date?: string;
  readonly cursor?: string;
  readonly limit?: number;
  readonly nft_metadata?: boolean;
  readonly address: EvmAddressJSON;
  readonly token_id: string;
}

export type GetNFTTradesByTokenOperationResponse = EvmTradeCollection;
export type GetNFTTradesByTokenOperationResponseJSON = EvmTradeCollectionJSON;

export const GetNFTTradesByTokenOperation = {
  operationId: "getNFTTradesByToken",
  groupName: "nft",
  httpMethod: "get",
  routePattern: "/nft/{address}/{token_id}/trades",
  parameterNames: ["chain","from_block","to_block","from_date","to_date","cursor","limit","nft_metadata","address","token_id"],
  hasResponse: true,
  hasBody: false,

  parseResponse(json: EvmTradeCollectionJSON): EvmTradeCollection {
    return EvmTradeCollection.fromJSON(json);
  },

  serializeRequest(request: GetNFTTradesByTokenOperationRequest): GetNFTTradesByTokenOperationRequestJSON {
    const chain = request.chain ? EvmChain.create(request.chain) : undefined;
    const fromBlock = request.fromBlock;
    const toBlock = request.toBlock;
    const fromDate = request.fromDate;
    const toDate = request.toDate;
    const cursor = request.cursor;
    const limit = request.limit;
    const nftMetadata = request.nftMetadata;
    const address = EvmAddress.create(request.address);
    const tokenId = request.tokenId;
    return {
      chain: chain ? chain.toJSON() : undefined,
      from_block: fromBlock,
      to_block: toBlock !== undefined ? String(toBlock) : undefined,
      from_date: fromDate !== undefined ? fromDate.toISOString() : undefined,
      to_date: toDate !== undefined ? toDate.toISOString() : undefined,
      cursor: cursor,
      limit: limit,
      nft_metadata: nftMetadata,
      address: address.toJSON(),
      token_id: tokenId,
    };
  },

}
