import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import { SkuEntity } from './sku/sku.entity'

@Injectable()
export class StockService {
  constructor(

    @InjectRepository(SkuEntity)
    private readonly skuRepository: Repository<SkuEntity>,

  ) {}

  /**
   * 查询用户列表
   */
  async list(): Promise<SkuEntity[]> {
    const skuList = await this.skuRepository.find()
    return skuList
  }
}
