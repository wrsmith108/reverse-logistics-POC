import React from 'react';

const PlatformCapabilitiesAndMetrics = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-bold mb-6 text-center text-blue-800">AI Commerce Agentic Platform: Capabilities & Success Metrics</h2>
      
      <div className="mb-8">
        <div className="flex justify-center">
          <div className="bg-blue-700 text-white text-center px-16 py-3 rounded-lg shadow-lg">
            <span className="text-lg font-bold">Transforming Reverse Logistics with AI Agents</span>
          </div>
        </div>
        
        {/* Connector lines */}
        <div className="relative h-12">
          <div className="absolute left-1/2 top-0 h-12 border-l-2 border-blue-400"></div>
        </div>
        
        {/* Core capabilities in a circle */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left column */}
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 shadow border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-1">Predictive Intelligence</h3>
              <p className="text-sm mb-3">AI-driven forecasting and pattern detection</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white p-2 rounded shadow-sm">
                  <div className="text-xs text-gray-500">Return Rate</div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-red-600">16.9%</div>
                    <div className="text-xs text-gray-400">Current</div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-green-600">&lt;10%</div>
                    <div className="text-xs text-gray-400">Target</div>
                  </div>
                </div>
                <div className="bg-white p-2 rounded shadow-sm">
                  <div className="text-xs text-gray-500">Prevention</div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-red-600">0%</div>
                    <div className="text-xs text-gray-400">Current</div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-green-600">30%+</div>
                    <div className="text-xs text-gray-400">Target</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4 shadow border border-purple-200">
              <h3 className="font-bold text-purple-800 mb-1">Intelligent Disposition</h3>
              <p className="text-sm mb-3">Optimal recovery path determination</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white p-2 rounded shadow-sm">
                  <div className="text-xs text-gray-500">Full-Value Recovery</div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-red-600">50%</div>
                    <div className="text-xs text-gray-400">Current</div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-green-600">70%+</div>
                    <div className="text-xs text-gray-400">Target</div>
                  </div>
                </div>
                <div className="bg-white p-2 rounded shadow-sm">
                  <div className="text-xs text-gray-500">Decision Time</div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-red-600">Hours</div>
                    <div className="text-xs text-gray-400">Current</div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-green-600">Seconds</div>
                    <div className="text-xs text-gray-400">Target</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Middle column */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-1 shadow-lg mb-4">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="font-bold text-blue-800 text-lg mb-1">ROI</div>
                  <div className="text-3xl font-bold text-green-600">73%</div>
                  <div className="text-xs text-gray-500">Net Impact Improvement</div>
                  <div className="mt-1 text-xs font-medium text-blue-600">$1.2M annual savings per $10M revenue</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 shadow border border-green-200 w-full">
              <h3 className="font-bold text-green-800 mb-1">Rapid Processing</h3>
              <p className="text-sm mb-3">Accelerated return handling</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white p-2 rounded shadow-sm">
                  <div className="text-xs text-gray-500">Processing Time</div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-red-600">1-3 days</div>
                    <div className="text-xs text-gray-400">Current</div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-green-600">&lt;1 day</div>
                    <div className="text-xs text-gray-400">Target</div>
                  </div>
                </div>
                <div className="bg-white p-2 rounded shadow-sm">
                  <div className="text-xs text-gray-500">Labor Efficiency</div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-red-600">+0 min</div>
                    <div className="text-xs text-gray-400">Current</div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-green-600">+15 min</div>
                    <div className="text-xs text-gray-400">Target/return</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column */}
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg p-4 shadow border border-indigo-200">
              <h3 className="font-bold text-indigo-800 mb-1">Cost Optimization</h3>
              <p className="text-sm mb-3">Return expense reduction</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white p-2 rounded shadow-sm">
                  <div className="text-xs text-gray-500">Processing Cost</div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-red-600">20-65%</div>
                    <div className="text-xs text-gray-400">Current</div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-green-600">15-35%</div>
                    <div className="text-xs text-gray-400">Target</div>
                  </div>
                </div>
                <div className="bg-white p-2 rounded shadow-sm">
                  <div className="text-xs text-gray-500">Shipping Cost</div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-red-600">Baseline</div>
                    <div className="text-xs text-gray-400">Current</div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-green-600">-25%</div>
                    <div className="text-xs text-gray-400">Target</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-4 shadow border border-amber-200">
              <h3 className="font-bold text-amber-800 mb-1">Revenue Recovery</h3>
              <p className="text-sm mb-3">Exchange optimization & upselling</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white p-2 rounded shadow-sm">
                  <div className="text-xs text-gray-500">Exchange Rate</div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-red-600">Baseline</div>
                    <div className="text-xs text-gray-400">Current</div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-green-600">+40%</div>
                    <div className="text-xs text-gray-400">Target</div>
                  </div>
                </div>
                <div className="bg-white p-2 rounded shadow-sm">
                  <div className="text-xs text-gray-500">Added Profit</div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-red-600">$5</div>
                    <div className="text-xs text-gray-400">Current</div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="font-bold text-green-600">$10+</div>
                    <div className="text-xs text-gray-400">Target/return</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-bold text-lg mb-3 text-center">Merchant Impact by Size Segment</h3>
        <div className="overflow-hidden rounded-lg">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Merchant Segment</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Returns</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Cost</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform Savings</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI Timeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-gray-50">
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">SMB<br/><span className="text-xs text-gray-500">$250K Revenue</span></td>
                <td className="px-4 py-2 whitespace-nowrap text-sm">$42,000<br/><span className="text-xs text-gray-500">16.5% of sales</span></td>
                <td className="px-4 py-2 whitespace-nowrap text-sm">$8,400 - $27,300<br/><span className="text-xs text-gray-500">20-65% of returns</span></td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-green-600">$12,600 - $16,800<br/><span className="text-xs text-gray-500">30-40% reduction</span></td>
                <td className="px-4 py-2 whitespace-nowrap text-sm">3-6 months</td>
              </tr>
              <tr>
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">Mid-Market<br/><span className="text-xs text-gray-500">$1M Revenue</span></td>
                <td className="px-4 py-2 whitespace-nowrap text-sm">$165,000<br/><span className="text-xs text-gray-500">16.5% of sales</span></td>
                <td className="px-4 py-2 whitespace-nowrap text-sm">$33,000 - $107,250<br/><span className="text-xs text-gray-500">20-65% of returns</span></td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-green-600">$49,500 - $66,000<br/><span className="text-xs text-gray-500">30-40% reduction</span></td>
                <td className="px-4 py-2 whitespace-nowrap text-sm">2-4 months</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">Enterprise<br/><span className="text-xs text-gray-500">$10M+ Revenue</span></td>
                <td className="px-4 py-2 whitespace-nowrap text-sm">$1,650,000<br/><span className="text-xs text-gray-500">16.5% of sales</span></td>
                <td className="px-4 py-2 whitespace-nowrap text-sm">$330,000 - $1,072,500<br/><span className="text-xs text-gray-500">20-65% of returns</span></td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-green-600">$825,000 - $1,200,000<br/><span className="text-xs text-gray-500">50-70% reduction</span></td>
                <td className="px-4 py-2 whitespace-nowrap text-sm">1-2 months</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlatformCapabilitiesAndMetrics;
