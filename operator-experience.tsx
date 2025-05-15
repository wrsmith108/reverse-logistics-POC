import React from 'react';

const OperatorExperience = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-blue-800">Supply Chain/Logistics Operator Experience</h2>
      
      <div className="flex flex-col space-y-6">
        {/* User Journey */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-3">User Journey: Processing Returns</h3>
          <div className="flex overflow-x-auto pb-3">
            <div className="flex space-x-4">
              {/* Step 1 */}
              <div className="flex-shrink-0 w-56 bg-blue-50 p-3 rounded-lg border border-blue-200">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</div>
                  <h4 className="font-medium">Return Notice</h4>
                </div>
                <p className="text-sm">Platform aggregates return requests across channels</p>
                <div className="mt-2 bg-blue-100 p-2 rounded text-xs">
                  <strong>Agent Action:</strong> Customer Communicator confirms return details
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex-shrink-0 w-56 bg-blue-50 p-3 rounded-lg border border-blue-200">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</div>
                  <h4 className="font-medium">Return Assessment</h4>
                </div>
                <p className="text-sm">Platform predicts return reason and condition</p>
                <div className="mt-2 bg-blue-100 p-2 rounded text-xs">
                  <strong>Agent Action:</strong> Return Analyzer evaluates data and predicts condition
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex-shrink-0 w-56 bg-blue-50 p-3 rounded-lg border border-blue-200">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</div>
                  <h4 className="font-medium">Routing Decision</h4>
                </div>
                <p className="text-sm">Platform suggests optimal return path and facility</p>
                <div className="mt-2 bg-blue-100 p-2 rounded text-xs">
                  <strong>Agent Action:</strong> Route Optimizer calculates optimal return facility
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex-shrink-0 w-56 bg-blue-50 p-3 rounded-lg border border-blue-200">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">4</div>
                  <h4 className="font-medium">Disposition Plan</h4>
                </div>
                <p className="text-sm">Platform recommends processing action upon receipt</p>
                <div className="mt-2 bg-blue-100 p-2 rounded text-xs">
                  <strong>Agent Action:</strong> Disposition Agent evaluates recovery options
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="flex-shrink-0 w-56 bg-blue-50 p-3 rounded-lg border border-blue-200">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">5</div>
                  <h4 className="font-medium">Operator Review</h4>
                </div>
                <p className="text-sm">Operator reviews and approves or modifies plan</p>
                <div className="mt-2 bg-blue-100 p-2 rounded text-xs">
                  <strong>Human-AI:</strong> Collaborative decision with explanation
                </div>
              </div>
              
              {/* Step 6 */}
              <div className="flex-shrink-0 w-56 bg-blue-50 p-3 rounded-lg border border-blue-200">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">6</div>
                  <h4 className="font-medium">Execution</h4>
                </div>
                <p className="text-sm">Platform initiates actions across integrated systems</p>
                <div className="mt-2 bg-blue-100 p-2 rounded text-xs">
                  <strong>Agent Action:</strong> Orchestration of cross-system workflows
                </div>
              </div>
              
              {/* Step 7 */}
              <div className="flex-shrink-0 w-56 bg-blue-50 p-3 rounded-lg border border-blue-200">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">7</div>
                  <h4 className="font-medium">Feedback Loop</h4>
                </div>
                <p className="text-sm">Platform captures outcomes and improves models</p>
                <div className="mt-2 bg-blue-100 p-2 rounded text-xs">
                  <strong>Agent Action:</strong> Process Optimizer learns from outcomes
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Operator Interface */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-3">Operator Interface</h3>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="col-span-2">
                <div className="bg-gray-100 p-3 rounded-lg h-64">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Returns Dashboard</h4>
                    <div className="text-sm text-blue-600">May 15, 2025</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="bg-white p-2 rounded shadow-sm">
                      <div className="text-xs text-gray-500">Pending Returns</div>
                      <div className="font-bold text-xl">247</div>
                      <div className="text-xs text-green-600">↓ 38% from baseline</div>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm">
                      <div className="text-xs text-gray-500">Processing Time</div>
                      <div className="font-bold text-xl">0.8 days</div>
                      <div className="text-xs text-green-600">↓ 73% (vs. industry 1-3 days)</div>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm">
                      <div className="text-xs text-gray-500">Value Recovery</div>
                      <div className="font-bold text-xl">72%</div>
                      <div className="text-xs text-green-600">↑ 44% (vs. industry 50%)</div>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm mb-3">
                    <div className="text-sm font-medium mb-1">Agent Insights</div>
                    <div className="text-xs text-gray-700">
                      • Seasonal pattern detected: Winter coat returns increased 32% this week<br/>
                      • Potential shipping damage issue with carrier XYZ (confidence: 87%)<br/>
                      • Recommend temporary routing change for fragile items (est. savings: $3,400)<br/>
                      • Full-value recovery rate increased 22% through faster processing<br/>
                      • Processing cost reduced from 47% to 35% of return value
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white text-xs py-1 px-2 rounded">View Recommendations</button>
                    <button className="bg-gray-200 text-gray-700 text-xs py-1 px-2 rounded">Ask Platform</button>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gray-100 p-3 rounded-lg h-64">
                  <h4 className="font-medium mb-2">Return Queue</h4>
                  <div className="space-y-2 overflow-y-auto h-56">
                    <div className="bg-white p-2 rounded shadow-sm">
                      <div className="flex justify-between">
                        <div className="font-medium text-sm">Order #4762</div>
                        <div className="text-xs bg-yellow-100 text-yellow-800 px-1 rounded">High Priority</div>
                      </div>
                      <div className="text-xs">Canada Goose Jacket - Size L</div>
                      <div className="flex justify-between text-xs mt-1">
                        <div className="text-gray-500">Reason: Sizing issue</div>
                        <button className="text-blue-600">Review</button>
                      </div>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm">
                      <div className="flex justify-between">
                        <div className="font-medium text-sm">Order #4763</div>
                        <div className="text-xs bg-blue-100 text-blue-800 px-1 rounded">AI Processed</div>
                      </div>
                      <div className="text-xs">Nike Air Max - Size 10</div>
                      <div className="flex justify-between text-xs mt-1">
                        <div className="text-gray-500">Reason: Changed mind</div>
                        <button className="text-blue-600">Review</button>
                      </div>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm">
                      <div className="flex justify-between">
                        <div className="font-medium text-sm">Order #4764</div>
                        <div className="text-xs bg-red-100 text-red-800 px-1 rounded">Exception</div>
                      </div>
                      <div className="text-xs">Wireless Headphones</div>
                      <div className="flex justify-between text-xs mt-1">
                        <div className="text-gray-500">Reason: Defective</div>
                        <button className="text-blue-600">Review</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="font-medium">Detailed View: Order #4762</div>
                <div className="ml-auto text-xs text-blue-600">Agent assisted</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-2 rounded shadow-sm">
                  <div className="text-sm font-medium mb-1">Return Analysis</div>
                  <div className="text-xs">
                    <div className="mb-1"><span className="font-medium">Return Reason:</span> Size too large (95% confidence)</div>
                    <div className="mb-1"><span className="font-medium">Condition Prediction:</span> New/unused (98% confidence)</div>
                    <div className="mb-1"><span className="font-medium">Customer History:</span> 4 purchases, 1 previous return</div>
                    <div><span className="font-medium">Fraud Risk:</span> Low (3% probability)</div>
                  </div>
                </div>
                <div className="bg-white p-2 rounded shadow-sm">
                  <div className="text-sm font-medium mb-1">Recommended Actions</div>
                  <div className="text-xs">
                    <div className="mb-1"><span className="font-medium">Routing:</span> Central Returns Center (Toronto)</div>
                    <div className="mb-1"><span className="font-medium">Disposition:</span> Restock as new (97% confidence)</div>
                    <div className="mb-1"><span className="font-medium">Resale Value:</span> 100% of original ($499.99)</div>
                    <div className="mb-1"><span className="font-medium">Est. Processing Cost:</span> $12.45 (vs. industry avg. $32.50)</div>
                    <div><span className="font-medium">Est. Processing Time:</span> 0.7 days (vs. industry avg. 2.3 days)</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-2">
                <button className="bg-gray-200 text-gray-700 text-xs py-1 px-2 rounded mr-2">Modify Plan</button>
                <button className="bg-green-600 text-white text-xs py-1 px-2 rounded">Approve</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorExperience;
