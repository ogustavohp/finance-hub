'use client'
import { ColumnDef } from '@tanstack/react-table'
import { TransactionTypeBadge } from './type-badge'
import { Button } from '@/components/ui/button'
import { PencilIcon, TrashIcon } from 'lucide-react'
import {
  TRANSACTION_CATEGORY_LABELS,
  TRANSACTION_PAYMENT_METHOD_LABELS,
} from '@/constants/transaction'
import { SerializedTransaction } from './page'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const transactionsColumns: ColumnDef<SerializedTransaction>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'type',
    header: 'Tipo',
    cell: ({ row }) => <TransactionTypeBadge transaction={row.original.type} />,
  },
  {
    accessorKey: 'category',
    header: 'Categoria',
    cell: ({ row }) => TRANSACTION_CATEGORY_LABELS[row.original.category],
  },
  {
    accessorKey: 'payment_method',
    header: 'Método de Pagamento',
    cell: ({ row }) =>
      TRANSACTION_PAYMENT_METHOD_LABELS[row.original.payment_method],
  },
  {
    accessorKey: 'date',
    header: 'Data',
    cell: ({ row }) =>
      new Date(row.original.date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
  },
  {
    accessorKey: 'amount',
    header: 'Valor',
    cell: ({ row }) =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(row.original.amount),
  },
  {
    accessorKey: 'actions',
    header: ' ',
    cell: () => {
      return (
        <div>
          <Button
            variant={'ghost'}
            size={'icon'}
            className="text-muted-foreground"
          >
            <PencilIcon />
          </Button>
          <Button
            variant={'ghost'}
            size={'icon'}
            className="text-muted-foreground"
          >
            <TrashIcon />
          </Button>
        </div>
      )
    },
  },
]
