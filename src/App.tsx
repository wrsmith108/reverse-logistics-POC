import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

// Import all the TSX components
import PlatformArchitecture from '../agentic-platform-architecture'
import FabricSystemArchitecture from '../fabric-system-architecture'
import OperatorExperience from '../operator-experience'
import PlatformCapabilitiesMetrics from '../platform-capabilities-metrics'
import PocImplementation from '../poc-implementation'
import PricingStrategy from '../pricing-strategy'
import RoiAnalysis from '../roi-analysis'
import ShopifyIntegration from '../shopify-integration'
import SoftwareArchitecture from '../software-architecture'
import SupplyChainFlow from '../supply-chain-flow'

const App: React.FC = () => {
  // Create navigation links based on component names
  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/platform-architecture', name: 'Platform Architecture' },
    { path: '/software-architecture', name: 'Software Architecture' },
    { path: '/fabric-system-architecture', name: 'Fabric System Architecture' },
    { path: '/supply-chain-flow', name: 'Supply Chain Flow' },
    { path: '/operator-experience', name: 'Operator Experience' },
    { path: '/platform-capabilities', name: 'Platform Capabilities & Metrics' },
    { path: '/poc-implementation', name: 'POC Implementation' },
    { path: '/pricing-strategy', name: 'Pricing Strategy' },
    { path: '/roi-analysis', name: 'ROI Analysis' },
    { path: '/shopify-integration', name: 'Shopify Integration' },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold mb-4">Reverse Logistics POC</h1>
          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main content area */}
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform-architecture" element={<PlatformArchitecture />} />
          <Route path="/software-architecture" element={<SoftwareArchitecture />} />
          <Route path="/fabric-system-architecture" element={<FabricSystemArchitecture />} />
          <Route path="/supply-chain-flow" element={<SupplyChainFlow />} />
          <Route path="/operator-experience" element={<OperatorExperience />} />
          <Route path="/platform-capabilities" element={<PlatformCapabilitiesMetrics />} />
          <Route path="/poc-implementation" element={<PocImplementation />} />
          <Route path="/pricing-strategy" element={<PricingStrategy />} />
          <Route path="/roi-analysis" element={<RoiAnalysis />} />
          <Route path="/shopify-integration" element={<ShopifyIntegration />} />
        </Routes>
      </main>
    </div>
  )
}

// Home component
const Home: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Welcome to the Reverse Logistics POC</h2>
      <p className="mb-4">
        This proof of concept demonstrates various aspects of a reverse logistics platform.
        Use the navigation above to explore different sections of the platform.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {/* First column with Platform Architecture and Software Architecture stacked */}
        <div className="flex flex-col gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex flex-col h-48">
            <h3 className="font-bold text-blue-800">Platform Architecture</h3>
            <p className="text-sm mt-2">Detailed architecture of the agentic platform</p>
            <div className="mt-auto pt-4">
              <Link to="/platform-architecture" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                View Details
              </Link>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 flex flex-col h-48">
            <h3 className="font-bold text-indigo-800">Software Architecture</h3>
            <p className="text-sm mt-2">Technical architecture and implementation details</p>
            <div className="mt-auto pt-4">
              <Link to="/software-architecture" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                View Details
              </Link>
            </div>
          </div>
        </div>
        
        {/* Second column */}
        <div className="flex flex-col gap-4">
          <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 flex flex-col h-48">
            <h3 className="font-bold text-teal-800">Fabric System Architecture</h3>
            <p className="text-sm mt-2">Agentic system architecture for commerce operations</p>
            <div className="mt-auto pt-4">
              <Link to="/fabric-system-architecture" className="inline-block px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
                View Details
              </Link>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex flex-col h-48">
            <h3 className="font-bold text-amber-800">Supply Chain Flow</h3>
            <p className="text-sm mt-2">End-to-end supply chain and reverse logistics flow diagram</p>
            <div className="mt-auto pt-4">
              <Link to="/supply-chain-flow" className="inline-block px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700">
                View Details
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex flex-col h-48">
          <h3 className="font-bold text-green-800">Operator Experience</h3>
          <p className="text-sm mt-2">How operators interact with the platform</p>
          <div className="mt-auto pt-4">
            <Link to="/operator-experience" className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              View Details
            </Link>
          </div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 flex flex-col h-48">
          <h3 className="font-bold text-purple-800">ROI Analysis</h3>
          <p className="text-sm mt-2">Financial impact and return on investment</p>
          <div className="mt-auto pt-4">
            <Link to="/roi-analysis" className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              View Details
            </Link>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 flex flex-col h-48">
          <h3 className="font-bold text-yellow-800">Pricing Strategy</h3>
          <p className="text-sm mt-2">Pricing tiers and token-based model</p>
          <div className="mt-auto pt-4">
            <Link to="/pricing-strategy" className="inline-block px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App