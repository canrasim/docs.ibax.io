(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{428:function(e,o,t){"use strict";t.r(o);var n=t(51),a=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"proof-of-authority-consensus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proof-of-authority-consensus"}},[e._v("#")]),e._v(" Proof-of-Authority Consensus")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"#proof-of-authority-consensus"}},[e._v("Proof-of-Authority Consensus")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#what-is-proof-of-authority-consensus"}},[e._v("What is Proof-of-Authority consensus")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#advantages-of-poa-consensus"}},[e._v("Advantages of PoA consensus")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#poa-consensus-and-common-attack-vectors"}},[e._v("PoA consensus and common attack vectors")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#denial-of-service-attack"}},[e._v("Denial-of-service attack")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#51-percent-attack"}},[e._v("51 percent attack")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#how-poa-consensus-works-in-the-ibax-network"}},[e._v("How PoA consensus works in the IBAX Network")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#honor-node"}},[e._v("Honor node")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#leader-node"}},[e._v("Leader node")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#generating-new-blocks"}},[e._v("Generating new blocks")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#forks"}},[e._v("Forks")])])])])])]),e._v(" "),t("li",[t("p",[e._v("What is Proof-of-Authority consensus")])]),e._v(" "),t("li",[t("p",[e._v("Advantages of PoA consensus")])]),e._v(" "),t("li",[t("p",[e._v("PoA consensus and common means of attack")])]),e._v(" "),t("li",[t("p",[e._v("Implementation of PoA consensus in IBAX")])])]),e._v(" "),t("p",[e._v("In this section, we will describe the Proof-of-Authority consensus and its implementation in IBAX.")]),e._v(" "),t("h2",{attrs:{id:"what-is-proof-of-authority-consensus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-proof-of-authority-consensus"}},[e._v("#")]),e._v(" What is Proof-of-Authority consensus")]),e._v(" "),t("p",[e._v("Consensus mechanisms in a blockchain platform may fall into two types, i.e. permissionless (Bitcoin, Etherium) and permissioned (Etherium Private).")]),e._v(" "),t("p",[e._v('However, IBAX adopts a novel consensus mechanism between the two, i.e. honor nodes use the "permissioned consensus" enabled by a voting mechanism, while blockchain ecosystems and child nodes use the "permissionless consensus". However, IBAX is generally considered as a permissioned one.')]),e._v(" "),t("p",[e._v("All nodes in a blockchain are subject to preliminary authentication. In addition to other benefits, such consensus mechanism is also advantageous to improve the transaction rate. One of these consensus mechanisms is Proof-of-Authority (PoA).")]),e._v(" "),t("p",[e._v("Proof-of-Authority (PoA) is one kind of novel consensus algorithms that provide high performance and fault tolerance. In PoA, rights to generate new blocks are awarded to nodes with proven authority, which must subject to preliminary authentication.")]),e._v(" "),t("h2",{attrs:{id:"advantages-of-poa-consensus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#advantages-of-poa-consensus"}},[e._v("#")]),e._v(" Advantages of PoA consensus")]),e._v(" "),t("p",[e._v("Compared to Proof-of-Work (PoW) or Proof-of-Stake (PoS) consensus, PoA consensus has the following advantages:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("No need of high-performance hardware. Compared to PoW consensus, nodes implementing the PoA consensus does not spend computational resources for solving complex mathematical logic tasks;")])]),e._v(" "),t("li",[t("p",[e._v("The interval of time to generate new blocks is predictable, but that for  PoW and PoS consensuses are different;")])]),e._v(" "),t("li",[t("p",[e._v("High transaction rate. Blocks are generated in a sequence at specified time interval by authorized network nodes, which increases the speed of transaction verification.")])]),e._v(" "),t("li",[t("p",[e._v("Tolerance to compromised and malicious nodes, as long as 51% of nodes are not compromised. IBAX implements a mechanism of banning nodes and revoking block generation rights.")])])]),e._v(" "),t("h2",{attrs:{id:"poa-consensus-and-common-means-of-attack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#poa-consensus-and-common-means-of-attack"}},[e._v("#")]),e._v(" PoA consensus and common means of attack")]),e._v(" "),t("h3",{attrs:{id:"dos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dos"}},[e._v("#")]),e._v(" DoS")]),e._v(" "),t("p",[e._v("An attacker may send large amount of transactions and blocks to a targeted node in the network, making an attempt to disrupt its operation and make its services unavailable.")]),e._v(" "),t("p",[e._v("The PoA mechanism is possible to defend against DoS attacks:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Because network nodes are pre-authenticated, block generation rights can be granted only to nodes that can withstand DoS attacks.")])]),e._v(" "),t("li",[t("p",[e._v("If a honor node is unavailable for a certain period, it can be excluded from the list of honor nodes.")])])]),e._v(" "),t("h3",{attrs:{id:"_51-percent-attack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_51-percent-attack"}},[e._v("#")]),e._v(" 51 percent attack")]),e._v(" "),t("p",[e._v("As to the scenario with the PoA consensus, the 51% attack requires an attacker to obtain control over 51% of network nodes. But the scenario for the PoW consensus is different, which an attacker needs to obtain 51% of network computational power. Obtaining the control over nodes in a permissioned blockchain network is much harder than obtaining the computational power.")]),e._v(" "),t("p",[e._v("For example, in a network implementing the PoW consensus, an attacker can increase computation power (performance) of the controlled network segment thus increasing the percentage of controlled nodes. This makes no sense for PoA consensus, because the computational power of the node has no impact on the blockchain network decisions.")]),e._v(" "),t("h2",{attrs:{id:"implementation-of-poa-consensus-in-ibax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation-of-poa-consensus-in-ibax"}},[e._v("#")]),e._v(" Implementation of PoA consensus in IBAX")]),e._v(" "),t("h3",{attrs:{id:"honor-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#honor-node"}},[e._v("#")]),e._v(" Honor node")]),e._v(" "),t("p",[e._v("In IBAX, only honor nodes can generate new blocks, which maintain the blockchain network and the distributed ledger.")]),e._v(" "),t("p",[e._v("The list of honor nodes is kept in the blockchain registry. The order of nodes determines the sequence in which nodes generate new blocks.")]),e._v(" "),t("h3",{attrs:{id:"leader-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#leader-node"}},[e._v("#")]),e._v(" Leader node")]),e._v(" "),t("p",[e._v("The following formula determines the current leader node, i.e. a node that must generate a new block at the current time.")]),e._v(" "),t("p",[e._v("leader = ((time - first) / step) % nodes")]),e._v(" "),t("p",[e._v("leader")]),e._v(" "),t("p",[e._v("Current leader node.")]),e._v(" "),t("p",[e._v("time")]),e._v(" "),t("p",[e._v("Current time (UNIX).")]),e._v(" "),t("p",[e._v("first")]),e._v(" "),t("p",[e._v("First block generation time (UNIX).")]),e._v(" "),t("p",[e._v("step")]),e._v(" "),t("p",[e._v("Number of seconds in the block generation interval.")]),e._v(" "),t("p",[e._v("nodes")]),e._v(" "),t("p",[e._v("Total number of honor nodes.")]),e._v(" "),t("h3",{attrs:{id:"generation-of-new-blocks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generation-of-new-blocks"}},[e._v("#")]),e._v(" Generation of new blocks")]),e._v(" "),t("p",[e._v("New blocks are generated by a leader node of the current time interval. At each time interval, the leader role is passed to the next honor node from the list of honor nodes.")]),e._v(" "),t("p",[e._v("../_images/block-generation.png")]),e._v(" "),t("p",[e._v("a) Steps for Generation of new blocks")]),e._v(" "),t("p",[e._v("Main steps for generating a new block are as follows:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Collects all new transactions from the transaction queue of the node;")])]),e._v(" "),t("li",[t("p",[e._v("Executes transactions one by one. Invalid or inexecutable transactions are rejected;")])]),e._v(" "),t("li",[t("p",[e._v("Checks if the block generation limits is in compliance;")])]),e._v(" "),t("li",[t("p",[e._v("Generates a block with valid transactions and signs it with the private key of the honor node through the ECDSA algorithm;")])]),e._v(" "),t("li",[t("p",[e._v("Sends this block to other honor nodes.")])])]),e._v(" "),t("p",[e._v("b) Verification of new blocks")]),e._v(" "),t("p",[e._v("Steps for verifying new blocks on other honor nodes:")]),e._v(" "),t("p",[e._v("1.Receive a new block and verify:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("– whether the new block was generated by the leader node of a current interval;\n\n– whether there are no other blocks generated by the leader node of a current interval;\n\n– whether the new block is properly signed. \n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[e._v("Execute transactions from the block one by one. Check whether the transactions are executed successfully and within the block generation limits .")])]),e._v(" "),t("li",[t("p",[e._v("Add or reject the block, depending on the previous step:")]),e._v(" "),t("p",[e._v("– If block validation is successful, add the new block to the blockchain of the current node;")]),e._v(" "),t("p",[e._v("– If block validation failed, reject the block and send a bad block transaction;")]),e._v(" "),t("p",[e._v("– If the honor node that created this invalid block continues to generate bad blocks, it can be banned or excluded from the list of honor nodes.")])])]),e._v(" "),t("h3",{attrs:{id:"forks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#forks"}},[e._v("#")]),e._v(" Forks")]),e._v(" "),t("p",[e._v("A fork is an alternative version of the blockchain, which contains one or more blocks that were generated independently from the rest of the blockchain.")]),e._v(" "),t("p",[e._v("Forks usually occur when a part of the network becomes desynchronized. Factors that are probably result in forks are high network latency, intentional or unintentional time limits violation, time desynchronization at nodes. If network nodes have a significant geographic distribution, block generation interval must be increased.")]),e._v(" "),t("p",[e._v("Forks are resolved by following the longest blockchain rule. When two blockchain versions are detected, honor nodes rollback the shorter one and accept the longer one.")]),e._v(" "),t("p",[e._v("../_images/block-fork-resolution.png")])])}),[],!1,null,null,null);o.default=a.exports}}]);