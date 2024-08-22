import {
  Column,
  Entity,
  OneToMany,
  Relation,
} from 'typeorm'

import { CommonEntity } from '~/common/entity/common.entity'

import { SpuEntity } from '../spu/spu.entity'

@Entity({ name: 'wms_category' })
export class CategoryEntity extends CommonEntity {
  @Column({ length: 50 })
  code: string

  @Column({ length: 50 })
  name: string

  @Column({ comment: '父级id', nullable: true })
  parentId: number

  @Column({ comment: '是否启用' })
  enabled: boolean

  @OneToMany(() => SpuEntity, spu => spu.category)
  spuList: Relation<SpuEntity[]>
}
