import React from 'react';

const PricingStrategy = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-bold mb-6 text-blue-800">AI Commerce Agentic Platform: Hybrid SaaS + Token Pricing</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h3 className="font-bold text-lg mb-4">Tiered Subscription + Token Model</h3>
        
        <div className="grid grid-cols-3 gap-6">
          {/* Essentials Tier */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-4">
              <h4 className="font-bold text-lg text-gray-800">Essentials</h4>
              <div className="text-sm text-gray-600">For emerging Shopify Plus merchants</div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <div className="text-2xl font-bold">$999<span className="text-sm font-normal text-gray-600">/month</span></div>
                <div className="text-sm text-gray-600 mt-1">+ $0.025 per agent token</div>
                <div className="text-sm text-gray-600">Includes 50,000 tokens/month</div>
              </div>
              
              <div className="text-xs text-gray-600 mb-4">For merchants with up to 500 monthly returns</div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 mt-0.5">✓</div>
                  <div className="text-sm">Core return optimization</div>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 mt-0.5">✓</div>
                  <div className="text-sm">Basic agent recommendations</div>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 mt-0.5">✓</div>
                  <div className="text-sm">Standard Shopify Plus integration</div>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 mt-0.5">✓</div>
                  <div className="text-sm">Email support (24hr response)</div>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 mt-0.5">✓</div>
                  <div className="text-sm">Basic analytics dashboard</div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg text-sm">
                <div className="font-medium text-blue-800">Expected ROI</div>
                <div>2-3x monthly investment</div>
                <div className="text-xs text-gray-600 mt-1">$25K-$50K annual savings</div>
              </div>
            </div>
          </div>
          
          {/* Pro Tier */}
          <div className="border-2 border-blue-500 rounded-lg overflow-hidden shadow-lg relative">
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">MOST POPULAR</div>
            <div className="bg-blue-50 p-4">
              <h4 className="font-bold text-lg text-blue-800">Professional</h4>
              <div className="text-sm text-blue-600">For growing Shopify Plus merchants</div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <div className="text-2xl font-bold">$2,499<span className="text-sm font-normal text-gray-600">/month</span></div>
                <div className="text-sm text-gray-600 mt-1">+ $0.02 per agent token</div>
                <div className="text-sm text-gray-600">Includes 150,000 tokens/month</div>
              </div>
              
              <div className="text-xs text-gray-600 mb-4">For merchants with 500-2,000 monthly returns</div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 mt-0.5">✓</div>
                  <div className="text-sm">Everything in Essentials</div>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 mt-0.5">✓</div>
                  <div className="text-sm">Advanced agent orchestration</div>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 mt-0.5">✓</div>
                  <div className="text-sm">Multi-agent workflows</div>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 mt-0.5">✓</div>
                  <div className="text-sm">Priority support (8hr response)</div>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 mt-0.5">✓</div>
                  <div className="text-sm">Dedicated customer success manager</div>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 mt-0.5">✓</div>
                  <div className="text-sm">Advanced analytics with insights</div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg text-sm">
                <div className="font-medium text-blue-800">Expected ROI</div>
                <div>4-6x monthly investment</div>
                <div className="text-xs text-gray-600 mt-1">$120K-$180K annual savings</div>
              </div>
            </div>
          </div>
          
          {/* Enterprise Tier */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-800 p-4 text-white">
              <h4 className="font-bold text-lg">Enterprise</h4>
              <div className="text-sm text-gray-300">For large-scale operations</div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <div className="text-2xl font-bold">Custom<span className="text-sm font-normal text-gray-600"></span></div>
                <div className="text-sm text-gray-600">Volume-based token pricing</div>
                <div className="text-sm text-gray-600">Unlimited agent capacity</div>
              </div>
              
              <div className="text-xs text-gray-600 mb-4">For merchants with 2,000+ monthly returns</div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 mt-0.5">✓</div>
                  <div className="text-sm">Everything in Professional</div>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 mt-0.5">✓</div>
                  <div className="text-sm">Custom agent development</div>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 mt-0.5">✓</div>
                  <div className="text-sm">Multi-channel capabilities</div>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 mt-0.5">✓</div>
                  <div className="text-sm">24/7 dedicated support</div>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 mt-0.5">✓</div>
                  <div className="text-sm">Strategic account management</div>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 mt-0.5">✓</div>
                  <div className="text-sm">Enterprise data integrations</div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg text-sm">
                <div className="font-medium text-blue-800">Expected ROI</div>
                <div>8-10x monthly investment</div>
                <div className="text-xs text-gray-600 mt-1">$800K-$1.2M annual savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-3">Token Usage Explained</h3>
          <div className="space-y-4">
            <div className="border-b pb-3">
              <h4 className="font-medium text-blue-800 mb-1">What are Tokens?</h4>
              <p className="text-sm">Tokens are the basic units of text that our AI agents process. They're used to measure the computational resources required for AI operations.</p>
              <div className="mt-2 text-sm">
                <div className="bg-gray-50 p-2 rounded">
                  <div className="font-medium">Example Token Usage</div>
                  <div className="text-xs mt-1">
                    • Average return processing: ~500-800 tokens<br/>
                    • Complex return analysis: ~1,200-1,800 tokens<br/>
                    • Full batch optimization: ~3,000-5,000 tokens
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-b pb-3">
              <h4 className="font-medium text-blue-800 mb-1">Token Efficiency</h4>
              <p className="text-sm">Our platform is designed to maximize token efficiency while maintaining high-quality AI recommendations.</p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                <div className="bg-gray-50 p-2 rounded">
                  <div className="font-medium">Efficiency Features</div>
                  <div className="text-xs mt-1">
                    • Smart caching of common patterns<br/>
                    • Pre-computed recommendations<br/>
                    • Efficient prompt engineering
                  </div>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <div className="font-medium">Cost Control</div>
                  <div className="text-xs mt-1">
                    • Token usage dashboard<br/>
                    • Monthly usage caps<br/>
                    • Efficiency recommendations
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-blue-800 mb-1">Volume Discounts</h4>
              <p className="text-sm">Token rates decrease with higher volumes, rewarding enterprises with scale efficiency.</p>
              <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                <div className="bg-gray-50 p-2 rounded text-center">
                  <div className="font-medium">0-1M tokens</div>
                  <div>Base rate</div>
                </div>
                <div className="bg-gray-50 p-2 rounded text-center">
                  <div className="font-medium">1M-5M tokens</div>
                  <div>15% discount</div>
                </div>
                <div className="bg-gray-50 p-2 rounded text-center">
                  <div className="font-medium">5M+ tokens</div>
                  <div>30% discount</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-3">Implementation & Professional Services</h3>
          
          <div className="mb-4">
            <h4 className="font-medium text-blue-800 mb-1">One-Time Implementation</h4>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="bg-gray-50 p-2 rounded">
                <div className="font-medium">Essentials</div>
                <div className="text-center mt-1">$5,000</div>
                <div className="text-xs text-gray-500 mt-1">3-4 weeks</div>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <div className="font-medium">Professional</div>
                <div className="text-center mt-1">$12,000</div>
                <div className="text-xs text-gray-500 mt-1">4-6 weeks</div>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <div className="font-medium">Enterprise</div>
                <div className="text-center mt-1">Custom</div>
                <div className="text-xs text-gray-500 mt-1">8-12 weeks</div>
              </div>
            </div>
            <div className="mt-2 text-xs">
              *All plans include standard implementation with one month of professional services for configuration and onboarding.
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-blue-800 mb-1">Included Services</h4>
            
            <div className="flex justify-between items-center bg-gray-50 p-2 rounded text-sm">
              <div>
                <div className="font-medium">Dedicated Customer Success Manager</div>
                <div className="text-xs text-gray-600">Proactive support and strategic guidance</div>
              </div>
              <div className="font-medium text-green-600">Included</div>
            </div>
            
            <div className="flex justify-between items-center bg-gray-50 p-2 rounded text-sm">
              <div>
                <div className="font-medium">Business Review Sessions</div>
                <div className="text-xs text-gray-600">Quarterly for Pro, Monthly for Enterprise</div>
              </div>
              <div className="font-medium text-green-600">Included</div>
            </div>
            
            <div className="flex justify-between items-center bg-gray-50 p-2 rounded text-sm">
              <div>
                <div className="font-medium">Agent Optimization</div>
                <div className="text-xs text-gray-600">Regular tuning for improved efficiency</div>
              </div>
              <div className="font-medium text-green-600">Included</div>
            </div>
            
            <div className="flex justify-between items-center bg-gray-50 p-2 rounded text-sm">
              <div>
                <div className="font-medium">Training & Enablement</div>
                <div className="text-xs text-gray-600">Onboarding for supply chain operators</div>
              </div>
              <div className="font-medium text-green-600">Included</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="font-bold text-lg mb-2 text-blue-800">Competitive Analysis</h3>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">Our Platform vs. Returns Apps</h4>
            <div className="bg-white p-3 rounded-lg shadow mb-2">
              <div className="font-medium">ReturnLogic ($300-$1000/mo)</div>
              <ul className="list-disc pl-5 text-xs space-y-1 mt-1">
                <li>Limited to basic returns processing</li>
                <li>No AI-driven optimization</li>
                <li>Basic analytics only</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded-lg shadow">
              <div className="font-medium">Loop Returns (usage-based)</div>
              <ul className="list-disc pl-5 text-xs space-y-1 mt-1">
                <li>Good customer experience</li>
                <li>Limited operational optimization</li>
                <li>No predictive capabilities</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Our Value Proposition</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-medium">Higher ROI</span>: 3-10x return vs 2-3x from competitors</li>
              <li><span className="font-medium">AI-Powered</span>: Intelligent optimization vs. manual rules</li>
              <li><span className="font-medium">End-to-End</span>: Complete reverse logistics vs. point solutions</li>
              <li><span className="font-medium">Dedicated Support</span>: CSM for all customers</li>
              <li><span className="font-medium">Transaction-Based</span>: Pay for actual usage</li>
              <li><span className="font-medium">Integration</span>: Deep Shopify Plus connectivity</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Target Customer Profile</h4>
            <div className="bg-white p-3 rounded-lg shadow">
              <ul className="list-disc pl-5 text-xs space-y-1">
                <li>Shopify Plus merchants ($1M-$50M revenue)</li>
                <li>500+ monthly returns</li>
                <li>High-value products (apparel, electronics)</li>
                <li>Multiple return channels</li>
                <li>Seeking operational efficiency</li>
                <li>9-12 month sales cycles with multiple stakeholders</li>
                <li>Part of Fabric.inc ecosystem users</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingStrategy;
