import React from 'react'
import Link from 'next/link';

interface Client {
  id: number; // Added ID for unique identification
  name: string;
  email: string;
  query: string;
  dept: string;
  age: number;
  time_slot: string;
}

// Sample client data
const clients: Client[] = [
  { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", query: "Request for account information", dept: "Customer Service", age: 29, time_slot: "10:00 - 11:00" },
  { id: 2, name: "Bob Smith", email: "bob.smith@example.com", query: "Technical support needed", dept: "IT", age: 34, time_slot: "11:00 - 12:00" },
  { id: 3, name: "Carol Davis", email: "carol.davis@example.com", query: "Product return request", dept: "Sales", age: 41, time_slot: "13:00 - 14:00" },
  { id: 4, name: "David Brown", email: "david.brown@example.com", query: "Billing issue", dept: "Finance", age: 52, time_slot: "14:00 - 15:00" },
  { id: 5, name: "Eva Green", email: "eva.green@example.com", query: "Feedback on recent purchase", dept: "Marketing", age: 26, time_slot: "15:00 - 16:00" },
  { id: 6, name: "Frank Harris", email: "frank.harris@example.com", query: "Request for feature enhancement", dept: "Product Management", age: 37, time_slot: "09:00 - 10:00" },
  { id: 7, name: "Grace Lee", email: "grace.lee@example.com", query: "Inquiry about partnership opportunities", dept: "Business Development", age: 45, time_slot: "16:00 - 17:00" },
  { id: 8, name: "Henry King", email: "henry.king@example.com", query: "Troubleshooting login issues", dept: "IT", age: 31, time_slot: "17:00 - 18:00" },
  { id: 9, name: "Ivy Martinez", email: "ivy.martinez@example.com", query: "Question about company policies", dept: "HR", age: 28, time_slot: "08:00 - 09:00" },
  { id: 10, name: "Jack Wilson", email: "jack.wilson@example.com", query: "Update on service status", dept: "Customer Service", age: 40, time_slot: "12:00 - 13:00" }
];


function QueryListSection() {
  return (
    <div className='p-4 md:p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {clients.map((client) => (
        <Link href={`/dashboard/Client/${client.id}`} key={client.id} className='bg-white shadow-lg rounded-lg p-5'>
            <h2 className='text-xl font-semibold'>{client.name}</h2>
            <p className='text-gray-600'>{client.email}</p>
            <p className='mt-2 text-gray-800'><strong>Time Slot:</strong> {client.time_slot}</p>
            <p className='mt-2 text-gray-700'><strong>Query:</strong> {client.query}</p>
        </Link>
      ))}
    </div>
  )
}

export default QueryListSection