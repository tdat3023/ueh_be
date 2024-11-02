import { OmitType, PartialType } from '@nestjs/swagger';
import {
	IsDateString,
	IsEnum,
	IsOptional,
	IsPhoneNumber,
	MaxLength,
} from 'class-validator';
import { GENDER } from '../entities/user.entity';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(
	OmitType(CreateUserDto, ['email', 'password']),
) {
	@IsOptional()
	@IsPhoneNumber()
	phoneNumber?: string;

	@IsOptional()
	@IsEnum(GENDER)
	gender?: string;
}
