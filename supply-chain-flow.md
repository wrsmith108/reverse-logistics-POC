# Supply Chain and Reverse Logistics Flow

## 1. End-to-End Supply Chain Flow

This diagram illustrates the complete supply chain and reverse logistics flow, from planning and procurement through multi-channel fulfillment to returns processing.

```mermaid
graph TD
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
    partner -.-> wholesaleReturn
```

## 2. Key Process Areas

### 2.1 Planning & Procurement
The supply chain begins with forecasting demand and creating purchase orders, ensuring the right products are ordered in the right quantities.

### 2.2 International Logistics
This section covers the movement of goods from factories to destination markets, including export/import processes and customs clearance.

### 2.3 Distribution Center Operations
The central hub for receiving, inspecting, and storing inventory before it's distributed through various channels.

### 2.4 Multi-Channel Fulfillment
Products flow through three primary channels:
- E-commerce direct-to-consumer orders
- Retail store replenishment
- Wholesale partner orders

### 2.5 Reverse Logistics
The comprehensive returns processing system handles products coming back through various channels:
- Direct returns from customers (via mail)
- In-store returns
- Wholesale partner returns

## 3. Systems Integration

The flow diagram illustrates how various systems integrate across the supply chain:

- **ERP/MRP Systems**: Manage planning, procurement, and wholesale orders
- **WMS (Warehouse Management System)**: Controls inventory and fulfillment operations
- **TMS (Transportation Management System)**: Handles shipping, routing, and tracking
- **OMS (Order Management System)**: Processes customer orders and manages fulfillment
- **POS (Point of Sale)**: Manages in-store inventory and transactions
- **RMA (Return Merchandise Authorization)**: Facilitates returns processing

## 4. Reverse Logistics Focus

The reverse logistics portion of the flow demonstrates multiple return pathways:

1. **Online Returns**: Customer-initiated returns through an RMA portal
2. **In-Store Returns**: Returns processed at retail locations
3. **Wholesale Returns**: B2B returns from wholesale partners

Each return type follows a structured process:
- Return initiation and transportation
- Receiving and inspection
- Disposition decision (resell, refurbish, or discard)
- Financial reconciliation (refunds or credits)

This integrated view of forward and reverse logistics demonstrates how a modern supply chain operates as a complete cycle, with product returns forming a critical component of the overall operational flow.