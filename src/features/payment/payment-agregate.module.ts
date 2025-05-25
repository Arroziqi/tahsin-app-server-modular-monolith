import { Module } from '@nestjs/common';
import { TransactionModule } from './module/transaction.module';
import { TransactionTypeModule } from './module/transaction-type.module';
import { TransactionStatusModule } from './module/transaction-status.module';
import { BillModule } from './module/bill.module';
import { ClassPriceModule } from './module/class-price.module';
import { BankAccountModule } from './module/bank-account.module';

@Module({
  imports: [
    TransactionModule,
    TransactionTypeModule,
    TransactionStatusModule,
    BillModule,
    ClassPriceModule,
    BankAccountModule,
  ],
})
export class PaymentAgregateModule {}
