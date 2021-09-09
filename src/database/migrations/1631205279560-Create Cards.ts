import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateCards1631205279560 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "cards",
            columns: [
                { name: "id", type: "uuid", isPrimary: true },
                { name: "title", type: "string" },
                { name: "content", type: "string" },
                { name: "attend", type: "boolean" },
                { name: "createdAt", type: "date" },
                { name: "updatedAt", type: "date" }
            ]
        }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cards');
    }

}
