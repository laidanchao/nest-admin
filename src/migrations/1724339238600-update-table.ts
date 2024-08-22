import { MigrationInterface, QueryRunner } from 'typeorm'

export class UpdateTable1724339238600 implements MigrationInterface {
  name = 'UpdateTable1724339238600'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user_refresh_tokens\` DROP FOREIGN KEY \`FK_1dfd080c2abf42198691b60ae39\``)
    await queryRunner.query(`ALTER TABLE \`sys_dept\` DROP FOREIGN KEY \`FK_c75280b01c49779f2323536db67\``)
    await queryRunner.query(`DROP INDEX \`REL_1dfd080c2abf42198691b60ae3\` ON \`user_refresh_tokens\``)
    await queryRunner.query(`ALTER TABLE \`user_refresh_tokens\` CHANGE \`accessTokenId\` \`access_token_id\` varchar(36) COLLATE "utf8mb4_unicode_ci" NULL`)
    await queryRunner.query(`ALTER TABLE \`tool_storage\` CHANGE \`fileName\` \`file_name\` varchar(200) COLLATE "utf8mb4_unicode_ci" NULL COMMENT '真实文件名'`)
    await queryRunner.query(`CREATE TABLE \`wms_category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`code\` varchar(50) NOT NULL, \`name\` varchar(50) NOT NULL, \`p_id\` int NOT NULL COMMENT '父级id', \`enabled\` tinyint NOT NULL COMMENT '是否启用', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`)
    await queryRunner.query(`CREATE TABLE \`wms_spu\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`code\` varchar(50) NOT NULL, \`name\` varchar(50) NOT NULL, \`category_id\` int NOT NULL COMMENT '分类id', \`description\` varchar(300) NOT NULL, \`supplier_id\` int NOT NULL COMMENT '供应商id', \`supplier_name\` varchar(255) NULL COMMENT '供应商名称', \`brand\` varchar(255) NULL COMMENT '品牌', \`origin\` varchar(255) NULL COMMENT '原产地', \`enabled\` tinyint NOT NULL COMMENT '是否启用', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`)
    await queryRunner.query(`CREATE TABLE \`wms_sku\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`spu_id\` int NOT NULL, \`code\` varchar(200) NOT NULL, \`name\` varchar(200) NOT NULL, \`bar_cde\` varchar(100) NULL, \`weight\` int NULL, \`volume\` int NULL, \`length\` int NULL, \`width\` int NULL, \`height\` int NULL, \`unit\` varchar(20) NOT NULL COMMENT '计件单位', \`cost\` int NULL COMMENT '成本价（元）', \`price\` int NULL COMMENT '销售价（元）', \`qty\` int NOT NULL COMMENT '总库存数', \`safe_qty\` int NOT NULL COMMENT '安全库存数', \`lock_qty\` int NOT NULL COMMENT '锁住的库存数', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`)
    await queryRunner.query(`ALTER TABLE \`sys_dept\` ADD \`order_no\` int NULL DEFAULT '0'`)
    await queryRunner.query(`ALTER TABLE \`sys_dept\` ADD \`parent_id\` int NULL`)
    await queryRunner.query(`ALTER TABLE \`sys_dict_item\` ADD \`order_no\` int NULL COMMENT '字典项排序'`)
    await queryRunner.query(`ALTER TABLE \`user_refresh_tokens\` CHANGE \`access_token_id\` \`access_token_id\` varchar(36) NULL`)
    await queryRunner.query(`ALTER TABLE \`user_refresh_tokens\` ADD UNIQUE INDEX \`IDX_3cf574e0739f3c0df10314fd91\` (\`access_token_id\`)`)
    await queryRunner.query(`CREATE UNIQUE INDEX \`REL_3cf574e0739f3c0df10314fd91\` ON \`user_refresh_tokens\` (\`access_token_id\`)`)
    await queryRunner.query(`ALTER TABLE \`user_refresh_tokens\` ADD CONSTRAINT \`FK_3cf574e0739f3c0df10314fd91a\` FOREIGN KEY (\`access_token_id\`) REFERENCES \`user_access_tokens\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`)
    await queryRunner.query(`ALTER TABLE \`sys_dept\` ADD CONSTRAINT \`FK_92dad1cb42d3b62bc9f2e8e58ba\` FOREIGN KEY (\`parent_id\`) REFERENCES \`sys_dept\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`)
    await queryRunner.query(`ALTER TABLE \`wms_spu\` ADD CONSTRAINT \`FK_daf84844cc62214977a1c72e9f0\` FOREIGN KEY (\`category_id\`) REFERENCES \`wms_category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await queryRunner.query(`ALTER TABLE \`wms_sku\` ADD CONSTRAINT \`FK_0cf560c970828fcbf50807ae192\` FOREIGN KEY (\`spu_id\`) REFERENCES \`wms_spu\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`wms_sku\` DROP FOREIGN KEY \`FK_0cf560c970828fcbf50807ae192\``)
    await queryRunner.query(`ALTER TABLE \`wms_spu\` DROP FOREIGN KEY \`FK_daf84844cc62214977a1c72e9f0\``)
    await queryRunner.query(`ALTER TABLE \`sys_dept\` DROP FOREIGN KEY \`FK_92dad1cb42d3b62bc9f2e8e58ba\``)
    await queryRunner.query(`ALTER TABLE \`user_refresh_tokens\` DROP FOREIGN KEY \`FK_3cf574e0739f3c0df10314fd91a\``)
    await queryRunner.query(`DROP INDEX \`REL_3cf574e0739f3c0df10314fd91\` ON \`user_refresh_tokens\``)
    await queryRunner.query(`ALTER TABLE \`user_refresh_tokens\` DROP INDEX \`IDX_3cf574e0739f3c0df10314fd91\``)
    await queryRunner.query(`ALTER TABLE \`user_refresh_tokens\` CHANGE \`access_token_id\` \`access_token_id\` varchar(36) COLLATE "utf8mb4_unicode_ci" NULL`)
    await queryRunner.query(`ALTER TABLE \`sys_dict_item\` DROP COLUMN \`order_no\``)
    await queryRunner.query(`ALTER TABLE \`sys_dept\` DROP COLUMN \`parent_id\``)
    await queryRunner.query(`ALTER TABLE \`sys_dept\` DROP COLUMN \`order_no\``)
    await queryRunner.query(`DROP TABLE \`wms_sku\``)
    await queryRunner.query(`DROP TABLE \`wms_spu\``)
    await queryRunner.query(`DROP TABLE \`wms_category\``)
    await queryRunner.query(`ALTER TABLE \`tool_storage\` CHANGE \`file_name\` \`fileName\` varchar(200) COLLATE "utf8mb4_unicode_ci" NULL COMMENT '真实文件名'`)
    await queryRunner.query(`ALTER TABLE \`user_refresh_tokens\` CHANGE \`access_token_id\` \`accessTokenId\` varchar(36) COLLATE "utf8mb4_unicode_ci" NULL`)
    await queryRunner.query(`CREATE UNIQUE INDEX \`REL_1dfd080c2abf42198691b60ae3\` ON \`user_refresh_tokens\` (\`accessTokenId\`)`)
    await queryRunner.query(`ALTER TABLE \`sys_dept\` ADD CONSTRAINT \`FK_c75280b01c49779f2323536db67\` FOREIGN KEY (\`parentId\`) REFERENCES \`sys_dept\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`)
    await queryRunner.query(`ALTER TABLE \`user_refresh_tokens\` ADD CONSTRAINT \`FK_1dfd080c2abf42198691b60ae39\` FOREIGN KEY (\`accessTokenId\`) REFERENCES \`user_access_tokens\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`)
  }
}
