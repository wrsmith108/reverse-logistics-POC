import React from 'react';

const SoftwareArchitecture = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-bold mb-6 text-blue-800">AI Commerce Agentic Platform: Software Architecture</h2>

      {/* System Architecture Overview */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-bold mb-4 text-blue-700">1. System Architecture Overview</h3>
        <p className="mb-4">
          The AI Commerce Agentic Platform uses a layered microservices architecture with event-driven communication
          between specialized AI agents. Each agent handles a specific aspect of the reverse logistics process,
          with an orchestrator coordinating workflows.
        </p>
        
        {/* Architecture Diagram */}
        <div className="border border-blue-200 rounded-lg p-4 bg-blue-50 mb-6">
          <h4 className="font-medium text-blue-700 mb-3 text-center">System Architecture Diagram</h4>
          <div className="relative overflow-hidden" style={{ height: "350px" }}>
            {/* Interface Layer */}
            <div className="absolute top-0 left-0 right-0 bg-gray-100 border border-gray-300 rounded-lg p-2" style={{ height: "70px" }}>
              <div className="text-xs font-bold text-center text-gray-700 mb-1">INTERFACE LAYER</div>
              <div className="flex justify-between px-4">
                <div className="bg-blue-200 px-2 py-1 rounded text-xs font-medium text-center">Operator Dashboard</div>
                <div className="bg-blue-200 px-2 py-1 rounded text-xs font-medium text-center">Analytics & Reporting</div>
                <div className="bg-blue-200 px-2 py-1 rounded text-xs font-medium text-center">Admin & Configuration</div>
                <div className="bg-blue-200 px-2 py-1 rounded text-xs font-medium text-center">API Gateway</div>
              </div>
            </div>
            
            {/* Agent Layer */}
            <div className="absolute top-[90px] left-0 right-0 bg-gray-100 border border-gray-300 rounded-lg p-2" style={{ height: "80px" }}>
              <div className="text-xs font-bold text-center text-gray-700 mb-1">AGENT LAYER</div>
              <div className="flex justify-between px-4 mb-1">
                <div className="bg-green-200 px-2 py-1 rounded text-xs font-medium text-center">Return Analyzer</div>
                <div className="bg-green-200 px-2 py-1 rounded text-xs font-medium text-center">Route Optimizer</div>
                <div className="bg-green-200 px-2 py-1 rounded text-xs font-medium text-center">Disposition Agent</div>
                <div className="bg-green-200 px-2 py-1 rounded text-xs font-medium text-center">Exchange Optimizer</div>
              </div>
              <div className="flex justify-center">
                <div className="bg-green-300 px-4 py-1 rounded text-xs font-medium text-center">Agent Orchestrator</div>
              </div>
            </div>
            
            {/* Data Layer */}
            <div className="absolute top-[190px] left-0 right-0 bg-gray-100 border border-gray-300 rounded-lg p-2" style={{ height: "70px" }}>
              <div className="text-xs font-bold text-center text-gray-700 mb-1">DATA LAYER</div>
              <div className="flex justify-between px-4">
                <div className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium text-center">Shopify ETL Pipeline</div>
                <div className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium text-center">Document DB</div>
                <div className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium text-center">Time-Series DB</div>
                <div className="bg-yellow-200 px-2 py-1 rounded text-xs font-medium text-center">Vector DB</div>
              </div>
            </div>
            
            {/* Infrastructure Layer */}
            <div className="absolute top-[280px] left-0 right-0 bg-gray-100 border border-gray-300 rounded-lg p-2" style={{ height: "70px" }}>
              <div className="text-xs font-bold text-center text-gray-700 mb-1">INFRASTRUCTURE LAYER</div>
              <div className="flex justify-between px-4">
                <div className="bg-purple-200 px-2 py-1 rounded text-xs font-medium text-center">Cloud Infrastructure</div>
                <div className="bg-purple-200 px-2 py-1 rounded text-xs font-medium text-center">Authentication & Security</div>
                <div className="bg-purple-200 px-2 py-1 rounded text-xs font-medium text-center">Monitoring & Logging</div>
              </div>
            </div>
            
            {/* Connection Lines */}
            <div className="absolute top-[70px] left-1/2 w-0.5 h-[20px] bg-gray-400"></div>
            <div className="absolute top-[170px] left-1/2 w-0.5 h-[20px] bg-gray-400"></div>
            <div className="absolute top-[260px] left-1/2 w-0.5 h-[20px] bg-gray-400"></div>
          </div>
          <div className="text-xs text-gray-500 text-center mt-2">
            Layered microservices architecture with event-driven communication between specialized AI agents
          </div>
        </div>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
          <h4 className="font-medium mb-2 text-blue-700">1.1 Layer Breakdown</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="bg-white p-3 rounded-lg border border-blue-100">
              <h5 className="font-medium text-blue-700">Interface Layer</h5>
              <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                <li>Operator Dashboard: Supply chain operator's main interface</li>
                <li>Analytics & Reporting: Performance metrics and business insights</li>
                <li>Admin & Configuration: Platform management and settings</li>
                <li>API Gateway: External integration point and security boundary</li>
              </ul>
            </div>
            
            <div className="bg-white p-3 rounded-lg border border-blue-100">
              <h5 className="font-medium text-blue-700">Agent Layer</h5>
              <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                <li>Return Analyzer: Assesses return reason and product condition</li>
                <li>Route Optimizer: Determines optimal return path and facility</li>
                <li>Disposition Agent: Recommends optimal recovery actions</li>
                <li>Exchange Optimizer: Maximizes revenue through exchange suggestions</li>
                <li>Agent Orchestrator: Coordinates workflows and manages task allocation</li>
              </ul>
            </div>
            
            <div className="bg-white p-3 rounded-lg border border-blue-100">
              <h5 className="font-medium text-blue-700">Data Layer</h5>
              <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                <li>Shopify ETL Pipeline: Data extraction, transformation, and loading</li>
                <li>Document DB: Stores structured data (orders, returns, products)</li>
                <li>Time-Series DB: Stores metrics and performance data</li>
                <li>Vector DB: Manages embeddings for semantic search and similarity</li>
              </ul>
            </div>
            
            <div className="bg-white p-3 rounded-lg border border-blue-100">
              <h5 className="font-medium text-blue-700">Infrastructure Layer</h5>
              <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                <li>Cloud Infrastructure: AWS-based microservices platform</li>
                <li>Authentication & Security: Identity, encryption, and access control</li>
                <li>Monitoring & Logging: Observability and diagnostics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Architecture */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-bold mb-4 text-green-700">2. Agent Architecture</h3>
        <p className="mb-4">
          Each AI agent follows a consistent internal architecture with specialized components
          for decision-making, domain knowledge, and communication.
        </p>
        
        {/* Agent Architecture Diagram - Improved version */}
        <div className="border border-green-200 rounded-lg p-4 bg-green-50 mb-6">
          <h4 className="font-medium text-green-700 mb-3 text-center">Agent Internal Architecture</h4>
          
          <div className="flex flex-col items-center">
            {/* AI Agent Core - Center top */}
            <div className="w-64 bg-green-200 border border-green-300 rounded-lg p-3 text-center mb-8 relative">
              <div className="font-medium mb-1">AI Agent Core</div>
              <div className="text-xs mb-1">LLM Controller</div>
              <div className="text-xs mb-1">Prompt Engineering</div>
              <div className="text-xs mb-1">State Manager</div>
              <div className="text-xs">Fallback Handler</div>
              
              {/* Connector lines down from Core */}
              <div className="absolute -bottom-8 left-1/4 w-0.5 h-8 bg-gray-400"></div>
              <div className="absolute -bottom-8 right-1/4 w-0.5 h-8 bg-gray-400"></div>
            </div>
            
            {/* Middle Layer - 2 boxes side by side */}
            <div className="flex w-full justify-center gap-16 mb-8">
              <div className="w-48 bg-green-100 border border-green-300 rounded-lg p-2 text-center relative">
                <div className="font-medium text-xs mb-1">Decision Model</div>
                <div className="text-xs">ML Classifiers</div>
                <div className="text-xs">Decision Trees</div>
                
                {/* Connector line down */}
                <div className="absolute -bottom-8 left-1/2 -ml-0.5 w-0.5 h-8 bg-gray-400"></div>
              </div>
              
              <div className="w-48 bg-green-100 border border-green-300 rounded-lg p-2 text-center relative">
                <div className="font-medium text-xs mb-1">Domain Knowledge</div>
                <div className="text-xs">Return Policies</div>
                <div className="text-xs">Product Data</div>
                
                {/* Connector line down */}
                <div className="absolute -bottom-8 left-1/2 -ml-0.5 w-0.5 h-8 bg-gray-400"></div>
              </div>
            </div>
            
            {/* Bottom Layer - 2 boxes side by side */}
            <div className="flex w-full justify-center gap-16">
              <div className="w-48 bg-green-100 border border-green-300 rounded-lg p-2 text-center">
                <div className="font-medium text-xs mb-1">API Connectors</div>
                <div className="text-xs">Shopify Integration</div>
                <div className="text-xs">Event Publishers</div>
              </div>
              
              <div className="w-48 bg-green-100 border border-green-300 rounded-lg p-2 text-center">
                <div className="font-medium text-xs mb-1">Agent Communication</div>
                <div className="text-xs">Event System</div>
                <div className="text-xs">Task Queues</div>
              </div>
            </div>
          </div>
          
          <div className="text-xs text-gray-500 text-center mt-6">
            Common architecture for all agents with core LLM capabilities extended by specialized modules
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-700 mb-2">2.1 AI Agent Core</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>LLM Controller: Manages token usage, batching, and API calls</li>
              <li>Prompt Engineering: Templates and dynamic context generation</li>
              <li>State Manager: Maintains agent memory and processing state</li>
              <li>Fallback Handler: Error recovery and graceful degradation</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-700 mb-2">2.2 Decision Making</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Decision Models: ML classification models and algorithms</li>
              <li>Domain Knowledge: Business rules and logistics expertise</li>
              <li>Confidence Scoring: Reliability assessment of recommendations</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-700 mb-2">2.3 Communication</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Event System: Async message passing between agents</li>
              <li>Task Queues: Prioritized processing with rate limiting</li>
              <li>Service Discovery: Dynamic agent registration and discovery</li>
              <li>Orchestration API: Coordination interface for complex workflows</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Shopify Plus Integration */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-bold mb-4 text-purple-700">3. Shopify Plus Integration</h3>
        <p className="mb-4">
          The integration is designed for reliability and scalability, with multiple components 
          working together to ensure consistent data exchange.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h4 className="font-medium text-purple-700 mb-2">3.1 Integration Components</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>API Gateway: Manages authentication, rate limiting, and routing</li>
              <li>Integration Services: Transform and normalize data</li>
              <li>Webhook Handlers: Process real-time events from Shopify</li>
              <li>Data Synchronization: Maintain consistent data across systems</li>
              <li>Admin Extensions: Custom UI components within Shopify admin</li>
              <li>SFN Integration: Connect with Shopify Fulfillment Network</li>
              <li>Data Consistency Layer: Event-sourced architecture with CDC</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h4 className="font-medium text-purple-700 mb-2">3.2 Integration Patterns</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>OAuth Flow: Secure merchant authorization</li>
              <li>Webhook Processing: Real-time event handling with idempotence</li>
              <li>GraphQL Queries: Efficient data retrieval with pagination</li>
              <li>Embedded App Framework: Seamless UI integration</li>
              <li>Rate Limiting: Smart retry and backoff strategies</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Data Flow Architecture */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-bold mb-4 text-yellow-700">4. Data Flow Architecture</h3>
        <p className="mb-4">
          The platform uses sophisticated data patterns for processing return data from multiple sources.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-yellow-700 mb-2">4.1 Data Flow Patterns</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Real-time Streaming: Immediate processing of return events</li>
              <li>Batch Processing: Historical analysis and model training</li>
              <li>Event Sourcing: Immutable log of all state changes</li>
              <li>CQRS: Separate read and write operations</li>
              <li>Data Privacy Zones: Segmentation of PII and sensitive data</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-yellow-700 mb-2">4.2 Data Processing Components</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>ETL Pipelines: Extract, transform, load data from Shopify and 3PLs</li>
              <li>Data Lake: Raw storage of all ingested data</li>
              <li>Data Warehouse: Structured and optimized for analytics</li>
              <li>Agent Data Store: Specialized storage for agent operations</li>
              <li>Analytics Engine: Business intelligence and reporting</li>
              <li>Decision Models: ML models for agent recommendations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technical Risks & Mitigations */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-bold mb-4 text-red-700">5. Technical Risks & Mitigations</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 mb-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left">Risk Area</th>
                <th className="py-2 px-4 border-b text-left">Challenge</th>
                <th className="py-2 px-4 border-b text-left">Mitigation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b font-medium">AI/LLM Integration</td>
                <td className="py-2 px-4 border-b">Token costs, latency, reliability</td>
                <td className="py-2 px-4 border-b">Caching, batching, prompt optimization, fallback mechanisms</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-medium">Shopify Integration</td>
                <td className="py-2 px-4 border-b">API rate limits, webhook reliability</td>
                <td className="py-2 px-4 border-b">Rate limiting, retry mechanisms, idempotent processing</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-medium">Scalability</td>
                <td className="py-2 px-4 border-b">Peak loads during high return periods</td>
                <td className="py-2 px-4 border-b">Horizontal scaling, queue-based processing, elastic infrastructure</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-medium">Data Security</td>
                <td className="py-2 px-4 border-b">PII protection, cross-merchant isolation</td>
                <td className="py-2 px-4 border-b">Encryption, data partitioning, IAM, GDPR compliance</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-medium">Agent Orchestration</td>
                <td className="py-2 px-4 border-b">Complex workflows, race conditions</td>
                <td className="py-2 px-4 border-b">State machine design, sagas, compensation patterns</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-medium">Third-Party Integrations</td>
                <td className="py-2 px-4 border-b">3PL, carrier API reliability</td>
                <td className="py-2 px-4 border-b">Adapter pattern, circuit breakers, fallback processes</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-medium">Model Accuracy</td>
                <td className="py-2 px-4 border-b">Recommendation quality, confidence</td>
                <td className="py-2 px-4 border-b">Human-in-the-loop validation, continuous learning</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Implementation Approach */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-bold mb-4 text-indigo-700">6. Implementation Approach</h3>
        <p className="mb-4">
          A phased implementation is recommended to manage complexity and deliver value incrementally.
        </p>

        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 mb-6">
          <h4 className="font-medium text-indigo-700 mb-3">6.1 Phased Implementation</h4>
          
          <div className="space-y-4">
            <div>
              <h5 className="font-medium">1. Foundation (6-8 weeks)</h5>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>Core infrastructure setup</li>
                <li>Basic Shopify integration</li>
                <li>MVP operator interface</li>
                <li>Initial data pipelines</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium">2. Agent Layer (8-10 weeks)</h5>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>LLM integration & token management</li>
                <li>Agent framework development</li>
                <li>Basic agent implementation</li>
                <li>Agent orchestration service</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium">3. Integration (6-8 weeks)</h5>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>Advanced Shopify Plus integration</li>
                <li>3PL & carrier API connections</li>
                <li>Webhook processing system</li>
                <li>Event-driven architecture</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium">4. Refinement (8-10 weeks)</h5>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>Advanced analytics & reporting</li>
                <li>Agent performance optimization</li>
                <li>UI/UX enhancements</li>
                <li>Scaling & performance tuning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-bold mb-4 text-teal-700">7. Technology Stack</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-teal-50 p-3 rounded-lg border border-teal-200">
            <h4 className="font-medium text-teal-700 mb-2">7.1 Backend Services</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Node.js / TypeScript</li>
              <li>NestJS framework</li>
              <li>gRPC for inter-service communication</li>
              <li>Redis for caching and pub/sub</li>
              <li>RabbitMQ for message queuing</li>
              <li>Kubernetes for orchestration</li>
            </ul>
          </div>
          
          <div className="bg-teal-50 p-3 rounded-lg border border-teal-200">
            <h4 className="font-medium text-teal-700 mb-2">7.2 Frontend</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>React / TypeScript</li>
              <li>Next.js for SSR</li>
              <li>Tailwind CSS for styling</li>
              <li>React Query for data fetching</li>
              <li>D3.js for data visualization</li>
              <li>Shopify Polaris design system</li>
            </ul>
          </div>
          
          <div className="bg-teal-50 p-3 rounded-lg border border-teal-200">
            <h4 className="font-medium text-teal-700 mb-2">7.3 Data Storage</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>MongoDB for document storage</li>
              <li>PostgreSQL for relational data</li>
              <li>InfluxDB for time-series metrics</li>
              <li>Pinecone for vector embeddings</li>
              <li>Redis for caching</li>
              <li>S3 for file storage</li>
            </ul>
          </div>
          
          <div className="bg-teal-50 p-3 rounded-lg border border-teal-200">
            <h4 className="font-medium text-teal-700 mb-2">7.4 AI / ML</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Claude API (Anthropic)</li>
              <li>TensorFlow for custom ML models</li>
              <li>LangChain for agent frameworks</li>
              <li>Hugging Face for tokenization</li>
              <li>MLflow for model tracking</li>
              <li>Custom token management system</li>
            </ul>
          </div>
          
          <div className="bg-teal-50 p-3 rounded-lg border border-teal-200">
            <h4 className="font-medium text-teal-700 mb-2">7.5 DevOps & Monitoring</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>AWS Cloud infrastructure</li>
              <li>Terraform for IaC</li>
              <li>GitHub Actions for CI/CD</li>
              <li>Prometheus & Grafana</li>
              <li>ELK Stack for logging</li>
              <li>Sentry for error tracking</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Token Management Architecture */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-bold mb-4 text-blue-700">8. Token Management Architecture</h3>
        <p className="mb-4">
          Special attention is given to token management for the hybrid SaaS + token pricing model.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-700 mb-2">8.1 Token Management Components</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Token Budget Service: Allocates token budgets across agents</li>
              <li>Token Prompt Optimizer: Minimizes token usage in prompts</li>
              <li>Token Consumption Monitor: Tracks real-time usage by merchant</li>
              <li>Token Cost Analyzer: Identifies optimization opportunities</li>
              <li>Token Metering: Accurate counting of consumed tokens</li>
              <li>Token Quotas: Enforces merchant-specific limits</li>
              <li>Token Billing: Generates usage-based invoices</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-700 mb-2">8.2 Token Optimization Techniques</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Caching common responses</li>
              <li>Compression of context windows</li>
              <li>Efficient prompt engineering</li>
              <li>Batch processing of similar requests</li>
              <li>Staged agent invocation</li>
              <li>Vectorization of frequently accessed data</li>
              <li>Smart fallback to rule-based systems</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Team Structure */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-bold mb-4 text-purple-700">9. Team Structure</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h4 className="font-medium text-purple-700 mb-2">9.1 Core Implementation Team</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Engineering Lead</li>
              <li>Product Manager</li>
              <li>UX Designer</li>
              <li>AI/ML Specialists (2)</li>
              <li>Backend Engineers (3)</li>
              <li>Frontend Engineers (2)</li>
              <li>Data Engineers (2)</li>
              <li>DevOps Engineer</li>
              <li>QA Engineer</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h4 className="font-medium text-purple-700 mb-2">9.2 Organization</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Total team size: 13 engineers + PM and designer</li>
              <li>Cross-functional pods aligned to key platform capabilities</li>
              <li>DevOps and QA embedded within development teams</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Development Methodology */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-4 text-green-700">10. Development Methodology</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-700 mb-2">10.1 Approach</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Agile methodology with 2-week sprints</li>
              <li>Domain-Driven Design (DDD) for business logic</li>
              <li>Event Sourcing for state management</li>
              <li>CQRS for data access patterns</li>
              <li>Microservices with clear bounded contexts</li>
              <li>Test-Driven Development with high test coverage</li>
              <li>Feature flags for controlled rollout</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-700 mb-2">10.2 Key Metrics</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Agent recommendation accuracy</li>
              <li>Token usage efficiency</li>
              <li>Latency and throughput</li>
              <li>Cost per return processed</li>
              <li>Value recovery improvement</li>
              <li>Customer satisfaction with returns process</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareArchitecture;