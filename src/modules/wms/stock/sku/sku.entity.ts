import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm'

import { CommonEntity } from '~/common/entity/common.entity'

import { SpuEntity } from '../spu/spu.entity'

@Entity({ name: 'wms_sku' })
export class SkuEntity extends CommonEntity {
  @Column()
  spuId: number

  @Column({ length: 200 })
  code: string

  @Column({ length: 200 })
  name: string

  @Column({ length: 100, nullable: true })
  barcode: string

  @Column({ nullable: true })
  weight: number

  @Column({ nullable: true })
  volume: number

  @Column({ nullable: true })
  length: number

  @Column({ nullable: true })
  width: number

  @Column({ nullable: true })
  height: number

  @Column({ length: 20, comment: '计件单位' })
  unit: string

  @Column({ nullable: true, comment: '成本价（元）' })
  cost: number

  @Column({ nullable: true, comment: '销售价（元）' })
  price: number

  @Column({ comment: '总库存数' })
  qty: number

  @Column({ comment: '安全库存数' })
  safeQty: number

  @Column({ comment: '锁住的库存数' })
  lockQty: number

  @ManyToOne(() => SpuEntity, spu => spu.skuList)
  @JoinColumn({ name: 'spu_id' })
  spu: SpuEntity
}
