import { Module } from '@nestjs/common'

import { ParamConfigModule } from '../system/param-config/param-config.module'

import { StockModule } from './stock/stock.module'

@Module({
  imports: [
    StockModule,
    // WarehouseModule,
    ParamConfigModule,
  ],
  exports: [StockModule],
})
export class WmsModule { }
