import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1661598870670 implements MigrationInterface {
  name = 'SchemaSync1661598870670';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "description" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "recommendation" integer NOT NULL DEFAULT '0'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" DROP COLUMN "recommendation"`,
    );
    await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`);
  }
}
