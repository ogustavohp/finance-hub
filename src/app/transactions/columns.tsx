'use client'
import { Transaction } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'
import { TransactionTypeBadge } from './type-badge'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const transactionsColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'type',
    header: 'Tipo',
    cell: ({ row: { original } }) => (
      <TransactionTypeBadge transaction={original} />
    ),
  },
  {
    accessorKey: 'category',
    header: 'Categoria',
  },
  {
    accessorKey: 'payment_method',
    header: 'Método de Pagamento',
  },
  {
    accessorKey: 'date',
    header: 'Data',
  },
  {
    accessorKey: 'amount',
    header: 'Valor',
  },
  {
    accessorKey: 'actions',
    header: '',
  },
]
