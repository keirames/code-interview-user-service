import {MigrationInterface, QueryRunner} from "typeorm";

export class init1621149723174 implements MigrationInterface {
    name = 'init1621149723174'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "plans" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "credits_per_month" integer NOT NULL, "price_per_month" integer NOT NULL, CONSTRAINT "CHK_3336c84042f5d7244d60f8344b" CHECK (credits_per_month >= 0), CONSTRAINT "CHK_bf1f4e6b5650abf3533cbcea52" CHECK (price_per_month >= 0), CONSTRAINT "PK_3720521a81c7c24fe9b7202ba61" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subscriptions" ("id" SERIAL NOT NULL, "start_time" TIMESTAMP WITH TIME ZONE NOT NULL, "end_time" TIMESTAMP WITH TIME ZONE NOT NULL, "plan_id" integer NOT NULL, "user_id" integer NOT NULL, "planId" integer, "userId" integer, CONSTRAINT "PK_a87248d73155605cf782be9ee5e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_accounts" ("id" SERIAL NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "registration_time" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "UQ_df3802ec9c31dd9491e3589378d" UNIQUE ("email"), CONSTRAINT "PK_125e915cf23ad1cfb43815ce59b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "external_authentication_providers" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, CONSTRAINT "PK_aab91c47a1fa8ae993257ffcf1f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_external_logins" ("id" SERIAL NOT NULL, "external_user_id" character varying(255) NOT NULL, "email" character varying(255), "first_name" character varying(255), "last_name" character varying(255), "user_id" integer NOT NULL, "external_authentication_provider_id" integer NOT NULL, CONSTRAINT "UQ_792b65c8d42433de255a9dd7b0d" UNIQUE ("external_user_id", "external_authentication_provider_id"), CONSTRAINT "PK_5a170bc60062657e5e9842b4a73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "total_points" integer NOT NULL DEFAULT '0', "first_name" character varying(25) NOT NULL DEFAULT '', "last_name" character varying(25) NOT NULL DEFAULT '', "is_activated" boolean NOT NULL DEFAULT false, "user_account_id" integer, CONSTRAINT "REL_beb182f5494b3b91f460fb0c16" UNIQUE ("user_account_id"), CONSTRAINT "CHK_05710332a4b2f2276169b77d0c" CHECK (total_points >= 0), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "liked_challenges" ("id" SERIAL NOT NULL, "user_id" integer NOT NULL, "challenge_id" integer NOT NULL, "userId" integer, "challengeId" integer, CONSTRAINT "PK_7958ff95581469a30cfa902fa21" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "solved_challenges" ("id" SERIAL NOT NULL, "user_id" integer NOT NULL, "challenge_id" integer NOT NULL, "userId" integer, "challengeId" integer, CONSTRAINT "PK_a04b7d8d6c0e26e85a9079ace33" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "submissions" ("id" SERIAL NOT NULL, "answer" character varying NOT NULL, "is_passed" boolean NOT NULL, "challenge_id" integer NOT NULL, "user_id" integer NOT NULL, "challengeId" integer, "userId" integer, CONSTRAINT "PK_10b3be95b8b2fb1e482e07d706b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "test_cases" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "test_brief" character varying NOT NULL, "challenge_id" integer NOT NULL, "challengeId" integer, CONSTRAINT "PK_39eb2dc90c54d7a036b015f05c4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contests" ("id" SERIAL NOT NULL, "delete_at" TIMESTAMP, "subjectIdentifierTitle" character varying(50) NOT NULL, "subjectIdentifierSlug" character varying(255) NOT NULL, "modifyTimeCreate_at" TIMESTAMP NOT NULL DEFAULT now(), "modifyTimeUpdate_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_417026d7417d39823fcfd47ec06" UNIQUE ("subjectIdentifierTitle"), CONSTRAINT "UQ_0d585e7c5c1afb76f46b8f255a4" UNIQUE ("subjectIdentifierSlug"), CONSTRAINT "PK_0b8012f5cf6f444a52179e1227a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "challenges_level_enum" AS ENUM('easy', 'medium', 'hard')`);
        await queryRunner.query(`CREATE TABLE "challenges" ("id" SERIAL NOT NULL, "problem" text NOT NULL, "input_format" text NOT NULL, "output_format" text NOT NULL, "challenge_seed" text NOT NULL, "level" "challenges_level_enum" NOT NULL DEFAULT 'easy', "points" integer NOT NULL DEFAULT '0', "is_premium" boolean NOT NULL DEFAULT false, "delete_at" TIMESTAMP, "contest_id" integer NOT NULL, "contestId" integer, "subjectIdentifierTitle" character varying(50) NOT NULL, "subjectIdentifierSlug" character varying(255) NOT NULL, "modifyTimeCreate_at" TIMESTAMP NOT NULL DEFAULT now(), "modifyTimeUpdate_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_ebcab5e7ae18fc58bbc2d3d553d" UNIQUE ("subjectIdentifierTitle"), CONSTRAINT "UQ_c556a2f2b73c4ae0401d438f6ab" UNIQUE ("subjectIdentifierSlug"), CONSTRAINT "CHK_03ff42f3f8ca4d85fe54d6501b" CHECK (points >= 0), CONSTRAINT "PK_1e664e93171e20fe4d6125466af" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "subscriptions" ADD CONSTRAINT "FK_7536cba909dd7584a4640cad7d5" FOREIGN KEY ("planId") REFERENCES "plans"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subscriptions" ADD CONSTRAINT "FK_fbdba4e2ac694cf8c9cecf4dc84" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_external_logins" ADD CONSTRAINT "FK_83ec5c73a087bd7a15964ebac35" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_external_logins" ADD CONSTRAINT "FK_916151db7a1b7cf2537caf9de02" FOREIGN KEY ("external_authentication_provider_id") REFERENCES "external_authentication_providers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_beb182f5494b3b91f460fb0c167" FOREIGN KEY ("user_account_id") REFERENCES "user_accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "liked_challenges" ADD CONSTRAINT "FK_11e153075dd6f831b06b59fd962" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "liked_challenges" ADD CONSTRAINT "FK_63349465f1c5fd9ca06f983998f" FOREIGN KEY ("challengeId") REFERENCES "challenges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "solved_challenges" ADD CONSTRAINT "FK_4dccfacab1bade815378eb58010" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "solved_challenges" ADD CONSTRAINT "FK_815d4627588fcdd8a66dbed914f" FOREIGN KEY ("challengeId") REFERENCES "challenges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "submissions" ADD CONSTRAINT "FK_f42ebcea5910afdeb1b2ad8c83c" FOREIGN KEY ("challengeId") REFERENCES "challenges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "submissions" ADD CONSTRAINT "FK_eae888413ab8fc63cc48759d46a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "test_cases" ADD CONSTRAINT "FK_2611c08080a3244459a88208d4e" FOREIGN KEY ("challengeId") REFERENCES "challenges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "challenges" ADD CONSTRAINT "FK_d739700fcb34223a0227b1a5aad" FOREIGN KEY ("contestId") REFERENCES "contests"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "challenges" DROP CONSTRAINT "FK_d739700fcb34223a0227b1a5aad"`);
        await queryRunner.query(`ALTER TABLE "test_cases" DROP CONSTRAINT "FK_2611c08080a3244459a88208d4e"`);
        await queryRunner.query(`ALTER TABLE "submissions" DROP CONSTRAINT "FK_eae888413ab8fc63cc48759d46a"`);
        await queryRunner.query(`ALTER TABLE "submissions" DROP CONSTRAINT "FK_f42ebcea5910afdeb1b2ad8c83c"`);
        await queryRunner.query(`ALTER TABLE "solved_challenges" DROP CONSTRAINT "FK_815d4627588fcdd8a66dbed914f"`);
        await queryRunner.query(`ALTER TABLE "solved_challenges" DROP CONSTRAINT "FK_4dccfacab1bade815378eb58010"`);
        await queryRunner.query(`ALTER TABLE "liked_challenges" DROP CONSTRAINT "FK_63349465f1c5fd9ca06f983998f"`);
        await queryRunner.query(`ALTER TABLE "liked_challenges" DROP CONSTRAINT "FK_11e153075dd6f831b06b59fd962"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_beb182f5494b3b91f460fb0c167"`);
        await queryRunner.query(`ALTER TABLE "user_external_logins" DROP CONSTRAINT "FK_916151db7a1b7cf2537caf9de02"`);
        await queryRunner.query(`ALTER TABLE "user_external_logins" DROP CONSTRAINT "FK_83ec5c73a087bd7a15964ebac35"`);
        await queryRunner.query(`ALTER TABLE "subscriptions" DROP CONSTRAINT "FK_fbdba4e2ac694cf8c9cecf4dc84"`);
        await queryRunner.query(`ALTER TABLE "subscriptions" DROP CONSTRAINT "FK_7536cba909dd7584a4640cad7d5"`);
        await queryRunner.query(`DROP TABLE "challenges"`);
        await queryRunner.query(`DROP TYPE "challenges_level_enum"`);
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
