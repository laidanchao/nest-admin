import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  Relation,
} from 'typeorm'

import { CommonEntity } from '~/common/entity/common.entity'

import { CategoryEntity } from '../category/category.entity'
import { SkuEntity } from '../sku/sku.entity'

@Entity({ name: 'wms_spu' })
export class SpuEntity extends CommonEntity {
  @Column({ length: 50 })
  code: string

  @Column({ length: 50 })
  name: string

  @Column({ comment: '分类id' })
  categoryId: number

  @Column({ length: 300 })
  description: string

  @Column({ comment: '供应商id' })
  supplierId: number

  @Column({ nullable: true, comment: '供应商名称' })
  supplierName: string

  @Column({ nullable: true, comment: '品牌' })
  brand: string

  @Column({ nullable: true, comment: '原产地' })
  origin: string

  @Column({ comment: '是否启用' })
  enabled: boolean

  @OneToMany(() => SkuEntity, sku => sku.spu)
  skuList: Relation<SkuEntity[]>

  @ManyToOne(() => CategoryEntity, category => category.spuList)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity
}
