import { Badge } from '@/components/ui/badge'
import { Transaction, TransactionType } from '@prisma/client'
import { CircleIcon } from 'lucide-react'

interface TransactionTypeBadgeProps {
  transaction: Transaction
}

export function TransactionTypeBadge({
  transaction,
}: TransactionTypeBadgeProps) {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-emerald-950/40 font-bold text-emerald-200 hover:bg-emerald-950/40">
        <CircleIcon className="mr-2 fill-emerald-200" size={10} />
        Depósito
      </Badge>
    )
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-red-950/40 font-bold text-red-200 hover:bg-red-950/40">
        <CircleIcon className="mr-2 fill-red-200" size={10} />
        Despesa
      </Badge>
    )
  }
  if (transaction.type === TransactionType.INVESTMENT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        Investimento
      </Badge>
    )
  }
}
