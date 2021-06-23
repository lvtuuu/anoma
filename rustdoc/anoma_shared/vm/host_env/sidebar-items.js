initSidebarItems({"fn":[["mm_filter_log_string","Log a string from exposed to the wasm VM filter environment. The message will be printed at the [`tracing::Level::INFO`]."],["mm_log_string","Log a string from exposed to the wasm VM matchmaker environment. The message will be printed at the [`tracing::Level::INFO`]. This function is for development only."],["mm_remove_intents","Remove given intents from the matchmaker’s mempool"],["mm_send_match","Inject a transaction from matchmaker’s matched intents to the ledger"],["mm_update_data","Update matchmaker’s state data"],["tx_add_gas","Add a gas cost incured in a transaction"],["tx_charge_gas","Called from tx wasm to request to use the given gas amount"],["tx_delete","Storage delete function exposed to the wasm VM Tx environment. The given key/value will be written as deleted to the write log."],["tx_get_block_hash","Getting the block hash function exposed to the wasm VM Tx environment. The hash is that of the block to which the current transaction is being applied."],["tx_get_block_height","Getting the block height function exposed to the wasm VM Tx environment. The height is that of the block to which the current transaction is being applied."],["tx_get_chain_id","Getting the chain ID function exposed to the wasm VM Tx environment."],["tx_has_key","Storage `has_key` function exposed to the wasm VM Tx environment. It will try to check the write log first and if no entry found then the storage."],["tx_init_account","Initialize a new account established address."],["tx_insert_verifier","Verifier insertion function exposed to the wasm VM Tx environment."],["tx_iter_next","Storage prefix iterator next function exposed to the wasm VM Tx environment. It will try to read from the write log first and if no entry found then from the storage."],["tx_iter_prefix","Storage prefix iterator function exposed to the wasm VM Tx environment. It will try to get an iterator from the storage and return the corresponding ID of the iterator."],["tx_log_string","Log a string from exposed to the wasm VM Tx environment. The message will be printed at the [`tracing::Level::INFO`]. This function is for development only."],["tx_read","Storage read function exposed to the wasm VM Tx environment. It will try to read from the write log first and if no entry found then from the storage."],["tx_result_buffer","This function is a helper to handle the first step of reading var-len values from the host."],["tx_update_validity_predicate","Update a validity predicate function exposed to the wasm VM Tx environment"],["tx_write","Storage write function exposed to the wasm VM Tx environment. The given key/value will be written to the write log."],["vp_add_gas","Add a gas cost incured in a validity predicate"],["vp_charge_gas","Called from VP wasm to request to use the given gas amount"],["vp_eval","Evaluate a validity predicate with the given input data."],["vp_get_block_hash","Getting the block hash function exposed to the wasm VM VP environment. The hash is that of the block to which the current transaction is being applied."],["vp_get_block_height","Getting the block height function exposed to the wasm VM VP environment. The height is that of the block to which the current transaction is being applied."],["vp_get_chain_id","Getting the chain ID function exposed to the wasm VM VP environment."],["vp_has_key_post","Storage `has_key` in posterior state (after tx execution) function exposed to the wasm VM VP environment. It will try to check the write log first and if no entry found then the storage."],["vp_has_key_pre","Storage `has_key` in prior state (before tx execution) function exposed to the wasm VM VP environment. It will try to read from the storage."],["vp_iter_post_next","Storage prefix iterator next for posterior state (after tx execution) function exposed to the wasm VM VP environment. It will try to read from the write log first and if no entry found then from the storage."],["vp_iter_pre_next","Storage prefix iterator for prior state (before tx execution) function exposed to the wasm VM VP environment. It will try to read from the storage."],["vp_iter_prefix","Storage prefix iterator function exposed to the wasm VM VP environment. It will try to get an iterator from the storage and return the corresponding ID of the iterator."],["vp_log_string","Log a string from exposed to the wasm VM VP environment. The message will be printed at the [`tracing::Level::INFO`]. This function is for development only."],["vp_read_post","Storage read posterior state (after tx execution) function exposed to the wasm VM VP environment. It will try to read from the write log first and if no entry found then from the storage."],["vp_read_pre","Storage read prior state (before tx execution) function exposed to the wasm VM VP environment. It will try to read from the storage."],["vp_result_buffer","This function is a helper to handle the first step of reading var-len values from the host."],["vp_verify_tx_signature","Verify a transaction signature."]],"mod":[["testing","A helper module for testing"]],"struct":[["FilterEnv","A matchmakers filter’s host environment"],["MatchmakerEnv","A matchmakers’s host environment"],["TxCtx","A transaction’s host context"],["TxEnv","A transaction’s host environment"],["VpCtx","A validity predicate’s host context"],["VpEnv","A validity predicate’s host environment"]],"trait":[["VpEvaluator","A Validity predicate runner for calls from the [`vp_eval`] function."]]});