import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const FabricSystemArchitecture = () => {
  // Initialize Mermaid when the component is mounted
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
    });
    
    // Re-render mermaid diagrams
    mermaid.init(undefined, document.querySelectorAll('.mermaid'));
  }, []);

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-bold mb-6 text-blue-800">Fabric Commerce Operating System: Agentic System Architecture</h2>

      {/* Render markdown content in React-friendly way */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-bold mb-4 text-blue-700">1. Architecture Overview</h3>
        <p className="mb-4">
          The Fabric Commerce Operating System is built on a modular, event-driven architecture leveraging 
          specialized AI agents to create an intelligent digital twin of the entire physical supply chain. 
          The system architecture follows a layered approach with clear separation of concerns while enabling 
          seamless data flow and decision-making across all components.
        </p>

        {/* Architecture Overview Diagram */}
        <div className="border border-blue-200 rounded-lg p-4 bg-blue-50 mb-6 overflow-x-auto">
          <h4 className="font-medium text-blue-700 mb-3 text-center">System Architecture Diagram</h4>
          <div className="mermaid">
{`graph TD
    subgraph IL["Integration Layer"]
        UC["Universal Connector Framework"]
        DS1["Data Synchronization Service"]
        EG["Event Gateway"]
        AD["Adapter Registry"]
    end

    subgraph CL["Core Platform Layer"]
        SCG["Supply Chain Graph"]
        AM["Agent Management System"]
        OM["Orchestration Manager"]
        RM["Rules Engine"]
        WF["Workflow Service"]
    end

    subgraph AL["Agent Layer"]
        IA["Ingestion Agents"]
        NA["Node-specific Agents"]
        OA["Orchestration Agents"]
        AA["Analytics Agents"]
        CA["Communication Agents"]
    end

    subgraph DL["Data Layer"]
        DG["Graph Database"]
        TS["Time-Series Database"]
        DL1["Document Lake"]
        VS["Vector Store"]
        CR["Configuration Registry"]
    end

    subgraph EL["Experience Layer"]
        WP["Web Portal"]
        MP["Mobile Platform"]
        API["API Gateway"]
        NF["Notification Service"]
        DS2["Dashboard Service"]
    end

    IL --> CL
    CL --> AL
    AL --> DL
    CL --> DL
    CL --> EL
    AL --> EL

    style IL fill:#d0e8f2,stroke:#0077b6
    style CL fill:#ffe8d6,stroke:#cb997e
    style AL fill:#d8f3dc,stroke:#2d6a4f
    style DL fill:#f8edeb,stroke:#9d8189
    style EL fill:#e9ecef,stroke:#495057`}
          </div>
        </div>

        <p className="mb-4">
          This layered architecture enables seamless integration with external systems while maintaining 
          a clean separation of concerns. The platform is designed for modularity, allowing components to be 
          extended or replaced as needed.
        </p>
      </div>

      {/* Layer Descriptions */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-bold mb-4 text-blue-700">2. Layer Descriptions</h3>
        
        <div className="mb-6">
          <h4 className="font-medium text-blue-700 mb-3">2.1 Integration Layer</h4>
          <p className="mb-3">
            The Integration Layer creates a universal interface between the platform and the diverse ecosystem 
            of supply chain participants, from manufacturers to return centers.
          </p>
          
          <div className="border border-blue-200 rounded-lg p-4 bg-blue-50 mb-4 overflow-x-auto">
            <div className="mermaid">
{`classDiagram
    class UniversalConnectorFramework {
        +registerConnector(type, config)
        +establishConnection(nodeId)
        +monitorConnectionHealth()
        +transformData(format, data)
    }
    class DataSynchronizationService {
        +scheduleSynchronization(source, target)
        +performDataReconciliation()
        +handleConflictResolution()
        +trackSyncHistory()
    }
    class EventGateway {
        +publishEvent(topic, payload)
        +subscribeToEvent(topic, callback)
        +filterEvents(criteria)
        +routeEvent(destination)
    }
    class AdapterRegistry {
        +registerAdapter(system, version)
        +discoverAdapter(system)
        +versionAdapters()
        +validateAdapter(adapter)
    }

    UniversalConnectorFramework -- DataSynchronizationService
    DataSynchronizationService -- EventGateway
    EventGateway -- AdapterRegistry`}
            </div>
          </div>
          
          <h5 className="font-medium mb-2">Key Components:</h5>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Universal Connector Framework:</strong> Standardized interface for connecting to any supply chain node regardless of technology stack or communication protocol (EDI, APIs, file transfers, etc.)</li>
            <li><strong>Data Synchronization Service:</strong> Manages bidirectional data flow between Fabric and external systems with conflict resolution and versioning</li>
            <li><strong>Event Gateway:</strong> Handles real-time events from across the supply chain, routing them to appropriate platform components</li>
            <li><strong>Adapter Registry:</strong> Maintains a versioned catalog of all system integrations with configuration templates for common supply chain platforms</li>
          </ul>
        </div>

        {/* Add more sections for other layers as needed */}
      </div>

      {/* Agent Architecture Design */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-bold mb-4 text-green-700">3. Agent Architecture Design</h3>
        <p className="mb-4">
          The agent architecture is a crucial element of the Fabric platform, enabling the intelligence 
          and adaptability of the system.
        </p>

        <div className="border border-green-200 rounded-lg p-4 bg-green-50 mb-6 overflow-x-auto">
          <h4 className="font-medium text-green-700 mb-3 text-center">Agent Architecture Diagram</h4>
          <div className="mermaid">
{`graph TD
    subgraph AF["Agent Framework"]
        AC["Agent Core"]
        AS["Agent Specification"]
        AM["Agent Monitor"]
    end

    subgraph EE["Execution Engine"]
        LLM["LLM Integration"]
        TP["Task Planning"]
        TE["Task Execution"]
        TV["Tool Invocation"]
    end

    subgraph KB["Knowledge Base"]
        SC["Supply Chain Knowledge"]
        DK["Domain Knowledge"]
        PR["Pattern Repository"]
        IR["Interaction Records"]
    end

    subgraph LS["Learning System"]
        FM["Feedback Mechanism"]
        ER["Experience Repository"]
        PM["Performance Metrics"]
        AU["Automatic Updates"]
    end

    AF --> EE
    EE --> KB
    KB --> LS
    LS --> AF

    style AF fill:#e6f7ff,stroke:#1890ff
    style EE fill:#f6ffed,stroke:#52c41a
    style KB fill:#fff7e6,stroke:#fa8c16
    style LS fill:#f9f0ff,stroke:#722ed1`}
          </div>
        </div>

        <h4 className="font-medium text-green-700 mb-3">3.1 Agent Types and Specializations</h4>
        <p className="mb-3">Each agent type is designed with specific parameters and capabilities:</p>
        
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left">Agent Type</th>
                <th className="py-2 px-4 border-b text-left">Temperature</th>
                <th className="py-2 px-4 border-b text-left">p99</th>
                <th className="py-2 px-4 border-b text-left">Primary Function</th>
                <th className="py-2 px-4 border-b text-left">Example Specializations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Ingestion Agents</td>
                <td className="py-2 px-4 border-b">0.1</td>
                <td className="py-2 px-4 border-b">95%</td>
                <td className="py-2 px-4 border-b">Data transformation</td>
                <td className="py-2 px-4 border-b">EDI Parser, Document Extractor, Image Analyzer</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Inventory Agents</td>
                <td className="py-2 px-4 border-b">0.2</td>
                <td className="py-2 px-4 border-b">99.5%</td>
                <td className="py-2 px-4 border-b">Stock management</td>
                <td className="py-2 px-4 border-b">Stock Level Optimizer, Reorder Point Calculator</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Transportation Agents</td>
                <td className="py-2 px-4 border-b">0.2</td>
                <td className="py-2 px-4 border-b">98%</td>
                <td className="py-2 px-4 border-b">Logistics optimization</td>
                <td className="py-2 px-4 border-b">Route Planner, Carrier Selector, Delivery Estimator</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Warehouse Agents</td>
                <td className="py-2 px-4 border-b">0.2</td>
                <td className="py-2 px-4 border-b">99%</td>
                <td className="py-2 px-4 border-b">Facility operations</td>
                <td className="py-2 px-4 border-b">Pick Path Optimizer, Space Utilizer, Labor Allocator</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Returns Agents</td>
                <td className="py-2 px-4 border-b">0.3</td>
                <td className="py-2 px-4 border-b">97%</td>
                <td className="py-2 px-4 border-b">Reverse logistics</td>
                <td className="py-2 px-4 border-b">Return Classifier, Disposition Recommender</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Analytics Agents</td>
                <td className="py-2 px-4 border-b">0.4</td>
                <td className="py-2 px-4 border-b">95%</td>
                <td className="py-2 px-4 border-b">Insight generation</td>
                <td className="py-2 px-4 border-b">Trend Spotter, Anomaly Detector, Forecaster</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Orchestration Agents</td>
                <td className="py-2 px-4 border-b">0.1</td>
                <td className="py-2 px-4 border-b">99.9%</td>
                <td className="py-2 px-4 border-b">Cross-agent coordination</td>
                <td className="py-2 px-4 border-b">Workflow Manager, Conflict Resolver, Priority Setter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Future Expansion Areas */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-bold mb-4 text-indigo-700">4. Future Expansion Areas</h3>
        <p className="mb-4">
          The Fabric platform architecture is designed to expand into several key areas:
        </p>

        <div className="border border-indigo-200 rounded-lg p-4 bg-indigo-50 mb-6 overflow-x-auto">
          <h4 className="font-medium text-indigo-700 mb-3 text-center">Expansion Roadmap</h4>
          <div className="mermaid">
{`graph TD
    FP[Fabric Platform] --> ST[Sustainability Tracking]
    FP --> PO[Predictive Optimization]
    FP --> AO[Autonomous Operations]
    FP --> EE[Extended Ecosystem]
    
    ST --> CF[Carbon Footprint]
    ST --> WR[Waste Reduction]
    ST --> CE[Circular Economy]
    
    PO --> DF[Demand Forecasting]
    PO --> IP[Inventory Positioning]
    PO --> DP[Dynamic Pricing]
    
    AO --> SW[Self-healing Workflows]
    AO --> AN[Automated Negotiations]
    AO --> DR[Dynamic Network Reconfiguration]
    
    EE --> SN[Supplier Network]
    EE --> FS[Financial Services]
    EE --> CM[Compliance Management]`}
          </div>
        </div>

        <p className="mb-4">
          This comprehensive architecture provides the foundation for implementing the Fabric Commerce 
          Operating System with agentic capabilities that transform supply chain operations.
        </p>
      </div>
    </div>
  );
};

export default FabricSystemArchitecture;