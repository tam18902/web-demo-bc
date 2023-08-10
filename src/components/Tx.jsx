import React, { useEffect, useState } from "react";
import "../styles/tx.css"
const Tx = (props) => {
    const { block } = props.infor.item;
    const [tx, setTx] = useState(props.infor.item.tx);
    useEffect(() => {
        console.log(tx);
        let tx1 = []
        if (tx.length == 0) {
            tx1.push({
                from: "_",
                to: "_",
                value: "_"
            })
            setTx(tx1);
        }
        console.log(tx);
    })

    return (
        <div className="modal__wrapper">
            <div className="single__modal4">
                <span className="close__modal">
                    <i class="ri-close-line" onClick={() => props.setShowTx(false)}>X</i>
                </span>
                <h6 className="text-center">Tx of block {block}</h6>
                <div>
                    <div className="history-app">
                        <table>
                            <tr>
                                {/* <th >Name</th> */}
                                <th>Value</th>
                                <th>From</th>
                                <th>To</th>
                            </tr>
                            {tx.map((item) => {
                                return (
                                    <tr key={item.value}>

                                        <td>{item.value}$</td>
                                        <td>{item.from}</td>
                                        <td>{item.to}</td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tx;