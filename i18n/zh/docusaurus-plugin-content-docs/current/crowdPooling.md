---
id: crowdPooling
title: DODO V2 众筹建池
sidebar_label: DODO V2 众筹建池
---

## 什么是众筹建池

DEX上的流动性发行主要有3种方式

1. **联合曲线发行：**随着买盘资金进场，按照固定价格曲线，推高交易价格。第一个买家一定能拿到最低价格，大家都想吃第一口肉，由此产生了科学家抢跑问题和抢跑者投机问题。——低成本的代币被用来投机而没有分发到真正的投资人手里。

2. **AMM+二池挖矿：**AMM 要求买盘与卖盘双边等比例配资。大部分项目方难以支付高昂的买盘流动性，但是又不想放弃卖盘流动性的深度，于是发明了二池挖矿，通过释放项目代币给Yeild Farmers，让挖矿的人来提供买盘流动性。这种方式本质是用代币的持续通胀为流动性支付租金，租来的流动性没有忠诚度，「挖卖提」导致了持续的二级市场抛压。

3. **拍卖**：拍卖是一个只能买不能卖的市场，它既没有流动性溢价，也不够灵活。

也就是说，目前在DEX上发行流动性面临着科学家抢跑、买盘成本高、流动性缺乏等问题。我们一直在思考，如何提供一种新的流动性发行方式，对项目方来说，成本低、流动性足够；对交易者来说，起跑公平。参考股票市场的「集合竞价」，我们设计了 众筹建池 这一全新的流动性发行新方式。


众筹建池基本流程如下：

1. 项目方提供一定量的代币，指定代币单价与发行额度。在指定时间内，任何人都可以充值进行认购

2. 根据用户充值的资金量分配代币额度。 若发生超募，同样按照用户充值的资金分配代币额度，并且超募的资金，将会返还给用户

3. 众筹期结束后，公开池自动在 DODO 平台建立，众筹价格作为开盘价立即开启现货交易市场

同时，我们针对众筹建池引入了项目方预存结算机制，为公开池增加了流动性保护机制，以及支持灵活的手续费配置


### 预存结算费用

我们知道，智能合约是被动触发执行的，同时执行上链操作是需要支付一定的成本。众筹建池的业务中，当众筹期结束后，需要一笔交易触发，以改变众筹池合约状态，并且创建公开池，这需要发起交易，第一时间将业务流程往后推进。因此我们引入了预存结算费用，以覆盖这笔交易的成本。

1. 项目方在创建众筹池的时候，向智能合约预存供 众筹期结束后的结算费用（当前为0.2ETH）
2. 众筹期结束时，任何人（包括项目方）均可发起交易，即结束众筹，创建公开池。执行交易的人将会获得预存的结算费用

### 流动性保护

除了交易者之间的「起跑公平」，交易者和项目方之间，也要维持一种平衡制约的关系。越平衡，越有助于市场的健康发展。因此我们设计了 流动性保护 这一机制：

1. 现货市场的买盘由用户充值的资金构成，卖盘由众筹期后剩余的代币构成
2. 这些初始流动性都属于众筹建池的发起人，但流动性保护期内，发起人不能撤出流动性
3. 任何人都可以像在AMM中那样继续添加流动性，只不过PMM的资金利用率更高
4. 该现货市场遵循既定的价格曲线：买入代币，价格就会变高；卖出代币，价格就会变低

### 众筹额度设计

我们针对众筹池留有参与额度的配置功能，任何众筹池均可针对不同的用户，设置对应的额度。配合额度机制，简单列举可实现的玩法：

1. 众筹池针对特权用户设置相应额度，其他用户额度为0。则实现白名单的定向众筹效果
2. 众筹池针对用户的 vDODO 余额，设置不同的阶梯额度，则实现 平台vDODO持有者 的打新折扣

更多说明,[DODO 众筹建池白名单配置](./cpwl)


## 众筹建池的优势

1. 投资者买币的钱并没有被滥用，而是建立了一个流动性市场。
2. 项目方有动力认真工作，维护二级市场表现。不然最终能够获得的资金就会变少。
3. 对于新资产：发币既上所，一步到位。不论筹集到的买盘有多少，都可以为代币提供充足的卖盘流动性，方便后续大量资金进场。
4. 对于已经上市但流动性不充足的资产：可以通过众筹一次性释放大额卖盘流动性，提高流动性溢价。
5. 相比于联合曲线发行：公平起跑，避免科学家抢跑
6. 相比于AMM二池挖矿：不需要通胀代币来支付流动性租金，代币分发到投资人手里而非“挖卖提”的人手里。
7. 相比于拍卖：众筹建池兼容拍卖功能，却不只是简单的募资。在众筹结束后，立即为你建立拥有充沛流动性的市场。得益于PMM算法的灵活性，即使没有募集到很多钱，仍然可以建立一个卖盘流动性非常充足的市场，这是AMM所做不到的。

