
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';
import { ulid } from 'ulid';
import { MultiEntity } from '../../Multi-tenancy/entities/Multi.entity.js';

@Entity({ name: 'events' })
@Index('IDX_events_tenant_received_at', [
  'tenantId',
  'receivedAt',
])
export class EventEntity {
  @PrimaryColumn({ type: 'varchar', length: 30 })
  id!: string;
@ManyToMany(() => MultiEntity, { cascade: true })
  @Column({ name: 'tenant_id', type: 'uuid' })
  tenantId!: string;

  @Column({
    name: 'event_type',
    type: 'varchar',
    length: 150,
  })
  type!: string;

  @Column({ type: 'varchar', length: 100 })
  source!: string;

  @Column({ type: 'integer', default: 1 })
  version!: number;

  @Column({ type: 'jsonb' })
  payload!: Record<string, unknown>;

  @Column({
    name: 'occurred_at',
    type: 'timestamptz',
    nullable: true,
  })
  occurredAt!: Date | null;

  @CreateDateColumn({
    name: 'received_at',
    type: 'timestamptz',
  })
  receivedAt!: Date;

  @BeforeInsert()
  generateId(): void {
    if (!this.id) {
      this.id = `evt_${ulid()}`;
    }
  }
}