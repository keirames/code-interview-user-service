import {MigrationInterface, QueryRunner} from "typeorm";

export class init1628312273429 implements MigrationInterface {
    name = 'init1628312273429'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "plans" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "credits_per_month" integer NOT NULL, "price_per_month" integer NOT NULL, CONSTRAINT "CHK_3336c84042f5d7244d60f8344b" CHECK (credits_per_month >= 0), CONSTRAINT "CHK_bf1f4e6b5650abf3533cbcea52" CHECK (price_per_month >= 0), CONSTRAINT "PK_3720521a81c7c24fe9b7202ba61" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subscriptions" ("id" SERIAL NOT NULL, "start_time" TIMESTAMP WITH TIME ZONE NOT NULL, "end_time" TIMESTAMP WITH TIME ZONE NOT NULL, "plan_id" integer NOT NULL, "user_id" integer NOT NULL, CONSTRAINT "PK_a87248d73155605cf782be9ee5e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_accounts" ("id" SERIAL NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "registration_time" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_df3802ec9c31dd9491e3589378d" UNIQUE ("email"), CONSTRAINT "PK_125e915cf23ad1cfb43815ce59b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "external_authentication_providers" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, CONSTRAINT "UQ_d03a5fcc14d6991e568e9118500" UNIQUE ("name"), CONSTRAINT "PK_aab91c47a1fa8ae993257ffcf1f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_external_logins" ("id" SERIAL NOT NULL, "external_user_id" character varying(255) NOT NULL, "email" character varying(255), "name" character varying(255), "user_id" integer NOT NULL, "external_authentication_provider_id" integer NOT NULL, CONSTRAINT "UQ_792b65c8d42433de255a9dd7b0d" UNIQUE ("external_user_id", "external_authentication_provider_id"), CONSTRAINT "PK_5a170bc60062657e5e9842b4a73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "total_points" integer NOT NULL DEFAULT '0', "first_name" character varying(25) NOT NULL DEFAULT '', "last_name" character varying(25) NOT NULL DEFAULT '', "is_activated" boolean NOT NULL DEFAULT false, "user_account_id" integer, CONSTRAINT "REL_beb182f5494b3b91f460fb0c16" UNIQUE ("user_account_id"), CONSTRAINT "CHK_05710332a4b2f2276169b77d0c" CHECK (total_points >= 0), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "liked_challenges" ("id" SERIAL NOT NULL, "user_id" integer NOT NULL, "challenge_id" integer NOT NULL, CONSTRAINT "PK_7958ff95581469a30cfa902fa21" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "solved_challenges" ("id" SERIAL NOT NULL, "user_id" integer NOT NULL, "challenge_id" integer NOT NULL, CONSTRAINT "PK_a04b7d8d6c0e26e85a9079ace33" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "submissions" ("id" SERIAL NOT NULL, "answer" character varying NOT NULL, "is_passed" boolean NOT NULL, "challenge_id" integer NOT NULL, "user_id" integer NOT NULL, CONSTRAINT "PK_10b3be95b8b2fb1e482e07d706b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "test_cases" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "test_string" character varying NOT NULL, "challenge_id" integer NOT NULL, CONSTRAINT "PK_39eb2dc90c54d7a036b015f05c4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contests" ("id" SERIAL NOT NULL, "delete_at" TIMESTAMP, "title" character varying(50) NOT NULL, "slug" character varying(255) NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_836d4d4819df541cc6f7cf1f217" UNIQUE ("title"), CONSTRAINT "UQ_9d34d0f5b13c895c8038b97e5b2" UNIQUE ("slug"), CONSTRAINT "PK_0b8012f5cf6f444a52179e1227a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "test_inputs" ("id" SERIAL NOT NULL, "input" text NOT NULL, "challenge_id" integer NOT NULL, CONSTRAINT "PK_8f87a4dbe4afa0684dd97e24023" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "challenges_level_enum" AS ENUM('easy', 'medium', 'hard')`);
        await queryRunner.query(`CREATE TABLE "challenges" ("id" SERIAL NOT NULL, "problem" text NOT NULL, "input_format" text NOT NULL, "output_format" text NOT NULL, "challenge_seed" text NOT NULL, "level" "challenges_level_enum" NOT NULL DEFAULT 'easy', "points" integer NOT NULL DEFAULT '0', "is_premium" boolean NOT NULL DEFAULT false, "delete_at" TIMESTAMP, "contest_id" integer NOT NULL, "title" character varying(50) NOT NULL, "slug" character varying(255) NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_9b25c2ccb1459524dd346e78dfb" UNIQUE ("title"), CONSTRAINT "UQ_700e063e7f395178eab9a6d1db5" UNIQUE ("slug"), CONSTRAINT "CHK_03ff42f3f8ca4d85fe54d6501b" CHECK (points >= 0), CONSTRAINT "PK_1e664e93171e20fe4d6125466af" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "subscriptions" ADD CONSTRAINT "FK_e45fca5d912c3a2fab512ac25dc" FOREIGN KEY ("plan_id") REFERENCES "plans"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subscriptions" ADD CONSTRAINT "FK_d0a95ef8a28188364c546eb65c1" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_external_logins" ADD CONSTRAINT "FK_83ec5c73a087bd7a15964ebac35" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_external_logins" ADD CONSTRAINT "FK_916151db7a1b7cf2537caf9de02" FOREIGN KEY ("external_authentication_provider_id") REFERENCES "external_authentication_providers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_beb182f5494b3b91f460fb0c167" FOREIGN KEY ("user_account_id") REFERENCES "user_accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "liked_challenges" ADD CONSTRAINT "FK_1d622e0fae11ca02dfa704bad47" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "liked_challenges" ADD CONSTRAINT "FK_361939512cfadb037e31be1e0e8" FOREIGN KEY ("challenge_id") REFERENCES "challenges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "solved_challenges" ADD CONSTRAINT "FK_4ea896260ff6bf874afa098cfb3" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "solved_challenges" ADD CONSTRAINT "FK_0a8c0f78d486e9d2eab3e6632aa" FOREIGN KEY ("challenge_id") REFERENCES "challenges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "submissions" ADD CONSTRAINT "FK_d69c24c4dfe1387c7251a9a7bcd" FOREIGN KEY ("challenge_id") REFERENCES "challenges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "submissions" ADD CONSTRAINT "FK_fca12c4ddd646dea4572c6815a9" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "test_cases" ADD CONSTRAINT "FK_11899fac9c02de6068f200c2f74" FOREIGN KEY ("challenge_id") REFERENCES "challenges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "test_inputs" ADD CONSTRAINT "FK_a19f71dd0639f0bc3aabae9abc5" FOREIGN KEY ("challenge_id") REFERENCES "challenges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "challenges" ADD CONSTRAINT "FK_47911910246faf445c2523cad1d" FOREIGN KEY ("contest_id") REFERENCES "contests"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "challenges" DROP CONSTRAINT "FK_47911910246faf445c2523cad1d"`);
        await queryRunner.query(`ALTER TABLE "test_inputs" DROP CONSTRAINT "FK_a19f71dd0639f0bc3aabae9abc5"`);
        await queryRunner.query(`ALTER TABLE "test_cases" DROP CONSTRAINT "FK_11899fac9c02de6068f200c2f74"`);
        await queryRunner.query(`ALTER TABLE "submissions" DROP CONSTRAINT "FK_fca12c4ddd646dea4572c6815a9"`);
        await queryRunner.query(`ALTER TABLE "submissions" DROP CONSTRAINT "FK_d69c24c4dfe1387c7251a9a7bcd"`);
        await queryRunner.query(`ALTER TABLE "solved_challenges" DROP CONSTRAINT "FK_0a8c0f78d486e9d2eab3e6632aa"`);
        await queryRunner.query(`ALTER TABLE "solved_challenges" DROP CONSTRAINT "FK_4ea896260ff6bf874afa098cfb3"`);
        await queryRunner.query(`ALTER TABLE "liked_challenges" DROP CONSTRAINT "FK_361939512cfadb037e31be1e0e8"`);
        await queryRunner.query(`ALTER TABLE "liked_challenges" DROP CONSTRAINT "FK_1d622e0fae11ca02dfa704bad47"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_beb182f5494b3b91f460fb0c167"`);
        await queryRunner.query(`ALTER TABLE "user_external_logins" DROP CONSTRAINT "FK_916151db7a1b7cf2537caf9de02"`);
        await queryRunner.query(`ALTER TABLE "user_external_logins" DROP CONSTRAINT "FK_83ec5c73a087bd7a15964ebac35"`);
        await queryRunner.query(`ALTER TABLE "subscriptions" DROP CONSTRAINT "FK_d0a95ef8a28188364c546eb65c1"`);
        await queryRunner.query(`ALTER TABLE "subscriptions" DROP CONSTRAINT "FK_e45fca5d912c3a2fab512ac25dc"`);
        await queryRunner.query(`DROP TABLE "challenges"`);
        await queryRunner.query(`DROP TYPE "challenges_level_enum"`);
        await queryRunner.query(`DROP TABLE "test_inputs"`);
        await queryRunner.query(`DROP TABLE "contests"`);
        await queryRunner.query(`DROP TABLE "test_cases"`);
        await queryRunner.query(`DROP TABLE "submissions"`);
        await queryRunner.query(`DROP TABLE "solved_challenges"`);
        await queryRunner.query(`DROP TABLE "liked_challenges"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "user_external_logins"`);
        await queryRunner.query(`DROP TABLE "external_authentication_providers"`);
        await queryRunner.query(`DROP TABLE "user_accounts"`);
        await queryRunner.query(`DROP TABLE "subscriptions"`);
        await queryRunner.query(`DROP TABLE "plans"`);
    }

}
