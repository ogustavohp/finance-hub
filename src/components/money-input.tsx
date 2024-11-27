import React, { forwardRef } from 'react'
import { NumericFormatProps, NumericFormat } from 'react-number-format'
import { Input } from '@/components/ui/input'

export const MoneyInput = forwardRef<HTMLInputElement, NumericFormatProps>(
  (props, ref) => {
    return (
      <NumericFormat
        {...props}
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        decimalScale={2}
        fixedDecimalScale
        allowNegative={false}
        customInput={Input}
        getInputRef={ref}
      />
    )
  },
)

MoneyInput.displayName = 'MoneyInput'
