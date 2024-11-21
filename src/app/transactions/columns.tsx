'use client'
import { Transaction } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'
import { TransactionTypeBadge } from './type-badge'
import { Button } from '@/components/ui/button'
import { PencilIcon, TrashIcon } from 'lucide-react'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const TRANSACTION_CATEGORY_LABELS = {
  HOUSING: 'Moradia',
  TRANSPORTATION: 'Transporte',
  FOOD: 'Alimentação',
  ENTERTAINMENT: 'Entretenimento',
  HEALTH: 'Saúde',
  UTILITY: 'Utilidades',
  SALARY: 'Salário',
  EDUCATION: 'Educação',
  OTHER: 'Outros',
}

const TRANSACTION_PAYMENT_METHOD_LABELS = {
  CREDIT_CARD: 'Cartão de Crédito',
  DEBIT_CARD: 'Cartão de Débito',
  BACK_TRANSFER: 'Transferência Bancária',
  BANK_SLIP: 'Boleto Bancário',
  CASH: 'Dinheiro',
  PIX: 'Pix',
  OTHER: 'Outros',
}

export const transactionsColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'type',
    header: 'Tipo',
    cell: ({ row }) => <TransactionTypeBadge transaction={row.original} />,
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
      }).format(Number(row.original.amount)),
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
