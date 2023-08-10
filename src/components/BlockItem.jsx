import "../styles/blockItem.css"
import { useState } from 'react';

const BlockchainItem = (props) => {
    const { block, data, hash } = props.item;
    const [nonce, setNonce] = useState(props.item.nonce);


    const handleNonce = event => {
        setNonce(event.target.value);
    };


    return (
        <div className="single_item">
            <div className="well well-success" id="block1chain1well">
                <form className="form-horizontal">
                    <div className="form-group">
                        <h5 className="col-sm-2 control-label" for="block1chain1number">Block:</h5>
                        <div className="col-sm-10">
                            <div className="input-group">
                                <span className="input-group-addon">#</span>
                                <input className="form-control" id="block1chain1number" type="number" value={block} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <h5 className="col-sm-2 control-label" for="block1chain1nonce">Nonce:</h5>
                        <div className="col-sm-10">
                            <input className="form-control" id="block1chain1nonce" type="text" onChange={handleNonce} value={nonce} />
                        </div>
                    </div>
                    <div className="form-group">
                        <h5 className="col-sm-2 control-label" for="block1chain1data">Data:</h5>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="block1chain1data" rows="6"></textarea>
                        </div>
                    </div>
                    <div className="form-group" id="state">
                        <h5 className="col-sm-2 control-label" for="block1chain1hash">Hash:</h5>
                        <div className="col-sm-10">
                            <input className="form-control" id="block1chain1hash" type="text" value={hash} disabled />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-2">
                            <i className="icon-spinner icon-spin icon-large"></i>
                        </div>
                        <div className="col-sm-10">
                            <button className="btn-mine ladda-button " id="block1chain1mineButton" data-style="expand-right">
                                <span className="ladda-label">Mine</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BlockchainItem;
