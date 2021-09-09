import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateUsers1631205265677 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                { name: "id", type: "uuid", isPrimary: true },
                { name: "email", type: "string" },
                { name: "password", type: "string" },
                { name: "createdAt", type: "date" },
                { name: "updatedAt", type: "date" },
            ]
        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
