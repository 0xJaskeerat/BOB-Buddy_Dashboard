import { User2Icon } from 'lucide-react';
import React from 'react';

// Define the Client interface
interface Client {
  id: number;
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

interface Props {
  params: {
    id: number;
  };
}

const Page: React.FC<Props> = ({ params: { id } }) => {
  const numericId = Number(id);

  const client = clients.find(client => client.id === numericId);

  return (
    <div className='mt-40 p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg'>
  {client ? (
    <div>
      <div className="flex flex-col items-center gap-2 mb-4">
        <User2Icon className='w-8 h-8 text-black' />
        <p className="text-lg font-semibold">Name: {client.name}</p>
      </div>
      <hr />
      <div className="m-2">
        <p className=' text-center text-base font-bold'> Customer information</p>
      </div>
      <p className="text-sm text-gray-600">Email: {client.email}</p>
      <p className="text-sm text-gray-600">Query: {client.query}</p>
      <p className="text-sm text-gray-600">Department: {client.dept}</p>
      <p className="text-sm text-gray-600">Age: {client.age}</p>
      <p className="text-sm text-gray-600">Time Slot: {client.time_slot}</p>
    </div>
  ) : (
    <p className="text-center text-gray-500">Client not found</p>
  )}
</div>

  );
}

export default Page;
