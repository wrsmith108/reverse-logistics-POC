import React from 'react';

const ROIAnalysis = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-blue-800">Reverse Logistics: Financial Impact & ROI Analysis</h2>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="font-bold text-lg mb-3">Market Size & Problem Scale</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-red-50 p-3 rounded-lg border border-red-200">
            <div className="text-red-800 font-bold text-xl mb-1">$890B</div>
            <div className="text-sm font-medium">Expected returns in 2024</div>
            <div className="text-xs mt-1 text-gray-600">16.9% of online sales returned</div>
          </div>
          <div className="bg-red-50 p-3 rounded-lg border border-red-200">
            <div className="text-red-800 font-bold text-xl mb-1">$100B</div>
            <div className="text-sm font-medium">Annual reverse-logistics spend</div>
            <div className="text-xs mt-1 text-gray-600">Transport + labor costs</div>
          </div>
          <div className="bg-red-50 p-3 rounded-lg border border-red-200">
            <div className="text-red-800 font-bold text-xl mb-1">20-65%</div>
            <div className="text-sm font-medium">Cost per returned item</div>
            <div className="text-xs mt-1 text-gray-600">As percentage of original price</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="font-bold text-lg mb-3">Merchant Impact by Size</h3>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Sales</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return Rate</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Return Value</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Processing Costs</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$250,000<br/><span className="text-xs text-gray-500">Small Business</span></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">16.5%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$42,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$8,400 - $27,300<br/><span className="text-xs text-gray-400">(20-65% of return value)</span></td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$1,000,000<br/><span className="text-xs text-gray-500">Mid-Market</span></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">16.5%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$165,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$33,000 - $107,250<br/><span className="text-xs text-gray-400">(20-65% of return value)</span></td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$10,000,000<br/><span className="text-xs text-gray-500">Shopify Plus</span></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">16.5%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$1,650,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$330,000 - $1,072,500<br/><span className="text-xs text-gray-400">(20-65% of return value)</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="font-bold text-lg mb-3">Benchmark ROI from Current Solutions</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-800 mb-2">Return Automation Results</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-2 flex-shrink-0">✓</span>
                <span><strong>30% fewer returns</strong> through improved policies and analytics</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-2 flex-shrink-0">✓</span>
                <span><strong>15 minutes saved</strong> per return processed through automation</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-2 flex-shrink-0">✓</span>
                <span><strong>$5 additional profit</strong> per return by driving exchanges</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-2 flex-shrink-0">✓</span>
                <span><strong>$843 million</strong> in retained revenue (Loop Returns)</span>
              </li>
            </ul>
          </div>
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-800 mb-2">Operational Improvements</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-2 flex-shrink-0">✓</span>
                <span><strong>80% reduction</strong> in returns-related customer service calls</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-2 flex-shrink-0">✓</span>
                <span><strong>$1 million saved</strong> in first year by one brand (through HappyReturns)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-2 flex-shrink-0">✓</span>
                <span><strong>Critical timeframe:</strong> Returns must be processed within 1-3 days to avoid value loss</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-2 flex-shrink-0">✓</span>
                <span><strong>Only 50% of items</strong> currently resold at full value</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-bold text-lg mb-3">AI Platform Opportunity & Expected ROI</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">Baseline</h4>
            <div className="text-sm mb-1">For $10M Shopify Plus merchant:</div>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>$1.65M annual returns</li>
              <li>$825K recovered value (50%)</li>
              <li>$825K lost value (50%)</li>
              <li>$825K processing costs (~50%)</li>
            </ul>
            <div className="mt-3 text-sm font-medium">Net Impact: -$1.65M</div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">Current Solutions</h4>
            <div className="text-sm mb-1">With existing automation:</div>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>$1.16M annual returns (30% reduction)</li>
              <li>$696K recovered value (60%)</li>
              <li>$464K lost value (40%)</li>
              <li>$522K processing costs (45%)</li>
              <li>$116K additional exchange profit</li>
            </ul>
            <div className="mt-3 text-sm font-medium">Net Impact: -$870K</div>
            <div className="mt-1 text-xs text-green-600">47% improvement</div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">AI Platform Target</h4>
            <div className="text-sm mb-1">With agentic platform:</div>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>$990K annual returns (40% reduction)</li>
              <li>$693K recovered value (70%)</li>
              <li>$297K lost value (30%)</li>
              <li>$347K processing costs (35%)</li>
              <li>$198K additional exchange/upsell profit</li>
            </ul>
            <div className="mt-3 text-sm font-medium">Net Impact: -$446K</div>
            <div className="mt-1 text-xs text-green-600">73% improvement</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROIAnalysis;
