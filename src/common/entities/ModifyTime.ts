import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class ModifyTime {
  @CreateDateColumn({ name: 'create_at' })
  createAt?: Date;

  @UpdateDateColumn({ name: 'update_at' })
  updateAt?: Date;
}
