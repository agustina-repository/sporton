import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
  return (
    <CardWithHeader title="Order Information">
      <div className="p-5">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="full_name" className="text-sm font-medium">
            Full Name
          </label>
          <input
            id="full_name"
            type="text"
            placeholder="Type your full name"
            className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Whatsapp Number */}
        <div className="flex flex-col gap-2">
          <label htmlFor="wa_number" className="text-sm font-medium">
            Whatsapp Number
          </label>
          <input
            id="wa_number"
            type="text"
            placeholder="+62xxxx"
            className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Shipping Address */}
        <div className="flex flex-col gap-2">
          <label htmlFor="shipping_address" className="text-sm font-medium">
            Shipping Address
          </label>
          <textarea
            id="shipping_address"
            rows={5}
            placeholder="Example Street, 18, West Jakarta, Indonesia, 66521"
            className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;