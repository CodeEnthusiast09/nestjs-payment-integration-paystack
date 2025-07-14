import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1752427763945 implements MigrationInterface {
    name = 'Init1752427763945'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transactions" ("id" SERIAL NOT NULL, "transaction_reference" character varying, "payment_link" character varying, "transaction_status" character varying, "status" character varying NOT NULL DEFAULT 'not paid', "product_id" character varying NOT NULL, CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "product_id" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "UQ_a8940a4bf3b90bd7ac15c8f4dd9" UNIQUE ("product_id"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "transactions"`);
    }

}
