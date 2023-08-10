import "../styles/blockchainItem.css"
import { useState } from 'react';
import Tx from "../components/Tx";
import "../styles/tokenItem.css"

const BlockchainItem = (props) => {
    const { block, prev, hash, tx } = props.item;
    const [nonce, setNonce] = useState(props.item.nonce);
    const [showTx, setShowTx] = useState(false);
    const handleNonce = event => {
        setNonce(event.target.value);
    };

    return (
        <div className="single_item">
            <div className="well well-success" id="block1chain1well">
                <form className="form-horizontal">
                    <div className="form-group">
                        <h6 className="col-sm-2 control-label" for="block1chain1number">Block:</h6>
                        <div className="col-sm-10">
                            <div className="input-group">
                                <span className="input-group-addon">#</span>
                                <input className="form-control" id="block1chain1number" type="number" value={block} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <h6 className="col-sm-2 control-label" for="block1chain1nonce">Nonce:</h6>
                        <div className="col-sm-10">
                            <input className="form-control" id="block1chain1nonce" type="text" onChange={handleNonce} value={nonce} />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Coinbase:</label>
                        <div class="col-sm-10">
                            <div class="input-group">
                                <div class="input-group-addon">$</div>
                                <input class="form-control" id="block2chain1coinbasevalue" type="text" value="100.00" />
                                <div class="input-group-addon">-&gt;</div>
                                <input class="form-control" id="block2chain1coinbaseto" type="text" value="Anders" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group" id="state">
                        <h6 className="col-sm-2 control-label" for="block1chain1previous">Prev:</h6>
                        <div className="col-sm-10">
                            <input className="form-control" id="block1chain1previous" type="text" value={prev} disabled />
                        </div>
                    </div>
                    <div className="form-group" id="state">
                        <h6 className="col-sm-2 control-label" for="block1chain1hash">Hash:</h6>
                        <div className="col-sm-10">
                            <input className="form-control" id="block1chain1hash" type="text" value={hash} disabled />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-2">
                            <i className="icon-spinner icon-spin icon-large"></i>
                        </div>
                        <div className="col-sm-10 d-flex justify-content-between align-items-center">
                            <button className="btn-mine ladda-button" id="block1chain1mineButton" data-style="expand-right">
                                <span className="ladda-label">Mine</span>
                            </button>
                            <span className="history__link">
                                <span onClick={() => setShowTx(true)}
                                >View Tx</span>
                            </span>
                            {showTx && <Tx setShowTx={setShowTx} infor={props} />}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BlockchainItem;