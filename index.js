const PayfastOnsiteButton = ({
    button_label,
    item_name,
    item_description,
    item_amount,
    subscription_type,
    recurring_amount,
    cycles,
    frequency,
}) => {
    const action_url = process.env.NEXT_PUBLIC_PAYFAST_ACTION_URL ?? "https://www.payfast.co.za/onsite/process";
    const return_url = process.env.NEXT_PUBLIC_PAYFAST_RETURN_URL ?? "http://localhost:3000/api/payfast/return/";
    const cancel_url = process.env.NEXT_PUBLIC_PAYFAST_CANCEL_URL ?? "http://localhost:3000/api/payfast/cancel/";
    const notify_url = process.env.NEXT_PUBLIC_PAYFAST_NOTIFY_URL ?? "http://localhost:3000/api/payfast/notify/";

    return (
        <form name="PayFastPayNowForm" action={action_url} method="post">
            <input required type="hidden" name="cmd" value="_paynow" />
            <input
                required
                type="hidden"
                name="receiver"
                pattern="[0-9]"
                value={process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_ID}
            />
            <input type="hidden" name="return_url" value={return_url} />
            <input type="hidden" name="cancel_url" value={cancel_url} />
            <input type="hidden" name="notify_url" value={notify_url} />
            <input required type="hidden" name="amount" value={item_amount} />
            <input required type="hidden" name="item_name" maxLength="255" value={item_name} />
            <input
                type="hidden"
                name="item_description"
                maxLength="255"
                value={`Subscription to ${item_description}`}
            />
            <input required type="hidden" name="subscription_type" pattern="1" value={subscription_type} />
            <input type="hidden" name="recurring_amount" value={recurring_amount} />
            <input required type="hidden" name="cycles" pattern="[0-9]" value={cycles} />
            <input required type="hidden" name="frequency" pattern="[0-9]" value={frequency} />
            <input
                type="submit"
                className="mt-8 block w-full bg-purple-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-purple-700"
                value={button_label}
            />
        </form>
    );
};

export default PayfastOnsiteButton;
