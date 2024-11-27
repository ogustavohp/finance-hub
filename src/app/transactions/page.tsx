import { DataTable } from '@/components/ui/data-table'
import { db } from '@/lib/prisma'
import { transactionsColumns } from '@/app/transactions/columns'
import { AddTransactionButton } from '@/components/add-transaction-button'
import { Transaction } from '@prisma/client'

export type SerializedTransaction = Omit<Transaction, 'amount'> & {
  amount: number
}

export default async function TransactionsPage() {
  const transactions = await db.transaction.findMany({})

  const serializedTransactions = transactions.map((transaction) => ({
    ...transaction,
    amount: transaction.amount.toNumber(), // Converte Decimal para número
  }))

  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>

        <AddTransactionButton />
      </div>

      <DataTable columns={transactionsColumns} data={serializedTransactions} />
    </div>
  )
}
