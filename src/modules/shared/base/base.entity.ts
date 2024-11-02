import { Prop } from '@nestjs/mongoose';

export class BaseEntity {
    id?: string; // Sau này sẽ dùng với class-transformer để serialize dữ liệu response
    
    @Prop({ default: null })
    deletedAt: Date; // Dùng cho soft delete
}
