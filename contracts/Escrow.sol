//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

//Escrow contract for LFGHO P2P Service
//Author: gyanlakshmi@gmail.com
contract Escrow {

    using Counters for Counters.Counter;
    Counters.Counter private _counters;

    enum OrderStatus {CREATED, FULFILLED, WITHDRAWN}
    enum OrderType {BUY, SELL}


    struct Order {
        OrderType orderType;
        OrderStatus status;
        uint ghoAmount;
        uint margin; //Only for sellers
        address token1;
        address token2;
        address seller;
        address buyer;
    }


    
