import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const SupplyChainFlow = () => {
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
      <h2 className="text-xl font-bold mb-6 text-blue-800">Supply Chain and Reverse Logistics Flow</h2>

      {/* Main content */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-bold mb-4 text-blue-700">1. End-to-End Supply Chain Flow</h3>
        <p className="mb-4">
          This diagram illustrates the complete supply chain and reverse logistics flow, from planning and 
          procurement through multi-channel fulfillment to returns processing.
        </p>

        {/* Supply Chain Flow Diagram */}
        <div className="border border-blue-200 rounded-lg p-4 bg-blue-50 mb-6 overflow-x-auto">
          <h4 className="font-medium text-blue-700 mb-3 text-center">Supply Chain and Reverse Logistics Flow Diagram</h4>
          <div className="mermaid">
{`graph TD
    customer((Customer))
    partner((Wholesale Partner))
    
    subgraph "Planning & Procurement"
        forecast["Demand Forecasting (Planning System)"] --> orderPO["Create Purchase Order (ERP)"]
    end
    
    orderPO --> factory["Factory Production & QA Checks"]
    factory --> bookShip["Book Freight & Prepare Export Docs (TMS/Freight Forwarder)"]
    bookShip --> exportCustoms["Export Customs Clearance"]
    exportCustoms --> depart["Depart Origin Port (International Transit)"]
    depart --> arrivePort["Arrive at Destination Port"]
    arrivePort --> importCustoms["Import Customs Clearance (Broker)"]
    importCustoms --> dcTransport["Transport to DC (TMS/Carrier)"]
    
    subgraph "Distribution Center Inbound"
        dcTransport --> receiveDC["Receive Shipment @ DC (Unload, Verify, QC inspection)"]
        receiveDC --> putaway["Putaway Stock in Warehouse (WMS updates inventory)"]
    end
    
    subgraph "E-commerce Order Fulfillment"
        ecomOrder["Customer Places Online Order (Website → OMS)"] --> orderCheck{"Order Cancelled?"}
        orderCheck -- No --> pickPackEcom["Pick & Pack Order (WMS) Print Shipping Label (TMS)"]
        orderCheck -- Yes --> cancelOrder["Cancel Order (OMS) Refund customer & Release stock"]
        pickPackEcom --> shipEcom["Ship to Customer (Carrier) Provide Tracking (OMS/TMS)"]
    end
    
    putaway --> ecomOrder
    shipEcom --> customer
    
    subgraph "Retail Store Replenishment"
        storeRepl["Store Replenishment Trigger (ERP/MRP)"] --> storePick["Pick & Pack for Store (WMS)"]
        storePick --> shipStore["Ship Transfer to Store (TMS)"]
        shipStore --> storeRecv["Store Receives Stock Check in & Update POS Inventory"]
    end
    
    putaway --> storeRepl
    
    subgraph "Wholesale Fulfillment"
        wholesaleOrder["Wholesale Partner Order (ERP)"] --> wholesalePick["Pick & Pack Wholesale Batch (WMS) Palletize, ASN & Invoice (ERP)"]
        wholesalePick --> wholesaleShip["Ship to Wholesale Partner (Freight)"]
    end
    
    putaway --> wholesaleOrder
    wholesaleShip --> partner
    
    subgraph "Reverse Logistics Returns & RMA"
        returnInit["Initiate Return (Online RMA Portal)"] --> returnShip["Ship Returned Product (Carrier)"]
        returnShip --> returnRecv["Receive Return at DC/Centre Inspect & Grade Item (Manual QC)"]
        returnRecv --> disposition{"Item Resellable?"}
        disposition -- Yes --> restock["Restock into Inventory (WMS/OMS updates stock)"]
        disposition -- No --> scrapCheck{"Refurbish vs. Scrap?"}
        scrapCheck -- Refurbish --> refurbish["Send to Refurbishment / Secondary Sales"]
        scrapCheck -- Scrap --> discard["Recycle/Dispose Product"]
        
        restock --> refund["Issue Refund to Customer (OMS/ERP)"]
        refurbish --> refund
        discard --> refund
        storeReturn["Return at Retail Store"] --> storeInspect["Inspect Item (Store Associate)"]
        storeInspect --> storeDecision{"Resell in Store?"}
        storeDecision -- Yes --> restockStore["Add Back to Store Stock (POS Update)"]
        storeDecision -- No --> sendDC["Send to Central Returns Processing (DC)"]
        sendDC --> returnRecv
        storeReturn -.-> refundStore["Process Refund to Customer (Store/POS)"]
        wholesaleReturn["Wholesale Return Request (RMA)"] --> returnRecv
        wholesaleReturn -.-> creditNote["Issue Credit to Wholesale Partner (ERP)"]
    end
    
    customer -.-> returnInit
    customer -.-> storeReturn
    partner -.-> wholesaleReturn`}
          </div>
        </div>
      </div>

      {/* Key Process Areas */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-bold mb-4 text-blue-700">2. Key Process Areas</h3>
        
        <div className="mb-6">
          <h4 className="font-medium text-blue-700 mb-3">2.1 Planning & Procurement</h4>
          <p className="mb-4">
            The supply chain begins with forecasting demand and creating purchase orders, ensuring 
            the right products are ordered in the right quantities.
          </p>
        </div>
        
        <div className="mb-6">
          <h4 className="font-medium text-blue-700 mb-3">2.2 International Logistics</h4>
          <p className="mb-4">
            This section covers the movement of goods from factories to destination markets, 
            including export/import processes and customs clearance.
          </p>
        </div>
        
        <div className="mb-6">
          <h4 className="font-medium text-blue-700 mb-3">2.3 Distribution Center Operations</h4>
          <p className="mb-4">
            The central hub for receiving, inspecting, and storing inventory before it's 
            distributed through various channels.
          </p>
        </div>
        
        <div className="mb-6">
          <h4 className="font-medium text-blue-700 mb-3">2.4 Multi-Channel Fulfillment</h4>
          <p className="mb-4">
            Products flow through three primary channels:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>E-commerce direct-to-consumer orders</li>
            <li>Retail store replenishment</li>
            <li>Wholesale partner orders</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="font-medium text-blue-700 mb-3">2.5 Reverse Logistics</h4>
          <p className="mb-4">
            The comprehensive returns processing system handles products coming back through various channels:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Direct returns from customers (via mail)</li>
            <li>In-store returns</li>
            <li>Wholesale partner returns</li>
          </ul>
        </div>
      </div>

      {/* Systems Integration */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-bold mb-4 text-green-700">3. Systems Integration</h3>
        <p className="mb-4">
          The flow diagram illustrates how various systems integrate across the supply chain:
        </p>
        
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>ERP/MRP Systems</strong>: Manage planning, procurement, and wholesale orders</li>
          <li><strong>WMS (Warehouse Management System)</strong>: Controls inventory and fulfillment operations</li>
          <li><strong>TMS (Transportation Management System)</strong>: Handles shipping, routing, and tracking</li>
          <li><strong>OMS (Order Management System)</strong>: Processes customer orders and manages fulfillment</li>
          <li><strong>POS (Point of Sale)</strong>: Manages in-store inventory and transactions</li>
          <li><strong>RMA (Return Merchandise Authorization)</strong>: Facilitates returns processing</li>
        </ul>
      </div>

      {/* Reverse Logistics Focus */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-lg font-bold mb-4 text-indigo-700">4. Reverse Logistics Focus</h3>
        <p className="mb-4">
          The reverse logistics portion of the flow demonstrates multiple return pathways:
        </p>
        
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li><strong>Online Returns</strong>: Customer-initiated returns through an RMA portal</li>
          <li><strong>In-Store Returns</strong>: Returns processed at retail locations</li>
          <li><strong>Wholesale Returns</strong>: B2B returns from wholesale partners</li>
        </ol>
        
        <p className="mb-4">
          Each return type follows a structured process:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Return initiation and transportation</li>
          <li>Receiving and inspection</li>
          <li>Disposition decision (resell, refurbish, or discard)</li>
          <li>Financial reconciliation (refunds or credits)</li>
        </ul>
        
        <p className="mb-4">
          This integrated view of forward and reverse logistics demonstrates how a modern supply chain 
          operates as a complete cycle, with product returns forming a critical component of the overall 
          operational flow.
        </p>
      </div>
    </div>
  );
};

export default SupplyChainFlow;