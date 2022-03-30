import {MigrationInterface, QueryRunner} from "typeorm";

export class nombreMigracion1648533290266 implements MigrationInterface {
    name = 'nombreMigracion1648533290266'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`goles\` DROP FOREIGN KEY \`FK_fe5a9b563386682d82b2c12398d\``);
        await queryRunner.query(`ALTER TABLE \`goles\` CHANGE \`partido\` \`partido\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`goles\` ADD CONSTRAINT \`FK_fe5a9b563386682d82b2c12398d\` FOREIGN KEY (\`partido\`) REFERENCES \`partidos\`(\`id_partido\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`goles\` DROP FOREIGN KEY \`FK_fe5a9b563386682d82b2c12398d\``);
        await queryRunner.query(`ALTER TABLE \`goles\` CHANGE \`partido\` \`partido\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`goles\` ADD CONSTRAINT \`FK_fe5a9b563386682d82b2c12398d\` FOREIGN KEY (\`partido\`) REFERENCES \`partidos\`(\`id_partido\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
