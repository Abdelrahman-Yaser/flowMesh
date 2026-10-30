    import { BeforeInsert, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
    import{ulid} from 'ulid';
import { EventEntity } from '../../events/entities/event.entity.js';


    @Entity({ name: 'multi' })
    export class MultiEntity {
        @PrimaryColumn({    type: 'varchar', length: 30 })
        id!: string;

        @Column({ name: 'id', type: 'varchar', length: 30 })
        name!: string;

        @OneToMany(() => EventEntity, (event) => event.tenantId)
        events!: EventEntity[];

        @BeforeInsert()
        generateId(): void {
            if (!this.id) {
                this.id = `mul_${ulid()}`;
            }
        }
    }
