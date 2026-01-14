"use client";

import CardWithHeader from "../ui/card-with-header";
import { CustomerInfo } from "@/app/hooks/use-cart-store";

type TOrderInformation = {
  formData: CustomerInfo;
  setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>;
};

const OrderInformation = ({ formData, setFormData }: TOrderInformation) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <CardWithHeader title="Order Information">
      <div className="p-5 space-y-5">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Full Name</label>
          <input
            name="customerName"
            type="text"
            placeholder="Type your full name"
            value={formData.customerName}
            onChange={handleInputChange}
            className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Whatsapp Number */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Whatsapp Number</label>
          <input
            name="customerContact"
            type="text"
            placeholder="+62xxxx"
            value={formData.customerContact ?? ""}
            onChange={handleInputChange}
            className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Shipping Address */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Shipping Address</label>
          <textarea
            name="customerAddress"
            rows={5}
            placeholder="Example Street, 18, West Jakarta, Indonesia, 66521"
            value={formData.customerAddress}
            onChange={handleInputChange}
            className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;
