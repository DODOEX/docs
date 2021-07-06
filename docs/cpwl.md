---
id: cpwl
title: DODO Crowdpooling Whitelist Configuration
sidebar_label: DODO Crowdpooling Whitelist Configuration
---

DODO Crowdpooling allows projects to configure Whitelist by themselves, and those who are on the list are eligible to participate in the Crowdpooling campaign. However, this function is not by default, so projects have to contact the DOOD team to set up relevant association configuration on the backend. 

For those projects who are interested in, what they need to do is deploy a Whitelist Contract. DOOD has kindly provided a template for a whitelist contract. You can see the contract coding at：[https://github.com/DODOEX/contractV2/blob/main/contracts/DODOFee/UserQuota.sol](https://github.com/DODOEX/contractV2/blob/main/contracts/DODOFee/UserQuota.sol)

```
interface IQuota {
    function getUserQuota(address user) external view returns (int);
}

contract UserQuota is Ownable, IQuota {

    mapping(address => uint256) public userQuota;
    uint256 constant quota = 375 * 10**6; //For example 375u on eth

    function setUserQuota(address[] memory users) external onlyOwner {
        for(uint256 i = 0; i< users.length; i++) {
            require(users[i] != address(0), "USER_INVALID");
            userQuota[users[i]] = quota;
        }
    }

    function getUserQuota(address user) override external view returns (int) {
        return int(userQuota[user]);
    }
}
```

After you’ve created a whitelist contract, you, as the contract owner, can set the corresponding cap on the amount of subscription for participants through the setUserQuota function (If you set USDT as the token for Crowdpooling , then the corresponding cap should also be in USDT). Set the corresponding amount for participants in the whitelist. For the rest of the addresses, default 0. 

The contract above provided only serves as a template. Feel free to develop and adjust contracts based on your own needs. But please keep in mind that the contract has to meet interface specification (getUserQuota) of IQuata. You can contact the DODO team to set up contract association configuration at least half day before the Crowdpooling begins and after the contract address has become open source.

*Note: If you are looking to set up configuration for whitelist, please reach out to us at ray@dodoex.io or candice@dodoex.io. *

Please include the followings in the email

- The name of project

- Project introduction

- Crowdpooling information (Which blockchain is it running on? Starting time, the length of the campaign, and etc) 

- Whitelist contract address
