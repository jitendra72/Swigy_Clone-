const Help = () => {
    return (
      <div className="max-w-[900px] mx-auto px-4 mt-10">
        <h1 className="text-2xl font-bold mb-6">Help & Support</h1>
  
        <div className="space-y-4">
  
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold">How do I place an order?</h2>
            <p className="text-sm text-gray-600 mt-1">
              Select a restaurant, add items to cart and proceed to checkout.
            </p>
          </div>
  
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold">How can I cancel my order?</h2>
            <p className="text-sm text-gray-600 mt-1">
              Orders once placed cannot be cancelled in demo version.
            </p>
          </div>
  
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold">Payment options available</h2>
            <p className="text-sm text-gray-600 mt-1">
              Cash on Delivery, UPI, Debit/Credit Card.
            </p>
          </div>
  
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold">Need more help?</h2>
            <p className="text-sm text-gray-600 mt-1">
              Email us at <span className="text-orange-500">support@swiggy.com</span>
            </p>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default Help;
  