import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ParamConfigModule } from '~/modules/system/param-config/param-config.module'

import { CategoryEntity } from './category/category.entity'
import { SkuEntity } from './sku/sku.entity'
import { SpuEntity } from './spu/spu.entity'
import { StockController } from './stock.controller'
import { StockService } from './stock.service'

const providers = [StockService]

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryEntity, SpuEntity, SkuEntity]),
    // WarehouseModule,
    ParamConfigModule,
  ],
  controllers: [StockController],
  providers: [...providers],
  exports: [TypeOrmModule, ...providers],
})
export class StockModule { }
