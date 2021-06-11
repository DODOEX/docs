---
id: cpwl
title: DODO 众筹建池白名单配置
sidebar_label: DODO 众筹建池白名单配置
---

DODO 众筹建池支持项目方配置白名单，指定白名单的用户参与众筹活动，但该功能非前端默认选项，需要联系DODO来实现后台关联配置。

对于项目方来说，需要做的事情是，单独部署一份白名单合约，DODO提供了白名单合约模板，代码地址为：[https://github.com/DODOEX/contractV2/blob/main/contracts/DODOFee/UserQuota.sol](https://github.com/DODOEX/contractV2/blob/main/contracts/DODOFee/UserQuota.sol)

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

项目方创建白名单合约后，作为合约owner，可以通过setUserQuota 函数，设置用户对应的认购额度（若选择USDT众筹，则额度对应USDT）。对于白名单功能来说，将白名单内的用户设置对应额度，其他用户地址则默认为0额度。

以上仅是提供的模板合约，项目方可以根据自身需求灵活开发，但最终需要严格实现 IQuota 的接口规范（getUserQuota），并将该合约地址开源后，在众筹开始前的半天，提供给DODO进行合约关联配置。


*注：若有配置白名单需求，可发邮件至ray@dodoex.io或candice@dodoex.io*

邮件内容可按照如下模板：

- 项目名称

- 项目介绍

- 众筹信息（众筹所在网络，开启与持续时间等）

- 白名单合约地址