"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import TransactionTable from "../../components/transactions/transaction-table";
import TransactiontModal from "../../components/transactions/transaction-modal";
import { useEffect, useState } from "react";
import { Transaction } from "@/app/types";
import { getAllTransactions, updateTransaction } from "@/app/services/transaction.service";
import { toast } from "react-toastify";

const TransactionManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async () => {
    try {
      const data = await getAllTransactions();
      setTransactions(data);
    } catch (error) {
      console.error("Failed to fetch transactions", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  const handleViewDetails = (transaction: Transaction) => {
    setIsModalOpen(true);
    setSelectedTransaction(transaction);
  };

  const handleStatusChange = async (
    id: string,
    status: "paid" | "rejected",
  ) => {
    try {
      const formData = new FormData();
      formData.append("status", status);
      await updateTransaction(id, formData);

      toast.success("Transaction status updated");

      await fetchTransactions();
    } catch (error) {
      console.error("Failed to update transaction status", error);
      toast.error("Failed to update transaction status");
    } finally {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  type TTransactionTableProps = {
    onViewDetails: (transaction: Transaction) => void;
    transactions: Transaction[];
  };

  const TransactionTable = ({
    onViewDetails,
    transactions,
  }: TTransactionTableProps) => {
    const getStatusColor = (status: string) => {
      switch (status.toLowerCase()) {
        case "pending":
          return "bg-yellow-100 text-yellow-600 border-yellow-300";
        case "rejected":
          return "bg-red-100 text-red-600 border-red-300";
        case "paid":
          return "bg-green-100 text-green-600 border-green-300";
        }
      };

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Transaction Management</h1>
          <p className="opacity-50">
            Verify incoming payments and manage orders.
          </p>
        </div>
      </div>
      <TransactionTable
        transactions={transactions}
        onViewDetails={handleViewDetails}
      />
      <TransactiontModal
        transaction={selectedTransaction}
        onStatusChange={handleStatusChange}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
}
export default TransactionManagement;