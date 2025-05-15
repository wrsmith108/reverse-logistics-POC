import React from 'react';

const POCImplementation = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-blue-800">Proof of Concept Implementation</h2>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="font-bold text-lg mb-3">POC Scope & Objectives</h3>
        
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">Primary Objectives</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Validate platform architecture feasibility</li>
              <li>Demonstrate value in a controlled environment</li>
              <li>Measure performance against baseline metrics</li>
              <li>Gather user feedback from logistics operators</li>
              <li>Identify integration challenges early</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">Success Criteria</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Processing time reduction from 1-3 days to &lt;1 day</li>
              <li>Recovery value improvement from 50% to 70%+</li>
              <li>Return rate reduction of at least 30%</li>
              <li>Processing cost reduction from 20-65% to 15-35% of item value</li>
              <li>Exchange/upsell rate improvement generating $10+ per return</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
          <h4 className="font-medium text-blue-800 mb-2">POC Limitations & Constraints</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Limited to subset of product categories (apparel and electronics initially)</li>
            <li>Single merchant implementation with moderate return volume (100-200 returns/week)</li>
            <li>Focus on standard returns (excluding special handling requirements)</li>
            <li>Simulated integrations where full API access is not available</li>
            <li>Manual confirmation steps before executing agent recommendations</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="font-bold text-lg mb-3">Phased Implementation Approach</h3>
        
        <div className="relative">
          {/* Phase Timeline */}
          <div className="absolute left-24 top-0 w-full h-full">
            <div className="absolute left-0 top-0 h-full border-l-2 border-blue-200"></div>
          </div>
          
          {/* Phase 1 */}
          <div className="mb-8 relative">
            <div className="absolute left-24 top-6 w-4 h-4 rounded-full bg-blue-600 -ml-2 z-10"></div>
            <div className="ml-32">
              <div className="flex items-center">
                <h4 className="font-bold text-blue-800">Phase 1: Foundation & Data Integration</h4>
                <div className="ml-4 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Weeks 1-3</div>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Core Components</h5>
                  <ul className="list-disc pl-5 text-xs space-y-1">
                    <li>Data connector to Shopify Admin API</li>
                    <li>Order and return history ingestion</li>
                    <li>Product catalog and metadata integration</li>
                    <li>Basic platform architecture setup</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Deliverables</h5>
                  <ul className="list-disc pl-5 text-xs space-y-1">
                    <li>Unified data model across systems</li>
                    <li>Real-time webhook integration for orders</li>
                    <li>Historical return data analysis</li>
                    <li>Data quality assessment report</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Phase 2 */}
          <div className="mb-8 relative">
            <div className="absolute left-24 top-6 w-4 h-4 rounded-full bg-blue-600 -ml-2 z-10"></div>
            <div className="ml-32">
              <div className="flex items-center">
                <h4 className="font-bold text-blue-800">Phase 2: Core Agent Development</h4>
                <div className="ml-4 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Weeks 4-6</div>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Core Components</h5>
                  <ul className="list-disc pl-5 text-xs space-y-1">
                    <li>Return Analyzer agent development</li>
                    <li>Route Optimizer agent development</li>
                    <li>Disposition Agent implementation</li>
                    <li>Basic operator dashboard</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Deliverables</h5>
                  <ul className="list-disc pl-5 text-xs space-y-1">
                    <li>Return condition prediction models</li>
                    <li>Initial routing optimization algorithms</li>
                    <li>Value recovery recommendation engine</li>
                    <li>Agent performance metrics dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Phase 3 */}
          <div className="mb-8 relative">
            <div className="absolute left-24 top-6 w-4 h-4 rounded-full bg-blue-600 -ml-2 z-10"></div>
            <div className="ml-32">
              <div className="flex items-center">
                <h4 className="font-bold text-blue-800">Phase 3: Operator Interface & Orchestration</h4>
                <div className="ml-4 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Weeks 7-9</div>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Core Components</h5>
                  <ul className="list-disc pl-5 text-xs space-y-1">
                    <li>Human-AI collaborative interface</li>
                    <li>Agent orchestration layer</li>
                    <li>Integrated returns workflow</li>
                    <li>Decision explanation system</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Deliverables</h5>
                  <ul className="list-disc pl-5 text-xs space-y-1">
                    <li>Complete operator dashboard</li>
                    <li>Multi-agent workflow automation</li>
                    <li>Explainable AI recommendation system</li>
                    <li>Operator training program</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Phase 4 */}
          <div className="relative">
            <div className="absolute left-24 top-6 w-4 h-4 rounded-full bg-blue-600 -ml-2 z-10"></div>
            <div className="ml-32">
              <div className="flex items-center">
                <h4 className="font-bold text-blue-800">Phase 4: Pilot Testing & Evaluation</h4>
                <div className="ml-4 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Weeks 10-12</div>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Core Components</h5>
                  <ul className="list-disc pl-5 text-xs space-y-1">
                    <li>Live pilot with merchant partner</li>
                    <li>Feedback collection system</li>
                    <li>A/B testing framework</li>
                    <li>Performance measurement tools</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">Deliverables</h5>
                  <ul className="list-disc pl-5 text-xs space-y-1">
                    <li>POC performance report</li>
                    <li>Operator satisfaction assessment</li>
                    <li>Technical validation documentation</li>
                    <li>Roadmap for full implementation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-bold text-lg mb-3">Technical Implementation</h3>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">Core Technologies</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="font-medium">Platform Foundation</div>
                <ul className="list-disc pl-5 text-xs space-y-1">
                  <li>Cloud-native architecture (AWS)</li>
                  <li>Microservices-based design</li>
                  <li>Event-driven communication</li>
                  <li>Containerized deployment (Kubernetes)</li>
                </ul>
              </div>
              <div>
                <div className="font-medium">AI & ML Stack</div>
                <ul className="list-disc pl-5 text-xs space-y-1">
                  <li>LLM-based agent architecture</li>
                  <li>Decision optimization framework</li>
                  <li>Computer vision for condition assessment</li>
                  <li>Reinforcement learning for continuous improvement</li>
                </ul>
              </div>
              <div className="mt-2">
                <div className="font-medium">Integration Tools</div>
                <ul className="list-disc pl-5 text-xs space-y-1">
                  <li>RESTful API gateway</li>
                  <li>GraphQL API consumption</li>
                  <li>Webhook processing engine</li>
                  <li>ETL pipeline for data ingestion</li>
                </ul>
              </div>
              <div className="mt-2">
                <div className="font-medium">Frontend Technologies</div>
                <ul className="list-disc pl-5 text-xs space-y-1">
                  <li>React for operator dashboard</li>
                  <li>Embedded app framework for Shopify Admin</li>
                  <li>Real-time data visualization</li>
                  <li>Mobile-responsive design</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 mb-3">
              <h4 className="font-medium text-blue-800 mb-2">Implementation Risks & Mitigations</h4>
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-blue-200">
                    <th className="text-left py-1 font-medium">Risk</th>
                    <th className="text-left py-1 font-medium">Mitigation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blue-100">
                    <td className="py-1">Data quality issues</td>
                    <td className="py-1">Implement data validation & cleansing pipeline</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-1">API rate limiting</td>
                    <td className="py-1">Implement caching & throttling strategies</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-1">Agent accuracy</td>
                    <td className="py-1">Human-in-the-loop validation during POC</td>
                  </tr>
                  <tr>
                    <td className="py-1">Integration complexity</td>
                    <td className="py-1">Phased approach with mock services initially</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-800 mb-2">Metrics & Evaluation</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="font-medium">Performance Metrics</div>
                  <ul className="list-disc pl-5 text-xs space-y-1">
                    <li>Returns processing time</li>
                    <li>Value recovery percentage</li>
                    <li>Labor cost per return</li>
                    <li>Transportation cost reduction</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium">Quality Metrics</div>
                  <ul className="list-disc pl-5 text-xs space-y-1">
                    <li>Prediction accuracy</li>
                    <li>Routing optimization score</li>
                    <li>Decision acceptance rate</li>
                    <li>Customer satisfaction (CSAT)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POCImplementation;
