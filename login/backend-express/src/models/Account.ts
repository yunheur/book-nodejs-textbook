import {
  AllowNull,
  Column,
  Default,
  Model,
  Table,
  BeforeCreate,
  BeforeUpdate,
} from 'sequelize-typescript';
import { hash } from '../lib/crypto';
import { generateToken } from '../lib/token';

@Table({
  timestamps: true,
})
export class Account extends Model<Account> {
  @AllowNull(false)
  @Column
  username!: string;

  @Default('/static/images/default_thumbnail.png')
  @AllowNull
  @Column
  thumbnail?: string;

  @AllowNull(false)
  @Column
  email!: string;

  @AllowNull(false)
  @Column
  password!: string;

  @BeforeCreate
  @BeforeUpdate
  static encryptLocalPassword(instance: Account) {
    instance.password = hash(instance.password);
  }

  public get profile(): object {
    return {
      username: this.username,
      thumbnail: this.thumbnail,
    };
  }

  public generateToken() {
    const payload = {
      _id: this.id,
      profile: this.profile,
    };
    return generateToken(payload);
  }
}
