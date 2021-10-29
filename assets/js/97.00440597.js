(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{478:function(e,t,n){"use strict";n.r(t);var i=n(51),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"platform-parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#platform-parameters"}},[e._v("#")]),e._v(" Platform Parameters")]),e._v(" "),n("p",[e._v("These are parameters to configure IBAX. They are applicable to the blockchain network and all ecosystems within it.\nLocation to store platform parameters")]),e._v(" "),n("p",[e._v("Platform parameters are stored in the system_parameters table.")]),e._v(" "),n("p",[e._v("This table is located in the first (default) ecosystem created on the blockchain network.\nChange of platform parameters")]),e._v(" "),n("p",[e._v("Change of platform parameters can only be made through voting. You can only use the UpdateSysParam contract to change any platform parameter, which is managed by definitions in the legal system of the platform.\nConfigure platform parameters\nConfigure the blockchain network")]),e._v(" "),n("p",[e._v("Nodes:")]),e._v(" "),n("ul",[n("li",[e._v("full_nodes")]),e._v(" "),n("li",[e._v("number_of_nodes")])]),e._v(" "),n("p",[e._v("Node bans:")]),e._v(" "),n("ul",[n("li",[e._v("incorrect_blocks_per_day")]),e._v(" "),n("li",[e._v("node_ban_time")]),e._v(" "),n("li",[e._v("node_ban_time_local")])]),e._v(" "),n("p",[e._v("Configure a new ecosystem")]),e._v(" "),n("p",[e._v("Default page and menu:")]),e._v(" "),n("ul",[n("li",[e._v("default_ecosystem_page")]),e._v(" "),n("li",[e._v("default_ecosystem_menu")])]),e._v(" "),n("p",[e._v("Default contract:")]),e._v(" "),n("ul",[n("li",[e._v("default_ecosystem_contract")])]),e._v(" "),n("p",[e._v("Configure the database")]),e._v(" "),n("p",[e._v("Table limits:")]),e._v(" "),n("ul",[n("li",[e._v("max_columns")]),e._v(" "),n("li",[e._v("max_indexes")])]),e._v(" "),n("p",[e._v("Configure the generation of blocks\nTime limits:")]),e._v(" "),n("ul",[n("li",[e._v("gap_between_blocks")]),e._v(" "),n("li",[e._v("max_block_generation_time\nTransaction limits:")]),e._v(" "),n("li",[e._v("max_tx_block")]),e._v(" "),n("li",[e._v("max_tx_block_per_user\nSize limits:")]),e._v(" "),n("li",[e._v("max_tx_size")]),e._v(" "),n("li",[e._v("max_block_size")]),e._v(" "),n("li",[e._v("max_forsign_size\nFuel limits:")]),e._v(" "),n("li",[e._v("max_fuel_block")]),e._v(" "),n("li",[e._v("max_fuel_tx\nBlock rollback limits:")]),e._v(" "),n("li",[e._v("rollback_blocks\nConfigure the fuel tokens\nRewards and commissions:")]),e._v(" "),n("li",[e._v("block_reward")]),e._v(" "),n("li",[e._v("commission_wallet")]),e._v(" "),n("li",[e._v("commission_size\nFuel rate conversion:")]),e._v(" "),n("li",[e._v("fuel_rate")]),e._v(" "),n("li",[e._v("price_create_rate\nTransaction size and data price:")]),e._v(" "),n("li",[e._v("price_tx_data")]),e._v(" "),n("li",[e._v("price_tx_size_wallet\nPrice for new elements:")]),e._v(" "),n("li",[e._v("price_create_ecosystem")]),e._v(" "),n("li",[e._v("price_create_table")]),e._v(" "),n("li",[e._v("price_create_column")]),e._v(" "),n("li",[e._v("price_create_contract")]),e._v(" "),n("li",[e._v("price_create_menu")]),e._v(" "),n("li",[e._v("price_create_page")]),e._v(" "),n("li",[e._v("price_create_application\nPrice for operations:\n|")]),e._v(" "),n("li",[e._v("price_exec_bind_wallet")]),e._v(" "),n("li",[e._v("price_exec_address_to_id")]),e._v(" "),n("li",[e._v("price_exec_column_condition")]),e._v(" "),n("li",[e._v("price_exec_compile_contract")]),e._v(" "),n("li",[e._v("price_exec_contains")]),e._v(" "),n("li",[e._v("price_exec_contracts_list")]),e._v(" "),n("li",[e._v("price_exec_contract_by_name")]),e._v(" "),n("li",[e._v("price_exec_contract_by_id")]),e._v(" "),n("li",[e._v("price_exec_create_column")]),e._v(" "),n("li",[e._v("price_exec_create_ecosystem")]),e._v(" "),n("li",[e._v("price_exec_create_table")]),e._v(" "),n("li",[e._v("price_exec_unbind_wallet")]),e._v(" "),n("li",[e._v("price_exec_ecosys_param")]),e._v(" "),n("li",[e._v("price_exec_eval")]),e._v(" "),n("li",[e._v("price_exec_eval_condition")]),e._v(" "),n("li",[e._v("price_exec_flush_contract")]),e._v(" "),n("li",[e._v("price_exec_has_prefix")]),e._v(" "),n("li",[e._v("price_exec_id_to_address\n|")]),e._v(" "),n("li",[e._v("price_exec_is_object")]),e._v(" "),n("li",[e._v("price_exec_join")]),e._v(" "),n("li",[e._v("price_exec_json_to_map")]),e._v(" "),n("li",[e._v("price_exec_len")]),e._v(" "),n("li",[e._v("price_exec_perm_column")]),e._v(" "),n("li",[e._v("price_exec_perm_table")]),e._v(" "),n("li",[e._v("price_exec_pub_to_id")]),e._v(" "),n("li",[e._v("price_exec_replace")]),e._v(" "),n("li",[e._v("price_exec_sha256")]),e._v(" "),n("li",[e._v("price_exec_size")]),e._v(" "),n("li",[e._v("price_exec_substr")]),e._v(" "),n("li",[e._v("price_exec_sys_fuel")]),e._v(" "),n("li",[e._v("price_exec_sys_param_int")]),e._v(" "),n("li",[e._v("price_exec_sys_param_string")]),e._v(" "),n("li",[e._v("price_exec_table_conditions")]),e._v(" "),n("li",[e._v("price_exec_update_lang")]),e._v(" "),n("li",[e._v("price_exec_validate_condition\n|\nDepreciated\nDepreciated parameters:")]),e._v(" "),n("li",[e._v('blockchain_url\nDetails of platform parameters\nblock_reward\nThe number of IBXC tokens granted to the honor node that generates the block.\nThe account that receives the reward is specified in the full_nodes parameter.\nblockchain_url\nDepreciated.\ncommission_size\nPercentage of the commission.\nThe amount of the commission is calculated as a percentage of the total cost of implement the contract. The unit of the commission token is IBXC.\nThe commission will be transferred to the account address specified in the commission_wallet parameter.\ncommission_wallet\nThe account address to receive the commission.\nThe amount of commission is specified by the commission_size parameter.\ndefault_ecosystem_contract\nThe source code of the default contract in the new ecosystem.\nThis contract provides access to the ecosystem creator.\ndefault_ecosystem_menu\nThe source code of the default menu of the new ecosystem.\ndefault_ecosystem_page\nThe source code of the default page of the new ecosystem.\nfuel_rate\nThe exchange rates of different ecosystem tokens by fuel unit.\nThe format of this parameter:\n[["ecosystem_id", "token_to_fuel_rate"], ["ecosystem_id2", "token_to_fuel_rate2"], ...]')]),e._v(" "),n("li",[e._v("ecosystem_id\nEcosystem ID.")]),e._v(" "),n("li",[e._v('token_to_fuel_rate\nExchange rate of the token by fuel unit.\nFor example:\n[["1","1000000000000"], ["2", "1000"]]\nOne token of Ecosystem 1 is exchanged for 1,000,000,000,000 fuel units. One token of Ecosystem 2 is exchanged for 1,000 fuel units.\nprice_create_rate\nThe fuel rate of a new element.\nfull_nodes\nThe list of honor nodes of the blockchain network.\nThe format of this parameter:\n[{"api_address":"https://apihost1:port1","public_key":"nodepub1","tcp_address":"tcphost1:port2"},{"api_address":"https://apihost2:port1","public_key":"nodepub2","tcp_address":"tcphost2:port2"}]')]),e._v(" "),n("li",[e._v("tcp_address\nTCP address and port of the node host.\nTransactions and new blocks will be sent to this host address, which can also be used to obtain the complete blockchain from the first block.")]),e._v(" "),n("li",[e._v("api_address\nAPI address and port of the node host.\nThrough the API address, you can access any function of the platform without using Weaver. See details in RESTful API.")]),e._v(" "),n("li",[e._v("public_key\nPublic key of the node, which is used to verify the block signature.\ngap_between_blocks\nThe time interval (in seconds) of generating two blocks on a node.\nAll nodes in the network use it to determine when to generate a new block. If the current node does not generate a new block within this time period, the turn passes to the next node in the list of honor nodes.\nThe minimum value of this parameter is 1 second.\nincorrect_blocks_per_day\nThe number of bad blocks that a node is allowed to generate per day before being banned.\nWhen more than half of the nodes in the network receive the same number of bad blocks from a node, the node will be banned from the network within a time period specified in node_ban_time.\nmax_block_generation_time\nThe maximum time for generating a block, in milliseconds. If a block is not successfully generated within this time period, a timeout error will be reported.\nmax_block_size\nThe maximum size of a block, in bytes.\nmax_columns\nThe maximum number of fields in a single table.\nHowever, it does not include the predefined id column.\nmax_forsign_size\nThe maximum size of a transaction signature in bytes.\nmax_fuel_block\nThe maximum total fuel fee of a single block.\nmax_fuel_tx\nThe maximum total fuel fee of a single transaction.\nmax_indexes\nThe maximum number of primary key fields in a single table.\nmax_tx_block\nThe maximum number of transactions in a single block.\nmax_tx_block_per_user\nThe maximum number of transactions of an account in a block.\nmax_tx_size\nThe maximum size of a transaction in bytes.\nnode_ban_time\nThe global ban period of the node, in milliseconds.\nWhen more than half of the nodes in the network receive bad blocks from a node up to the number of incorrect_blocks_per_day, the node will be banned in the network for this time period.\nnode_ban_time_local\nThe local ban period of the node, in milliseconds.\nWhen a node receives an incorrect block from another node, it will locally ban the sender's node during this time period.\nnumber_of_nodes\nThe maximum number of honor nodes in the full_nodes parameter.\nprice_create_ecosystem\nThe fuel fee to create a new single ecosystem.\nThis parameter defines the additional fuel fee of the @1NewEcosystem contract. When the contract is implemented, the fuel fee for executing various functions of this contract will also be calculated and included in the total cost.\nThis parameter is calculated in fuel units. Use fuel_rate and price_create_rate to convert fuel units to IBXC tokens.\nprice_create_application\nThe fuel fee to create a new single application.\nThis parameter defines the additional fuel fee of the @1NewApplication contract. When the contract is implemented, the fuel fee for executing various functions of this contract will also be calculated and included in the total cost.\nThis parameter is calculated in fuel units. Use fuel_rate and price_create_rate to convert fuel units to IBXC tokens.\nprice_create_table\nThe fuel fee to create a new single table.\nThis parameter defines the additional fuel cost of the @1NewTable contract. When the contract is implemented, the fuel cost for executing various functions of this contract will also be calculated and included in the total cost.\nThis parameter is calculated in fuel units. Use fuel_rate and price_create_rate to convert fuel units to IBXC tokens.\nprice_create_column\nThe fuel fee to create a new single table field.\nThis parameter defines the additional fuel cost of the @1NewColumn contract. When the contract is implemented, the fuel cost for executing various functions of this contract will also be calculated and included in the total cost.\nThis parameter is calculated in fuel units. Use fuel_rate and price_create_rate to convert fuel units to IBXC tokens.\nprice_create_contract\nThe fuel fee to create a new single contract.\nThis parameter defines the additional fuel cost of the @1NewContract contract. When the contract is implemented, the fuel cost for executing various functions of this contract will also be calculated and included in the total cost.\nThis parameter is calculated in fuel units. Use fuel_rate and price_create_rate to convert fuel units to IBXC tokens.\nprice_create_menu\nThe fuel fee to create a new single menu.\nThis parameter defines the additional fuel cost of the @1NewMenu contract. When the contract is implemented, the fuel cost for executing various functions of this contract will also be calculated and included in the total cost.\nThis parameter is calculated in fuel units. Use fuel_rate and price_create_rate to convert fuel units to IBXC tokens.\nprice_create_page\nThe fuel fee to create a new single page.\nThis parameter defines the additional fuel cost of the @1NewPage contract. When the contract is implemented, the fuel cost for executing various functions of this contract will also be calculated and included in the total cost.\nThis parameter is calculated in fuel units. Use fuel_rate and price_create_rate to convert fuel units to IBXC tokens.\nprice_exec_address_to_id\nThe fuel fee of calling theAddressToId() function, calculated in fuel units.\nprice_exec_bind_wallet\nThe fuel fee of calling theActivate() function, calculated in fuel units.\nprice_exec_column_condition\nThe fuel fee of calling the ColumnCondition() function, calculated in fuel units.\nprice_exec_compile_contract\nThe fuel fee of calling the CompileContract() function, calculated in fuel units.\nprice_exec_contains\nThe fuel fee of calling the Contains() function, calculated in fuel units.\nprice_exec_contract_by_id\nThe fuel fee of calling the GetContractById() function, calculated in fuel units.\nprice_exec_contract_by_name\nThe fuel fee of calling the GetContractByName() function, calculated in fuel units.\nprice_exec_contracts_list\nThe fuel fee of calling the ContractsList() function, calculated in fuel units.\nprice_exec_create_column\nThe fuel fee of calling the CreateColumn() function, calculated in fuel units.\nprice_exec_create_ecosystem\nThe fuel fee of calling the CreateEcosystem() function, calculated in fuel units.\nprice_exec_create_table\nThe fuel fee of calling the CreateTable() function, calculated in fuel units.\nprice_exec_ecosys_param\nThe fuel fee of calling the EcosysParam() function, calculated in fuel units.\nprice_exec_eval\nThe fuel fee of calling the Eval() function, calculated in fuel units.\nprice_exec_eval_condition\nThe fuel fee of calling the EvalCondition() function, calculated in fuel units.\nprice_exec_flush_contract\nThe fuel fee of calling the FlushContract() function, calculated in fuel units.\nprice_exec_has_prefix\nThe fuel fee of calling the HasPrefix()function, calculated in fuel units.\nprice_exec_id_to_address\nThe fuel fee of calling the IdToAddress() function, calculated in fuel units.\nprice_exec_is_object\nThe fuel fee of calling the IsObject() function, calculated in fuel units.\nprice_exec_join\nThe fuel fee of calling the Join() function, calculated in fuel units.\nprice_exec_json_to_map\nThe fuel fee of calling the JSONToMap() function, calculated in fuel units.\nprice_exec_len\nThe fuel fee of calling the Len() function, calculated in fuel units.\nprice_exec_perm_column\nThe fuel fee of calling the PermColumn() function, calculated in fuel units.\nprice_exec_perm_table\nThe fuel fee of calling the PermTable() function, calculated in fuel units.\nprice_exec_pub_to_id\nThe fuel fee of calling the PubToID() function, calculated in fuel units.\nprice_exec_replace\nThe fuel fee of calling the Replace() function, calculated in fuel units.\nprice_exec_sha256\nThe fuel fee of calling the Sha256() function, calculated in fuel units.\nprice_exec_size\nThe fuel fee of calling the Size() function, calculated in fuel units.\nprice_exec_substr\nThe fuel fee of calling theSubstr() function, calculated in fuel units.\nprice_exec_sys_fuel\nThe fuel fee of calling the SysFuel() function, calculated in fuel units.\nprice_exec_sys_param_int\nThe fuel fee of calling the SysParamInt() function, calculated in fuel units.\nprice_exec_sys_param_string\nThe fuel fee of calling the SysParamString() function, calculated in fuel units.\nprice_exec_table_conditions\nThe fuel fee of calling the TableConditions() function, calculated in fuel units.\nprice_exec_unbind_wallet\nThe fuel fee of calling the Deactivate() function, calculated in fuel units.\nprice_exec_update_lang\nThe fuel fee of calling the UpdateLang() function, calculated in fuel units.\nprice_exec_validate_condition\nThe fuel fee of calling the ValidateCondition() function, calculated in fuel units.\nprice_tx_data\nThe fuel fee for every 1024 bytes of a transaction, calculated in fuel units.\nprice_tx_size_wallet\nThe fee by transaction size, its unit is the IBXC token.\nExcept the ecosystem 1, a block space usage fee will be incurred proportionally when implementing a contract in other ecosystems, and its rate is price_tx_size_wallet IBXC tokens per megabyte.\nrollback_blocks\nMaximum number of blocks that can be rolled back when detecting a fork in the blockchain.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);