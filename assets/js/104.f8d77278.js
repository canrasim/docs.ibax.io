(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{484:function(e,t,a){"use strict";a.r(t);var s=a(51),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ibax-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibax-overview"}},[e._v("#")]),e._v(" IBAX Overview")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#ibax-overview"}},[e._v("IBAX Overview")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#features"}},[e._v("Features")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#architecture"}},[e._v("Architecture")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#network"}},[e._v("Network")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#honor-node"}},[e._v("Honor Node")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#transactions"}},[e._v("Transactions")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#network-protocol"}},[e._v("Network protocol")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#block-and-transaction-verification"}},[e._v("Block and transaction verification")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#database"}},[e._v("Database")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#ecolib"}},[e._v("ECOLIB")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#ide"}},[e._v("IDE")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#applications"}},[e._v("Applications")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#tables"}},[e._v("Tables")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#ecosystem-parameters"}},[e._v("Ecosystem Parameters")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#access-rights-control-mechanism"}},[e._v("Access rights control mechanism")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#access-rights-management"}},[e._v("Access rights management")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#exclusive-rights"}},[e._v("Exclusive rights")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#virtual-private-ecosystem"}},[e._v("Virtual private ecosystem")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#requests-to-web-resources"}},[e._v("Requests to web resources")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#rights-to-read-data"}},[e._v("Rights to read data")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#clb-creation"}},[e._v("CLB creation")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#clb-usage"}},[e._v("CLB usage")])])])])])])]),e._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("p",[e._v("The IBAX Network (IBAX) has an integrated application development environment (IDE). It is a multi-level access control system for data, user pages and smart contracts.")]),e._v(" "),a("p",[e._v("In terms of its structure and functions, IBAX is quite different from most existing blockchain platforms:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The development and use of IBAX applications are in an autonomous software environment called "),a("strong",[e._v("ecosystem")]),e._v(". Each ecosystem has its own membership rules that are initially established by the creator;")])]),e._v(" "),a("li",[a("p",[e._v("Ecosystem activities, such as the data involved in "),a("strong",[e._v("database table")]),e._v(" records or updates, are based on "),a("strong",[e._v("registers")]),e._v(" created with "),a("strong",[e._v("smart contracts")]),e._v(". In most other blockchain platforms, activities are based on transaction exchange between accounts;")])]),e._v(" "),a("li",[a("p",[e._v("The access to "),a("strong",[e._v("registers")]),e._v(" and the control of relationships between ecosystem members are managed by a set of rules called "),a("strong",[e._v("smart laws")]),e._v(".")])])]),e._v(" "),a("h2",{attrs:{id:"architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),a("h3",{attrs:{id:"network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network"}},[e._v("#")]),e._v(" Network")]),e._v(" "),a("p",[e._v("IBAX  is built on a peer-to-peer (P2P) network.")]),e._v(" "),a("p",[e._v("Guardian nodes in the network store the latest version of the blockchain database, which records the latest status of  IBAX's blockchain.")]),e._v(" "),a("p",[e._v("Network users can receive data by sending requests from the guardian node database via "),a("strong",[e._v("Weaver")]),e._v(" or REST API commands. After signing by users, new requests are sent to the network as transactions in binary format. Essentially, these transactions are commands to modify relevant database records. Transactions are aggregated in blocks, and such blocks are sent to the blockchains of all network nodes. Each guardian node will process the transactions in the block, thereby updating the corresponding data in the database.")]),e._v(" "),a("h3",{attrs:{id:"honor-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#honor-node"}},[e._v("#")]),e._v(" Honor Node")]),e._v(" "),a("p",[e._v("A guardian node which is privileged to generate new blocks in the network is called a honor node. The maximum number of honor nodes is defined by number_of_nodes in the platform parameters table, showing that the number of honor nodes is limited.")]),e._v(" "),a("p",[e._v("An Honor Node is one of the key components of IBAX Public Network. It executes and validates transactions, collects transaction information from other nodes, adds transactions to the queue, and verifies the correctness and validity of new blocks using the confirmation mechanism. Generally, it has two states: packaging and on-packaging.")]),e._v(" "),a("p",[e._v("An Honor Node in the packaging state delivers the highest performance. It obtains transaction requests to be executed from the transaction queue and verifies the ignature validity and correctness of transactions, e.g. transfer amount, permission for transaction operations, and accurate execution of transactions. All ransactional operations, correct or wrong (wrong transactions will be rolled back), will be written into the block. Wrong transactions will incur a punitive gas fee. Executed transactions are notified to other Honor Nodes along with the block through broadcasting.")]),e._v(" "),a("p",[e._v("An Honor Node in the non-packaging state is mainly responsible for block verification to ensure in-block transactions generated by a packaging node are executed orrectly. In case of an anomaly, it will trigger the exception handling mechanism and IBAX Network will roll back and re-verify the block.")]),e._v(" "),a("p",[e._v("In order to ensure transaction execution efficiency, Honor Nodes collect transaction information constantly.")]),e._v(" "),a("h3",{attrs:{id:"transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),a("p",[e._v("Transactions, including data used to implement "),a("strong",[e._v("smart contracts")]),e._v(", are generated by Weaver.")]),e._v(" "),a("p",[e._v("Transactions are signed by users with a private key. The private key and Weaver's signature function can be stored in browsers, software clients, SIM cards or dedicated physical devices. In the current implementation, the private key is encrypted with the ECDSA algorithm and stored at the Weaver side. All transactions are signed with the ECDSA algorithm.")]),e._v(" "),a("p",[e._v("The structure of a transaction complies with the following format:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("ID - ID of the contract implemented;")])]),e._v(" "),a("li",[a("p",[e._v("Params - parameters sent to the contract;")])]),e._v(" "),a("li",[a("p",[e._v("KeyID - ID of the user sending the transaction;")])]),e._v(" "),a("li",[a("p",[e._v("PublicKey - public key of the honor node;")])]),e._v(" "),a("li",[a("p",[e._v("Time - timestamp generated by the transaction;")])]),e._v(" "),a("li",[a("p",[e._v("EcosystemID - ID of the ecosystem where the transaction is made;")])]),e._v(" "),a("li",[a("p",[e._v("ТokenEcosystem - ID of the ecosystem, 1 by default, and tokens within it are used to cover the transaction costs.")])])]),e._v(" "),a("h3",{attrs:{id:"network-protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-protocol"}},[e._v("#")]),e._v(" Network protocol")]),e._v(" "),a("p",[e._v("Transactions will be sent to honor nodes by users, where they are subject to basic verification to ensure the formats are correct and then are added to the queue. Transactions are also sent to other honor nodes on the network and added to the respective queue.")]),e._v(" "),a("p",[e._v("A honor node is privileged to generate new blocks within a specific time period which is determined by the platform parameter "),a("strong",[e._v("full_nodes")]),e._v(" and a special algorithm. Honor nodes retrieve transactions from queues and send them to the block generator. When generating a new block, transactions in such block will also be processed: each transaction is sent to a virtual machine, where the contract corresponding to the transaction parameters is implemented, thereby updating records in the database.")]),e._v(" "),a("p",[e._v("New blocks should be verified to ensure there are no errors before sending to other honor nodes on other networks.")]),e._v(" "),a("p",[e._v("A new block will be added to the block queue when received by other honor node and, after verification, to the blockchain of the honor node where it is located to process transactions in the block, and thereby updating records in the database.")]),e._v(" "),a("h3",{attrs:{id:"block-and-transaction-verification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-and-transaction-verification"}},[e._v("#")]),e._v(" Block and transaction verification")]),e._v(" "),a("p",[e._v("After generating or receiving a new block, it will be verified on all other honor nodes, which cover the following:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The first byte of the data received should be 0. If not, the data received will not be considered as a block;")])]),e._v(" "),a("li",[a("p",[e._v("The received block generation timestamp should be before the current timestamp;")])]),e._v(" "),a("li",[a("p",[e._v("The block generation timestamp should correspond to the time interval at which the honor node having privilege to generate new blocks;")])]),e._v(" "),a("li",[a("p",[e._v("The height of a new block should be greater than the height of the largest block on the existing blockchain;")])]),e._v(" "),a("li",[a("p",[e._v("It cannot exceed the maximum expenses allowed for all transactions in the block;")])]),e._v(" "),a("li",[a("p",[e._v("The block must be properly signed with the secret key of the node which it is located. The signature data should contain:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The height of the block, the hash of the previous block, the timestamp of the block, the ID of the ecosystem where the block is located, and the account address of the honor node of the block;")])]),e._v(" "),a("li",[a("p",[e._v("The position of the honor node in the platform parameter full_nodes array, the Merkel Root (MrklRoot) of all transactions in the block, and the revert hash of the previous block.")])])])])]),e._v(" "),a("p",[e._v("To check the correctness of each transaction in the block with the following methods:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The hash of each transaction must be unique;")])]),e._v(" "),a("li",[a("p",[e._v("A key-signed transaction cannot exceed the limit ("),a("RouterLink",{attrs:{to:"/zh-CN/reference/platform-parameters.html#max-tx-block-per-user"}},[e._v("max_tx_block_per_user")]),e._v(");")],1)]),e._v(" "),a("li",[a("p",[e._v("It cannot exceed the limit of the maximum transaction size ("),a("RouterLink",{attrs:{to:"/zh-CN/reference/platform-parameters.html#max-tx-size"}},[e._v("max_tx_size")]),e._v(");")],1)]),e._v(" "),a("li",[a("p",[e._v("The transaction time can neither be greater than the block generation time nor be greater than the block generation time plus 600 seconds, and it can be no less than the block generation time minus 86400 seconds;")])]),e._v(" "),a("li",[a("p",[e._v("The transaction must be signed properly;")])]),e._v(" "),a("li",[a("p",[e._v("The user who implements the contract must have sufficient tokens in his account to pay for the transaction cost.")])])]),e._v(" "),a("h3",{attrs:{id:"database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[e._v("#")]),e._v(" Database")]),e._v(" "),a("p",[e._v("The underlying data storage layer of IBAX Network is a "),a("code",[e._v("PGSQL")]),e._v(" database completely open to the public. Based on the permission design of the IBAX Operating System Platform, users do not need to worry about data security. With an object-oriented design philosophy, IBAX Network pre-compiles data through a relational PGSQL database and improves the data processing efficiency.")]),e._v(" "),a("p",[e._v("You may be interested in the following if you are a technical specialist, or just skip it if you are not.\n① All tables without a number prefix in their name belong to permission tables of IBAX Network Basic;\n② All tables with a number prefix in their name belong to permission tables of ecoLibs.")]),e._v(" "),a("h2",{attrs:{id:"ecolib"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ecolib"}},[e._v("#")]),e._v(" ECOLIB")]),e._v(" "),a("p",[e._v("It is quite easy for users, even common users, to create an ecoLib of their own on the IBAX Network System Platform. We have integrated and developed an application where ecoLib creation takes just one click.")]),e._v(" "),a("p",[e._v("When creating an ecoLib, you can configure the ecosystem parameters and rules, and set the administrator account and charging model. Most importantly, to apply the DPoA consensus within ecoLibs better, creators can set it up by writing or importing their own contracts.")]),e._v(" "),a("p",[e._v("We support quick emission of ecoLib tokens by importing contract templates.")]),e._v(" "),a("p",[e._v("Due to the differences in consensus and management permissions, ecoLibs fall into decentralized and centralized ones. They have no specific advantage or disadvantage by type. You should choose the appropriate one against your service needs. What to do if it is OK for now but not for the future? You can change ecoLib parameters, even the consensus mechanism, token, and governance method, on the IBAX Network System Platform. You can leave it all to the self-governance mechanism maintained by the ecoLib administrator or members (depending on the ecoLib type).")]),e._v(" "),a("p",[e._v("On the IBAX Network System Platform, an ecoLib has complete data control permissions and permissions to design and access independent database tables and fields. In the data control permission design, we support triggering when a field satisfies a logical expression. This feature allows for imagination space in special services like monitoring, logic satisfaction, and triggering by time and specific conditions.")]),e._v(" "),a("p",[e._v("There may be multiple DApps in an ecoLib, and each of them can have independent parameters. An ecoLib is like a platform where you can implement anything you want.")]),e._v(" "),a("p",[e._v("In order to better support ecosystem developers, we provide the editing, management, and development tool Weaver. It will reduce the ecosystem development, maintenance, and management costs greatly.")]),e._v(" "),a("h3",{attrs:{id:"ide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ide"}},[e._v("#")]),e._v(" IDE")]),e._v(" "),a("p",[e._v("Weaver has a complete integrated development environment (IDE) for creating blockchain applications, which does not require software developers to have a deep understanding of the blockchain technology.")]),e._v(" "),a("p",[e._v("Weaver provides a table management tool, contract editor, page editor and other functions needed to create applications in the ecosystem, without the support of any software module.")]),e._v(" "),a("p",[e._v("The IDE mainly includes the following parts:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("list of ecosystem parameters;")])]),e._v(" "),a("li",[a("p",[e._v("contract editor;")])]),e._v(" "),a("li",[a("p",[e._v("table management tool;")])]),e._v(" "),a("li",[a("p",[e._v("page editor and visual page designer;")])]),e._v(" "),a("li",[a("p",[e._v("multi-language resources editor;")])]),e._v(" "),a("li",[a("p",[e._v("application import/export functions.")])])]),e._v(" "),a("h3",{attrs:{id:"applications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applications"}},[e._v("#")]),e._v(" Applications")]),e._v(" "),a("p",[e._v("An application is a collection of elements such as database tables, smart contracts, and user pages with access rights for configuration. The ecosystem to which the application element belongs is indicated by the prefix in the element name, such as "),a("code",[e._v("@1ElementName")]),e._v(", where the ecosystem ID is indicated by the number "),a("code",[e._v("1")]),e._v(" after the "),a("code",[e._v("@")]),e._v(" symbol. When using application elements in the current ecosystem, the prefix "),a("code",[e._v("@1")]),e._v(" can be omitted. These applications can perform useful functions or implement various services.")]),e._v(" "),a("h3",{attrs:{id:"tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tables"}},[e._v("#")]),e._v(" Tables")]),e._v(" "),a("p",[e._v("In IBAX's database, each ecosystem can create an unlimited number of tables. Tables of a specific ecosystem can be identified by a prefix containing the ecosystem ID, which will not be displayed in Weaver.")]),e._v(" "),a("p",[e._v("A table is not bound in any way and belongs to a certain contract. It can be used by all applications within the scope of the table's access rights.")]),e._v(" "),a("p",[e._v("Each ecosystem can create a set of data tables for developing its applications or may, possibly, access data tables of other ecosystems by specifying the table name prefix.")]),e._v(" "),a("p",[e._v("By configuring access rights through smart laws, data are logged into tables. Smart laws are used for rights management.")]),e._v(" "),a("blockquote",[a("p",[e._v("Table table management tool")])]),e._v(" "),a("p",[e._v("You can find the table management tool in Weaver menu Table, which cover the following functions:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("View the list of tables and their entries;")])]),e._v(" "),a("li",[a("p",[e._v("Create new tables;")])]),e._v(" "),a("li",[a("p",[e._v("Add a table field and specify its data type, such as "),a("code",[e._v("Text, Date/Time, Varchar, Character, JSON, Number, Money, Double, Binary")]),e._v(";")])]),e._v(" "),a("li",[a("p",[e._v("Manage privileges for insert, update data and change table structure.")])])]),e._v(" "),a("blockquote",[a("p",[e._v("Table data manipulation")])]),e._v(" "),a("p",[e._v("For better database manipulation, both Needle and Logicor have the "),a("strong",[e._v("DBFind")]),e._v(" function, which is used to retrieve values and data arrays from tables.")]),e._v(" "),a("p",[e._v("The contract language "),a("strong",[e._v("DBInsert")]),e._v(" function is used to add entries to tables. The "),a("strong",[e._v("DBUpdate")]),e._v(" and "),a("strong",[e._v("DBUpdateExt")]),e._v(" functions are used to update the value of an existing entry. During updating, the corresponding data in tables will be updated, and the blockchain will add new transactions while retaining all historical transactions. Data in tables can only be modified and cannot be deleted.")]),e._v(" "),a("p",[e._v("In order to minimize the contract implementation time, the "),a("strong",[e._v("DBFind")]),e._v(" function cannot query multiple tables simultaneously, and JOIN is not supported. Therefore, we recommend not to normalize application tables, but to store all available information in entries or repeat the information available in other tables. This is not mandatory but necessary for a blockchain application. In this case, data should be stored fully, which cannot be updated even if the same data in other tables is updated, though it is updated synchronously in a relational database.")]),e._v(" "),a("h3",{attrs:{id:"ecosystem-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ecosystem-parameters"}},[e._v("#")]),e._v(" Ecosystem Parameters")]),e._v(" "),a("p",[e._v("You may view and edit the list of ecosystem parameters ("),a("strong",[e._v("1_parameters")]),e._v(") in Weaver's menu. Ecosystem parameters can be divided into the following groups:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("General parameters: the account of the ecosystem creator (founder_account) and other information;")])]),e._v(" "),a("li",[a("p",[e._v("Access rights parameters: used to define access permissions for application elements")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("change the table structure (changing_tables);")])]),e._v(" "),a("li",[a("p",[e._v("change the contract (changing_contracts);")])]),e._v(" "),a("li",[a("p",[e._v("change the user page (changing_page);")])]),e._v(" "),a("li",[a("p",[e._v("change the menu (changing_menu);")])]),e._v(" "),a("li",[a("p",[e._v("change the multi-language resources (changing_language).")])])])]),e._v(" "),a("li",[a("p",[e._v("Technical parameters: used to define the user styles (stylesheet);")])]),e._v(" "),a("li",[a("p",[e._v("User parameters: used to define constants or lists (separated by commas) required for application operation.")])])]),e._v(" "),a("p",[e._v("You may specify the edit permission for parameters of each ecosystem.")]),e._v(" "),a("p",[e._v("You may use the EcosysParam function to retrieve the value of an ecosystem parameter by passing the ecosystem parameter title as a parameter to it.")]),e._v(" "),a("h2",{attrs:{id:"access-rights-control-mechanism"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-rights-control-mechanism"}},[e._v("#")]),e._v(" Access rights control mechanism")]),e._v(" "),a("p",[e._v("IBAX has a multi-level access permission management system. By configuring access rights, you can create and change any application element, such as the contracts, tables, user pages, ecosystem parameters. You may also change the access rights through configuration.")]),e._v(" "),a("p",[e._v("By default, all rights in the IBAX ecosystem are managed by its creator, which is defined in the MainCondition contract of each ecosystem. But after creating smart laws, access control can be transferred to all or a group of ecosystem members.\nAccess rights control")]),e._v(" "),a("p",[e._v("The access rights are defined in contract tables ("),a("strong",[e._v("1_contracts")]),e._v(" ), data tables ("),a("strong",[e._v("1_tables")]),e._v(" ), user page tables ("),a("strong",[e._v("1_pages")]),e._v(" ), menu tables ("),a("strong",[e._v("1_menu")]),e._v(" ), and code block tables ("),a("strong",[e._v("1_blocks")]),e._v(" ). You can find the corresponding menus in Weaver.")]),e._v(" "),a("h3",{attrs:{id:"access-rights-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-rights-management"}},[e._v("#")]),e._v(" Access rights management")]),e._v(" "),a("p",[e._v("The rules of access rights are configured by filling in the corresponding contract expressions "),a("strong",[e._v("ContractConditions(“@1MainCondition”)")]),e._v(", "),a("strong",[e._v("ContractAccess(“@1MainCondition”)")]),e._v(" or logical expressions in the permission field. If the result of the request expression passes (true ), then access is granted. Otherwise, access is denied and related operations are terminated.")]),e._v(" "),a("p",[e._v("The easy way to define rights is to enter a logical expression in the right field. For example, "),a("code",[e._v("$key_id == 8919730491904441614")]),e._v(", where "),a("strong",[e._v("$keyid")]),e._v(" represents the ID of an ecosystem member.")]),e._v(" "),a("p",[e._v("The most common and recommended way to define rights is to use the "),a("code",[e._v('ContractConditions("@1ContractsName1","@1ContractsName2")')]),e._v(" function. The contract name "),a("strong",[e._v("ContractsName")]),e._v(" is passed to the function as a parameter, and the contract result must be the result of a logical expression (true or false).")]),e._v(" "),a("p",[e._v("Another way to define rights is to use the "),a("code",[e._v('ContractAccess("@1ContractsName3","@1ContractsName4")')]),e._v(" function. The contract "),a("strong",[e._v("ContractsName")]),e._v(" qualified to implement the corresponding operation can be passed to the function as a parameter. For example, if the right field of the amount column is configured as "),a("code",[e._v('ContractAccess("@1TokenTransfer")')]),e._v(", then you can only implement the contract "),a("strong",[e._v("@1TokenTransfer")]),e._v(" if you want to change the value in the amount column. The right to access the contract itself can be managed in the conditions section, which are quite complex and may contain many other contracts.")]),e._v(" "),a("h3",{attrs:{id:"exclusive-rights"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exclusive-rights"}},[e._v("#")]),e._v(" Exclusive rights")]),e._v(" "),a("p",[e._v("In case of emergencies or situations that are critical to the operation of an ecosystem, there are many special parameters in the list of ecosystem parameters ("),a("strong",[e._v("1_parameters")]),e._v(") (such as "),a("em",[e._v("changing_contracts")]),e._v(", "),a("em",[e._v("changing_pages")]),e._v(" ), etc., which defines rights to access all contracts, data tables, and pages of the current ecosystem. These rights are configured by key contracts.")]),e._v(" "),a("h2",{attrs:{id:"virtual-private-ecosystem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-private-ecosystem"}},[e._v("#")]),e._v(" Virtual private ecosystem")]),e._v(" "),a("p",[e._v("In IBAX, you can create a virtual private ecosystem - "),a("strong",[e._v("Cross Ledgers Base (CLB)")]),e._v(". A CLB has the full functionality of the standard ecosystem, but operates outside the blockchain. In CLB, you can use and create contracts and template languages, tables, and use Weaver to create applications. You may call contracts on the blockchain ecosystem via API.")]),e._v(" "),a("h3",{attrs:{id:"requests-to-web-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requests-to-web-resources"}},[e._v("#")]),e._v(" Requests to web resources")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("The main difference between a CLB and a standard ecosystem is that you can use contract functions ([HTTPRequest](../topics/script.md#httprequest)) and ([HTTPPostJSON](../topics/script.md#httppostjson)) to request any web resource within the contract via HTTP / HTTPS requests. Parameters passed to this function include: URLs, request methods (GET or POST), request headers and request parameters.\n")])])]),a("h3",{attrs:{id:"rights-to-read-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rights-to-read-data"}},[e._v("#")]),e._v(" Rights to read data")]),e._v(" "),a("p",[e._v("Though it is readable, data in CLB is not saved within the blockchain. You can choose to grant the read permission to database tables. You can set rights to read for individual columns, or for any row using a special contract.")]),e._v(" "),a("h3",{attrs:{id:"clb-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clb-creation"}},[e._v("#")]),e._v(" CLB creation")]),e._v(" "),a("p",[e._v("You may create a CLB node on the network. As predefined, the CLB node administrator is privileged to use the ecosystem list with the CLB functionality, and designate a user with ecosystem creator privileges to install applications, receive new members and configure the resources access permissions.")]),e._v(" "),a("h3",{attrs:{id:"clb-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clb-usage"}},[e._v("#")]),e._v(" CLB usage")]),e._v(" "),a("p",[e._v("You may use a CLB to create registration forms, send verification information to users via email or phone, and store publicly accessible data. You can write and test applications, and then import them into the blockchain ecosystem. In a CLB, you may use scheduling contract tasks, create oracle machines to receive data from web resources and send such data to the blockchain ecosystem.")])])}),[],!1,null,null,null);t.default=o.exports}}]);