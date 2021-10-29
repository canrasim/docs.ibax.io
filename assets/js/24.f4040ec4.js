(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{404:function(e,t,a){"use strict";a.r(t);var s=a(51),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#daemon"}},[e._v("#")]),e._v(" Daemon")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#daemon"}},[e._v("Daemon")])])]),e._v(" "),a("p",[e._v("In this section, we will describe how IBax nodes interact with each other from a technical perspective.")]),e._v(" "),a("h2",{attrs:{id:"about-the-server-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-the-server-daemon"}},[e._v("#")]),e._v(" About the server daemon")]),e._v(" "),a("p",[e._v("The server daemon needs to run on every network node, which executes various server functions and supports IBax's blockchain protocol. In the blockchain network, the daemon distributes blocks and transactions, generates new blocks, and verifies blocks and transactions received, and it can avoid the fork issue.")]),e._v(" "),a("h3",{attrs:{id:"honor-node-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#honor-node-daemon"}},[e._v("#")]),e._v(" Honor node daemon")]),e._v(" "),a("p",[e._v("A honor node runs the following server daemons:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("BlockGenerator daemon")]),e._v(" "),a("ul",[a("li",[e._v("Generating new blocks.")])])]),e._v(" "),a("li",[a("p",[e._v("BlockCollection daemon")]),e._v(" "),a("ul",[a("li",[e._v("Downloading new blocks from other nodes.")])])]),e._v(" "),a("li",[a("p",[e._v("Confirmations daemon")]),e._v(" "),a("ul",[a("li",[e._v("Confirming that blocks on the node also exist on most other nodes.")])])]),e._v(" "),a("li",[a("p",[e._v("Disseminator daemon")]),e._v(" "),a("ul",[a("li",[e._v("Distributing transactions and blocks to other honor nodes.")])])]),e._v(" "),a("li",[a("p",[e._v("QueueParserBlocks daemon")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Blocks in the queue, which contains blocks from other nodes.")])]),e._v(" "),a("li",[a("p",[e._v("Block processing logic is the same as BlockCollection daemon.")])])])]),e._v(" "),a("li",[a("p",[e._v("QueueParserTx daemon")]),e._v(" "),a("ul",[a("li",[e._v("Verifying the transactions in queue.")])])]),e._v(" "),a("li",[a("p",[e._v("Scheduler daemon")]),e._v(" "),a("ul",[a("li",[e._v("Running contracts as scheduled.")])])])]),e._v(" "),a("h3",{attrs:{id:"guardian-node-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guardian-node-daemon"}},[e._v("#")]),e._v(" Guardian node daemon")]),e._v(" "),a("p",[e._v("A guardian node runs the following server daemons:")]),e._v(" "),a("ul",[a("li",[e._v("BlockCollection daemon")]),e._v(" "),a("li",[e._v("Confirmations daemon")]),e._v(" "),a("li",[e._v("Disseminator daemon")]),e._v(" "),a("li",[e._v("QueueParserTx")]),e._v(" "),a("li",[e._v("Scheduler")])]),e._v(" "),a("h2",{attrs:{id:"blockcollection-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blockcollection-daemon"}},[e._v("#")]),e._v(" BlockCollection daemon")]),e._v(" "),a("p",[e._v("This daemon downloads blocks and synchronizes the blockchain with other network nodes.")]),e._v(" "),a("h3",{attrs:{id:"blockchain-synchronization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-synchronization"}},[e._v("#")]),e._v(" Blockchain synchronization")]),e._v(" "),a("p",[e._v("This daemon synchronizes the blockchain by determining the maximum block height in the blockchain network, requesting new blocks, and solving the fork issue in the blockchain.")]),e._v(" "),a("h4",{attrs:{id:"check-for-blockchain-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-for-blockchain-updates"}},[e._v("#")]),e._v(" Check for blockchain updates")]),e._v(" "),a("p",[e._v("This daemon sends requests from the current block ID to all honor nodes.")]),e._v(" "),a("p",[e._v("If the current block ID of the node running the daemon is less than the current block ID of any honor node, the blockchain network node is considered out of date.")]),e._v(" "),a("h4",{attrs:{id:"download-new-blocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-new-blocks"}},[e._v("#")]),e._v(" Download new blocks")]),e._v(" "),a("p",[e._v("The node that returns the largest current block height is considered the latest node.\nThe daemon downloads all unknown blocks.")]),e._v(" "),a("h4",{attrs:{id:"solving-the-fork-issue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solving-the-fork-issue"}},[e._v("#")]),e._v(" Solving the fork issue")]),e._v(" "),a("p",[e._v("If a fork is detected in the blockchain, the daemon moves the fork backward by downloading all blocks to a common parent block.\nWhen found the common parent block, a blockchain rollback is performed on the node running the daemon, and the correct block is added to the blockchain until the latest one is included.")]),e._v(" "),a("h3",{attrs:{id:"tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tables"}},[e._v("#")]),e._v(" Tables")]),e._v(" "),a("p",[e._v("The BlocksCollection daemon uses the following tables:")]),e._v(" "),a("ul",[a("li",[e._v("block_chain")]),e._v(" "),a("li",[e._v("transactions")]),e._v(" "),a("li",[e._v("transactions_status")]),e._v(" "),a("li",[e._v("info_block")])]),e._v(" "),a("h3",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[e._v("#")]),e._v(" Request")]),e._v(" "),a("p",[e._v("The BlockCollection daemon sends the following requests to other daemons:")]),e._v(" "),a("ul",[a("li",[e._v("Type 10 points to the largest block ID among all honor nodes.")]),e._v(" "),a("li",[e._v("Type 7 points to the data with the largest block ID.")])]),e._v(" "),a("h2",{attrs:{id:"blockgenerator-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blockgenerator-daemon"}},[e._v("#")]),e._v(" BlockGenerator daemon")]),e._v(" "),a("p",[e._v("The BlockGenerator daemon generates new blocks.")]),e._v(" "),a("h3",{attrs:{id:"pre-verification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-verification"}},[e._v("#")]),e._v(" Pre-verification")]),e._v(" "),a("p",[e._v("The BlockGenerator daemon analyzes the latest blocks in the blockchain to make new block generation plans.")]),e._v(" "),a("p",[e._v("If the following conditions are met, a new block can be generated:")]),e._v(" "),a("ul",[a("li",[e._v("The node that generated the latest block is in a node within the honor node list and runs the daemon.")]),e._v(" "),a("li",[e._v("The shortest time since the latest unverified block was generated.")])]),e._v(" "),a("h3",{attrs:{id:"block-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-generation"}},[e._v("#")]),e._v(" Block generation")]),e._v(" "),a("p",[e._v("A new block generated by the daemon contains all new transactions, which can be received from the Disseminator daemon of other nodes or generated by the node running the daemon. The block generated is stored in the node database.")]),e._v(" "),a("h3",{attrs:{id:"tables-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tables-2"}},[e._v("#")]),e._v(" Tables")]),e._v(" "),a("p",[e._v("The BlockGenerator daemon uses the following tables:")]),e._v(" "),a("ul",[a("li",[e._v("block_chain (saves new blocks)")]),e._v(" "),a("li",[e._v("transactions")]),e._v(" "),a("li",[e._v("transactions_status")]),e._v(" "),a("li",[e._v("info_block")])]),e._v(" "),a("h3",{attrs:{id:"request-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-2"}},[e._v("#")]),e._v(" Request")]),e._v(" "),a("p",[e._v("The BlockGenerator daemon does not make any request to other daemons.")]),e._v(" "),a("h2",{attrs:{id:"disseminator-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disseminator-daemon"}},[e._v("#")]),e._v(" Disseminator daemon")]),e._v(" "),a("p",[e._v("The Disseminator daemon sends transactions and blocks to all honor nodes.")]),e._v(" "),a("h3",{attrs:{id:"guardian-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guardian-node"}},[e._v("#")]),e._v(" Guardian node")]),e._v(" "),a("p",[e._v("When working on a guardian node, the daemon sends transactions generated by its node to all honor nodes.")]),e._v(" "),a("h3",{attrs:{id:"honor-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#honor-node"}},[e._v("#")]),e._v(" Honor node")]),e._v(" "),a("p",[e._v("When working on a honor node, the daemon sends blocks generated and transaction hashes to all honor nodes.")]),e._v(" "),a("p",[e._v("Then, the honor node responds to transaction requests unknown to it. The daemon sends the complete transaction data as a response.")]),e._v(" "),a("h3",{attrs:{id:"tables-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tables-3"}},[e._v("#")]),e._v(" Tables")]),e._v(" "),a("p",[e._v("The Disseminator daemon uses the following tables:")]),e._v(" "),a("ul",[a("li",[e._v("transactions")])]),e._v(" "),a("h3",{attrs:{id:"request-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-3"}},[e._v("#")]),e._v(" Request")]),e._v(" "),a("p",[e._v("The Disseminator daemon sends the following requests to other daemons:")]),e._v(" "),a("ul",[a("li",[e._v("Type 1 Send transactions and block hashes to the honor node.")]),e._v(" "),a("li",[e._v("Type 2 Receive transaction data from the honor node.")])]),e._v(" "),a("h2",{attrs:{id:"confirmations-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#confirmations-daemon"}},[e._v("#")]),e._v(" Confirmations daemon")]),e._v(" "),a("p",[e._v("The Confirmations daemon checks whether all the blocks in its node exist on most other nodes.")]),e._v(" "),a("h3",{attrs:{id:"block-confirmation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-confirmation"}},[e._v("#")]),e._v(" Block confirmation")]),e._v(" "),a("p",[e._v("A block confirmed by multiple node in the network is considered as a confirmed block.")]),e._v(" "),a("p",[e._v("The daemon confirms all blocks one by one starting from the first that is currently not confirmed in the database.")]),e._v(" "),a("p",[e._v("Each block is confirmed in the way as follows:")]),e._v(" "),a("ul",[a("li",[e._v("Sending a request containing the ID of the block being confirmed to all honor nodes.")]),e._v(" "),a("li",[e._v("All honor nodes respond to the block hash.")]),e._v(" "),a("li",[e._v("If the hash responded matches the hash of the block on the daemon node, the confirmation counter value is increased. If not, the cancellation counter value is increased.")])]),e._v(" "),a("h3",{attrs:{id:"tables-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tables-4"}},[e._v("#")]),e._v(" Tables")]),e._v(" "),a("p",[e._v("The Confirmations daemon uses the following tables:")]),e._v(" "),a("ul",[a("li",[e._v("confirmation")]),e._v(" "),a("li",[e._v("info_block")])]),e._v(" "),a("h3",{attrs:{id:"request-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-4"}},[e._v("#")]),e._v(" Request")]),e._v(" "),a("p",[e._v("The Confirmations daemon sends the following requests to other daemons:")]),e._v(" "),a("ul",[a("li",[e._v("Type 4 Request block hashes from the honor node.")])]),e._v(" "),a("h2",{attrs:{id:"tcp-service-protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-service-protocol"}},[e._v("#")]),e._v(" TCP service protocol")]),e._v(" "),a("p",[e._v("The TCP service protocol works on honor nodes and guardian nodes, which uses the binary protocol on TCP to requests from the BlocksCollection, Disseminator, and Confirmation daemons.")]),e._v(" "),a("h2",{attrs:{id:"request-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-type"}},[e._v("#")]),e._v(" Request type")]),e._v(" "),a("p",[e._v("Each request has a type defined by the first two bytes of the request.")]),e._v(" "),a("h2",{attrs:{id:"type-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-1"}},[e._v("#")]),e._v(" Type 1")]),e._v(" "),a("h4",{attrs:{id:"request-sender"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-sender"}},[e._v("#")]),e._v(" Request sender")]),e._v(" "),a("p",[e._v("This request is sent by the Disseminator daemon.")]),e._v(" "),a("h4",{attrs:{id:"request-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-data"}},[e._v("#")]),e._v(" Request data")]),e._v(" "),a("p",[e._v("Hashes of the transaction and block.")]),e._v(" "),a("h4",{attrs:{id:"request-processing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-processing"}},[e._v("#")]),e._v(" Request processing")]),e._v(" "),a("p",[e._v("The block hash is added to the block queue.")]),e._v(" "),a("p",[e._v("Analyzes and verifies the transaction hashes, and select transactions that have not yet appeared on the node.")]),e._v(" "),a("h4",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[e._v("#")]),e._v(" Response")]),e._v(" "),a("p",[e._v("No. After processing the request, a Type 2 request is issued.")]),e._v(" "),a("h2",{attrs:{id:"type-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-2"}},[e._v("#")]),e._v(" Type 2")]),e._v(" "),a("h4",{attrs:{id:"request-sender-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-sender-2"}},[e._v("#")]),e._v(" Request sender")]),e._v(" "),a("p",[e._v("This request is sent by the Disseminator daemon.")]),e._v(" "),a("h4",{attrs:{id:"request-data-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-data-2"}},[e._v("#")]),e._v(" Request data")]),e._v(" "),a("p",[e._v("The transaction data, including the data size:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("data_size (4 bytes)")])]),e._v(" "),a("li",[a("p",[e._v("Size of the transaction data, in bytes.")])]),e._v(" "),a("li",[a("p",[e._v("data (data_size bytes)")])])]),e._v(" "),a("p",[e._v("The transaction data.")]),e._v(" "),a("p",[e._v("Request processing")]),e._v(" "),a("p",[e._v("Verifies the transaction and add it to the transaction queue.")]),e._v(" "),a("h4",{attrs:{id:"response-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[e._v("#")]),e._v(" Response")]),e._v(" "),a("p",[e._v("No.")]),e._v(" "),a("h2",{attrs:{id:"type-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-4"}},[e._v("#")]),e._v(" Type 4")]),e._v(" "),a("h4",{attrs:{id:"request-sender-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-sender-3"}},[e._v("#")]),e._v(" Request sender")]),e._v(" "),a("p",[e._v("This request is sent by the Confirmations daemon.")]),e._v(" "),a("h4",{attrs:{id:"request-data-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-data-3"}},[e._v("#")]),e._v(" Request data")]),e._v(" "),a("p",[e._v("Block ID.")]),e._v(" "),a("h4",{attrs:{id:"response-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[e._v("#")]),e._v(" Response")]),e._v(" "),a("p",[e._v("Block hash.")]),e._v(" "),a("p",[e._v("Returns 0 if not having a block with this ID.")]),e._v(" "),a("h2",{attrs:{id:"type-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-7"}},[e._v("#")]),e._v(" Type 7")]),e._v(" "),a("h4",{attrs:{id:"request-sender-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-sender-4"}},[e._v("#")]),e._v(" Request sender")]),e._v(" "),a("p",[e._v("This request is sent by the BlockCollection daemon.")]),e._v(" "),a("h4",{attrs:{id:"request-data-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-data-4"}},[e._v("#")]),e._v(" Request data")]),e._v(" "),a("p",[e._v("Block ID.")]),e._v(" "),a("ul",[a("li",[e._v("block_id (4 bytes)")])]),e._v(" "),a("h4",{attrs:{id:"response-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[e._v("#")]),e._v(" Response")]),e._v(" "),a("p",[e._v("The block data, including data size.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("data_size (4 bytes)")])]),e._v(" "),a("li",[a("p",[e._v("Size of the block data, in bytes.")])]),e._v(" "),a("li",[a("p",[e._v("data (data_size bytes)")])])]),e._v(" "),a("p",[e._v("The block data.")]),e._v(" "),a("p",[e._v("The connection is closed if not having a block with this ID.")]),e._v(" "),a("h2",{attrs:{id:"type-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-10"}},[e._v("#")]),e._v(" Type 10")]),e._v(" "),a("h4",{attrs:{id:"request-sender-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-sender-5"}},[e._v("#")]),e._v(" Request sender")]),e._v(" "),a("p",[e._v("This request is sent by the BlockCollection daemon.")]),e._v(" "),a("h4",{attrs:{id:"request-data-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-data-5"}},[e._v("#")]),e._v(" Request data")]),e._v(" "),a("p",[e._v("No.")]),e._v(" "),a("h4",{attrs:{id:"response-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-5"}},[e._v("#")]),e._v(" Response")]),e._v(" "),a("p",[e._v("Block ID.")]),e._v(" "),a("ul",[a("li",[e._v("block_id (4 bytes)")])])])}),[],!1,null,null,null);t.default=o.exports}}]);