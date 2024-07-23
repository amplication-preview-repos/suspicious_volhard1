/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IphoneWhereInput } from "./IphoneWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class IphoneListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => IphoneWhereInput,
  })
  @ValidateNested()
  @Type(() => IphoneWhereInput)
  @IsOptional()
  @Field(() => IphoneWhereInput, {
    nullable: true,
  })
  every?: IphoneWhereInput;

  @ApiProperty({
    required: false,
    type: () => IphoneWhereInput,
  })
  @ValidateNested()
  @Type(() => IphoneWhereInput)
  @IsOptional()
  @Field(() => IphoneWhereInput, {
    nullable: true,
  })
  some?: IphoneWhereInput;

  @ApiProperty({
    required: false,
    type: () => IphoneWhereInput,
  })
  @ValidateNested()
  @Type(() => IphoneWhereInput)
  @IsOptional()
  @Field(() => IphoneWhereInput, {
    nullable: true,
  })
  none?: IphoneWhereInput;
}
export { IphoneListRelationFilter as IphoneListRelationFilter };