import React from 'react';

const ShopifyIntegration = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-blue-800">Shopify Plus Integration Strategy</h2>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="font-bold text-lg mb-3">Integration Architecture</h3>
        <div className="grid grid-cols-3 gap-6">
          {/* API Integration */}
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-medium text-purple-800 mb-2">API Integration</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>GraphQL Admin API for order and product data</li>
              <li>Webhooks for real-time event processing</li>
              <li>Storefront API for customer-facing components</li>
              <li>REST API for legacy systems compatibility</li>
            </ul>
          </div>
          
          {/* App Extensions */}
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-medium text-purple-800 mb-2">App Extensions</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Admin app for merchant configuration</li>
              <li>Embedded app inside Shopify admin</li>
              <li>Flow connector for automation rules</li>
              <li>Returns portal theme extension</li>
            </ul>
          </div>
          
          {/* Service Integrations */}
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-medium text-purple-800 mb-2">Service Integrations</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Shopify Fulfillment Network (SFN) integration</li>
              <li>Shopify Shipping rate calculator</li>
              <li>Shopify Markets for cross-border returns</li>
              <li>Shopify Checkout extensions for return options</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="font-bold text-lg mb-3">Data Flow Architecture</h3>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-4 h-80">
          {/* Shopify */}
          <div className="flex flex-col items-center w-full md:w-1/4">
            <div className="bg-green-50 p-3 rounded-lg border border-green-200 w-full">
              <h4 className="font-medium text-green-800">Shopify Plus</h4>
              <div className="text-xs mt-2">
                <div>• Orders & Customers</div>
                <div>• Products & Inventory</div>
                <div>• Fulfillment & Shipping</div>
                <div>• Storefronts & Checkout</div>
              </div>
            </div>
          </div>
          
          {/* Arrows Left to Center */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/6">
            {/* Left to Middle Arrow */}
            <div className="flex flex-col items-center mb-6">
              <div className="h-0.5 w-full bg-indigo-600 relative">
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-r-0 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-indigo-600"></div>
              </div>
              <div className="text-xs text-gray-600 text-center mt-1">Order & Product Data</div>
            </div>
            
            {/* Middle to Left Arrow */}
            <div className="flex flex-col items-center">
              <div className="h-0.5 w-full bg-indigo-600 relative">
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-r-8 border-b-4 border-l-0 border-t-transparent border-b-transparent border-r-indigo-600"></div>
              </div>
              <div className="text-xs text-gray-600 text-center mt-1">Return Status Updates</div>
            </div>
          </div>
          
          {/* Platform */}
          <div className="flex flex-col items-center w-full md:w-1/3">
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 w-full">
              <h4 className="font-medium text-blue-800">Agentic Platform</h4>
              <div className="text-xs mt-2">
                <div>• Data Normalization</div>
                <div>• Agent Orchestration</div>
                <div>• Decision Engine</div>
                <div>• Optimization Algorithms</div>
              </div>
            </div>
          </div>
          
          {/* Arrows Center to Right */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/6">
            {/* Middle to Right Arrow */}
            <div className="flex flex-col items-center mb-6">
              <div className="h-0.5 w-full bg-indigo-600 relative">
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-r-0 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-indigo-600"></div>
              </div>
              <div className="text-xs text-gray-600 text-center mt-1">Return Instructions</div>
            </div>
            
            {/* Right to Middle Arrow */}
            <div className="flex flex-col items-center">
              <div className="h-0.5 w-full bg-indigo-600 relative">
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-r-8 border-b-4 border-l-0 border-t-transparent border-b-transparent border-r-indigo-600"></div>
              </div>
              <div className="text-xs text-gray-600 text-center mt-1">Processing Status</div>
            </div>
          </div>
          
          {/* External Systems */}
          <div className="flex flex-col items-center w-full md:w-1/4">
            <div className="bg-orange-50 p-3 rounded-lg border border-orange-200 w-full">
              <h4 className="font-medium text-orange-800">External Systems</h4>
              <div className="text-xs mt-2">
                <div>• WMS & 3PL Providers</div>
                <div>• Shipping Carriers</div>
                <div>• 3rd Party Marketplaces</div>
                <div>• Recycling Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-bold text-lg mb-3">Merchant Benefits</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">Operational Benefits</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Reduced returns processing costs (from 20-65% to 15-35%)</li>
              <li>Increased recovery value (from 50% to 70%+ of return value)</li>
              <li>Processing time reduced from industry avg 1-3 days to &lt;1 day</li>
              <li>30%+ reduction in returns through preventative analytics</li>
              <li>Projected annual savings: $1.2M per $10M in revenue</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">Customer Experience Benefits</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>80% reduction in returns-related support calls</li>
              <li>1-day refund processing (down from industry avg 3-5 days)</li>
              <li>Intelligent exchange recommendations ($10+ profit per return)</li>
              <li>Reduced need for "no receipt" and manual exception handling</li>
              <li>Projected NPS improvement: +12 points for returns experience</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopifyIntegration;
