import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import Select, { StylesConfig } from 'react-select';
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
    PaymentElement
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const stripe = loadStripe('pk_test_51LpN5uLX4fP9nDzXNfXaMI9lwRPkyxRkginHB1bVMpBFTu5KdHSQeGDpMXdvhDGE4vCRQE0sDKDha4TAOocRX6mZ00R96U4m6X');




const options1 = [
    { value: 'Double1', label: 'Double, I have a roommate' },
    { value: 'Double2', label: 'Double, match me with a roommate' },
    { value: 'Single', label: 'Single occupancy + $2,000.00' },
];

const options2 = [
    { value: 'full', label: 'Full Pacakge' },
    { value: 'land_only', label: 'Land Only - $2,500.00' },
];


const selectStyles = {
    control: (styles) => ({
        ...styles,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: "rgba(0,0,0,0)",
        borderRadius: 10,
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.137)",
        marginBottom: 20,
        fontSize: 12

    }),
    placeholder: (styles) => ({
        ...styles,
        fontSize: 12
    }),
    input: (styles) => ({
        ...styles,
        fontSize: 12
    }),
    option: (styles) => ({
        ...styles,
        fontSize: 12
    }),
}

class CheckOut extends Component {
    constructor() {
        super();
        this.state = {
            selectedOption1: null,
            selectedOption2: null,
            total: 7859.00,
            subTotal: 7859.00,
        }
    }
    handleChange1 = (selectedOption1) => { this.setState({ selectedOption1 }); };
    handleChange2 = (selectedOption2) => { this.setState({ selectedOption2 }); };


    render() {
        const windowsInnerWidth = window.innerWidth
        const windowsInnerHeight = window.innerHeight
        const { selectedOption1, selectedOption2, total, subTotal } = this.state;
        return (
            <Elements stripe={stripe}>
                <div style={{ width: "100%", overflowX: "hidden", boxShadow: "" }}>
                    <div class="rtn">
                        <h1>Book your spot</h1>
                    </div>

                    <div class="OrderSummary">
                        <div class="row O_S_container">
                            <div class="col-md-6 O_S_col O_S_col_" style={{ display: "flex", flexDirection: "column", marginBottom: 20 }}>
                                <h5>Order summary</h5>
                                <div style={{ width: "85%", height: 1, backgroundColor: "rgba(179, 19, 16, 0.1)", borderRadius: 20, marginBottom: 20, marginTop: 0 }}></div>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
                                    <div style={{ width: "50%" }}>
                                        <h6>Ghana 2024 Trip  (Payment plans available every 30 days or 15 days)</h6>
                                        <p style={{ fontSize: 11 }}>
                                            March 24 - April 3, 2024 | 9 nights in Ghana | All tours and activities listed on
                                            the website | All payments are non-refundable and non-transferrable.
                                        </p>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                        <p style={{ fontSize: 11 }}>2 x $7,859.00</p>
                                        <p style={{ fontSize: "smaller", marginLeft: 10, fontWeight: "bold" }}>$15,718.00</p>
                                    </div>
                                </div>

                                <Select
                                    value={selectedOption1}
                                    onChange={this.handleChange1}
                                    options={options1}
                                    isSearchable={false}
                                    placeholder="Type of Occupancy"
                                    styles={selectStyles}
                                />

                                <Select
                                    value={selectedOption2}
                                    onChange={this.handleChange2}
                                    options={options2}
                                    isSearchable={false}
                                    placeholder="Type of Package"
                                    styles={selectStyles}
                                />

                                <div style={{ width: "40%", height: 2, backgroundColor: "rgba(179, 19, 16, 0.4)", borderRadius: 20, marginBottom: 7, marginTop: 0 }}></div>
                                <div
                                    style={{
                                        width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                                        fontSize: 13, color: "grey", marginTop: 5
                                    }}
                                >
                                    <p>Sub-Total</p>
                                    <p>${JSON.stringify(subTotal)}</p>
                                </div>
                                <div style={{ width: "40%", height: 2, backgroundColor: "rgba(179, 19, 16, 0.4)", borderRadius: 20, marginBottom: 7, marginTop: 0 }}></div>
                                <div
                                    style={{
                                        width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                                        fontSize: 16, marginTop: 5, fontWeight: "bold"
                                    }}
                                >
                                    <p>Total</p>
                                    <p>${JSON.stringify(total)}</p>
                                </div>
                                <div style={{ width: "100%", height: 2, backgroundColor: "rgba(179, 19, 16, 0.2)", borderRadius: 20, marginBottom: 0, marginTop: 0 }}></div>
                                <p style={{ fontSize: 13, paddingBottom: 0, marginBottom: 1, fontWeight: "bold", marginTop: "1vw" }}>
                                    Package Summary
                                </p>
                                <p style={{ fontSize: 12, paddingBottom: 0, marginBottom: 0 }}>
                                    <span style={{fontWeight: "bold"}}>Join us on our majestic black history experience tour<br /></span>
                                    Come and experience the finer side of life- as we welcome you home to the Motherland. This majestic 
                                    tour will fill up with the culture and heritage of Ghanaians. The rich history will astound you as we journey 
                                    through the past, present, and the future of Ghana.
                                </p>

                            </div>
                            <div class="col-md-6 O_S_col_" style={{ display: "flex", flexDirection: "column" }}>
                                <h5>Check Out</h5>
                                <div style={{ width: "85%", height: 2, backgroundColor: "rgba(179, 19, 16, 0.1)", borderRadius: 20, marginBottom: 20, marginTop: 0, }}></div>
                                <div class="row">
                                    <InputField
                                        conatainerCLass="col-md-6"
                                        placeholder="First Name"
                                        value=""
                                        required
                                    />
                                    <InputField
                                        conatainerCLass="col-md-6"
                                        placeholder="Last Name"
                                        value=""
                                        required
                                    />
                                </div>

                                <div class="row">
                                    <InputField
                                        conatainerCLass="col-md-6"
                                        placeholder="Address Line 1"
                                        value=""
                                        required
                                    />
                                    <InputField
                                        conatainerCLass="col-md-6"
                                        placeholder="Address Line 2"
                                        value=""
                                        required
                                    />
                                </div>

                                <div class="row">
                                    <InputField
                                        conatainerCLass="col-md-7"
                                        placeholder="City"
                                        value=""
                                        required
                                    />
                                    <InputField
                                        conatainerCLass="col-md-5"
                                        placeholder="State"
                                        value=""
                                        required
                                    />
                                </div>
                                <div class="row">
                                    <InputField
                                        conatainerCLass="col-md-12"
                                        placeholder="Zip Code"
                                        value=""
                                        required
                                    />
                                    <InputField
                                        conatainerCLass="col-md-12"
                                        placeholder="Phone Number"
                                        value=""
                                        required
                                    />
                                    <InputField
                                        conatainerCLass="col-md-12"
                                        placeholder="Email Address"
                                        value=""
                                        required
                                    />
                                </div>

                                <CheckoutForm />
                            </div>
                        </div>
                    </div>
                </div>
            </Elements>
        )
    }
}



function CheckoutForm() {
    const [isPaymentLoading, setPaymentLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const getClientSecret = () => { }
    const payMoney = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setPaymentLoading(true);
        const clientSecret = getClientSecret();
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: "Faruq Yusuff",
                },
            },
        });
        setPaymentLoading(false);
        if (paymentResult.error) {
            alert(paymentResult.error.message);
        } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
                alert("Success!");
            }
        }
    };

    return (
        <div style={{ padding: "3rem", }} >
            <div style={{ maxWidth: "500px", margin: "0 auto", }}
            >
                <form style={{ display: "block", width: "100%", }} onSubmit={payMoney}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <CardElement
                            className="card"
                            options={{
                                style: {
                                    base: {
                                        backgroundColor: "white"
                                    }
                                },
                            }}
                        />
                        <button
                            className="pay-button"
                            disabled={isPaymentLoading}
                        >
                            {isPaymentLoading ? "Loading..." : "Place Order"}
                        </button>
                        <p style={{ fontSize: 12, textAlign: "center", paddingBottom: 0, marginBottom: 0 }}>
                            Buy cliking the "Place Order" button you agree to Dating African® terms & conditions, and you
                            understand all payments to  Dating African® are non-refundable and non-transferrable.
                        </p>
                        <p style={{ fontSize: 12, textAlign: "center", fontWeight: "bold" }}>
                            You further acknowledge that I have been advised to purchase travel insurance to protect my investment.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

const InputField = (props) => {
    const { conatainerCLass, subConatainerCLass, inputCLass, onChange, value, placeholder, required } = props
    const dClass = conatainerCLass ? conatainerCLass + " O_S_InputField_container" : " O_S_InputField_container"
    const sdClass = subConatainerCLass ? subConatainerCLass + " O_S_InputField_subCcontainer" : " O_S_InputField_subCcontainer"
    const iClass = inputCLass ? inputCLass + " O_S_InputField" : " O_S_InputField"
    return (
        <div class={dClass}>
            <div class={sdClass}>
                <p>{required ? "*" : ""} {placeholder ? placeholder : ""}</p>
                <input class={iClass} type="text" placeholder="" onChange={(e) => { onChange(e.target.value) }} value={value ? value : ""} />
            </div>
        </div>
    )
}


export default CheckOut;







// const colourStyles = {
//     control: (styles) => ({ ...styles, backgroundColor: 'white' }),
//     option: (styles, { data, isDisabled, isFocused, isSelected }) => {
//       const color = chroma(data.color);
//       return {
//         ...styles,
//         backgroundColor: isDisabled
//           ? undefined
//           : isSelected
//           ? data.color
//           : isFocused
//           ? color.alpha(0.1).css()
//           : undefined,
//         color: isDisabled
//           ? '#ccc'
//           : isSelected
//           ? chroma.contrast(color, 'white') > 2
//             ? 'white'
//             : 'black'
//           : data.color,
//         cursor: isDisabled ? 'not-allowed' : 'default',

//         ':active': {
//           ...styles[':active'],
//           backgroundColor: !isDisabled
//             ? isSelected
//               ? data.color
//               : color.alpha(0.3).css()
//             : undefined,
//         },
//       };
//     },
//     input: (styles) => ({ ...styles, ...dot() }),
//     placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
//     singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
//   };