import { MigrationInterface, QueryRunner } from 'typeorm'

export class UpdateTable1724342698687 implements MigrationInterface {
  name = 'UpdateTable1724342698687'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX \`IDX_3cf574e0739f3c0df10314fd91\` ON \`user_refresh_tokens\``)
    await queryRunner.query(`DROP INDEX \`FK_c75280b01c49779f2323536db67\` ON \`sys_dept\``)
    await queryRunner.query(`ALTER TABLE \`wms_sku\` CHANGE \`bar_cde\` \`barcode\` varchar(100) NULL`)
    await queryRunner.query(`ALTER TABLE \`wms_category\` CHANGE \`p_id\` \`parent_id\` int NOT NULL COMMENT '父级id'`)
    await queryRunner.query(`ALTER TABLE \`wms_category\` CHANGE \`parent_id\` \`parent_id\` int NULL COMMENT '父级id'`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`wms_category\` CHANGE \`parent_id\` \`parent_id\` int NOT NULL COMMENT '父级id'`)
    await queryRunner.query(`ALTER TABLE \`wms_category\` CHANGE \`parent_id\` \`p_id\` int NOT NULL COMMENT '父级id'`)
    await queryRunner.query(`ALTER TABLE \`wms_sku\` CHANGE \`barcode\` \`bar_cde\` varchar(100) NULL`)
    await queryRunner.query(`CREATE INDEX \`FK_c75280b01c49779f2323536db67\` ON \`sys_dept\` (\`parentId\`)`)
    await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_3cf574e0739f3c0df10314fd91\` ON \`user_refresh_tokens\` (\`access_token_id\`)`)
  }
}
