import {MigrationInterface, QueryRunner} from "typeorm";

export class init1620465260873 implements MigrationInterface {
    name = 'init1620465260873'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_accounts" ("id" SERIAL NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "registration_time" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "UQ_df3802ec9c31dd9491e3589378d" UNIQUE ("email"), CONSTRAINT "PK_125e915cf23ad1cfb43815ce59b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "total_points" integer NOT NULL DEFAULT '0', "first_name" character varying(25) NOT NULL DEFAULT '', "last_name" character varying(25) NOT NULL DEFAULT '', "is_activated" boolean NOT NULL DEFAULT false, "user_account_id" integer, CONSTRAINT "REL_beb182f5494b3b91f460fb0c16" UNIQUE ("user_account_id"), CONSTRAINT "CHK_05710332a4b2f2276169b77d0c" CHECK (total_points >= 0), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_external_logins" ("id" SERIAL NOT NULL, "external_user_id" character varying(255) NOT NULL, "email" character varying(255), "first_name" character varying(255), "last_name" character varying(255), "user_id" integer NOT NULL, "external_authentication_provider_id" integer NOT NULL, CONSTRAINT "UQ_792b65c8d42433de255a9dd7b0d" UNIQUE ("external_user_id", "external_authentication_provider_id"), CONSTRAINT "PK_5a170bc60062657e5e9842b4a73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "external_authentication_providers" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, CONSTRAINT "PK_aab91c47a1fa8ae993257ffcf1f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_beb182f5494b3b91f460fb0c167" FOREIGN KEY ("user_account_id") REFERENCES "user_accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_external_logins" ADD CONSTRAINT "FK_83ec5c73a087bd7a15964ebac35" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_external_logins" ADD CONSTRAINT "FK_916151db7a1b7cf2537caf9de02" FOREIGN KEY ("external_authentication_provider_id") REFERENCES "external_authentication_providers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_external_logins" DROP CONSTRAINT "FK_916151db7a1b7cf2537caf9de02"`);
        await queryRunner.query(`ALTER TABLE "user_external_logins" DROP CONSTRAINT "FK_83ec5c73a087bd7a15964ebac35"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_beb182f5494b3b91f460fb0c167"`);
        await queryRunner.query(`DROP TABLE "external_authentication_providers"`);
        await queryRunner.query(`DROP TABLE "user_external_logins"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "user_accounts"`);
    }

}
