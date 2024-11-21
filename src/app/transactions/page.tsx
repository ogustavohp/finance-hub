import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { db } from '@/lib/prisma'
import { ArrowDownUp } from 'lucide-react'
import { transactionsColumns } from '@/app/transactions/columns'

export default async function TransactionsPage() {
  const transactions = await db.transaction.findMany({})
  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>

        <Button className="rounded-full font-bold">
          Adicionar transações
          <ArrowDownUp />
        </Button>
      </div>

      <DataTable columns={transactionsColumns} data={transactions} />
    </div>
  )
}
