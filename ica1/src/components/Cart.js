export default function Cart(props) {
    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>
                    <tr>
                        <td>Product</td>
                        <td>QTY</td>
                    </tr>
                </thead>
                <tbody>
                    {props.getCart.map((item, index) => (
                        <tr key={index}>
                            <td>{item.flowerId}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
