import React from 'react';

const PlatformArchitecture = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-blue-800">ROI-Focused Agentic Platform Architecture</h2>
      
      <div className="relative bg-white p-6 rounded-lg shadow-lg mb-8">
        <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 rounded-tl-lg rounded-br-lg text-sm font-medium">PLATFORM LAYER</div>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-800">Agent Orchestration</h3>
            <p className="text-sm mt-2">Coordinates multi-agent workflows and task allocation</p>
            <div className="mt-2 bg-blue-100 text-xs p-1 rounded">
              <strong>ROI Impact:</strong> Reduces processing time from 1-3 days to &lt;1 day
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-800">Knowledge Engine</h3>
            <p className="text-sm mt-2">Unified data model across systems and domains</p>
            <div className="mt-2 bg-blue-100 text-xs p-1 rounded">
              <strong>ROI Impact:</strong> Enables 40%+ reduction in returns through pattern analysis
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-800">Decision Framework</h3>
            <p className="text-sm mt-2">Business rules and optimization algorithms</p>
            <div className="mt-2 bg-blue-100 text-xs p-1 rounded">
              <strong>ROI Impact:</strong> Improves full-value recovery from 50% to 70%+
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-800">Integration Hub</h3>
            <p className="text-sm mt-2">Connector framework for systems and platforms</p>
            <div className="mt-2 bg-blue-100 text-xs p-1 rounded">
              <strong>ROI Impact:</strong> Seamless connection to SFN and 3PLs for all merchant sizes
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-800">Feedback Systems</h3>
            <p className="text-sm mt-2">Learning mechanisms and performance optimization</p>
            <div className="mt-2 bg-blue-100 text-xs p-1 rounded">
              <strong>ROI Impact:</strong> Continuous reduction in processing costs (20-65% → 15-35%)
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-800">Human-AI Interface</h3>
            <p className="text-sm mt-2">Collaboration tools and control mechanisms</p>
            <div className="mt-2 bg-blue-100 text-xs p-1 rounded">
              <strong>ROI Impact:</strong> Reduces labor costs, mirrors 80% support call reduction
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative bg-white p-6 rounded-lg shadow-lg mb-8">
        <div className="absolute top-0 left-0 bg-green-600 text-white px-3 py-1 rounded-tl-lg rounded-br-lg text-sm font-medium">AGENT LAYER</div>
        <div className="mt-6 grid grid-cols-4 gap-4">
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800">Return Analyzer</h3>
            <p className="text-sm mt-2">Assesses return reason and condition</p>
            <div className="mt-2 bg-green-100 text-xs p-1 rounded">
              <strong>Target:</strong> 95% accurate condition assessment
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800">Route Optimizer</h3>
            <p className="text-sm mt-2">Determines optimal return path</p>
            <div className="mt-2 bg-green-100 text-xs p-1 rounded">
              <strong>Target:</strong> 25% shipping cost reduction
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800">Disposition Agent</h3>
            <p className="text-sm mt-2">Recommends optimal recovery action</p>
            <div className="mt-2 bg-green-100 text-xs p-1 rounded">
              <strong>Target:</strong> 70%+ full-value recovery rate
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800">Inventory Manager</h3>
            <p className="text-sm mt-2">Updates and forecasts inventory levels</p>
            <div className="mt-2 bg-green-100 text-xs p-1 rounded">
              <strong>Target:</strong> &lt;12hr inventory reconciliation
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800">Exchange Optimizer</h3>
            <p className="text-sm mt-2">Increases exchanges over refunds</p>
            <div className="mt-2 bg-green-100 text-xs p-1 rounded">
              <strong>Target:</strong> $10+ additional profit per return
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800">Cost Optimizer</h3>
            <p className="text-sm mt-2">Balances costs against recovery value</p>
            <div className="mt-2 bg-green-100 text-xs p-1 rounded">
              <strong>Target:</strong> 30% labor cost reduction
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800">Fraud Detector</h3>
            <p className="text-sm mt-2">Identifies suspicious return patterns</p>
            <div className="mt-2 bg-green-100 text-xs p-1 rounded">
              <strong>Target:</strong> 40% reduction in fraudulent returns
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800">Process Optimizer</h3>
            <p className="text-sm mt-2">Continuously improves return workflows</p>
            <div className="mt-2 bg-green-100 text-xs p-1 rounded">
              <strong>Target:</strong> 15 min time savings per return
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative bg-white p-6 rounded-lg shadow-lg">
        <div className="absolute top-0 left-0 bg-purple-600 text-white px-3 py-1 rounded-tl-lg rounded-br-lg text-sm font-medium">INTEGRATION LAYER</div>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h3 className="font-bold text-purple-800">Shopify Integration</h3>
            <p className="text-sm mt-2">Order, customer, and product data</p>
            <div className="mt-2 bg-purple-100 text-xs p-1 rounded">
              <strong>Includes:</strong> Shopify Fulfillment Network integration
            </div>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h3 className="font-bold text-purple-800">3PL Integration</h3>
            <p className="text-sm mt-2">Red Stag, ShipBob, and other 3PLs</p>
            <div className="mt-2 bg-purple-100 text-xs p-1 rounded">
              <strong>Supports:</strong> SMB to enterprise merchant scales
            </div>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h3 className="font-bold text-purple-800">Returns App Connectors</h3>
            <p className="text-sm mt-2">Loop, ReturnLogic, HappyReturns</p>
            <div className="mt-2 bg-purple-100 text-xs p-1 rounded">
              <strong>Enhances:</strong> Existing app capabilities
            </div>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h3 className="font-bold text-purple-800">Customer Service</h3>
            <p className="text-sm mt-2">Support ticket and CRM systems</p>
            <div className="mt-2 bg-purple-100 text-xs p-1 rounded">
              <strong>Target:</strong> 80% reduction in support tickets
            </div>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h3 className="font-bold text-purple-800">Financial Systems</h3>
            <p className="text-sm mt-2">Refunds, credits, and accounting</p>
            <div className="mt-2 bg-purple-100 text-xs p-1 rounded">
              <strong>Target:</strong> 1-day refund processing time
            </div>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h3 className="font-bold text-purple-800">Sustainability Systems</h3>
            <p className="text-sm mt-2">Environmental impact tracking</p>
            <div className="mt-2 bg-purple-100 text-xs p-1 rounded">
              <strong>Target:</strong> 30% reduction in return shipping emissions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformArchitecture;
