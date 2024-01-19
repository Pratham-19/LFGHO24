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

    Order[] orders;

    mapping(address => uint) ghoSellerMapping;
    mapping(address => uint) ghoBuyerMapping;
    mapping(uint => Order) ordersMapping;
    mapping(address => bool) whiteListedTokens;

    //Whitelist tokens that are allowed to be exchanged on the P2P marketplace
    //GHO Sepolia: 0xc4bF5CbDaBE595361438F8c6a187bDc330539c60
    //DAI Sepolia: 0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357
    constructor(address[] memory whiteListedTokenAddresses) {
        for(uint i = 0; i < whiteListedTokenAddresses.length; i++) {
            whiteListedTokens[whiteListedTokenAddresses[i]] = true;
        }
    }

    //Function to sell GHO
    function sellGHO(uint amount, uint margin, address token2) public payable returns(uint){
        
        //Current function is only to check for GHO but can be extended to any ERC20 token
        require(IERC20(0xc4bF5CbDaBE595361438F8c6a187bDc330539c60).balanceOf(msg.sender) >= amount, "User doesn't have enought balance");
        _counters.increment();
        uint counter = _counters.current();
        //Token2 defaults to DAI, because that's what I have for testing - haha
        if(token2 == address(0)) {
            token2 = 0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357;
        }
        IERC20(0xc4bF5CbDaBE595361438F8c6a187bDc330539c60).transferFrom(msg.sender, address(this), amount);

        Order memory newOrder = Order(OrderType.SELL, OrderStatus.CREATED, amount, margin, 0xc4bF5CbDaBE595361438F8c6a187bDc330539c60, 
                            token2, msg.sender, address(0));
        orders.push(newOrder);
        ordersMapping[counter] = newOrder;

        return counter;
        
    }

    //Function to buy GHO
    function buyGHO(uint amount, address token1) public returns(uint){
        
        //Current function is only to check for GHO but can be extended to any ERC20 token
        //Amount is GHO Amount
        // TBD : Calculate currency in GHO i.e price of GHO and ask the buyer to deposit the amount. This can be done in 2 steps later.
        require(IERC20(token1).balanceOf(msg.sender) >= amount, "User doesn't have enought balance to buy GHO");
        _counters.increment();
        uint counter = _counters.current();
        //Token2 defaults to GHO for now
        address token2 = 0xc4bF5CbDaBE595361438F8c6a187bDc330539c60;

        IERC20(token1).transferFrom(msg.sender, address(this), amount);

        Order memory newOrder = Order(OrderType.BUY, OrderStatus.CREATED, amount, 0, token1, 
                            token2, address(0), msg.sender);
        orders.push(newOrder);
        ordersMapping[counter] = newOrder;

        return counter;
        
    }

    //Function to fulfill an existing sell order
    function fulfillSellOrder(uint orderNumSeller, address token2, uint amount) public payable {
        require(ordersMapping[orderNumSeller].status == OrderStatus.CREATED, "Sell Order has been fulfilled or withdrawn");

        //Missing check - Calculate the current price of GHO in the given token and fulfill the order accordingly
        //Hack: Current price of GHO in given token is calculated at the FE

        require(IERC20(token2).balanceOf(msg.sender) >= amount, "User balance is not sufficient.");
        //Buyer will see a sell order and want to fulfill it with their money

            //Calculate the price of GHO at this moment and check if the order can be fulfilled
            address tokenBuyer = token2;
            address tokenSeller = 0xc4bF5CbDaBE595361438F8c6a187bDc330539c60;
            address _buyer = msg.sender;
            address _seller = ordersMapping[orderNumSeller].seller;
            uint _amountSeller = ordersMapping[orderNumSeller].ghoAmount;
            IERC20(tokenBuyer).transferFrom(msg.sender, _seller, amount);
            IERC20(tokenSeller).transferFrom(address(this), _buyer, _amountSeller);

            Order storage order = ordersMapping[orderNumSeller];
            order.status = OrderStatus.FULFILLED;
            order.buyer = msg.sender;

        //Margin logic tbd
        
    }

    //Function to fulfill an existing buy order
    function fulfillBuyOrder(uint orderNumBuyer, uint amount) public payable {
        require(ordersMapping[orderNumBuyer].status == OrderStatus.CREATED, "Buy Order has been fulfilled or withdrawn");

        //Missing check - Calculate the current price of GHO in the given token and fulfill the order accordingly
        //Hack: Current price of GHO in given token is calculated at the FE
        // Match GHO amount with current token of the buy order
        require(IERC20(0xc4bF5CbDaBE595361438F8c6a187bDc330539c60).balanceOf(msg.sender) >= amount, "User balance is not sufficient.");
        //Seller will see a buy order and want to fulfill it with their GHO

            //Calculate the price of GHO at this moment and check if the order can be fulfilled
            address tokenBuyer = ordersMapping[orderNumBuyer].token1;
            address tokenSeller = 0xc4bF5CbDaBE595361438F8c6a187bDc330539c60;
            address _seller = msg.sender;
            address _buyer = ordersMapping[orderNumBuyer].buyer;
            uint _amountBuyer = ordersMapping[orderNumBuyer].ghoAmount;
            IERC20(tokenBuyer).transferFrom(address(this), _seller, _amountBuyer);
            IERC20(tokenSeller).transferFrom(msg.sender, _buyer, amount);

            Order storage order = ordersMapping[orderNumBuyer];
            order.status = OrderStatus.FULFILLED;
            order.buyer = msg.sender;

        //Margin logic tbd
        
    }
}
