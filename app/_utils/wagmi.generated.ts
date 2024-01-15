import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GhoToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const ghoTokenAbi =
 [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'facilitatorAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'label',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'bucketCapacity',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'FacilitatorAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'facilitatorAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'oldCapacity',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newCapacity',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'FacilitatorBucketCapacityUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'facilitatorAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'oldLevel',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newLevel',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'FacilitatorBucketLevelUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'facilitatorAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'FacilitatorRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'PERMIT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'facilitatorAddress', internalType: 'address', type: 'address' },
      { name: 'facilitatorLabel', internalType: 'string', type: 'string' },
      { name: 'bucketCapacity', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'addFacilitator',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'facilitator', internalType: 'address', type: 'address' }],
    name: 'getFacilitator',
    outputs: [
      {
        name: '',
        internalType: 'struct IGhoToken.Facilitator',
        type: 'tuple',
        components: [
          { name: 'bucketCapacity', internalType: 'uint128', type: 'uint128' },
          { name: 'bucketLevel', internalType: 'uint128', type: 'uint128' },
          { name: 'label', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'facilitator', internalType: 'address', type: 'address' }],
    name: 'getFacilitatorBucket',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getFacilitatorsList',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'facilitatorAddress', internalType: 'address', type: 'address' },
    ],
    name: 'removeFacilitator',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'facilitator', internalType: 'address', type: 'address' },
      { name: 'newCapacity', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'setFacilitatorBucketCapacity',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const ghoTokenAddress = {
  11155111: '0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const ghoTokenConfig = {
  address: ghoTokenAddress,
  abi: ghoTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ghoTokenAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useReadGhoToken = /*#__PURE__*/ createUseReadContract({
  abi: ghoTokenAbi,
  address: ghoTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useReadGhoTokenDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"PERMIT_TYPEHASH"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useReadGhoTokenPermitTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'PERMIT_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useReadGhoTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: ghoTokenAbi,
  address: ghoTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useReadGhoTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ghoTokenAbi,
  address: ghoTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useReadGhoTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: ghoTokenAbi,
  address: ghoTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"getFacilitator"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useReadGhoTokenGetFacilitator =
  /*#__PURE__*/ createUseReadContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'getFacilitator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"getFacilitatorBucket"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useReadGhoTokenGetFacilitatorBucket =
  /*#__PURE__*/ createUseReadContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'getFacilitatorBucket',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"getFacilitatorsList"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useReadGhoTokenGetFacilitatorsList =
  /*#__PURE__*/ createUseReadContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'getFacilitatorsList',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useReadGhoTokenName = /*#__PURE__*/ createUseReadContract({
  abi: ghoTokenAbi,
  address: ghoTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"nonces"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useReadGhoTokenNonces = /*#__PURE__*/ createUseReadContract({
  abi: ghoTokenAbi,
  address: ghoTokenAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useReadGhoTokenOwner = /*#__PURE__*/ createUseReadContract({
  abi: ghoTokenAbi,
  address: ghoTokenAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useReadGhoTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: ghoTokenAbi,
  address: ghoTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useReadGhoTokenTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: ghoTokenAbi,
  address: ghoTokenAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ghoTokenAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWriteGhoToken = /*#__PURE__*/ createUseWriteContract({
  abi: ghoTokenAbi,
  address: ghoTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"addFacilitator"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWriteGhoTokenAddFacilitator =
  /*#__PURE__*/ createUseWriteContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'addFacilitator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWriteGhoTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: ghoTokenAbi,
  address: ghoTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWriteGhoTokenBurn = /*#__PURE__*/ createUseWriteContract({
  abi: ghoTokenAbi,
  address: ghoTokenAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWriteGhoTokenMint = /*#__PURE__*/ createUseWriteContract({
  abi: ghoTokenAbi,
  address: ghoTokenAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"permit"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWriteGhoTokenPermit = /*#__PURE__*/ createUseWriteContract({
  abi: ghoTokenAbi,
  address: ghoTokenAddress,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"removeFacilitator"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWriteGhoTokenRemoveFacilitator =
  /*#__PURE__*/ createUseWriteContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'removeFacilitator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWriteGhoTokenRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"setFacilitatorBucketCapacity"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWriteGhoTokenSetFacilitatorBucketCapacity =
  /*#__PURE__*/ createUseWriteContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'setFacilitatorBucketCapacity',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWriteGhoTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: ghoTokenAbi,
  address: ghoTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWriteGhoTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWriteGhoTokenTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ghoTokenAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useSimulateGhoToken = /*#__PURE__*/ createUseSimulateContract({
  abi: ghoTokenAbi,
  address: ghoTokenAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"addFacilitator"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useSimulateGhoTokenAddFacilitator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'addFacilitator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useSimulateGhoTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useSimulateGhoTokenBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: ghoTokenAbi,
  address: ghoTokenAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useSimulateGhoTokenMint = /*#__PURE__*/ createUseSimulateContract({
  abi: ghoTokenAbi,
  address: ghoTokenAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"permit"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useSimulateGhoTokenPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"removeFacilitator"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useSimulateGhoTokenRemoveFacilitator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'removeFacilitator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useSimulateGhoTokenRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"setFacilitatorBucketCapacity"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useSimulateGhoTokenSetFacilitatorBucketCapacity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'setFacilitatorBucketCapacity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useSimulateGhoTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useSimulateGhoTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ghoTokenAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useSimulateGhoTokenTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ghoTokenAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWatchGhoTokenEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ghoTokenAbi,
  address: ghoTokenAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ghoTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWatchGhoTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ghoTokenAbi}__ and `eventName` set to `"FacilitatorAdded"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWatchGhoTokenFacilitatorAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    eventName: 'FacilitatorAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ghoTokenAbi}__ and `eventName` set to `"FacilitatorBucketCapacityUpdated"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWatchGhoTokenFacilitatorBucketCapacityUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    eventName: 'FacilitatorBucketCapacityUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ghoTokenAbi}__ and `eventName` set to `"FacilitatorBucketLevelUpdated"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWatchGhoTokenFacilitatorBucketLevelUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    eventName: 'FacilitatorBucketLevelUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ghoTokenAbi}__ and `eventName` set to `"FacilitatorRemoved"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWatchGhoTokenFacilitatorRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    eventName: 'FacilitatorRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ghoTokenAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWatchGhoTokenOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ghoTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D)
 */
export const useWatchGhoTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ghoTokenAbi,
    address: ghoTokenAddress,
    eventName: 'Transfer',
  })
